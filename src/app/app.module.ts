import { Bd } from './bd.service';
import { EntrarSalaComponent } from './content/area-trabalho/entrar-sala/entrar-sala.component';
import { CriarSalaComponent } from './content/area-trabalho/criar-sala/criar-sala.component';
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
import { EntrarRoomComponent } from './content/area-trabalho/entrar-room/entrar-room.component';
import { SalaComponent } from './sala/sala.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
    AreaTrabalhoComponent,
    CriarSalaComponent, 
    EntrarSalaComponent, 
    EntrarRoomComponent, 
    SalaComponent
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Autenticacao, AutenticacaoGuard, Bd],
  bootstrap: [AppComponent]
})
export class AppModule { }
