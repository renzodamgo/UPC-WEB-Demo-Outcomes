import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OutcomeRespone } from '../models/outcomeResponse.model';

@Injectable({
  providedIn: 'root'
})
export class OutcomeService {

  constructor(private http:HttpClient) { }


  getAllOutcomes(): Observable<OutcomeRespone[]>{
    console.log(`${environment.apiUrl}outcomes`);
    return this.http.get<OutcomeRespone[]>(`${environment.apiUrl}outcomes`)
  }

  deleteOutcomeById(outcomeId:number){
    return this.http.delete(`${environment.apiUrl}outcomes/${outcomeId}`)
  }

  
}
