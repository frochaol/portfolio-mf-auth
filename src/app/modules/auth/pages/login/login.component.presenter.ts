import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUseCaseService } from '../../../../domain/auth/application/auth-use-case.service';
import { IRequestCredential } from '../../../../domain/auth/domain/auth.model';
import { LoginFormModel } from './models/login-form.model';

@Injectable()
export class LoginComponentPresenter {
	form!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private authUseCaseService: AuthUseCaseService,
		private router: Router
	) {
		const { getErrorMessage, ...res } = new LoginFormModel();
		this.form = this.fb.group({
			...res
		});
		this.form.getError = (control: string) => getErrorMessage(control, this.form);
	}

	async login(request: IRequestCredential) {
		await this.authUseCaseService.login(request);
		this.router.navigate(['/auth/logged']);
	}
}
