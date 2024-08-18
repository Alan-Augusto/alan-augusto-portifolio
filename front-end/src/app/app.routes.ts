import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { BlogComponent } from './features/blog/blog.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'blog', component: BlogComponent},
    { path: '**', redirectTo:''}
];
