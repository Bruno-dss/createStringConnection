let invoice = {
    name: "Bruno",
    age: 27,
    products: { 
        0:["Mouse 2xwm", 29.90],
        1:["Teclado mecânico", 129.90],
        2:["Monitor", 899.99],
        3:["Tv 100 polegadas", 1000.90]
    },
    taxes: "98.90"
}

generateInvoice(invoice)


function generateInvoice(invoiceProducts){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("---------------")
    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`${productName}: R$ ${productPrice}`)
        
    }
   
}