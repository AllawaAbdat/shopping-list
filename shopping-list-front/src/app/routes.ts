import { CfgAddProductComponent } from './cfg-add-product/cfg-add-product.component';
import { CfgShowListsComponent } from './cfg-show-lists/cfg-show-lists.component';
import { CfgCreateListComponent } from './cfg-create-list/cfg-create-list.component';
import { CfgAboutComponent } from './cfg-about/cfg-about.component';
import { CfgHomeComponent } from './cfg-home/cfg-home.component';
import { CfgContainerComponent } from './cfg-container/cfg-container.component';
import { CfgUserComponent } from './cfg-user/cfg-user.component';
import { CfgSignUpComponent } from './cfg-user/cfg-sign-up/cfg-sign-up.component';
import { CfgSignInComponent } from './cfg-user/cfg-sign-in/cfg-sign-in.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './cfg-auth/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export const appRoutes: Routes = [
    {
        path: 'signup', component: CfgUserComponent,
        children: [
            { path: '', component: CfgSignUpComponent }
        ]
    },
    {
        path: 'login', component: CfgUserComponent,
        children: [
            { path: '', component: CfgSignInComponent }
        ]
    },
    {
        path: 'menu', component: CfgContainerComponent, canActivate: [AuthGuard],
        children: [
            { path: 'home', component: CfgHomeComponent },
            { path: 'about', component: CfgAboutComponent },
            { path: 'addList', component: CfgCreateListComponent },
            { path: 'showLists', component: CfgShowListsComponent },
            { path: 'addProduct', component: CfgAddProductComponent }

        ]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];

@NgModule({
    imports: [CommonModule]
})

export class MainModule {
}
