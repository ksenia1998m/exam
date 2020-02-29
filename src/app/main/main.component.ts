import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Phone } from '../shared/models/phone.model';
import { ServicesService } from '../shared/services/services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit { 

  @Output() deletephone = new EventEmitter<number>(); 
  phones: Phone[] = []; 
  text_search: boolean; 
  search_content = ""; 
  sort_main = "id"; 
  router: any; 
  constructor(private servicesService: ServicesService) {} 
  
  async ngOnInit(): Promise<void> { 
  try { 
  let res = await this.servicesService.getPhone(); 
  for (var prop in res) { 
  let data = []; 
  for (var key in res[prop]) { 
  data.push(res[prop][key]); 
  } 
  console.log(data); 
  this.phones.push(new Phone(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8])); 
  } 


  } catch (err) { 
  console.error(err); 
  } 
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



