import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from '../shared/models/phone.model';
import { Router } from '@angular/router';

import {ServicesService} from '../shared/services/services.service';
import { FormGroup, Validators, FormControl, FormsModule  } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-phone-view',
  templateUrl: './phone-view.component.html',
  styleUrls: ['./phone-view.component.css']
})
export class PhoneViewComponent implements OnInit {
editForm: FormGroup;
@Input() inPhone: Phone;
@Output() deletephone = new EventEmitter<number>();
@Output() editphone = new EventEmitter<Phone>();

isEdit: boolean;
phones: Phone[] = [];
addEdit: string = "Редактирование";
today: number = Date.now();
formatdate: string;


  constructor(private router: Router, private servicesService: ServicesService) { }

  ngOnInit() { 
    this.editForm = new FormGroup ({ 
      description: new FormControl({ value: '', disabled: true}, 
      [Validators.minLength(3)]), 
      status: new FormControl({ value: '', disabled: true}, 
      [Validators.required]), 
      datecomplete: new FormControl({ value: '', disabled: true}, 
      [Validators.required]), 
      }) 

      let pipe = new DatePipe('en-US');
      this.formatdate = pipe.transform(this.today, "yyyy-MM-dd");
      console.log(this.formatdate)
    } 
    
    onDeletePhone(inPhone) { 
    this.phones.splice(this.phones.indexOf(inPhone), 1); 
    this.deletephone.emit(inPhone); 
    } 
    
    onEditPhone(name: string, vendor_code: number, price: number, manufacturer: string, year: string, quantity: number, mpx: string, screen: string ) { 
    let phone = new Phone(name, vendor_code, price, manufacturer, year, quantity, mpx, screen); 
    this.editphone.emit(phone); 
    } 


    showEdit() { 
    this.isEdit = !this.isEdit; 
    if(this.addEdit == "Редактирование") { 
    this.addEdit = "Сохранить"; 
    } else { 
    this.addEdit = "Редактирование"; 
    } 
    } 
    
    async doPut(id: number, name: string, vendor_code: number, price: number, manufacturer: string, year: string, quantity: number, mpx: string, screen: string) { 
    try { 
    this.isEdit = !this.isEdit; 
    if (this.addEdit == "Редактировать") { 
    this.addEdit = "Сохранить"; 
    
    } 
    else {this.addEdit = "Редактировать"; 
    let phone = new Phone (name, vendor_code, price, manufacturer, year, quantity, mpx, screen); 
    await this.servicesService.putPhone(phone, id); 
    } 
    } catch (err) { 
    console.error(err); 
    } 
    } 

    doBuy(id:number) { 
      this.inPhone.quantity++;
      this.servicesService.putPhone(this.inPhone, id);
      }
    
    async doDelete(inPhone) { 
    this.phones.splice(this.phones.indexOf(inPhone), 1); 
    try { 
    await this.servicesService.deletePhone(inPhone); 
    this.deletephone.emit(inPhone); 
    } catch (err) { 
    console.error(err); 
    } 
    }
    

}
