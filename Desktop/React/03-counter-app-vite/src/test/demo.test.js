
describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no deberia fallar', () => {
 
        // 1. inicializacion
    const message1 = 'Hola Mundo';
        //2. estimulo
  const message2 = message1.trim();
        //3. observar el comportamiento ... esperado 
      expect( message2 ).toBe( message2 );
    });
});

