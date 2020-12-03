const addOne = (x) => {
    x.push("o");
}

const a = [];

function addOneThunk (x){
    const thunk = () => addOne(x);
    return thunk;
}

const fn = addOneThunk(a);

console.log(a);
fn();
console.log(a);
fn()
console.log(a);