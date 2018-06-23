import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { UserFeedbackService } from './user-feedback.service';
import { PokemonService } from './services/pokemon.service';

import { AppComponent } from './app.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HeaderComponent } from './ui/header/header.component';
import { PokemonSearchComponent } from './search/pokemon-search/pokemon-search.component';
import { PokemonInfoComponent } from './search/pokemon-info/pokemon-info.component';

@NgModule({
	declarations: [
		AppComponent,
		SidenavComponent,
		HeaderComponent,
		PokemonSearchComponent,
		PokemonInfoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MaterialModule
	],
	providers: [ 
		UserFeedbackService,
		PokemonService
	 ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
