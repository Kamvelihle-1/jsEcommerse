// Contact

let connect=document.querySelector('#contact')

connect.innerHTML +=
`

<div class="contact ">
<h2 class="ch">LET'S CONNECT</h2>
<form action="https://formspree.io/f/mnqyweaz" method="POST">
    <label for="Name">Name and Surname</label><br>
    <input type="text" name="Name" placeholder="Your Name & Surname" required id="name">
    <br><label for="email">Email</label><br>
    <input type="email" name="Email" placeholder="Your Email" required id="mail" >
    <br><label for="Message">Message</label><br>
    <textarea name="Message"  rows="6" placeholder="Your Message" required id="text"></textarea>
    <button type="submit"  id="submit">Submit</button>
    <button   type="reset" >Clear</button>
</form>
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