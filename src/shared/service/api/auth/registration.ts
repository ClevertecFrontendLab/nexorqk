import { Auth } from '@constants/api';
import { authRequest } from '@shared/service/auth-request';
import { RegistrationFields } from '@shared/types/auth';

export const registration = async (data: RegistrationFields) => {
    await authRequest({
        url: Auth.registration,
        method: 'POST',
        data,
    });
};
