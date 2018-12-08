import { Ideia } from './shared/ideia.model';
import * as firebase from 'firebase'

export class Bd{

    public salas: any

    public criar_sala(sala: any): void {
        firebase.database().ref(`salas/${sala.id}`)
            .push({ id: sala.id,
                    tema: sala.tema,
                    qtd_membros: sala.qtd_membros,
                    admin: sala.email
            })
        console.log(sala)
        console.log('Aqui, criamos a sala')
    }

    public adicionar_ideia(ideia: any): void{
        firebase.database().ref(`salas/${ideia.idSala}/${ideia.categoria}`)
            .push({
               titulo: ideia.ideia
            })
        console.log('Chegamos ate aqui')
        console.log(ideia)
    }

    public atualiza_dados(sala: string): any{
        firebase.database().ref(`salas/${sala}`)
            .once('value')
            .then((snapshot) => {
                this.salas = snapshot
            })
        
    }
}