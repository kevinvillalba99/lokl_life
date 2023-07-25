import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() data = {
    dues: 3,
    pay: 11400500,
    units: 100,
    value: 112000,
    annualReturn: 15
  }

  duesMap = {
    '=1': 'Un pago de:',
    'other': 'Cuotas mensuales de:'
  }

  monthsMap = {
    '=1': '1 mes',
    'other': '# meses'
  }


}
