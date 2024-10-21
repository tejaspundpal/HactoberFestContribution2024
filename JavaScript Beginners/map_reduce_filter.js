//map in JS
let arr = [12,24,36]
let a = arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index
})
console.log(a)

//filter in JS
let arr2 = [12,24,36,5,15,29]
let a2 = arr2.filter((a)=>{
    return a<20
})
console.log(a2)

//reduce in JS
let arr3 = [1,2,4,5,2,1]
let a3 = arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(a3)
