import { Injectable } from '@angular/core'; 
import { BaseApiService } from './base-api.service'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({ 
providedIn: 'root' 
})
export class ServicesService extends BaseApiService{ 

header: HttpHeaders; 
url = 'phone'; 

constructor(httpClient: HttpClient) { 
super(httpClient); 
this.header = new HttpHeaders(); 
this.header.set('Content-type', 'application/json'); 
} 

getPhone() { 
return this.get(this.url, this.header).toPromise(); 
} 

postPhone(data) { 
return this.post(this.url, data, this.header).toPromise(); 
} 

putPhone(data, id: number) { 
return this.put(`${this.url}/${id}`, data, this.header).toPromise(); 
} 

deletePhone(id) { 
return this.delete(`${this.url}/${id}`, this.header).toPromise(); 
} 
}

