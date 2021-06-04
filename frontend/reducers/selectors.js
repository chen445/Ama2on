export const selectProducts=(state)=>{
    const products = Object.values(state.entities.products);
    let result=[]
    products.forEach(element => {
        if (result.length < 15){
                result.push(element)
        }
     })
    return result;
}