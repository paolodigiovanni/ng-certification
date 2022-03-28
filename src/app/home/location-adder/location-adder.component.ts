import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    this.addLocationForm = this.formBuilder.group({ zipcode: [''] })
  }

  addLocation(): void {
    this.onAddLocation.emit(this.addLocationForm.get('zipcode').value);
  }
}
