// promise

// let promise= new  promise((res,rej)=>{
//     let  isbool=false
//     if(isbool){
//         res('hello')
//     }
//     else{
//         rej('byee')
//     }
// })
// promise.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// console.log($('h1').css('color','red'))

// console.log($('h1').attr('id','10'))
// jquery is javascript library to developed to easy way 


// let req= new XMLHttpRequest()
// req.open('GET','https://jsonplaceholder.typicode.com/todos/1')
// req.send()
// req.onload=funtion(data){
//     console.log(data0)   
// }
// req.onerror=funtion(err){
//     console.log(err)
// }




fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>{
    return data.json()

}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})