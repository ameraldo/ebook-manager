import { Route } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { LibraryComponent } from './core/library/library.component';
import { BookComponent } from './core/book/book.component';
import { SettingsComponent } from './core/settings/settings.component';

export const appRoutes: Route[] = [
    { 
        path: '',
        component: ContainerComponent,
        children: [
            {
                path: 'library',
                component: LibraryComponent,
                title: 'Library'
            },
            {
                path: 'book/:id',
                component: BookComponent,
                title: 'Book'
            },
            {
                path: 'settings',
                component: SettingsComponent,
                title: 'Settings'
            },


            { 
                path: '', 
                redirectTo: 'library', 
                pathMatch: 'full',
            },
            { 
                path: '**',
                component: LibraryComponent,
            },
        ]
    }
];
