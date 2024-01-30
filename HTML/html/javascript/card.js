let ul = document.querySelector('ul')
fetch("https://dummyjson.com/products").then((data)=>{
    return data.json()
}).then((res)=>{
    console.log(res.products[0].id)
    addd(res.products)
}).catch((err)=>{
    console.log(err);
})

let div = document.querySelector('div')
let a = document.querySelector("container")

const color = ()=>{
    var randomcolor = Math.floor(Math.random()*16777215).toString(16);
    return randomcolor;
}
function addd(a){
    console.log(a,"rrr");
    for(let i of a){ //console.log(i.id,"uiiiii");
        // let li = document.createElement('li')
        // li.innerText = i.id
        // ul.appendChild(li)
        let div2 = document.createElement('div');
        div.appendChild(div2);
        div2.id = "card";
        console.log(color());
        div2.style.backgroundColor = "#" + color();

        let img = document.createElement('img');
        img.id = "img";
        let link = i.images[0];
        img.setAttribute("src", link)

        let p1 = document.createElement('p');
        p1.innerText=i.title;

        let p2 = document.createElement('p');
        p2.innerText = i.description;

        let p3 = document.createElement('p');
        p3.innerText = i.brand;

        let p4 = document.createElement('p');
        p4.innerText=i.price;

        div2.append(p1, img ,p2,p3,p4);   
    }
}
