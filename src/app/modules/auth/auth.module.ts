import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../../../environments/env-container';
import { AuthUseCaseService } from '../../domain/auth/application/auth-use-case.service';
import { AuthFirebaseApiService } from '../../domain/auth/infraestructure/auth-firebase-api.service';
import { AUTH_API_PROVIDER } from '../../domain/auth/infraestructure/providers/auth-api.provider';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		AuthRoutingModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAuth(() => getAuth())
	],
	providers: [AUTH_API_PROVIDER, AuthFirebaseApiService, AuthUseCaseService]
})
export class AuthModule {}
