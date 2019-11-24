import {actions} from '../actions/Action';

const allowedCommands = [
    'commit',
    'merge',
    'rebase',
    'checkout',
    'branch',
];

export const commandParser = (command, refs) => {
    const words = command.split(' ');
    if (words[0] === 'git') {
        return isCommandValid(words, refs);
    } else {
        return false;
    }
};

const isCommandValid = (commandWords, refs) => {
    const command = commandWords[1];
    if (allowedCommands.includes(command)) {
        switch (command) {
            case 'commit':
                return isCommitCommandValid(commandWords);
            case 'merge':
            case 'rebase':
                return false;
            case 'checkout':
                return isCheckoutCommandValid(commandWords, refs);
            case 'branch':
                return isBranchCommandValid(commandWords, refs);
            default:
                return false;
        }
    } else {
        return false;
    }
};

const isCommitCommandValid = (commandWords) => {
    if (commandWords.length === 2) {
        return {
            type: actions.ADD_COMMIT,
        };
    }
};

const isCheckoutCommandValid = (commandWords, refs) => {
    const refName = commandWords[2];
    if (commandWords.length === 3 && refs.filter(ref => ref.name === refName).length === 1) {
        return {
            type: actions.CHECKOUT_REF,
            ref: refName,
        };
    }
    return false;
};

const isBranchCommandValid = (commandWords, refs) => {
    const refName = commandWords[2];
    if (commandWords.length === 3 && refs.filter(ref => ref.name === refName).length === 0) {
        return {
            type: actions.ADD_REF,
            ref: refName,
        };
    }
    return false;
};

// const flagRegExp = new RegExp('-[a-z]+');
