//Declarando as variaveis
let nome = "";
let idade = 0;
let altura = 0;
let peso = 0;

//Solicitando ao usuario as informações das variaveis
nome = prompt ("Digite seu Nome: ");
idade = prompt ("Digite sua idade: ");
altura = prompt("Digite sua Altura: ");
peso = prompt("Digite seu Peso: ");

//Calculo do ano de nascimento do usuario
let anoNasc = 0
anoNasc = 2024 - idade

let imc = 0
imc = peso / (altura * altura)

//Exibindo as informações após a execução
console.log ("Olá " + nome + " você tem " + idade + " anos, " + "nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "kg seu IMC é " + imc + "kg/m2");