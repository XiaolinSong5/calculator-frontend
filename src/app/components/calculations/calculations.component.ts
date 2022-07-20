import { Component, OnInit } from '@angular/core';
import {Calculation} from "../../Calculation";
import {CalculatorService} from "../../services/calculator.service";

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {
  calculations: Calculation[] = [];
  constructor(private  calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.calculatorService.getCalculations().subscribe((calculations)=> {
        console.log("calculations size: " + calculations.length + " with " + calculations.join());
        this.calculations = calculations;
      }
    );
  }
  addCalculation(calculation: Calculation) {
    console.log("calculations component add calculation. first: " + calculation.firstNumber + " second:" + calculation.secondNumber);
    this.calculatorService.addCalculation(calculation).subscribe((calculation)=> (
      this.calculations.push(calculation)
    ));
  }

}
