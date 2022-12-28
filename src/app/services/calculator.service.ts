import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Calculation} from "../Calculation";
import {Theme} from "../theme";
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
  private componentsUrl = "http://localhost:8080/components";
  private addUrl = "http://localhost:8080/create";
  private deleteUrl = "http://localhost:8080/delete";
  //private dialgueUrl = "http://localhost:8001/dialogue-engine/dialogues/2f50050c-cc25-4e9f-ade5-635b2b284b30";
  constructor(private http: HttpClient) { }
  addCalculation(calculation: Theme): Observable<Theme> {
    console.log("Service add calculation: "  + "json: "+ JSON.stringify(calculation));
    console.log("addUrl" + this.addUrl);
    // this.http.get<any>('http://localhost:8001/dialogue-engine/dialogues/2f50050c-cc25-4e9f-ade5-635b2b284b30').subscribe(data => {
    //   console.log("dialogue: " + data);
    // })

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
  getCalculations(): Observable<Theme[]> {
    return this.http.get<Theme[]>(this.componentsUrl);
  }
  getResult(): Observable<any> {
    return this.subject.asObservable();
  }
}
