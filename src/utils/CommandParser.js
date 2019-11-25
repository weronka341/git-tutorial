import {actions} from '../actions/Action';

const allowedCommands = [
    'commit',
    'merge',
    'rebase',
    'checkout',
    'branch',
];

const commandNotSupportedMessage = 'Przepraszamy, ta komenda nie jest obsługiwana.';

export const commandParser = (command, refs) => {
    const commandWords = command.match(/('.*?'|".*?"|\S+)/g);
    if (commandWords && commandWords[0] === 'git' && allowedCommands.includes(commandWords[1])) {
        const actionObject = validateCommandAndPrepareAction(commandWords, refs);
        return actionObject
            ? actionObject.type || actionObject.message
            : commandNotSupportedMessage;
    } else {
        return commandNotSupportedMessage;
    }
};

const validateCommandAndPrepareAction = (commandWords, refs) => {
    switch (commandWords[1]) {
        case 'commit':
            return validateCommitCommand(commandWords);
        case 'merge':
        case 'rebase':
            return false;
        case 'checkout':
            return validateCheckoutCommand(commandWords, refs);
        case 'branch':
            return validateBranchCommand(commandWords, refs);
        default:
            return false;
    }
};

const validateCommitCommand = (commandWords) => {
    const validFlagsWithNoArgs = ['-a', '-all'];
    const validFlagsWithOneArg = ['-m'];
    const command = commandWords
        return {
            type: actions.ADD_COMMIT,
        };

};

const validateCheckoutCommand = (commandWords, refs) => {
    const refName = commandWords[2];
    if (commandWords.length === 3 && refs.filter(ref => ref.name === refName).length === 1) {
        return {
            type: actions.CHECKOUT_REF,
            ref: refName,
        };
    }
    return false;
};

const validateBranchCommand = (commandWords, refs) => {
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
