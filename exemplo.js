// comandos com entrada de dados
//importação da biblioteca prompt-sync
var input = require('prompt-sync')();

var n1 = input('Digite um número' )
var n2 = input('Digite um número' )
var soma = parseFloat(n1) + parseFloat (n2)
var media = soma/2
console.log ('A media',media)
// condicional com javscript
//se => if
//senao => else
if(media >= 7){
console.log ('aluno aprovado')
}
else{
console.log('aluno reprovado')
}


/* var n1 = input ('Digite um número; ')
var n2 = input ('Digite outro número; ')
var soma = parseInt (n1) + parseInt (n2)
console.log('A soma é ',soma)
 */






/* var nome = input('qual o seu nome ')
var idade = input('qual a sua idade ')
var local = input('onde você trabalha ')


//comando de saída de dados em javascript
console.log("Meu nome é ",nome,"tenho",idade,"anos e trabalho no",local)
// comando para executar o arquivo
// é necessário abrir o terminal
// comando: node(nome do arquivo com a extensão) */