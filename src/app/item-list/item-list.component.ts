import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  //Objeto que contiene la lista de items
  //Debe comunicarse con un servicio para que le devuelva una lista de strings que contengan las tareas actuales
  constructor() { }

  ngOnInit(): void {
  }

  items:string[] = ["Limpiar la casa", "ASDASDASDASDASDASDASDDDDDDAS"]; 
  


}
