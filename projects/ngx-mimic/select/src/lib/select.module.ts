import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { MmcSelect } from './select.component';
import { MmcSelectComponent } from './mmc-select/mmc-select.component';

import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    MmcSelect,
    MmcSelectComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    MatInputModule,
    MatOptionModule,
    MatAutocompleteModule,
  ],
  exports: [
    MmcSelect,
  ]
})
export class SelectModule { }
