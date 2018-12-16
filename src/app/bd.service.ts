import * as firebase from 'firebase'

import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Identidade } from './shared/identidade.model'
import { Sala } from './shared/sala.model';
@Injectable({
    providedIn: 'root'
})


export class Bd implements OnInit{
    

    idSala: string = localStorage.getItem('idSalaLocal')
    cats: any[] 
    administrador: string
    categorias: Observable<any>
    info: Observable<any>
    salas: Identidade[]
    constructor(private db: AngularFireDatabase){
        this.idSala = localStorage.getItem('idSalaLocal')
        this.categorias = this.getAll(localStorage.getItem('idSalaLocal'))
        this.cats = this.getCategorias() 
        this.info = this.getAllInfo()
        this.salas = this.getSalas()
    }

    ngOnInit() {
        
        //this.administrador = this.getAdmin()
    }
    //---------------------------------------------------------------
    public criar_sala(sala: any): void {
        this.adicionar_categoria({nome: 'Vamos começar', salaId: sala.id})
        firebase.database().ref(`salas/${sala.id}/info`)
            .push({ id: sala.id,
                tema: sala.tema,
                admin: sala.email
        })
        alert('Sala criada com sucesso - ID: ' + sala.id)
        this.getSalas()
    }

    public adicionar_ideia(ideia: any): void{
        firebase.database().ref().child(`salas/${this.idSala}/categorias/${ideia.categoria}`)
            .push({
               titulo: ideia.ideia
            })
    }

    public carregarSala(sala: string){
        localStorage.setItem('idSalaLocal', sala)
        this.idSala = localStorage.getItem('idSalaLocal')
        
    }

    public adicionar_categoria(categoria: any): void{
        
        let id: string
        if(categoria.salaId == undefined)
            id = this.idSala
        else
            id = categoria.salaId
        firebase.database().ref().child(`salas/${id}/categorias/${categoria.nome}`)
            .push({
                titulo: ''
            })
        this.cats = this.getCategorias()
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


    buscaCategoria(indice: number){
        let todas_categorias: any = this.getCategorias()
        console.log(todas_categorias[indice])
        return todas_categorias[indice]
    }

    getCategorias(): any{
        let cats: any[] = []
       
        firebase.database().ref(`salas/${this.idSala}/categorias`)
            .once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnapshot: any) => {
                    cats.push(childSnapshot.key)
                })
            })
        return cats
    }
    
    getAllIdeas(cat: string) { 
        return this.db.list(`salas/${this.idSala}/categorias/${cat}`)
          .snapshotChanges()
          .pipe(
            map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
    }

    getAll(cat: string) { 
        return this.db.list(`salas/${this.idSala}/categorias`)
          .snapshotChanges()
          .pipe(
            map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
    }

    getAllInfo() { 
        return this.db.list(`salas/${this.idSala}/info`)
          .snapshotChanges()
          .pipe(
            map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
          );
    }
/*
    getAdmin(): string{
        let admin
        this.info.forEach(nivel1 => {
            nivel1.forEach(nivel2 =>{
                admin = nivel2.admin
            })
        })
        console.log('nivel2: ', admin)
                
        return admin
    }*/

    verificaExistencia(idSala: string):boolean {
        let salas: Identidade[] = this.getSalas()
        for(let i = 0; i < salas.length; i++ )
            if(salas[i].id == idSala)
                return true
        return false
    }


    getSalas(): any { 
        let lista_salas: Identidade[] = []
        firebase.database().ref(`salas`)
        .once('value')
        .then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let key: string = childSnapshot.key
                this.getInfoRoom(key, lista_salas)
            })
        })
        return lista_salas
    }

    getInfoRoom(room: string, lista: Identidade[]) { 
        firebase.database().ref(`salas/${room}/info`)
            .once('value')
            .then((snapshot) => {
                snapshot.forEach((childSnaphot) => {
                    let id_sala = childSnaphot.val().id
                    let tema_sala = childSnaphot.val().tema
                    lista.push({id: id_sala, tema: tema_sala})
                })
            })
    }

    getQtdIdeias(room: string){
        var contador = 0
        firebase.database().ref(`salas/${room}/categorias`)
            .once('value')
            .then((snapshot) => {
                
                snapshot.forEach((childSnaphot) => {
                    const incrementa = () => {contador += childSnaphot.numChildren()}
                    incrementa()
                })
            })
        console.log(contador)
    }

}