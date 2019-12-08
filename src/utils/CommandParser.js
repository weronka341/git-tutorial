import {actions} from '../actions/Action';

const allowedCommands = [
    'commit',
    'merge',
    'rebase',
    'checkout',
    'branch',
];

const commandNotSupportedMessage = ' - przepraszamy, ta komenda nie jest obsługiwana.';

export const commandParser = (command, refs, activeRef) => {
    const commandWords = command.match(/('.*?'|".*?"|\S+)/g);
    if (commandWords && commandWords[0] === 'git' && allowedCommands.includes(commandWords[1])) {
        const actionObject = validateCommandAndPrepareAction(commandWords, refs, activeRef);
        return actionObject
            ? actionObject
            : {message: commandNotSupportedMessage};
    } else {
        return {message: commandNotSupportedMessage};
    }
};

const validateCommandAndPrepareAction = (commandWords, refs, activeRef) => {
    switch (commandWords[1]) {
        case 'commit':
            return validateCommitCommand(commandWords);
        case 'merge':
            return validateMergeCommand(commandWords, refs);
        case 'rebase':
            return false;
        case 'checkout':
            return validateCheckoutCommand(commandWords, refs);
        case 'branch':
            return validateBranchCommand(commandWords, refs, activeRef);
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
    if (commandWords.length === 4) {
        const newRefName = commandWords[3];
        const validName = validateRefName(newRefName);
        if (!checkIfBranchExists(refs, newRefName) && validName)
            return {
                type: actions.CHECKOUT_REF_B,
                ref: validName,
            };
    } else if (commandWords.length === 5) {
        const baseRefName = commandWords[4];
        const newRefName = commandWords[3];
        const validName = validateRefName(newRefName);
        if (checkIfBranchExists(refs, baseRefName) && !checkIfBranchExists(refs, newRefName) && validName)
            return {
                type: actions.CREATE_AND_CHECKOUT_REF_FROM_REF,
                newRef: validName,
                baseRef: baseRefName,
            };
    }
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

const validateBranchCommand = (commandWords, refs, activeRef) => {
    if (commandWords.length === 2) {
        return {message: refs.filter(ref => ref.name !== 'HEAD').map(ref => `\n  ${ref.name}`)};
    } else if (commandWords.length === 3) {
        const refName = commandWords[2];
        const validName = validateRefName(refName);
        if (!checkIfBranchExists(refs, refName) && validName) {
            return {
                type: actions.ADD_REF,
                ref: validName,
            };
        }
    } else if (commandWords.length === 4) {
        const baseRefName = commandWords[3];
        const newRefName = commandWords[2];
        const validName = validateRefName(newRefName);
        if (checkIfBranchExists(refs, baseRefName) && !checkIfBranchExists(refs, newRefName) && validName)
            return {
                type: actions.CREATE_REF_FROM_REF,
                newRef: validName,
                baseRef: baseRefName,
                activeRef: activeRef.name,
            };
    }
    return {message: ' - niedozwolona nazwa gałęzi.'};
};

const validateMergeCommand = (commandWords, refs) => {
    if (commandWords.length === 3) {
        const refName = commandWords[2];
        if (checkIfBranchExists(refs, refName))
            return {
                type: actions.ADD_MERGE_COMMIT,
                refName: refName,
            };
    }
    return {message: ' - niedozwolona nazwa gałęzi.'};
};
