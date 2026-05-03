import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { PracticeAreas } from './pages/practice-areas/practice-areas';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'practice-areas', component: PracticeAreas },
  { path: 'contact', component: Contact }
];