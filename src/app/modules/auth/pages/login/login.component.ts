import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IRequestCredential } from '../../../../domain/auth/domain/auth.model';
import { ILoginForm } from '../../models/login-form.interface';
import { LoginComponentPresenter } from './login.component.presenter';

// email: 'administrador@frochaol.com',
// password: 'FR@30t3s/.DuB015'
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: [LoginComponentPresenter]
})
export class LoginComponent {
	private presenter = inject(LoginComponentPresenter);

	loginForm: FormGroup<ILoginForm> = this.presenter.form;

	async login() {
		if (this.loginForm.valid) {
			try {
				await this.presenter.login(this.loginForm.value as IRequestCredential);
				this.loginForm.reset();
			} catch (error) {
				console.log(error);
			}
		}
	}

	//getters and setters
	get email() {
		return this.loginForm.controls.email;
	}
	get password() {
		return this.loginForm.controls.password;
	}
}
