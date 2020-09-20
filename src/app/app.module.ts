import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouteConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutoService } from './produtos-service/produtos.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { registerLocaleData } from '@angular/common';
// import localePt  from '@angular/common/locales/pt';
// registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouteConfig, { useHash: false })]
  ],
  providers: [
    ProdutoService,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    { provide: APP_BASE_HREF, useValue: '/angular' } //prefixo de rota
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
