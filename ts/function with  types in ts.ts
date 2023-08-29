// function add (a:number,b:number):string{
//     const rese = a+b;
// //    return rese.toString()
// }
// const rese = add(3,6);
// console.log(rese);


function checknumber(a:any):object{
    if(typeof a === "number"){
        return {
            name: "ankit",
            msg: `${a} is a number`
        }
    }else{
        return{name: "ankit",
        msg: `${a} is not a number`}
    };;
}
const rese = checknumber(4);
console.log(rese);