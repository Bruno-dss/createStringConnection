class formaDeBolo {
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
         
    }

    toString(){
        console.log(`Um delicioso bolo de : ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    assar(){
        console.log(`Bolo assando de ${this.saborDaMassa}`)
    }

}

let boloFesta = new formaDeBolo("Massa de Chocolate", "Nutella")
let boloPremium = new formaDeBolo("Massa branca", "ninho com morango")

boloFesta.toString()
boloPremium.toString()
boloPremium.assar()