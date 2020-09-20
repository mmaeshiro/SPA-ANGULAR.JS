import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/entidades/produto';
import { ProdutoService } from 'src/app/produtos-service/produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  public produtos : Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.obterProdutos()
    .subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)          
    );
  }

}
