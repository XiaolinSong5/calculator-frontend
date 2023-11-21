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
    this.calculatorService.getCalculations().subscribe((themes)=> {
        console.log("calculations size: " + themes.length + " with " + themes.join());
        this.calculations = themes;
      }
    );
  }
  addCalculation(theme: Theme) {
    console.log("calculations component add calculation: " + theme);
    this.calculatorService.addCalculation(theme).subscribe((calculation)=> (
      this.calculations.push(calculation)
    ));
  }

}
