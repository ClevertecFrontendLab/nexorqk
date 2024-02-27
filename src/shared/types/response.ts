export type LoginResponse = {
    accessToken: string;
};

export type LoginErrorResponse = {
    statusCode: number;
    error: string;
    message: string;
};

export type RegistrationErrorResponse = {
    statusCode: number;
    error: string;
    message: string;
};
