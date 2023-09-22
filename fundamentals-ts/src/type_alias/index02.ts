type INFO = {
  id: number,
  name: string,
  description?: string
}

let productInfo: INFO = {
  id: 123,
  name: 'PLACA RTX',
  description: 'PLACA DE VIDEO'
}

type CATEGORY = {
  slug: string,
  quantity: number
}

const category: CATEGORY = {
  slug: 'hardware',
  quantity: 40,
}

// CRIANDO INTERCESSÃO COM TYPE ( UNINDO 2 TIPAGENS )

type LOTE = INFO & CATEGORY

const lote: LOTE = {
 id: 3,
 name: 'Placa GTX',
quantity: 20,
slug: 'hardware',
description: 'placa de video boa' 
}