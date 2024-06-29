/*let meuNome = 'Guilherme Silva'
console.log(meuNome)
meuNome = 'Guilherme Henrique'
console.log (meuNome)

console.log ('CONSTANTE')

const a = 'Guilherme Silva'
console.log(a)
a = 'Guilherme Henrique'
console.log (a)

console.log ('Operação Aritimética')

let numUm = 1;
let numDois = 2;

console.log (numUm + numDois)


numDois =5;
let numtreis = 3;

console.log (numDois - numtreis)



let entradaDoUsuario = Number (prompt());

let entradaDoUsuarioEmInt = Number(entradaDoUsuario)

console.log(2024 - entradaDoUsuario)*/

//Declarando as variaveis

let nome = ""
let idade = 0
let altura = 0
let peso = 0


//Solicitando os valores ao usuario

nome = prompt   ("Insira seu nome")
idade = prompt  ("Insira sua idade")
altura = prompt ("Insira sua altura")
peso = prompt   ("Insira seu peso")




//Calcular ano de nascimento + IMC
let anoNascimento = 0 
anoNascimento = 2024 - idade

let imc = 0 
imc = peso / (altura * altura )
console.log ("Olá " + nome + ", Você tem " + idade + " anos, nasceu em " + anoNascimento + ", tem " + altura + ",de altura, pesa " + peso + "KG e seu IMC é " + imc + "kg/m²" )