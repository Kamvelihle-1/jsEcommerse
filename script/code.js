// Products
let prods=document.querySelector('.items')
let homes=[
    {
        location:"Constatia",
        specs:"A lovely 6 bedroom,7 and a half bathrooms, 8 car garage home with a pool and large space around .",
        price:"28 899 999",
        image:"https://i.postimg.cc/bNJm7Xpf/th-1631564054.jpg"

    },
    {
        location:"Clifton",
        specs:"A lovely 4 bedroom,5 bathrooms, 4 car garage home with a pool, large backyard and an uninterupted view of the ocean .",
        price:"35 590 000",
        image:"https://i.postimg.cc/1tF8n3G1/th-3756547690.jpg"

    },
    {
        location:"Camps Bay",
        specs:"A lovely 12 bedroom,13 and a half bathrooms, 10 car garage home with a pool and large backyard and an uninterupted view of the ocean .",
        price:"40 500 000",
        image:"https://i.postimg.cc/qvQbSkCr/th-4118733502.jpg"


    },
    {
        location:"Bishops Court",
        specs:"A lovely 8 bedroom,9 and a half bathrooms, 4 car garage home with a pool and large backyard .",
        price:"25 789 000",
        image:"https://i.postimg.cc/Y2JxsvnY/th-2114995106.jpg"


    },
    {
        location:"Stellenbosch",
        specs:"A lovely 4 bedroom,4 and a half bathrooms, 4 car garage home with a pool and large backyard .",
        price:"22 789 000",
        image:"https://i.postimg.cc/RVtnTbQ9/th-282130672.jpg"


    },

]

homes.forEach(item =>{
    prods.innerHTML+=
    `
    
    
      <div class="col">
        <div class="card">
          <img loading="lazy" src="${item.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.location}</h5>
            <p class="card-text">${item.specs}</p>
            <p>Price:R ${item.price}</p>
          </div>
        </div>
      </div>
    
    
    `  
})

