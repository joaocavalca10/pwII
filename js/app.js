let btn = document.getElementById('btn')

let div = document.getElementById('resultado')

let arrpessoas = []

function cadastrar() {

    let pessoa = {
        nome:document.getElementById('nome').value,
        sobrenome:document.getElementById('sobrenome').value,
        idade:document.getElementById('idade').value,
        dtnasc:document.getElementById('dtnasc').value,
        peso:document.getElementById('peso').value,
        altura:document.getElementById('altura').value,

    }
arrpessoas.push(pessoa)
console.log(arrpessoas)

imprimirDados()

    let situacao = ''

    console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade, pessoa.dtnasc, pessoa.peso, pessoa.altura);

    


}




function calculaIMC(peso, altura){
    return peso / Math.pow(altura, 2)
}

function Classificacao(imc){

    if(imc <= 18.5){
        return "Abaixo do normal"
    }else if( imc <= 24.9){
        return " Normal"
    }else if (imc <= 29.9){
        return "Sobre peso"
    }else if (imc <= 34.9){
        return "obesidade grau I"
    }else if (omc <= 39.9){
        return "obesidade grau II"
    }else{
        return "obese=idade grau III"
    }

}

function imprimirDados(){

    div.innerHTML =''


    
    for(let i = 0; i < arrpessoas.length; i++){


        div.innerHTML +=`
        <tr>
            <td>${arrpessoas[i].nome} ${arrpessoas[i].sobrenome}</td>
            <td>${arrpessoas[i].dtnasc}</td>
            <td>${arrpessoas[i].idade}</td>
            <td>${calculaIMC(arrpessoas[i].peso, arrpessoas[i].altura) .toFixed(2)} - ${Classificacao(calculaIMC(arrpessoas[i].peso, arrpessoas[i].altura))}</td>
        </tr>
        `
    }

}

btn.addEventListener('click', cadastrar)