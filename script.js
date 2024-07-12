var arr=[
    {name: "Angellina", image: "https://i.pinimg.com/564x/be/b5/ed/beb5ed2c08cdf617b99de35fc36ac91f.jpg"},
    {name: "Roses", image: "https://i.pinimg.com/564x/f2/7a/1c/f27a1c0b0cc5ffeebbe60aa0c3235c13.jpg"},
    {name: "Cats", image: "https://i.pinimg.com/564x/e4/71/88/e471887ddb632c3cc2edc9e7290a36a5.jpg"},
    {name: "3d model", image: "https://i.pinimg.com/736x/88/da/d6/88dad641faa86ae6a8f4de260304f65a.jpg"},
    {name: "Outfit", image: "https://i.pinimg.com/564x/da/0b/91/da0b91be967e67cbf4a5df010f4b834e.jpg"},
    {name: "web design", image: "https://i.pinimg.com/736x/e9/3f/8d/e93f8d74d8740c90a39adfc57f46b3e6.jpg"},
    {name: "quote", image: "https://i.pinimg.com/564x/0d/cc/62/0dcc629bc0959dca264c36682bed9b10.jpg"},
    {name: "taylor", image: "https://i.pinimg.com/564x/66/6b/85/666b858a2d398fc4309cdb877865b0be.jpg"},
    {name: "rain", image: "https://i.pinimg.com/564x/ab/fa/d1/abfad1d36d0d3e4ee8938fbc1c7f3c5f.jpg"},
    {name: "rihana", image:"https://i.pinimg.com/564x/a4/2c/52/a42c5287ed2b32c1c7a9e83cf0e47ef0.jpg"},
    {name: "selena", image: "https://i.pinimg.com/564x/8b/d4/0c/8bd40c0c3eaf3278f0738a76880c8b64.jpg"},
    {name:"car", image: "https://i.pinimg.com/564x/db/d1/b4/dbd1b4767644fe85a6e2162a1fa441dc.jpg"},
    {name: "coffee", image:"https://i.pinimg.com/564x/eb/81/61/eb8161bb957eae784d9de385a22c3ba1.jpg"},
    {name: "women", image:"https://i.pinimg.com/564x/e1/77/fc/e177fcc2951a2f9787eac1f21b0eb48e.jpg"},
    {name: "man", image:"https://i.pinimg.com/564x/c2/34/ef/c234ef1ca6db888414ad59fb202ba985.jpg"},
    {name: "zendaya", image: "https://i.pinimg.com/564x/ba/6f/f9/ba6ff93fdc56e701adfbf460f870b90b.jpg"},
    {name: "boy" ,image: "https://i.pinimg.com/564x/58/bc/70/58bc70413647ac8ae93de25288f1d15f.jpg"},
    {name: "spiderman" ,image: "https://i.pinimg.com/564x/75/1b/9a/751b9a98a29c605f70ef79db4d8d830d.jpg"},
    {name: "wesite", image:"https://i.pinimg.com/564x/fd/23/eb/fd23ebcba3afb799f85322946158f6e0.jpg"}
]

var clutter = ""

function showCards(){
    arr.forEach(function(obj){
        clutter += ` <div class="box">
        <img src="${obj.image}" alt="image">
        <div class="caption">${obj.name}</div>
    </div>`;
    })
    document.querySelector(".container").innerHTML=clutter
 
}


function searchHandle(){
    var input=document.querySelector("#searchinput")
    
    input.addEventListener("focus",function(){
        document.querySelector(".full").style.display="block"
    })

    input.addEventListener("blur",function(){
        document.querySelector(".full").style.display="none"
    })


    input.addEventListener("input",function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter="";
        filteredArray.forEach(function(obj){
            clutter+=`<div class="search">
            <h3> <i class="ri-search-2-line"></i>${obj.name}</h3></div>`
        })

        var searchingScreen=document.querySelector(".searchData")

        searchingScreen.style.display="block"

        searchingScreen.innerHTML=clutter

        searchingScreen.addEventListener("mouseleave",function(){
            searchingScreen.style.display="none"
        })
        
    })
}

showCards();
searchHandle();
