
const seleciona = document.getElementById('cards')
const selqtd = document.getElementById('qtd')


const selecionar = () => {
    const valor = seleciona.value
    const valor2 = selqtd.value
    console.log(valor2)
    console.log(valor)
    
   if (valor == 'faction') {
       console.log
       console.log('ola')
        if(valor2 == "0"){
            resultado('factions','horde', 0)
        }
        else if(valor2 == '30'){
            resultado('factions','horde', 30)
        }else if(valor2 == "60"){
            resultado('factions','horde', 60)            
        }else if(valor2 == "90"){
            resultado('factions','horde', 90)
        }
    } else if (valor == 'type') {
        if(valor2 == "0"){
            resultado('factions','horde', 0)
        }
        else if(valor2 == '30'){
            resultado('types', 'hero', 30)
        }else if(valor2 == "60"){
            resultado('types', 'hero', 60)            
        }else if(valor2 == "90"){
            resultado('types', 'hero', 90)
        }
    } else if (valor == 'qualities') {
        if(valor2 == "0"){
            resultado('types', 'hero', 0)
        }
        else if(valor2 == '30'){
            resultado('types', 'hero', 30)
        }else if(valor2 == "60"){
            resultado('types', 'hero', 60)            
        }else if(valor2 == "90"){
            resultado('types', 'hero', 90)
        }
    } else if (valor == 'raca') {
        if(valor2 == "0"){
            resultado('types', 'hero', 0)
        }
        else if(valor2 == '30'){
            resultado('races', 'dragon', 30)
        }else if(valor2 == "60"){
            resultado('races', 'dragon', 60)            
        }else if(valor2 == "90"){
            resultado('races', 'dragon', 90)
        }
    }
}



const resultado = async (opt, opt2, pageSize) => {
    document.getElementById("selecionados").innerHTML = ''
    const lista = await fetch(`http://localhost:3000/${opt}/${opt2}?pageSize=${pageSize}`)
    const resposta = await lista.json()
    resposta.map((item) => {
        
        if (item.img) {            
            const conteudo = `
                        <div class="card">
                            <img class="card-img" src='${item.img}'>
                        </div>
                    `
            document.getElementById("selecionados").innerHTML += conteudo
        }else{
            const conteudo = `
                        <div class="card">
                            <div class="card-img card-generico">
                                <span class="name">${item.name}</span>
                            </div>
                        </div>
                    `
            document.getElementById("selecionados").innerHTML += conteudo
        }
    })
}

selecionar()
