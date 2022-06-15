import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class MaterialModule {}
