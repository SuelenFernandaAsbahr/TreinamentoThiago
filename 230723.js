var peso1 = 40
var altura1 = 1.52
var resul = peso1 / (altura1 * altura1)

if (resul >= 17 && resul <= 18.4) {
    console.log("seu imc é " + resul + "você está abaixo do peso")

} else if (resul >= 18.5 && resul <= 24.9) {
    console.log("seu imc é " + resul + "você está no peso normal")

}else if (resul >= 25 && resul <= 29.9) {
    console.log("seu imc é " + resul + "você está acima do peso")

}else if (resul >= 30 && resul <= 34.9) {
    console.log("seu imc é " + resul + "obesidadeI")
}


// Entre 17 e 18,49	Abaixo do peso
// Entre 18,5 e 24,99	Peso normal
// Entre 25 e 29,99	Acima do peso
// Entre 30 e 34,99	Obesidade I
// Entre 35 e 39,99	Obesidade II (severa)
// Acima de 40	Obesidade III (mórbida)


//git status = vai verificar se possui alguma alteração no projeto(fica na cor vermelha)
//git add . = significa que tudo que foi feito no projeto será salvo 
//git commit -m 'jucdjncekjnewj' significa que vamos comitar o projeto ou seja mandar o mesmo para o git (programa)
//git push significa recarregar a pagina com o projeto salvo