import { Component, inject } from '@angular/core';
import { AuthUseCaseService } from '../../../../domain/auth/application/auth-use-case.service';
import { IRequestCredential } from '../../../../domain/auth/domain/auth.model';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	private _authUseCaseService = inject(AuthUseCaseService);

	async login(): Promise<void> {
		const credentials: IRequestCredential = {
			email: 'administrador@frochaol.com',
			password: 'FR@30t3s/.DuB015'
		};

		try {
			await this._authUseCaseService.login(credentials);
			console.log('Se logeo correctamente');
		} catch (error) {
			console.log(error);
		}
	}
}
