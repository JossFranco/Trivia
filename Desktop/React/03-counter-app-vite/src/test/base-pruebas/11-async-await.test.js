import { getImagen } from '../base-pruebas/11-async-await.test'

describe('Pruebas en 11-asyc-await.js', () =>{

    test('getImage debe de retornar un URL de la imagen', async () =>{
const url = await getImagen();
console.log(url);
expect (typeof url).toBe('string');
    });
});