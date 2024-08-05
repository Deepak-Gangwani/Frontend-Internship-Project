import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreatearticleComponent } from './components/createarticle/createarticle.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AuthorComponent } from './components/author/author.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './services/auth.guard';
import { Home2Component } from './components/home2/home2.component';
import { OfferComponent } from './components/offer/offer.component';
import { InstituteComponent } from './components/institute/institute.component';
import { CareerComponent } from './components/career/career.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home2', pathMatch: 'full' },
 
    // webiste info pages
    { path: 'home2', component: Home2Component },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: OfferComponent },
    { path: 'cit', component: InstituteComponent },
    { path: 'career', component: CareerComponent },
    { path: 'contact', component: ContactComponent },

    // Blog routes with admin
    { path: 'blogs', component: HomeComponent },
    { path: 'create', component: CreatearticleComponent, canActivate: [AuthGuard] },
 
    { path: 'article/:id', component: DetailComponent },

    { path: 'privacy', component: PrivacyComponent },
    { path: 'author/:id', component: AuthorComponent, canActivate: [AuthGuard] },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: '**', component: NotfoundComponent },
];
