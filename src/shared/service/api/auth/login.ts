import { AxiosResponse } from 'axios';

import { AUTH, METHODS } from '@constants/api';
import { authRequest } from '@shared/service/auth-request';
import { LoginFormFields } from '@shared/types/auth';
import { LoginResponse } from '@shared/types/response';
import { setLocalStorageToken } from '@shared/utils/local-storage';

export const login = async (data: LoginFormFields) => {
    const res: AxiosResponse<LoginResponse> = await authRequest({
        url: AUTH.login,
        method: METHODS.post,
        data: data,
    });

    setLocalStorageToken(res.data.accessToken);
};
