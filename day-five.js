let message = prompt(
  'Deseja adicionar algo a sua lista de compras? responda com sim ou nao'
)
let vegetais = []
let laticinios = []
let doces = []
let proteinas = []
let carboidratos = []

while (message.toLowerCase() !== 'sim' && message.toLowerCase() !== 'nao') {
  alert('Responda com sim ou nao')
  message = prompt('Deseja adicionar algo a sua lista de compras?')
}
if (message.toLowerCase() === 'sim') {
  while (message.toLowerCase() === 'sim') {
    let product = prompt('Qual o alimento?')
    while (product == '') {
      alert(`Insira um alimento`)
      product = prompt('Qual o alimento?')
    }
    let category = prompt(
      'A qual dessas categorias esse produto pertence? vegetais; laticinios, doces, proteinas, carboidratos'
    )
    while (
      category.toLowerCase() != 'vegetais' &&
      category.toLowerCase() != 'laticinios' &&
      category.toLowerCase() != 'doces' &&
      category.toLowerCase() != 'proteinas' &&
      category.toLowerCase() != 'carboidratos'
    ) {
      alert('Insira uma das categorias listadas')
      category = prompt(
        'A qual dessas categorias esse produto pertence? vegetais; laticinios, doces, proteinas, carboidratos'
      )
    }
    if (category.toLowerCase() == 'vegetais') {
      vegetais.push(product.toLowerCase())
    }
    if (category.toLowerCase() == 'laticinios') {
      laticinios.push(product.toLowerCase())
    }
    if (category.toLowerCase() == 'doces') {
      doces.push(product.toLowerCase())
    }
    if (category.toLowerCase() == 'proteinas') {
      proteinas.push(product.toLowerCase())
    }
    if (category.toLowerCase() == 'carboidratos') {
      carboidratos.push(product.toLowerCase())
    }

    message = prompt('Deseja adicionar algo mais? responda com sim ou nao')
    while (message.toLowerCase() != 'sim' && message.toLowerCase() != 'nao') {
      alert('Responda com sim ou nao')
      message = prompt('Deseja adicionar algo a sua lista de compras?')
    }
  }
}
if (message.toLowerCase() === 'nao') {
  console.log(
    `Lista: \n Vegetais: ${vegetais} \n Laticinios: ${laticinios} \n Doces: ${doces} \n Proteinas: ${proteinas} \n Carboidratos: ${carboidratos} \n`
  )
}
