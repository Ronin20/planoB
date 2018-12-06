import * as firebase from 'firebase'

export class Bd{
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
}