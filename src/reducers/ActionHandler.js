import {commitHashGenerator} from '../utils/CommitHashGenerator';

export const addCommit = (state) => {
    const {activeRef, commits, refs} = state;
    const parentCommitIndex = activeRef.commit;
    const parentCommit = commits.find(c => c.index === parentCommitIndex);
    const parentCommitLevel = parentCommit.level;
    const level = calculateNewCommitLevel(commits, parentCommitIndex, parentCommitLevel);
    const offset = level > parentCommitLevel ? calculateCommitOffset(commits, refs, parentCommitIndex) : 0;
    const position = parentCommit.position + 1;
    const newCommit = {
        index: commits.length,
        parentCommit: parentCommitIndex,
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

export const resizeDimensions = (state, diff) => {
    const {commit, shift} = state.dimensions;
    return ({
        commit: {
            ...commit,
            distanceX: commit.distanceX + diff,
            radius: commit.radius,
        },
        shift: shift + diff,
    })
};

export const addRef = (state, name) => {
    const {activeRef, refs} = state;
    const parentCommitIndex = activeRef.commit;
    const refPosition = refs[0].position;
    updateHeadPosition(refs);
    const newRef = {
        name: name,
        position: refPosition,
        commit: parentCommitIndex,
    };
    return {
        ...state,
        refs: [...refs, newRef],
    };
};

export const checkoutRef = (state, name) => {
    const {refs} = state;
    const newActiveRef = refs.find(ref => ref.name === name);
    const newHeadPosition = refs.filter(ref => ref.commit === newActiveRef.commit).length;
    return {
        ...state,
        activeRef: newActiveRef,
        refs: [{...refs[0], commit: newActiveRef.commit, position: newHeadPosition}, ...refs.slice(1)],
    };
};

const calculateNewCommitLevel = (commits, parentCommitIndex, parentCommitLevel) => {
    if (commits.some(commit => commit.parentCommit === parentCommitIndex)) {
        return parentCommitLevel + 1;
    } else {
        return parentCommitLevel;
    }
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
    }
;

const updateHeadPosition = (refs) => {
    refs[0].position = refs[0].position + 1;
};

export const checkExerciseStatus = (state) => {
    const exercise = state.activeExercise;
    switch (exercise) {
        case 'COMMIT_EXERCISE':
            return checkCommitExerciseStatus(state);
        default:
            break;
    }
};

const checkCommitExerciseStatus = (state) => {
    return state.commits.length === 4;
};