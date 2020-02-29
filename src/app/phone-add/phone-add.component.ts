import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServicesService } from '../shared/services/services.service';
import { Phone } from '../shared/models/phone.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-add',
  templateUrl: './phone-add.component.html',
  styleUrls: ['./phone-add.component.css']
})
export class PhoneAddComponent implements OnInit {
  @Output() addphone = new EventEmitter<Phone>() 

  phoneForm: FormGroup; 
    disabledForms = false; 
 
    constructor(private router: Router, private phoneService: ServicesService) { } 
    
    ngOnInit() { 
    this.phoneForm = new FormGroup ({ 
    name: new FormControl({ value: '', disabled: this.disabledForms}, 
    [Validators.minLength(3)]), 
    vendor_code: new FormControl({ value: '', disabled: this.disabledForms}, 
    [Validators.required]), 

    manufacturer: new FormControl({ value: '', disabled: this.disabledForms}, 
    [Validators.minLength(3)]), 
    year: new FormControl({ value: '', disabled: this.disabledForms}, 
    [Validators.required]), 

    price: new FormControl({ value: '', disabled: this.disabledForms}, 
    [Validators.minLength(3)]), 
    quantity: new FormControl({ value: '', disabled: this.disabledForms}, 
    [Validators.required]), 

    mpx: new FormControl({ value: '', disabled: this.disabledForms}, 
    [Validators.minLength(3)]), 
    screen: new FormControl({ value: '', disabled: this.disabledForms}, 
    [Validators.required]), 
    }) 
    
    
    } 
    
    onAddNote(id: number, name: string, vendor_code: number, price: number, manufacturer: string, year: string, quantity: number, mpx: string, screen: string) { 
    let note = new Phone(name, vendor_code, price, manufacturer, year, quantity, mpx, screen); 
    this.addphone.emit(note); 
    } 
    
    async doPost(inputName, inputVendor_code, inputPrice, inputManufacturer, inputYear, inputQuantity, inputMpx, inputScreen) { 
    let obj = {name: inputName.value, vendor_code: inputVendor_code.value, price: inputPrice.value, manufacturer: inputManufacturer.value, year: inputYear.value, quantity: inputQuantity.value, mpx: inputMpx.value, screen: inputScreen.value}; 
    try { 
    await this.phoneService.postPhone(obj); 
    let note = new Phone(inputName.value, inputVendor_code.value, inputPrice.value, inputManufacturer.value, inputYear.value, inputQuantity.value, inputMpx.value, inputScreen.value); 

    
    this.addphone.emit(note); 
    this.router.navigate([`/`]); 
    } catch (err) { 
    console.error(err); 
    } 
    
    }}