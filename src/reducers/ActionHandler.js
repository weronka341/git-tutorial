import {commitHashGenerator} from '../utils/CommitHashGenerator';
import {exercisesState} from './ExercisesAnimationReducerStates';

let colors = ['lime', 'peach', 'pink', 'dark-purple', 'purple', 'green', 'orange', 'yellow', 'teal', 'blue', 'red'];

export const addCommit = (state, isMergeCommit, refName = null) => {
    const {activeRef, commits, refs} = state;
    const parentCommitIndex = activeRef.commit;
    const parentCommit = commits.find(c => c.index === parentCommitIndex);
    const parentCommitLevel = parentCommit.level;
    const level = calculateNewCommitLevel(commits, parentCommitIndex, parentCommitLevel);
    const offset = level > parentCommitLevel ? calculateCommitOffset(commits, refs, parentCommitIndex) : 0;
    const position = parentCommit.position + 1;
    const newCommit = !isMergeCommit ? {
        index: commits.length,
        isMergeCommit: false,
        parentCommit: parentCommitIndex,
        hash: commitHashGenerator(),
        level,
        offset,
        position,
        color: chooseColor(level, parentCommit, activeRef, refs),
    } : {
        index: commits.length,
        isMergeCommit: true,
        parentCommit: parentCommitIndex,
        secondParentCommit: refs.find(ref => ref.name === refName).commit,
        hash: commitHashGenerator(),
        level,
        offset,
        position,
        color: chooseColor(level, parentCommit, activeRef, refs),
    };
    const updatedActiveRef = {
        ...activeRef,
        commit: newCommit.index
    };
    const updatedRefs = updateRefs(refs, parentCommitIndex, updatedActiveRef);

    return {
        ...state,
        commits: [...commits, newCommit],
        refs: updatedRefs,
        activeRef: updatedActiveRef,
    };
};

export const addRef = (state, name) => {
    const {activeRef, refs} = state;
    const parentCommitIndex = activeRef.commit;
    const refPosition = findHead(refs).position;
    const updatedHead = updateHeadPosition(refs);
    const newRef = {
        name: name,
        position: refPosition,
        commit: parentCommitIndex,
    };
    return {
        ...state,
        refs: [updatedHead, ...refs.slice(1), newRef],
    };
};

export const checkoutRef = (state, name) => {
    const {refs} = state;
    const newActiveRef = refs.find(ref => ref.name === name);
    const numberOfRefs = refs.filter(ref => ref.commit === newActiveRef.commit).length;
    const newHeadPosition = newActiveRef.commit === findHead(refs).commit ? numberOfRefs - 1 : numberOfRefs;
    return {
        ...state,
        activeRef: newActiveRef,
        refs: [{...refs[0], commit: newActiveRef.commit, position: newHeadPosition}, ...refs.slice(1)],
    };
};

export const rebase = (state, refName) => {
    const activeRef = state.activeRef;
    const refToRebase = state.refs.find(ref => ref.name === refName);
    let activeRefCommits = [];
    findAllBranchCommits(state.commits, activeRef.commit, activeRefCommits);
    let refToRebaseCommits = [];
    findAllBranchCommits(state.commits, refToRebase.commit, refToRebaseCommits);
    const baseCommitIndex = activeRefCommits.find(c => refToRebaseCommits.includes(c)).index;
    let activeRefCommitsToRebase = [];
    findBranchCommitsToRebase(state.commits, activeRef.commit, activeRefCommitsToRebase, baseCommitIndex);
    activeRefCommitsToRebase.reverse();
    const newParentCommit = state.commits.find(c => c.index === refToRebase.commit);
    const isNewParentAlreadyParent = state.commits.find(c => c.parentCommit === newParentCommit.index) ? 1 : 0;
    const firstCopiedCommit = activeRefCommitsToRebase && {
        ...activeRefCommitsToRebase[0],
        index: state.commits.length,
        parentCommit: newParentCommit.index,
        position: newParentCommit.position + 1,
        level: newParentCommit.level + isNewParentAlreadyParent,
    };
    let updatedCommits = [...state.commits];
    if (activeRefCommitsToRebase) {
        updatedCommits = activeRefCommitsToRebase.length > 1
            ? [...disableChosenCommits(state.commits, activeRefCommitsToRebase), firstCopiedCommit, ...activeRefCommitsToRebase.slice(1).map((c, index) => ({
                ...c, index: firstCopiedCommit.index + index + 1, position: firstCopiedCommit.position + index + 1,
                level: firstCopiedCommit.level, parentCommit: firstCopiedCommit.index + index
            }))]
            : [...disableChosenCommits(state.commits, activeRefCommitsToRebase), firstCopiedCommit];
    }
    const lastCommitIndex = activeRefCommitsToRebase ? updatedCommits.length - 1 : activeRef.commit;
    const updatedRefs = state.refs.map(ref => ref.name === activeRef.name || ref.name === 'HEAD'
        ? {...ref, commit: lastCommitIndex}
        : ref
    );

    return {
        ...state,
        commits: [...updatedCommits],
        activeRef: {...state.activeRef, commit: lastCommitIndex},
        refs: updatedRefs,
    };
};

export const reset = (state, commitsToReset) => {
    const activeCommits = [...state.commits].filter(c => c.color !== 'disabled')
        .reverse().slice(commitsToReset).reverse();
    const lastActiveCommit = activeCommits.length - 1;
    const disabledCommits = [...state.commits].filter(c => c.color !== 'disabled')
        .reverse().slice(0, commitsToReset).map(c => ({...c, color: 'disabled'})).reverse();
    const oldDisabledCommits = [...state.commits].filter(c => c.color === 'disabled');

    return {
        ...state,
        commits: [...activeCommits, ...disabledCommits, ...oldDisabledCommits],
        refs: [
            {name: 'HEAD', position: 1, commit: lastActiveCommit},
            {name: 'master', position: 0, commit: lastActiveCommit},
        ],
        activeRef: {name: 'master', position: 0, commit: lastActiveCommit}
    }
};

export const pull = (state) => {
    return {
        ...state,
        commits: exercisesState['PULL_EXERCISE'].final.commits,
        refs: exercisesState['PULL_EXERCISE'].final.refs,
        activeRef: exercisesState['PULL_EXERCISE'].final.activeRef,
    }
};

const disableChosenCommits = (commits, commitsToDisable) => {
    const commitsToDisableIndexes = commitsToDisable.map(c => c.index);
    return commits.map(c => commitsToDisableIndexes.includes(c.index) ? {...c, color: 'disabled'} : c);
};

const findAllBranchCommits = (commits, commitIndex, branchCommits) => {
    const commit = commits.find(c => c.index === commitIndex);
    const parentCommitIndex = commit.parentCommit;
    if (parentCommitIndex !== null) {
        branchCommits.push(commit);
        return findAllBranchCommits(commits, parentCommitIndex, branchCommits);
    } else {
        branchCommits.push(commit);
    }
};

const findBranchCommitsToRebase = (commits, commitIndex, branchCommitsToRebase, baseCommitIndex) => {
    const commit = commits.find(c => c.index === commitIndex);
    const parentCommitIndex = commit.parentCommit;
    if (parentCommitIndex !== baseCommitIndex) {
        branchCommitsToRebase.push(commit);
        return findBranchCommitsToRebase(commits, parentCommitIndex, branchCommitsToRebase, baseCommitIndex);
    } else {
        branchCommitsToRebase.push(commit);
    }
};

const calculateNewCommitLevel = (commits, parentCommitIndex, parentCommitLevel) => {
    const hasSiblings = commits.some(commit => commit.parentCommit === parentCommitIndex);
    const parent = commits.find(commit => commit.index === parentCommitIndex);
    const hasCommitAbove = commits.some(commit =>
        (commit.level === parent.level + 1 && (commit.position === parent.position || commit.position === parent.position + 1)));
    if (hasSiblings && hasCommitAbove) {
        return parentCommitLevel - 1;
    } else if (hasSiblings) {
        return parentCommitLevel + 1;
    } else return parentCommitLevel;
};

const calculateCommitOffset = (commits, refs, parentCommitIndex) => {
    const belowCommitIndex = commits.reverse().find(commit => commit.parentCommit === parentCommitIndex).index;
    const belowCommitRefs = refs.filter(ref => ref.commit === belowCommitIndex);
    return belowCommitRefs.length;
};

const updateRefs = (refs, parentCommitIndex, activeRef) => {
    const updatedRefs = refs.map(ref =>
        ref.commit === parentCommitIndex && ref.position > activeRef.position
            ? {...ref, position: ref.position - 1}
            : ref
    );
    updatedRefs[0] = {...updatedRefs[0], commit: activeRef.commit, position: 1};
    return updatedRefs.map(ref => (ref.name === activeRef.name) ? {...activeRef, position: 0} : ref);
};

const findHead = (refs) => {
    return refs.find(ref => ref.name === 'HEAD');
};

const updateHeadPosition = (refs) => {
    const head = findHead(refs);
    return {...head, position: head.position + 1};
};

const chooseColor = (level, parentCommit, activeBranch, refs) => {
    if (level !== parentCommit.level || refs.filter(ref => ref.commit === parentCommit.index).length > 2) {
        const color = colors.shift();
        colors.push(color);
        return color;
    } else return parentCommit.color;
};

export const checkExerciseStatus = (state) => {
    const exercise = state.activeExercise;
    switch (exercise) {
        case 'COMMIT_EXERCISE':
            return checkCommitExerciseStatus(state);
        case 'BRANCHING_EXERCISE':
            return checkBranchingExerciseStatus(state);
        case 'MERGE_EXERCISE':
            return checkMergeExerciseStatus(state);
        case 'REBASE_EXERCISE':
            return checkRebaseExerciseStatus(state);
        case 'RESET_EXERCISE':
            return checkResetExerciseStatus(state);
        case 'PULL_EXERCISE':
            return checkPullExerciseStatus(state);
        default:
            break;
    }
};

const checkCommitExerciseStatus = (state) => {
    return state.commits.length === 4;
};

const checkBranchingExerciseStatus = (state) => {
    const refsNames = state.refs.map(ref => ref.name);
    if (state.refs.length === 5 && refsNames.includes('featureA')
        && refsNames.includes('featureAA') && refsNames.includes('featureB')) {
        const correctActiveRef = state.activeRef.name === 'featureB';
        const masterCommit = state.refs.find(ref => ref.name === 'master').commit;
        const featureACommit = state.refs.find(ref => ref.name === 'featureA').commit;
        const featureAACommit = state.refs.find(ref => ref.name === 'featureAA').commit;
        const featureBCommit = state.refs.find(ref => ref.name === 'featureB').commit;

        return correctActiveRef && masterCommit < featureACommit &&
            featureACommit < featureAACommit && featureAACommit < featureBCommit;
    } else {
        return false;
    }
};

const checkMergeExerciseStatus = (state) => {
    const mergeCommits = state.commits.filter(c => c.isMergeCommit);
    if (mergeCommits && mergeCommits.length === 2) {
        const firstMerge = mergeCommits.find(c => c.index === 11);
        const secondMerge = mergeCommits.find(c => c.index === 12);
        return firstMerge && firstMerge.parentCommit === 8 && firstMerge.secondParentCommit === 10 &&
            secondMerge && secondMerge.parentCommit === 4 && secondMerge.secondParentCommit === 11;
    }
    return false;
};

const checkRebaseExerciseStatus = (state) => {
    const {commits, refs} = state;
    if (commits.length === 11) {
        return checkIfDisabled(commits, 6) &&
            checkIfDisabled(commits, 1) &&
            checkIfDisabled(commits, 2) &&
            checkIfDisabled(commits, 3) &&
            commits.find(c => c.index === 7).parentCommit === 5 &&
            commits.find(c => c.index === 8).parentCommit === 7 &&
            refs.find(ref => ref.name === 'master').commit === 5 &&
            refs.find(ref => ref.name === 'featureD').commit === 7 &&
            refs.find(ref => ref.name === 'featureG').commit === 10 &&
            refs.length === 4;
    }
    return false;
};

const checkResetExerciseStatus = (state) => {
    const {commits, refs} = state;
    if (commits.length === 5) {
        return checkIfDisabled(commits, 4) &&
            checkIfDisabled(commits, 3) &&
            !checkIfDisabled(commits, 2) &&
            refs.find(ref => ref.name === 'master').commit === 2 &&
            refs.length === 2;
    }
    return false;
};

const checkIfDisabled = (commits, index) => {
    return commits.find(c => c.index === index).color === 'disabled';
};

const checkPullExerciseStatus = (state) => {
    return state.commits === exercisesState['PULL_EXERCISE'].final.commits &&
        state.refs === exercisesState['PULL_EXERCISE'].final.refs &&
        state.activeRef === exercisesState['PULL_EXERCISE'].final.activeRef;
};