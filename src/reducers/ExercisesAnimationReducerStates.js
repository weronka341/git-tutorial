import {commitHashGenerator} from '../utils/CommitHashGenerator';

export const initialAnimationState = {
    dimensions: {
        commit: {
            distanceX: 100,
            distanceY: 90,
            positionY: 50,
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
    }
};
