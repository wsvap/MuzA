import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ExhibitionsComponent} from './demo/view/exhibitions.component';
import {WorksOfArtComponent} from './demo/view/works-of-art.component';
import {EditExhibitionComponent} from './demo/view/edit-exhibition.component';

export const routes: Routes = [
    {path: '', component: ExhibitionsComponent},
    {path: 'exhibitions', component: ExhibitionsComponent},
    {path: 'works-of-art', component: WorksOfArtComponent},
    {path: 'edit-exhibition', component: EditExhibitionComponent},
    {path: '**', redirectTo: ''}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
