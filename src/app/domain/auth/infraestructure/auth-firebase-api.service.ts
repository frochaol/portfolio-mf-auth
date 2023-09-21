import { Injectable, inject } from '@angular/core';
import { Auth, UserCredential, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { IRequestCredential } from '../domain/auth.model';
import { IAuthApiService } from './auth-api.interface';

@Injectable()
export class AuthFirebaseApiService implements IAuthApiService {
	private auth: Auth = inject(Auth);
	readonly authState$ = authState(this.auth);

	login(credentials: IRequestCredential): Promise<UserCredential> {
		return signInWithEmailAndPassword(this.auth, credentials.email, credentials.password);
	}
	logout(): Promise<void> {
		return this.auth.signOut();
	}
}
