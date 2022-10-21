
export const checkArticleType = (type)=>{
    const articleTypes = {
        fruit:"fruit",
        vegetable:"vegetable",
        bakery:"bakery",
        fish:"fish",
        meat:"meat"
    }

    return articleTypes[type] ?? "null"
}

export const articleTypeSpanish = (type)=>{
    const articleTypes = {
        fruit:"Fruta",
        vegetable:"Vegetal",
        bakery:"Pastelería",
        fish:"Pescado",
        meat:"Carne"
    }

    return articleTypes[type] ?? "null"
}