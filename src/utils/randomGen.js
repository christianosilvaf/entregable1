//esta funcion genera un elemento aleatorio de un arreglo 
//debe ir export 
export const randomGen= (array)=> {
    const randomNum= Math.floor(Math.random()*array.length);
    return array[randomNum];
}