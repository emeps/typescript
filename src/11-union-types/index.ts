// Union types é quando um variavel ou parametro pode ter mais de um tipo
function addOrConcat(
    a: number | string,
    b: number | string
): number | string | undefined {
    if (typeof a === 'number' && typeof b == 'number') return a + b;
    if (typeof a === 'string' && typeof b == 'string') return a + b;
}

addOrConcat(10, 20);
addOrConcat('110', '20');
