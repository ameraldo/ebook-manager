import { Route } from '@angular/router';
import { LibraryComponent } from './core/library/library.component';

export const appRoutes: Route[] = [
    {
        path: '**',
        redirectTo: 'library'
    },
    {
        path: 'library',
        component: LibraryComponent,
        title: 'Library'
    }
];
