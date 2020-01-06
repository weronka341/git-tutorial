import {commitHashGenerator} from '../utils/CommitHashGenerator';

export const initialAnimationState = {
    dimensions: {
        commit: {
            distanceX: 100,
            distanceY: 110,
            positionY: 40,
            radius: 24,
        },
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
        color: 'yellow',
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
                    color: 'yellow',
                    hash: commitHashGenerator()
                },
                {
                    index: 2,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 1,
                    offset: 0,
                    position: 2,
                    color: 'yellow',
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
                    color: 'blue',
                    hash: commitHashGenerator()
                },
                {
                    index: 2,
                    level: 1,
                    isMergeCommit: false,
                    parentCommit: 1,
                    offset: 0,
                    position: 2,
                    color: 'green',
                    hash: commitHashGenerator()
                },
                {
                    index: 3,
                    level: 1,
                    isMergeCommit: false,
                    parentCommit: 2,
                    offset: 0,
                    position: 3,
                    color: 'green',
                    hash: commitHashGenerator()
                },
                {
                    index: 4,
                    level: 1,
                    isMergeCommit: false,
                    parentCommit: 3,
                    offset: 0,
                    position: 4,
                    color: 'green',
                    hash: commitHashGenerator()
                },
                {
                    index: 5,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 1,
                    offset: 0,
                    position: 2,
                    color: 'teal',
                    hash: commitHashGenerator()
                },
                {
                    index: 6,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 5,
                    offset: 0,
                    position: 3,
                    color: 'teal',
                    hash: commitHashGenerator()
                },
                {
                    index: 7,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 6,
                    offset: 0,
                    position: 4,
                    color: 'teal',
                    hash: commitHashGenerator()
                },
                {
                    index: 8,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 7,
                    offset: 0,
                    position: 5,
                    color: 'teal',
                    hash: commitHashGenerator()
                },
                {
                    index: 9,
                    level: -1,
                    isMergeCommit: false,
                    parentCommit: 1,
                    offset: 0,
                    position: 2,
                    color: 'red',
                    hash: commitHashGenerator()
                },
                {
                    index: 10,
                    level: -1,
                    isMergeCommit: false,
                    parentCommit: 9,
                    offset: 0,
                    position: 3,
                    color: 'red',
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
    },
    REBASE_EXERCISE: {
        initial: {
            commits: [
                {
                    index: 0,
                    level: -1,
                    isMergeCommit: false,
                    parentCommit: null,
                    offset: 0,
                    position: 0,
                    color: 'green',
                    hash: 'a'
                },
                {
                    index: 1,
                    level: -1,
                    isMergeCommit: false,
                    parentCommit: 0,
                    offset: 0,
                    position: 1,
                    color: 'red',
                    hash: 'e'
                },
                {
                    index: 2,
                    level: -1,
                    isMergeCommit: false,
                    parentCommit: 1,
                    offset: 0,
                    position: 2,
                    color: 'red',
                    hash: 'f'
                },
                {
                    index: 3,
                    level: -1,
                    isMergeCommit: false,
                    parentCommit: 2,
                    offset: 0,
                    position: 3,
                    color: 'red',
                    hash: 'g'
                },
                {
                    index: 4,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 0,
                    offset: 0,
                    position: 1,
                    color: 'purple',
                    hash: 'b'
                },
                {
                    index: 5,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 4,
                    offset: 0,
                    position: 2,
                    color: 'yellow',
                    hash: 'c'
                },
                {
                    index: 6,
                    level: 1,
                    isMergeCommit: false,
                    parentCommit: 4,
                    offset: 0,
                    position: 2,
                    color: 'teal',
                    hash: 'd'
                },
            ],
            refs: [
                {name: 'HEAD', position: 1, commit: 6},
                {name: 'master', position: 0, commit: 5},
                {name: 'featureD', position: 0, commit: 6},
                {name: 'featureG', position: 0, commit: 3},
            ],
            activeRef: {name: 'featureD', position: 0, commit: 6}
        },
    },
    RESET_EXERCISE: {
        initial: {
            commits: [
                {
                    index: 0,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: null,
                    offset: 0,
                    position: 0,
                    color: 'yellow',
                    hash: commitHashGenerator(),
                },
                {
                    index: 1,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 0,
                    offset: 0,
                    position: 1,
                    color: 'yellow',
                    hash: commitHashGenerator(),
                },
                {
                    index: 2,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 1,
                    offset: 0,
                    position: 2,
                    color: 'yellow',
                    hash: commitHashGenerator(),
                },
                {
                    index: 3,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 2,
                    offset: 0,
                    position: 3,
                    color: 'yellow',
                    hash: commitHashGenerator(),
                },
                {
                    index: 4,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 3,
                    offset: 0,
                    position: 4,
                    color: 'yellow',
                    hash: commitHashGenerator(),
                },
            ],
            refs: [
                {name: 'HEAD', position: 1, commit: 4},
                {name: 'master', position: 0, commit: 4},
            ],
            activeRef: {name: 'master', position: 0, commit: 4}
        },
    },
    PULL_EXERCISE: {
        initial: {
            commits: [
                {
                    index: 0,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: null,
                    offset: 0,
                    position: 0,
                    color: 'peach',
                    hash: 'a4Xdf',
                },
                {
                    index: 1,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 0,
                    offset: 0,
                    position: 1,
                    color: 'peach',
                    hash: 'kI8x4',
                },
                {
                    index: 2,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 1,
                    offset: 0,
                    position: 2,
                    color: 'peach',
                    hash: 'otY7a',
                },
            ],
            refs: [
                {name: 'HEAD', position: 1, commit: 2},
                {name: 'master', position: 0, commit: 2},
            ],
            activeRef: {name: 'master', position: 0, commit: 2}
        },

        final: {
            commits: [
                {
                    index: 0,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: null,
                    offset: 0,
                    position: 0,
                    color: 'peach',
                    hash: 'a4Xdf',
                },
                {
                    index: 1,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 0,
                    offset: 0,
                    position: 1,
                    color: 'peach',
                    hash: 'kI8x4',
                },
                {
                    index: 2,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 1,
                    offset: 0,
                    position: 2,
                    color: 'peach',
                    hash: 'otY7a',
                },
                {
                    index: 3,
                    level: 1,
                    isMergeCommit: false,
                    parentCommit: 0,
                    offset: 0,
                    position: 1,
                    color: 'lime',
                    hash: 'pL0it',
                },
                {
                    index: 4,
                    level: 1,
                    isMergeCommit: false,
                    parentCommit: 3,
                    offset: 0,
                    position: 2,
                    color: 'lime',
                    hash: 'r5we3',
                },
                {
                    index: 5,
                    level: 1,
                    isMergeCommit: false,
                    parentCommit: 4,
                    offset: 0,
                    position: 3,
                    color: 'lime',
                    hash: 'oN92h',
                },
                {
                    index: 6,
                    level: 1,
                    isMergeCommit: false,
                    parentCommit: 5,
                    offset: 0,
                    position: 4,
                    color: 'lime',
                    hash: 'j7vt5',
                },
                {
                    index: 7,
                    level: 0,
                    isMergeCommit: true,
                    parentCommit: 2,
                    secondParentCommit: 6,
                    offset: 0,
                    position: 3,
                    color: 'green',
                    hash: 'mJk43',
                },
            ],
            refs: [
                {name: 'HEAD', position: 1, commit: 7},
                {name: 'master', position: 0, commit: 7},
            ],
            activeRef: {name: 'master', position: 0, commit: 7}
        },

        origin: {
            commits: [
                {
                    index: 0,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: null,
                    offset: 0,
                    position: 0,
                    color: 'lime',
                    hash: 'a4Xdf',
                },
                {
                    index: 3,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 0,
                    offset: 0,
                    position: 1,
                    color: 'lime',
                    hash: 'pL0it',
                },
                {
                    index: 4,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 3,
                    offset: 0,
                    position: 2,
                    color: 'lime',
                    hash: 'r5we3',
                },
                {
                    index: 5,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 4,
                    offset: 0,
                    position: 3,
                    color: 'lime',
                    hash: 'oN92h',
                },
                {
                    index: 6,
                    level: 0,
                    isMergeCommit: false,
                    parentCommit: 5,
                    offset: 0,
                    position: 4,
                    color: 'lime',
                    hash: 'j7vt5',
                },
            ],
            refs: [
                {name: 'HEAD', position: 1, commit: 6},
                {name: 'master', position: 0, commit: 6},
            ],
            activeRef: {name: 'master', position: 0, commit: 6}
        },
    },
};
