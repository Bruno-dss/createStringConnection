// class ~ objeto LOL ASHE
class personagem{
    constructor(name, strong, type, health,){
        this.name = name
        this.strong = strong
        this.type = type
        this.health = health
    }

    showPerso(){
        console.log(`O seu campeão favorito: ${this.name}, Força: ${this.strong}, Tipo: ${this.type}, PONTOS DE VIDA: ${this.health}`)
    }
}

let firstPerso = new personagem("Ashe",175,"ADCarry",890)

firstPerso.showPerso()