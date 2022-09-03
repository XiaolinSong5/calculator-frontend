import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Calculation} from "../Calculation";
const httpOptions = {
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  }
}
@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  protected display: string = "0";
  private subject = new Subject<any>();
// private apiUrl = "http://localhost:5000/calculations";
  private apiUrl = "http://localhost:8080/calculations";
  private addUrl = "http://localhost:8080/create";
  private deleteUrl = "http://localhost:8080/delete";
  constructor(private http: HttpClient) { }
  addCalculation(calculation: Calculation): Observable<Calculation> {
    console.log("Service add calculation first: " + calculation.firstNumber + " second" + calculation.secondNumber + "json: "+ JSON.stringify(calculation));
    console.log("addUrl" + this.addUrl);
    let a = this.http.post("http://localhost:8080/delete",calculation, httpOptions ).subscribe((result) => (
      this.display = result.toString()));
    this.subject.next(this.display)
    console.log("a" + a);
   // return this.http.delete(this.deleteUrl, httpOptions).subscribe(()=> console.log("Delete succesed"));
    return this.http.post<Calculation>(this.addUrl, JSON.stringify(calculation), httpOptions);
    //   .subscribe(next: data => {
    //     calculation.result = data.result
    //   },
    //   error => {
    //     console.log("")
    //   }
    // );
  }
  getCalculations(): Observable<Calculation[]> {
    return this.http.get<Calculation[]>(this.apiUrl);
  }
  getResult(): Observable<any> {
    return this.subject.asObservable();
  }
}
