import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { WaveDividerComponent } from './wave-divider/wave-divider.component';
import { ContentMiddleComponent } from './content-middle/content-middle.component';
import { ModalBoxComponent } from './modal-box/modal-box.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,

    ThemeSwitchComponent,
    HeaderTopComponent,
    FooterBottomComponent,
    MenuBarComponent,
    WaveDividerComponent,
    ContentMiddleComponent,
    ModalBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
