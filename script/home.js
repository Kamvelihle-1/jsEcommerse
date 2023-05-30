//Home
let display=document.querySelector('#home')

display.innerHTML+= 
`
<h2 class="hh">CAPE PROPERTIES</h2>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/ZYVWW23R/th-1250071778.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/bNJm7Xpf/th-1631564054.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/Y2JxsvnY/th-2114995106.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/1tF8n3G1/th-3756547690.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.postimg.cc/qvQbSkCr/th-4118733502.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`






// Footer

let foot=document.querySelector('.footer')

foot.innerHTML +=
`

<div class="container text-center text-md-start">
    <div class="row text-center text-md-start">
        <div class="col-md-4 col-lg-3 col-xl-3  mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold text-black">Contacts</h5>
            <p>
                <i class="fas fa-home mr-5 "></i> Cape Town,7784,South Africa
            </p>
            <p>
                <i class="fas fa-envelope mr-5 "></i> connect@capeproperties.com
            </p>
            <p>
                <i class="fas fa-phone mr-5 "></i> +27 83 475 7606
            </p>
        </div>
        <div class="col-md-4 col-lg-6 col-xl-6  mt-5 my-5 align-items-center ">
            <img src="https://i.postimg.cc/ZYVWW23R/th-1250071778.jpg" alt="Logo" width="200" height="150" loading="lazy">

        </div>
        

    </div>
    <div class="row " style="background-color: #40403f;">
        <div class="col-md-7 col-lg-8" >
            <p>Copyright &copy; 2023  by Kamvelihle Sikalana</p>
        </div>
        <div class="col-md-5 col-lg-4">
            <div class="tex-align-center text-md-end">
                <ul>
                    <li class="list-inline-item "><a target="_blank" href="https://www.linkedin.com/in/kamvelihle-sikalana-4884a4198" class="btn-floating btn-sm text-white " style="font-size: 24px;"><i class="fab fa-linkedin-in"></i></a></li>
                    <li class="list-inline-item"><a target="_blank" href="https://github.com/SmasherK" class="btn-floating btn-sm text-white " style="font-size: 24px;"><i class="fab fa-github"></i></a></li>
                </ul>

            </div>
        </div>
    </div>

</div>`