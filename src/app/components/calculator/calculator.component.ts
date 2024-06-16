import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter, Injector,
  OnInit,
  Output,
  signal,
  ViewEncapsulation
} from '@angular/core';
import {CalculatorService} from "../../services/calculator.service";
import {Calculation} from "../../Calculation";
import {Subscription} from "rxjs";
import {toObservable} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-calculator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CalculatorComponent implements OnInit {
  firstName: string;
  @Output() onAdd: EventEmitter<Calculation> = new EventEmitter<Calculation>();
  id: number= 0;
  result: number=0 ;
  first: number = 0;
  phase: string = '';
  name: string = '';
  fullname: string = '';
  ticketType: string = '';
  description: string = '';
  ownerType: string = '';
  resultDisplay: string = "0.0";
  subscription : Subscription;

  constructor(private calculatorService: CalculatorService, private injector: Injector) {
    this.subscription = this.calculatorService.getResult().subscribe(value => {
      this.resultDisplay = value;
    });
    this.firstName ='Xiaolin';
    setTimeout(()=> this.firstName="something else", 5000);
  }

  ngOnInit(): void {
    const numbers = signal(0);
    numbers.set(1);
    numbers.set(2);
    numbers.set(3);
    const numbers$ = toObservable(numbers, {
      injector: this.injector
    })
    numbers.set(4);
    numbers$.subscribe(value => {
      console.log('numbers$', value);
    })
  numbers.set(5);

    //result in console is 5
    // this.calculatorService.add().subscribe((aPair) =>
    //   this.result = aPair.result
    // );
  }
  onSubmit() {
    console.log("onsubmit clicked");
    const newCalculation: Calculation = {
      id: 0,
      firstNumber: this.first,
      phase: this.phase,
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
    this.phase = '';
    this.name = '';
    this.fullname = '';
    this.description = '';
    this.ownerType = '';
    this.ticketType = '';
    this.result = 0;
  }

}
