import {actions} from '../actions/Action';

const allowedCommands = [
    'commit',
    'merge',
    'rebase',
    'checkout',
    'branch',
];

const commandNotSupportedMessage = ' - przepraszamy, ta komenda nie jest obsługiwana.';

export const commandParser = (command, refs) => {
    const commandWords = command.match(/('.*?'|".*?"|\S+)/g);
    if (commandWords && commandWords[0] === 'git' && allowedCommands.includes(commandWords[1])) {
        const actionObject = validateCommandAndPrepareAction(commandWords, refs);
        return actionObject
            ? actionObject
            : {message: commandNotSupportedMessage};
    } else {
        return {message: commandNotSupportedMessage};
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
    const actionObject = {type: actions.ADD_COMMIT};
    if (commandWords.length === 2)
        return actionObject;
    return commandWords[2] === '-m' && commandWords[3].match(/('.*?'|".*?")/g)
        ? actionObject
        : null;
};

const validateCheckoutCommand = (commandWords, refs) => {
    if (commandWords[2] === '-b')
        return validateCheckoutWithBranchCommand(commandWords, refs);
    const refName = commandWords[2];
    if (commandWords.length === 3 && checkIfBranchExists(refs, refName))
        return {
            type: actions.CHECKOUT_REF,
            ref: refName,
        };
    else
        return {message: ' - podana gałąź nie istnieje.'}
};

const validateCheckoutWithBranchCommand = (commandWords, refs) => {
    const refName = commandWords[3];
    const validName = validateRefName(refName);
    if (commandWords.length === 4 && !checkIfBranchExists(refs, refName) && validName)
        return {
            type: actions.CHECKOUT_REF_B,
            ref: validName,
        };
    return {message: ' - niedozwolona nazwa gałęzi.'};
};

const checkIfBranchExists = (refs, refName) => {
    return refs.filter(ref => ref.name === refName).length === 1;
};

const validateRefName = (refName) => {
    const name = refName.replace(/\s/g, '');
    if (name.match(/^[a-zA-Z0-9]+$/) && !name.match(/[hH][eE][aA][dD]/)) {
        return name.slice(0, 11);
    }
    return null;
};

const validateBranchCommand = (commandWords, refs) => {
    if (commandWords.length === 2) {
        return {message: refs.filter(ref => ref.name !== 'HEAD').map(ref => `\n  ${ref.name}`)};
    }
    const refName = commandWords[2];
    const validName = validateRefName(refName);
    if (commandWords.length === 3 && !checkIfBranchExists(refs, refName) && validName) {
        return {
            type: actions.ADD_REF,
            ref: validName,
        };
    }
    return {message: ' - niedozwolona nazwa gałęzi.'};
};
