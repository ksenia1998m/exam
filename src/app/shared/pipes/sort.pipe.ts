import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Phone } from '../models/phone.model';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

today: number = Date.now(); 
formatdate: string; 
transform(phones: Phone[], search: string) { 
if(!isNullOrUndefined(phones) && (search || '').trim() !== "") { 
if (search == "id") { 
let search_phones = phones.sort((a, b) => (search) ? (a.id - b.id): (b.id - a.id)); 
return search_phones; 
} else if (search == "price-max") { 
let search_phones = phones.sort((a, b) => (search) ? (a.price - b.price): (b.price - a.price)); 

return search_phones; 
} else if (search == "price-min") { 
  let search_phones = phones.sort((a, b) => (search) ? (b.price - a.price): (a.price - b.price)); 
  
  return search_phones; 
} else if (search == "quantity") { 

let search_phones = phones.sort((a, b) => (search) ? (a.quantity - b.quantity): (b.quantity - a.quantity)); 

return search_phones; 
} else if (search == "date") { 

  let pipe = new DatePipe('en-US'); 
  this.formatdate = pipe.transform(this.today, "yyyy-MM-dd"); 
  let search_phones = phones.filter( 
  phone => phone.year < this.formatdate 
  );
  return search_phones; 
} else { 
return phones; 
} 
} 
return phones; 
}

}
