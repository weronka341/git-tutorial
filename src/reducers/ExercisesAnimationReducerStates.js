import {commitHashGenerator} from '../utils/CommitHashGenerator';

export const initialAnimationState = {
    dimensions: {
        commit: {
            distanceX: 100,
            distanceY: 110,
            positionY: 40,
            radius: 24,
        },
        shift: 100,
    },
    activeRef: {
        name: 'master',
        position: 0,
        commit: 0,
    },

    commits: [{
        index: 0,
        level: 0,
        isMergeCommit: false,
        parentCommit: null,
        offset: null,
        position: 0,
        hash: commitHashGenerator(),
    }],

    refs: [
        {
            name: 'HEAD',
            position: 1,
            commit: 0,
        },
        {
            name: 'master',
            position: 0,
            commit: 0,
        },
    ],
};

export const exercisesState = {
    COMMIT_EXERCISE: {
        initial: initialAnimationState,
    },
    BRANCHING_EXERCISE: {
        initial: {
            commits: [...initialAnimationState.commits,
                {
                    index: 1,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 0,
                    offset: 0,
                    position: 1,
                    hash: commitHashGenerator()
                },
                {
                    index: 2,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 1,
                    offset: 0,
                    position: 2,
                    hash: commitHashGenerator()
                },
            ],
            refs: initialAnimationState.refs.map(ref => ({...ref, commit: 2})),
            activeRef: {...initialAnimationState.activeRef, commit: 2},
        },
    },
    MERGE_EXERCISE: {
        initial: {
            commits: [...initialAnimationState.commits,
                {
                    index: 1,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 0,
                    offset: 0,
                    position: 1,
                    hash: commitHashGenerator()
                },
                {
                    index: 2,
                    level: 1,
                    isMergeCommit: false,
                    parentCommit: 1,
                    offset: 0,
                    position: 2,
                    hash: commitHashGenerator()
                },
                {
                    index: 3,
                    level: 1,
                    isMergeCommit: false,
                    parentCommit: 2,
                    offset: 0,
                    position: 3,
                    hash: commitHashGenerator()
                },
                {
                    index: 4,
                    level: 1,
                    isMergeCommit: false,
                    parentCommit: 3,
                    offset: 0,
                    position: 4,
                    hash: commitHashGenerator()
                },
                {
                    index: 5,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 1,
                    offset: 0,
                    position: 2,
                    hash: commitHashGenerator()
                },
                {
                    index: 6,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 5,
                    offset: 0,
                    position: 3,
                    hash: commitHashGenerator()
                },
                {
                    index: 7,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 6,
                    offset: 0,
                    position: 4,
                    hash: commitHashGenerator()
                },
                {
                    index: 8,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 7,
                    offset: 0,
                    position: 5,
                    hash: commitHashGenerator()
                },
                {
                    index: 9,
                    level: -1,
                    isMergeCommit: false,
                    parentCommit: 1,
                    offset: 0,
                    position: 2,
                    hash: commitHashGenerator()
                },
                {
                    index: 10,
                    level: -1,
                    isMergeCommit: false,
                    parentCommit: 9,
                    offset: 0,
                    position: 3,
                    hash: commitHashGenerator()
                },
            ],
            refs: [
                {name: 'HEAD', position: 1, commit: 4},
                {name: 'master', position: 0, commit: 8},
                {name: 'featureA', position: 0, commit: 4},
                {name: 'featureB', position: 0, commit: 10},
            ],
            activeRef: {name: 'featureA', position: 0, commit: 4}
        }
    }
};
