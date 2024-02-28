import { AUTH, METHODS } from '@constants/api';
import { authRequest } from '@shared/service/auth-request';
import { RegistrationFields } from '@shared/types/auth';

export const registration = async (data: RegistrationFields) => {
    await authRequest({
        url: AUTH.registration,
        method: METHODS.post,
        data,
    });
};
