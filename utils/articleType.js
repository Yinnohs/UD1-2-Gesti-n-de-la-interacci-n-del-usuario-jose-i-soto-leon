
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