import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-location-adder',
  templateUrl: './location-adder.component.html',
  styleUrls: ['./location-adder.component.css']
})
export class LocationAdderComponent implements OnInit {

  @Output() onAddLocation: EventEmitter<string> = new EventEmitter<string>();

  addLocationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.addLocationForm = this.formBuilder.group(
      {
        zipcode: ['', Validators.compose(
          [Validators.required, Validators.pattern('[0-9]{5}')]
        )]
      }, { updateOn: 'blur' }
    );
  }

  addLocation(): void {
    if (this.addLocationForm.valid) {
      this.onAddLocation.emit(this.addLocationForm.get('zipcode').value);
    } else {
      this.addLocationForm.get('zipcode').markAsDirty();
      this.addLocationForm.get('zipcode').markAsTouched();
    }
  }

  onFocus(): void {
    this.addLocationForm.get('zipcode').markAsPristine();
    this.addLocationForm.get('zipcode').markAsUntouched();
  }
}
