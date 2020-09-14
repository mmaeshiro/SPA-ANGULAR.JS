import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html', 
  styles: []
})
export class DataBindingComponent  {

  constructor() { }

  public contadorClique: number = 0;
  public urlImagem: string = "https://homepages.cae.wisc.edu/~ece533/images/watch.png";
  public nome: string = "";

  adicionarClique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  // KeyUp(event: any){
  //   this.nome = event.target.value;
  // }

}
