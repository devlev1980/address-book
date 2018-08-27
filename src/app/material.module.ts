import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatTableModule,
  MatTabsModule,
  MatSortModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatMenuModule,
  MatNativeDateModule
} from '@angular/material';
import {MatDatepickerModule,} from '@angular/material/datepicker';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatTableModule,
  MatTabsModule,
  MatSortModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatMenuModule,
  MatIconModule
];
@NgModule({
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES],
  providers: [MatNativeDateModule,MatDatepickerModule]

})
export class MaterialModule { }
