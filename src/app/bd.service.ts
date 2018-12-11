import * as firebase from 'firebase'

import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class Bd{

    idSala: string = localStorage.getItem('idSalaLocal')
    cats: any[] = this.getCategorias()
    ideias: any[]
    categorias: Observable<any>
    ideias2: Observable<any>

    ideias3: any[]

    constructor(private db: AngularFireDatabase){
        this.idSala = localStorage.getItem('idSalaLocal')
        this.categorias = this.getAll(localStorage.getItem('idSalaLocal'))
        this.ideias2 = this.getAllIdeas('Categoria 1')
    }
    //---------------------------------------------------------------
    public criar_sala(sala: any): void {
        firebase.database().ref(`salas/${sala.id}`)
            .push({ id: sala.id,
                    tema: sala.tema,
                    qtd_membros: sala.qtd_membros,
                    admin: sala.email
            })
        console.log(sala)
    }

    public adicionar_ideia(ideia: any): void{
        firebase.database().ref().child(`salas/${this.idSala}/${ideia.categoria}`)
            .push({
               titulo: ideia.ideia
            })
    }

    public carregarSala(sala: string){
        localStorage.setItem('idSalaLocal', sala)
        this.idSala = localStorage.getItem('idSalaLocal')
    }

    public adicionar_categoria(categoria: any): void{
        firebase.database().ref().child(`salas/${this.idSala}/${categoria.nome}`)
            .push({
                titulo: ''
            })
    }

    getIdeas(cat: string): any {
        let ideas: any[] = []
        firebase.database().ref(`salas/${this.idSala}/${cat}`)
            .once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnapshot: any) => {
                    ideas.push(childSnapshot.val())
                })
            })
        return ideas
    }

    getCategorias(): any{
        let cats: any[] = []
       
        firebase.database().ref(`salas/${this.idSala}`)
            .once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnapshot: any) => {
                    cats.push(childSnapshot.key)
                })
            })
        return cats
    }
    
    getAllIdeas3() { 
        console.log('oi')
        this.ideias2 = this.getAllIdeas(this.cats[0])
        console.log(this.ideias2)
       
    }
    getAllIdeas(cat: string) { 
        return this.db.list(`salas/${this.idSala}/${cat}`)
          .snapshotChanges()
          .pipe(
            map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
    }

    getAll(cat: string) { 
        console.log('to pegando as categorias da sala: ',this.idSala)
        return this.db.list(`salas/${this.idSala}`)
          .snapshotChanges()
          .pipe(
            map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
    }

}