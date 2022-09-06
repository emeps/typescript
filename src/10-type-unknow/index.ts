// Unknow é um any mais seguro pq precisa chegar o tipo antes de realizar a operação

let x: unknown;
x = 100;
x = 'emeps';
x = true;
const y = 800;
if (typeof x === 'number') console.log(x + y);
