/* POO - JavaScritp */

/* Criando a classe*/

/*
1)Digita-se a palavra reservada class;

2) Dá-se o nome à classe. Geralmente o nome começa com a primeira letra maisculula;

3) Os atributos e metodos são abreviados entre chaves 

4) È criado o método construtor usando a palavra constructor, onde são criados os atributos
e 'transformados em vari-áveis'

5) Os métodos são funções como outra qualquer, porém é feita a refência ou não aos atributos criados.
Quando for usados os atributos, é necessário usar a palavra reservada 'This'

6) Para criar o novo objeto , é necessário dar uma variável (var ou let), dar nome à variável e 
igualar à palavra 'new' mais a classe criada. Os valores dos atributos devem ser informados dentro dos parênteses.


*/

class Carro{
    constructor(marca,categoria,modelo,cor){
        this.marca = marca
        this.categoria = categoria
        this.modelo = modelo
        this.cor = cor
    }
    acelerar(){
        return this.modelo," acelera de 0 a 100 em 10 segundos"
    }
    carregar(){
        return "Gol carrega até 200kg"
    }




    /*marca
    categoria
    modelo
    motor
    cor
    numero de portas*/
}
let carro1 = new Carro("Ford","Hatch","Ford Ka","Vermelho")
console.log(carro1)
let c1 = carro1.acelerar()
console.log(c1)