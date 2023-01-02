export function fetchCount2(amount = 1){
    return new Promise((resolve)=> setTimeout(()=> resolve({data: amount}),1000));
}