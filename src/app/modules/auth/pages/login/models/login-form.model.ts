import { inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export class LoginFormModel {
	formBuilder = inject(FormBuilder);
	email = this.formBuilder.control('', {
		validators: [Validators.required, Validators.email],
		nonNullable: true
	});
	password = this.formBuilder.control('', {
		validators: Validators.required,
		nonNullable: true
	});

	getErrorMessage(control: string, form: any): object {
		const { touched, dirty, errors } = form?.get(control);
		const message = { state: '', error: '' };

		if ((!touched && !dirty) || !errors) {
			return message;
		}

		for (const error of Object.entries(errors)) {
			const [typeError] = error;
			message.error = 'Este campo es requerido';
			message.state = 'error';
		}

		return message;
	}
}
