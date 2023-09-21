import { Inject, Injectable } from '@angular/core';
import { IRequestCredential } from '../domain/auth.model';
import { IAuthApiService } from '../infraestructure/auth-api.interface';
import { HTTP_AUTH_SERVICE } from '../infraestructure/providers/auth-api.provider';

@Injectable({ providedIn: 'root' })
export class AuthUseCaseService {
	constructor(@Inject(HTTP_AUTH_SERVICE) private _authApiService: IAuthApiService) {}

	login(credentials: IRequestCredential): Promise<any> {
		return this._authApiService.login(credentials);
	}

	logout(): Promise<void> {
		return this._authApiService.logout();
	}
}
