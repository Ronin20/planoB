import { AutenticacaoGuard } from './autenticacao-guard.service';
import { ROUTES } from './app.routes';
import { Autenticacao } from './autenticacao.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './content/login/login.component';
import { CadastroComponent } from './content/cadastro/cadastro.component';
import { AreaTrabalhoComponent } from './content/area-trabalho/area-trabalho.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
    AreaTrabalhoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Autenticacao, AutenticacaoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
