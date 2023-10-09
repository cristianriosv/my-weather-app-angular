import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.sass'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule
  ]
})

export class AutocompleteComponent {

  @Input() options: { label: string, value: any }[] = [];
  @Input() placeholder: string = '';

  @Output() onInputChange = new EventEmitter<string>();
  @Output() onSelectChange = new EventEmitter<{ label: string, value: any }>();

  inputFieldControl = new FormControl();

  constructor() {
    this.inputFieldControl.valueChanges.subscribe(val => {
      if (typeof val === 'string') {
        this.onInputChange.emit(val);
      }
    });
  }

  displayWith(data: { label: string }): string {
    return data && data.label;
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.onSelectChange.emit(event.option.value);
  }

}
