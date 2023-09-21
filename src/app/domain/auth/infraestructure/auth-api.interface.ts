import { IRequestCredential } from '../domain/auth.model';

export interface IAuthApiService {
	login(credentials: IRequestCredential): Promise<any>;
	logout(): Promise<void>;
}
