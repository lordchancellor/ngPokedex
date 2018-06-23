import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { PokemonService } from './services/pokemon.service';

import { AppComponent } from './app.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HeaderComponent } from './ui/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		SidenavComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FlexLayoutModule,
		MaterialModule
	],
	providers: [ PokemonService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
