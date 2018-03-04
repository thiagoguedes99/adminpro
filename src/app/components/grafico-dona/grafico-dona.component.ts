import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // Doughnut
  @Input('Labels') Labels: string[] = [];
  @Input('Data') Data: number[] = [];
  @Input('Type') Type: string = '';
  @Input() legenda: string = '';

  constructor() { }

  ngOnInit() {
  }

}
