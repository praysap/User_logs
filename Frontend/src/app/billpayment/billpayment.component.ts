import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-billpayment',
  templateUrl: './billpayment.component.html',
  styleUrls: ['./billpayment.component.css']
})
export class BillpaymentComponent {

public apiUrl=environment.API_URL;

constructor(public http: HttpClient){}

ngOnInit(): void {
  const currentUrl = window.location.href;
  this.storeCurrentUrl(currentUrl).subscribe(
      //response => console.log(response),
     // error => console.error(error)
  );
}


  storeCurrentUrl(currentUrl: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/store-info`, { currentUrl });
  }
  
}
