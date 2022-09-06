let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
    firstname: string,
    lastname?: string
): {
    firstname: string;
    lastname?: string;
} {
    return { firstname, lastname };
}

// Devemos checar se for null ou number sempre que utilizar esse tipo de função
export function squareOf(x:any){
  if(typeof x === 'number') return x*x 
  return null
}
