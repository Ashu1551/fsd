// let obj={|
// name: 'hello'
// lastname: 'hi'
// fullName:function(){
//     console.log(this,'this')

// }
// }

// let arr=[1,2,3,4,5,'ashu',true]

// let newB= arr.map((ele,id,arr)=>{
//     return ele
// })
// console.log(newB)
 
// for(let i in arr){
//     console.log(i)
//  }

// for(let i of arr)
// {
//     console.log(i)
// }
 
// kabhi kabhi undefined array deta h
// arr.forEach((ele,index,a)=>{
//     console.log(ele,index,a)
// })



// let newA= arr.forEach((ele,index,a)=>{
//     //     console.log(ele,index,a)
//     return ele
//      })
//      console.log(newA)


// map vs reduse vs filter

// let arr=[1,2,3,4,5]
// let sum=0
// for(let i of arr)
// {
//     sum=sum+i
    
// }
// console.log(sum)


//  reduce function
// let arr=[1,2,3,4,5] 
// let n=arr.reduce((a,b,index,arr)=>{
//     return a+b
// })
// console.log(n)

// filter function
// let arr=[1,2,3,4,5,6,7,8,9] 
// let filter=arr.filter((ele)=>{
//     return ele>5
// })
// console.log(filter)


// incomplete program
// let arr=[1,2,3,4,5,6,7,8,9] 
// let filter=arr.filter((ele)=>{
//     return ele>3
//     let n=filter.reduce((a,b,index,arr)=>{
//              return a+b
//     })
//     console.log(n)
    
// })

let arr= [{
    name: 'hello',
    id:1
}, {
    name: 'hii',
    id:2
}]
arr.map((ele)=>{
    console.log(ele.id)
})
