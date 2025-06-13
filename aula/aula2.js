function checkPassword(password = "***",inputPassword ="***"){
    
    if (inputPassword === password){
        console.log("Conectado")
    }else{
        console.log("Não foi possivel conectar ao servidor.")
    }


}

checkPassword(123,123)
