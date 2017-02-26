import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Components
import { PollComponent } from './poll.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
    // Root
    { path: 'poll/:id', component: PollComponent },
    { path: 'login', component: LoginComponent }
];

// - Updated Export
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);