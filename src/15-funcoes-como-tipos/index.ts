type MapStrinCallback = (item:string) => string;

function mapsString(array: string[], callback: MapStrinCallback): string[] {
    const newArray: string[] = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

const abc = ['a', 'b', 'c'];
const absMap = mapsString(abc, item => item.toUpperCase());
