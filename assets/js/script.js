let valor_produto = document.querySelector('#valor_produto')
let valor_entrada = document.querySelector('#valor_entrada')
let parcelas = document.querySelector('select')

let resultado = document.querySelector('#resultado')

let limpar_campo = document.querySelector('.botao_limpar_campo')
let calcular = document.querySelector('#calcular')


calcular.addEventListener('click', (e)=>{
    e.preventDefault()

    const valorSelecionado = parcelas.value;

    let valor_juros;
    let valor_liquido = valor_produto.value - valor_entrada.value;

    if(valor_produto.value <= valor_entrada.value){
        alert('O valor de entrada não pode ser maior ou igual ao valor do produto!')
    }

    else{
        if(valorSelecionado == 1){
            valor_juros = (valor_liquido * 0.05);
        }
        else if(valorSelecionado == 2 || valorSelecionado == 3){
            valor_juros = (valor_liquido * 0.06);
        }
        else if(valorSelecionado == 4){
            valor_juros = (valor_liquido * 0.07);
        }
        else if(valorSelecionado == 5){
            valor_juros = (valor_liquido * 0.08);
        }
        else if(valorSelecionado == 6){
            valor_juros = (valor_liquido * 0.09);
        }
        else if(valorSelecionado == 7){
            valor_juros = (valor_liquido * 0.095);
        }
        else if(valorSelecionado == 8){
            valor_juros = (valor_liquido * 0.105);
        }
        else if(valorSelecionado == 9){
            valor_juros = (valor_liquido * 0.11);
        }
        else if(valorSelecionado == 10){
            valor_juros = (valor_liquido * 0.125);
        }
        else if(valorSelecionado == 11){
            valor_juros = (valor_liquido * 0.13);
        }
        else if(valorSelecionado == 12){
            valor_juros = (valor_liquido * 0.133);
        }
        else if(valorSelecionado == 13){
            valor_juros = (valor_liquido * 0.15);
        }
        else if(valorSelecionado == 14){
            valor_juros = (valor_liquido * 0.16);
        }
        else if(valorSelecionado == 15){
            valor_juros = (valor_liquido * 0.17);
        }
        else if(valorSelecionado == 16){
            valor_juros = (valor_liquido * 0.18);
        }
        else if(valorSelecionado == 17){
            valor_juros = (valor_liquido * 0.19);
        }
        else if(valorSelecionado == 18){
            valor_juros = (valor_liquido * 0.20);
        }
        
        let valor_total = (valor_liquido + valor_juros).toFixed(2);
        let valor_da_parcela = (valor_total / valorSelecionado).toFixed(2);
    
        resultado.innerHTML = `
            <p>O valor do seu produto no cartão de crédito, é de R$${valor_total} reais.
            Este valor será dividido em ${valorSelecionado} parcela(s) de R$${valor_da_parcela} reais</p>
        `
    }
})

limpar_campo.addEventListener('click', (e)=>{
    e.preventDefault()

    valor_produto.value = ''
    valor_entrada.value = ''
    resultado.innerHTML = ''
})
  