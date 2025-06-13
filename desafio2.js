
let resultBalance = balanceVictory(50,20)


for (let i = 0; i <= resultBalance; i++) {
    if (i === resultBalance) {
        if (i <= 10) {
            console.log(`O Herói tem de saldo ${resultBalance} está no nível de FERRO`)
        } else if (i <= 20) {
            console.log(`O Herói tem de saldo ${resultBalance} está no nível de BRONZE`)
        } else if (i <= 50) {
            console.log(`O Herói tem de saldo ${resultBalance} está no nível de OURO`)
        } else if (i <= 80) {
            console.log(`O Herói tem de saldo ${resultBalance} está no nível de DIAMANTE`)
        }else if (i <= 90) {
            console.log(`O Herói tem de saldo ${resultBalance} está no nível de LENDARIO`)
        }else if (i <= 100) {
            console.log(`O Herói tem de saldo ${resultBalance} está no nível de IMORTAL`)
        } else {
            console.log("Acima dos ranques definidos");
        }
        break;
    }
}


function balanceVictory(victory,defeat){
    let balance = victory - defeat

    return balance
}