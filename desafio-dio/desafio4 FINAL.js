// class ~ objeto LOL ASHE
class Heroi{
    constructor(name, age, type,typeAtack){
        this.name = name
        this.age = age
        this.type = type
        this.typeAtack = typeAtack
    }

    showPerso(){
        console.log(`HEROI: ${this.name}, Idade: ${this.age}, Tipo: ${this.type}, Arma: ${this.typeAtack}`)
    }

    attack(){
        console.log(`O ${this.type} atacou, usou ${this.typeAtack}`)

    }
}

let mago = new Heroi("Lumor",77,"Mago","Magia")
let guerreiro = new Heroi("Slavir",27,"Guerreiro","Espada")
let monge = new Heroi("Kevin",37,"Monge","Artes Marciais")
let ninja = new Heroi("Jhin",22,"Ninja","Shuriken")

let listHero = [mago,guerreiro,monge,ninja]

for (let hero of listHero) {
    hero.showPerso()
}

for (let hero of listHero) {
    hero.attack()
}