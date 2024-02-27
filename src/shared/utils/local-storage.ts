export const setLocalStorageToken = (accessToken: string) =>
    localStorage.setItem('accessToken', accessToken);

export const getLocalStorageToken = () => JSON.parse(localStorage.getItem('accessToken') || '');

export const removeLocalStorageToken = () => localStorage.removeItem('accessToken');
