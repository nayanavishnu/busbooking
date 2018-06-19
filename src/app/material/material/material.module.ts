import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatInputModule, MatCardModule, MatDatepickerModule, MatNativeDateModule,
  MatListModule, MatDividerModule, MatIconModule, MatExpansionModule,
  MatSelectModule, MatToolbarModule
} from '@angular/material';

const modulesArr = [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
  MatCardModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatDividerModule,
  MatIconModule, MatExpansionModule, MatSelectModule, MatToolbarModule];

@NgModule({
  imports: modulesArr,
  exports: modulesArr,
  declarations: []
})
export class MaterialModule { }
