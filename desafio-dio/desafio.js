//DESAFIO DE NÍVEL DE HERÓI
let heroi = "Homem de Ferro"
let heroiExp = 7500

if (heroiExp <= 1000){
    console.log("O Herói de nome " + heroi + " está no nível de FERRO")
}else if(heroiExp <= 2000){
    console.log("O Herói de nome " + heroi + " está no nível de BRONZE")
}else if(heroiExp <= 5000){
    console.log("O Herói de nome " + heroi + " está no nível de PRATA")
}else if(heroiExp <= 7000){
    console.log("O Herói de nome " + heroi + " está no nível de OURO")
}else if(heroiExp <= 8000){
    console.log("O Herói de nome " + heroi + " está no nível de PLATINA")
}else if(heroiExp <= 9000){
    console.log("O Herói de nome " + heroi + " está no nível de ASCENDENTE")
}else if(heroiExp < 10000){
    console.log("O Herói de nome " + heroi + " está no nível de IMORTAL")
}else if(heroiExp >= 10000){
    console.log("O Herói de nome " + heroi + " está no nível de RADIANTE")
}else{
    console.log("ERROR")
}