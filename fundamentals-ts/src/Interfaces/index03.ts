

interface ProductProps {
  readonly id: string;
  name: string;
  description: string;
}

let product: ProductProps = { 
  name: 'tenis Nike',
  description: 'Tenis bom',
  id: '1'
  
}

 // product.id = '1231231' // -> Apenas leitura

console.log(product)