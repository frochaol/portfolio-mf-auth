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
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
	declarations: [LoginComponent, LayoutComponent],
	imports: [
		CommonModule,
		AuthRoutingModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAuth(() => getAuth())
	],
	providers: [AUTH_API_PROVIDER, AuthFirebaseApiService, AuthUseCaseService]
})
export class AuthModule {}
