import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  caixinhaFoto = [
    {nome:'Paisagem', autor:'Juliano Souza', descricao:'Essa imagem foi dedicada a alguem'},
    {nome:'Cassino', autor:'Gabigol', descricao:'Essa imagem foi dedicada a alguem'},
    {nome:'Estrada', autor:'Desconhecido', descricao:'Essa imagem foi dedicada a alguem'},
    {nome:'Playground', autor:'Geovan', descricao:'Essa imagem foi dedicada a alguem'},
    {nome:'Arte nacional', autor:'Dagoberto', descricao:'Essa imagem foi dedicada a alguem'},
    {nome:'Piramides', autor:'Desconhecido', descricao:'Essa imagem foi dedicada a alguem'}

  ]
  constructor() { }
  
  ngOnInit(): void {
  }

  identify(index, item){
    console.log("entrou");
    return item.name;
  }

  listUpdate(){
    this.caixinhaFoto = [
      {nome:'Paisagem', autor:'Juliano Souza', descricao:'Essa imagem foi dedicada a alguem'},
      {nome:'Cassino', autor:'Gabigol', descricao:'Essa imagem foi dedicada a alguem'},
      {nome:'Estrada', autor:'Desconhecido', descricao:'Essa imagem foi dedicada a alguem'},
      {nome:'Playground', autor:'Geovan', descricao:'Essa imagem foi dedicada a alguem'},
      {nome:'Arte nacional', autor:'Dagoberto', descricao:'Essa imagem foi dedicada a alguem'},
      {nome:'Piramides', autor:'Desconhecido', descricao:'Essa imagem foi dedicada a alguem'},
      {nome:'Carro', autor:'Desconhecido', descricao:'Essa imagem foi dedicada a alguem'},
      {nome:'Pinturas', autor:'Pitagoras', descricao:'Essa imagem foi dedicada a alguem'}
  
    ]
    
  }
}
