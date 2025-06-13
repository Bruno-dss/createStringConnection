let userName = getFirstName("Bruno-de-Souza-Santos","-")

console.log(`Seja bem vindo ${userName}`)


function getFirstName(name, splitChar){
    let firtsName = name.split(splitChar)[0]
    return firtsName
}