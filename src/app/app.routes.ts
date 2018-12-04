import { AutenticacaoGuard } from './autenticacao-guard.service';
import { LoginComponent } from './content/login/login.component';
import { CadastroComponent } from './content/cadastro/cadastro.component';
import { AreaTrabalhoComponent } from './content/area-trabalho/area-trabalho.component';
import { ContentComponent } from './content/content.component';
import { Routes } from '@angular/router'

export const ROUTES: Routes = [
    { path: '', component: ContentComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'area-trabalho', component: AreaTrabalhoComponent , canActivate: [ AutenticacaoGuard ]}
]