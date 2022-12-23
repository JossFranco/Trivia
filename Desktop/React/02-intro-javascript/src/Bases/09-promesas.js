import { getHeroesById, getHeroesByOwner } from './Bases/08-imp-exp'

/* const promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       const heroe = getHeroesById(2)
       console.log(heroe)
//resolve();

    },2000)
});
 promesa.then(()=>{
    console.log('Then de la promesa')
 }) */

 const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           const heroe = getHeroesById(id)
           if (heroe){
            resolve(heroe);
           } else{
            reject('No se pudo encontrar el heroe ');
           }
           //console.log(heroe)
    //resolve();
    
        },2000)
    });
 }
 getHeroeByIdAsync(2)
 .then(console.log)
 .catch(console.warn)