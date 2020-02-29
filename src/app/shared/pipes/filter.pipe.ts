import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from '../models/phone.model';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(phones: Phone[], search: string ) { 
    if(!isNullOrUndefined(phones) && search.trim() !== "") { 
    let search_phones = phones.filter( 
      phone => phone.name.toLowerCase().indexOf(search.toLowerCase()) != -1,
      article => article.vendor_code.toLowerCase().indexOf(search.toLowerCase()) != -1
    ); 

    return search_phones; 
    } 
    return phones; 
    }
}
