import { NgModule } from '@angular/core';

// Form Controls
import { MatInputModule } from '@angular/material/input';

// Navigation
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Layout
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

// Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const modules: any[] = [
	MatInputModule,
	MatSidenavModule,
	MatToolbarModule,
	MatCardModule,
	MatListModule,
	MatButtonModule,
	MatIconModule,
	MatProgressSpinnerModule
];

@NgModule({
	imports: modules,
	exports: modules
})
export class MaterialModule {}
