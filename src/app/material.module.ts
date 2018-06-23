import { NgModule } from '@angular/core';

// Navigation
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Layout
import { MatListModule } from '@angular/material/list';

// Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const modules: any[] = [
	MatSidenavModule,
	MatToolbarModule,
	MatListModule,
	MatButtonModule,
	MatIconModule
];

@NgModule({
	imports: modules,
	exports: modules
})
export class MaterialModule {}
