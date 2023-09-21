import { InjectionToken, Provider } from '@angular/core';
import { IAuthApiService } from '../auth-api.interface';
import { AuthFirebaseApiService } from '../auth-firebase-api.service';

export const HTTP_AUTH_SERVICE = new InjectionToken<IAuthApiService>('AuthFirebaseApiService');
export const AUTH_API_PROVIDER: Provider = { provide: HTTP_AUTH_SERVICE, useClass: AuthFirebaseApiService };
