import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FeedComponent } from './feed/feed.component';
import { IngredientsComponent } from './constructor/ingredients/ingredients.component';
import { BurgerConstructorComponent } from './constructor/burger-constructor/burger-constructor.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConstructorComponent,
    UserComponent,
    HeaderComponent,
    FeedComponent,
    IngredientsComponent,
    BurgerConstructorComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
