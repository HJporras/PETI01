import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image:string="https://www.esan.edu.pe/images/blog/2017/09/20/1500x844-rentas.jpg";
  public Titulo:string="ejemplo";
  constructor() {}
  ngOnInit():void{}

}
