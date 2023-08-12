const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('productDetails', () => {
  test('should return correct product details array', () => {
    const result = productDetails('Alcool gel', 'Máscara');
    expect(result).toEqual([
      {
        name: 'Alcool gel',
        details: {
          productId: 'Alcool gel123'
        }
      },
      {
        name: 'Máscara',
        details: {
          productId: 'Máscara123'
        }
      }
    ]);
  });

  test('should return correct product details array for different products', () => {
    const result = productDetails('Shampoo', 'Condicionador');
    expect(result).toEqual([
      {
        name: 'Shampoo',
        details: {
          productId: 'Shampoo123'
        }
      },
      {
        name: 'Condicionador',
        details: {
          productId: 'Condicionador123'
        }
      }
    ]);
  });
});
