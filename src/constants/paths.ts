export enum Paths {
    AUTH = 'auth',
    MAIN = 'main',
    RESULT = 'result',
    SUCCESS = 'success',
    ERROR = 'error',
    ERROR_USER_EXIST = 'error-user-exist',
    ERROR_LOGIN = 'error-login',
    ERROR_CHECK_EMAIL_NO_EXIST = 'error-check-email-no-exist',
    ERROR_CHECK_EMAIL = 'error-check-email',
    ERROR_CHANGE_PASSWORD = 'error-change-password',
    SUCCESS_CHANGE_PASSWORD = 'success-change-password',
}

const createRoute = (...paths: Paths[]): string => `${paths.join('/')}`;

export const routes = {
    resultSuccess: createRoute(Paths.RESULT, Paths.SUCCESS),
    resultError: createRoute(Paths.RESULT, Paths.ERROR),
    resultErrorUserExist: createRoute(Paths.RESULT, Paths.ERROR_USER_EXIST),
    resultErrorLogin: createRoute(Paths.RESULT, Paths.ERROR_LOGIN),
    resultErrorCheckEmailNoExist: createRoute(Paths.RESULT, Paths.ERROR_CHECK_EMAIL_NO_EXIST),
    resultErrorCheckEmail: createRoute(Paths.RESULT, Paths.ERROR_CHECK_EMAIL),
    resultErrorChangePassword: createRoute(Paths.RESULT, Paths.ERROR_CHANGE_PASSWORD),
    resultSuccessChangePassword: createRoute(Paths.RESULT, Paths.SUCCESS_CHANGE_PASSWORD),
};
