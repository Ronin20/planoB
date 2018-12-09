import { Categoria } from './shared/categoria.model';
import { Sala } from './shared/sala.model';

export const SALAS_E: Sala[]  = [
    {
        //id: '123',
        categorias:  [{
            titulo: 'Categoria 1',
            ideias: [{
                titulo: 'ideia 1'
            }]
        }]
    },

    {
        //id: '124',
        categorias:  [{
            titulo: 'Categoria 2',
            ideias: [{
                titulo: 'ideia 2'
            }]
        }]
    },

    {
        //id: '125',
        categorias:  [{
            titulo: 'Categoria 4',
            ideias: [{
                titulo: 'ideia 3'
            }]
            
        },
        
        {
            titulo: 'Categoria 5',
            ideias: [{
                titulo: 'ideia 3'
            },
            
            {
                titulo: 'ideia 4'
            }]
        },
        {
            titulo: 'Categoria 6',
            ideias: [{
                titulo: 'ideia 7'
            },
            
            {
                titulo: 'ideia 8'
            },
            
            {
                titulo: 'ideia 9'
            },
            
            {
                titulo: 'ideia 10'
            }]
        },
        {
            titulo: 'Categoria 8',
            ideias: [{
                titulo: 'ideia 11'
            },
            
            {
                titulo: 'ideia 12'
            },
            
            {
                titulo: 'ideia 13'
            },
            
            {
                titulo: 'ideia 14'
            }]
        }]
    }

]