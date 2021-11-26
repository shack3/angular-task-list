import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.css']
})
export class AddItemModalComponent implements OnInit {

  public mostrar: boolean = false;
  private nTarea: string="";
  constructor() { }

  ngOnInit(): void {
    
  }

  click(): void{
    this.mostrar = !this.mostrar;
  }

  nuevaTarea(tarea:string): void {
    if(this.nTarea!=""){
      tarea = this.nTarea;
      console.log(this.nTarea)
    }
    else
    console.log("Tarea nula")

    this.click()
  }

}
