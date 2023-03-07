import { Component,OnInit } from '@angular/core';

interface Tarjeta{
  titulo:String;
  subtitulo:string;
  nro?:number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Sistema Plan Estrategico Tecnologias de la Informacion';
  public ArregloTrajetas:Tarjeta[]=[];
  ngOnInit(): void {
    this.ArregloTrajetas=[
      {titulo:'video 1',subtitulo: 'Subtitulo video1'},
      {titulo:'video 2',subtitulo: 'Subtitulo video2'},
      {titulo:'video 3',subtitulo: 'Subtitulo video3'},

    ]
    
  }
}
