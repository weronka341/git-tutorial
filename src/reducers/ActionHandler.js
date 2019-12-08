import {commitHashGenerator} from '../utils/CommitHashGenerator';

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
    } : {
        index: commits.length,
        isMergeCommit: true,
        parentCommit: parentCommitIndex,
        secondParentCommit: refs.find(ref => ref.name === refName).commit,
        hash: commitHashGenerator(),
        level,
        offset,
        position,
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

export const checkExerciseStatus = (state) => {
    const exercise = state.activeExercise;
    switch (exercise) {
        case 'COMMIT_EXERCISE':
            return checkCommitExerciseStatus(state);
        case 'BRANCHING_EXERCISE':
            return checkBranchingExerciseStatus(state);
        case 'MERGE_EXERCISE':
            return checkMergeExerciseStatus(state);
        default:
            break;
    }
};

const checkCommitExerciseStatus = (state) => {
    return state.commits.length === 4;
};

const checkBranchingExerciseStatus = (state) => {
    if (state.refs.length === 5 && state.refs.map(ref => ref.name).includes('featureA', 'featureAA', 'featureB')) {
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
