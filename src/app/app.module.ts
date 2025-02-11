import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { HeaderComponent } from './header/header.component';
import { FeedComponent } from './feed/feed.component';
import { IngredientsComponent } from './constructor/ingredients/ingredients.component';
import { BurgerConstructorComponent } from './constructor/burger-constructor/burger-constructor.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TotalPricePipe } from './services/pipe/total-price.pipe';
import { OrderPricePipe } from './services/pipe/order-price.pipe';
import { ProfileOrderComponent } from './user/profile/profile-order/profile-order.component';
import { ProfileFormComponent } from './user/profile/profile-form/profile-form.component';
import { RegisterComponent } from './user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructorComponent,
    HeaderComponent,
    FeedComponent,
    IngredientsComponent,
    BurgerConstructorComponent,
    LoginComponent,
    ProfileComponent,
    TotalPricePipe,
    OrderPricePipe,
    ProfileOrderComponent,
    ProfileFormComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
