const accessDeniedRedirect = () => {
    return window.location.href = window.location.pathname + 'accessDenied';
}

const inactiveUserRedirect = () => {
    return window.location.href = window.location.pathname + 'inactiveUser';
}

export {
    accessDeniedRedirect,
    inactiveUserRedirect,
};