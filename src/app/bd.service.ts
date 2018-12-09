import { Sala } from './shared/sala.model';
import { Categoria } from './shared/categoria.model';
import { Ideia } from './shared/ideia.model';
import * as firebase from 'firebase'

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export class Bd{

    constructor(){

    }

    public salas: any;
    public salas_compartilhadas: Sala[]
    public cat: Categoria[]
    public idea: Ideia[]
    
    

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
        firebase.database().ref().child(`salas/${ideia.idSala}/${ideia.categoria}`)
            .push({
               titulo: ideia.ideia
            })
        console.log('Chegamos ate aqui')
        console.log(ideia)
    }

    public adicionar_categoria(categoria: any): void{
        firebase.database().ref().child(`salas/${categoria.sala}/${categoria.nome}`)
            .push()
        console.log('Categoria adicionada')
        
    }

    


    public atualiza_dados(sala: string): any{
        console.log('Entramos aqui mlk')
        firebase.database().ref(`salas/${sala}`)
            .once('value')
            .then((snapshot) => {
                console.log(snapshot.val())
                snapshot.forEach((childSnapshot: any) => {
                    console.log(childSnapshot.val())
                    
                })
                
            })
    }

    public teste(): void {
        console.log('FUNÇÃO TESTE')
        var salas = firebase.database().ref('salas/' + '944');
        salas.on('value', function(snapshot) {
            console.log(snapshot.val())
            //updateStarCount(postElement, snapshot.val());
        });
    }
/*
    public atualiza(sala:string): any{
        return firebase.database().ref(``).once('value').then(function(snapshot) {
        var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    }*/
}