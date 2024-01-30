// let arr=[1,2,3,4,5,6,7,8,0,9] 
// let sum=0;
// arr.map((a)=>{
//     if(a>3)
//     {
//         sum+=a;
//     }
// })
// console.log(sum);

// Features of Hoisting:
// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
// It allows us to call functions before even writing them in our code. 

// Note: JavaScript only hoists declarations, not initializations.

// {
//     let a=5
//     console.log(a)
// }
// console.log(a)


// higher order function
// in a higher order function content another function argument 

// function outer (ashu){
//      console.log('outer')
//      ashu()
// }

//     function inner()
//     {
//         console.log('inner')
//     }


// outer(inner)

// 


// function outer()
// {
//     console.log('outer')
//     function inner()
//     {
//         console.log('inner')
//     }
//     return inner
// }
// let inner= outer()
// inner()

// homework
// let arr=[i,2,3,4,'hello','hiii',true,false]
