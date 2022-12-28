import { Component, OnInit } from '@angular/core';
import {Theme} from "../../theme";
import {CalculatorService} from "../../services/calculator.service";

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {
  calculations: Theme[] = [];
  constructor(private  calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.calculatorService.getCalculations().subscribe((calculations)=> {
        console.log("calculations size: " + calculations.length + " with " + calculations.join());
        this.calculations = calculations;
      }
    );
  }
  addCalculation(calculation: Theme) {
    console.log("calculations component add calculation: " + calculation);
    this.calculatorService.addCalculation(calculation).subscribe((calculation)=> (
      this.calculations.push(calculation)
    ));
  }

}
