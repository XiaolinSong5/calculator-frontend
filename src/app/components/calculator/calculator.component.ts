import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CalculatorService} from "../../services/calculator.service";
import {Calculation} from "../../Calculation";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  @Output() onAdd: EventEmitter<Calculation> = new EventEmitter<Calculation>();
  id: number= 0;
  result: number=0 ;
  first: number = 0;
  second: number = 0;
  name: string = '';
  fullname: string = '';
  ticketType: string = '';
  description: string = '';
  ownerType: string = '';
  resultDisplay: string = "0.0";
  subscription : Subscription;

  constructor(private calculatorService: CalculatorService) {
    this.subscription = this.calculatorService.getResult().subscribe(value => {
      this.resultDisplay = value;
    });
  }

  ngOnInit(): void {
    // this.calculatorService.add().subscribe((aPair) =>
    //   this.result = aPair.result
    // );
  }
  onSubmit() {
    console.log("onsubmit clicked");
    const newCalculation: Calculation = {
      id: 0,
      firstNumber: this.first,
      secondNumber: this.second,
      name: this.name,
      fullname: this.fullname,
      ticketType: this.ticketType,
      description: this.description,
      ownerType: this.ownerType,
      result: 0
    }
    this.onAdd.emit(newCalculation);
   // this.resultDisplay = this.calculatorService.getResult();
    this.subscription = this.calculatorService.getResult().subscribe(value => {
      this.resultDisplay = value;
    });
    this.id = 0;
    this.first =0;
    this.second = 0;
    this.name = '';
    this.fullname = '';
    this.description = '';
    this.ownerType = '';
    this.ticketType = '';
    this.result = 0;
  }

}
