import {NgModule} from "@angular/core";
import {AuthRoutingModule} from "./auth-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: []
})
export class AuthModule {

}
