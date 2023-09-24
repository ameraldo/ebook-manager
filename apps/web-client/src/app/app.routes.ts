import { Route } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { LibraryComponent } from './core/library/library.component';
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
                path: 'settings',
                component: SettingsComponent,
                title: 'Settings'
            },
        ]
    }
];
