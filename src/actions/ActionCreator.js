export const setVisibility = (action, isVisible) => ({
    type: action,
    isVisible,
});

export const performActionOnSidebarOption = (action, optionID) => ({
    type: action,
    optionID,
});
