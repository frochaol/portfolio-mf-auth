import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUseCaseService } from '../../../../domain/auth/application/auth-use-case.service';
import { IRequestCredential } from '../../../../domain/auth/domain/auth.model';
import { ILoginForm } from '../../models/login-form.interface';

// email: 'administrador@frochaol.com',
// password: 'FR@30t3s/.DuB015'
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	private authUseCaseService = inject(AuthUseCaseService);
	private formBuilder = inject(FormBuilder);
	private router = inject(Router);

	loginForm: FormGroup<ILoginForm> = this.formBuilder.group({
		email: this.formBuilder.control('', {
			validators: [Validators.required, Validators.email],
			nonNullable: true
		}),
		password: this.formBuilder.control('', {
			validators: Validators.required,
			nonNullable: true
		})
	});

	async login() {
		if (this.loginForm.valid) {
			try {
				await this.authUseCaseService.login(this.loginForm.value as IRequestCredential);
				this.router.navigate(['/auth/logged']);
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
