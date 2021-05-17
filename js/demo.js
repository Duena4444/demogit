let num_arr=[10,12,33,35,27,28,32]
let new_arr=num_arr.map((elements)=>{
    return elements+2
})

console.log(new_arr)
let new_arri=num_arr.filter((d)=>{
    if(d%2!=0){//odd num
        return d
    }
})