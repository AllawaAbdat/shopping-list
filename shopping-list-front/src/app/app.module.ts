import { CfgUserService } from './cfg-services/cfg-user.service';
import { AuthInterceptor } from './cfg-auth/auth.interceptor';
import { AuthGuard } from './cfg-auth/auth.guard';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CfgUserComponent } from './cfg-user/cfg-user.component';
import { CfgSignUpComponent } from './cfg-user/cfg-sign-up/cfg-sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CfgUserProfileComponent } from './cfg-user-profile/cfg-user-profile.component';
import { CfgSignInComponent } from './cfg-user/cfg-sign-in/cfg-sign-in.component';
import { CfgNavbarComponent } from './cfg-navbar/cfg-navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { ToastrModule } from 'ngx-toastr';
 import { MDBBootstrapModule } from 'angular-bootstrap-md';
 import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { CfgHomeComponent } from './cfg-home/cfg-home.component';
import { CfgAboutComponent } from './cfg-about/cfg-about.component';
import { CfgCreateListComponent } from './cfg-create-list/cfg-create-list.component';
import { CfgShowListsComponent } from './cfg-show-lists/cfg-show-lists.component';
import { CfgAddProductComponent } from './cfg-add-product/cfg-add-product.component';
import { CfgContainerComponent } from './cfg-container/cfg-container.component';
import { CfgHeaderStrapComponent } from './cfg-header-strap/cfg-header-strap.component';
import { CfgFooterComponent } from './cfg-footer/cfg-footer.component';
import { CfgProductListDialogComponent } from './cfg-product-list-dialog/cfg-product-list-dialog.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CfgUserComponent,
    CfgSignUpComponent,
    CfgUserProfileComponent,
    CfgSignInComponent,
    CfgNavbarComponent,
    CfgHomeComponent,
    CfgAboutComponent,
    CfgCreateListComponent,
    CfgShowListsComponent,
    CfgAddProductComponent,
    CfgContainerComponent,
    CfgHeaderStrapComponent,
    CfgFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    MDBBootstrapModule.forRoot(),
    TooltipModule.forRoot()
  ],
  exports: [ MatFormFieldModule, MatInputModule ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, CfgUserService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [CfgProductListDialogComponent]
})
export class AppModule { }
