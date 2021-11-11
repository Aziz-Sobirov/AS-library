// as load

let as_load = document.getElementById("as_load")
if(as_load){
    function as_onload(){
        as_load.style.display="none"
    }
    as_load.innerHTML='<div class="as_load-bx"><div class="circle circle-1"></div><div class="circle circle-2"></div><div class="circle circle-3"></div><div class="circle circle-4"></div></div>'
    var as_load_circle1 = anime ({
        targets: ['.circle-1'],
        translateY: '-20px',
        translateX: ['0px','0px','45px'],
        background:["#fff","#fff","#00c3ff"],
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutElastic',
        duration: 2000,
        delay: 500,
      });
      
      var as_load_circle2 = anime ({
        targets: ['.circle-2'],
        translateY: ['-20px','0px','20px'],
        translateX: ['45px','0px'],
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutElastic',
        duration: 2000,
        delay: 500,
      });
      
      var as_load_circle3 = anime ({
        targets: ['.circle-3'],
        translateY: ['20px','0px','-20px'],
        translateX: ['-45px','0px'],
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutElastic',
        duration: 2000,
        delay: 500,
      });
      
      var as_load_circle4 = anime ({
        targets: ['.circle-4'],
        translateY: '20px',
        translateX: ['0px','0px','-45px'],
        background:["#fff","#fff","#eeff00"],
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutElastic',
        duration: 2000,
        delay: 500,
      });
}


// as_navbar
let as_navbar = document.getElementById("as_navbar")

if(as_navbar){
    as_navbar.innerHTML=`
<div class="as_navbar-menu">
<div class="as_navbar-title">
    <h2>${as_nav_h2}</h2>
    <h3>${as_nav_h3}</h3>
</div>
<div id="as_navbar_desktop"></div>
<div id="as_navbar_bars" onclick="as_nav()">
    <span></span><span></span><span></span>
</div>
</div>
<!--_list -->
<div id="as_navbar_mobile"></div>
<!-- close -->
<div id="as_navbar_close" onclick="as_nav()"></div>`

// 
let as_navbar_menu = document.querySelector(".as_navbar-menu")
let as_ScrollTop = 0;
window.addEventListener("scroll",function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollTop > as_ScrollTop ? as_navbar_menu.style.top="-55px" : as_navbar_menu.style.top="0px"
    as_ScrollTop = scrollTop;
    as_navbar_menu.classList.toggle("bg", window.scrollY > 0)
})


let as_navbar_desktop = document.getElementById("as_navbar_desktop")
let as_navbar_mobile = document.getElementById("as_navbar_mobile")

// desktop
for(let i=0;i<as_nav_list.length;i++){
    as_navbar_desktop.innerHTML+=`<a href="${as_nav_list[i].href}">${as_nav_list[i].name}</a>`
}
// mobile
for(let i=0;i<as_nav_list.length;i++){
    as_navbar_mobile.innerHTML+=`<a href="${as_nav_list[i].href}" onclick="as_nav()">
    <h4>${as_nav_list[i].name}</h4><h4 class="far fa-angle-right"></h4></a>`
}
}

function as_nav(){
    as_navbar.classList.toggle("nav")
}




// app
let app = document.getElementById("as_app")
if(app){
app.innerHTML+='<ul id="as_app-bar"></ul>'
let app_bar = document.getElementById("as_app-bar")
    for(let b=0;b<as_app_bar.length;b++){
        app_bar.innerHTML+=`<li>
        <a href="#${as_app_bar[b].href}">
            <i class="${as_app_bar[b].icon}"></i>
            <span>${as_app_bar[b].name}</span>
        </a>
        </li>`   
    }
}


// errors
let as_err = document.getElementById("as_error")
if(as_err){
    as_err.innerHTML=`
    <!-- as_err 404 -->
    <div id="as_error404" class="as_error">
        <img src="https://raw.githubusercontent.com/Aziz-Sobirov/AS-library/main/img/error404.svg" alt="Aziz Sobirov Error Page">
        <div class="text">
            <h2>Page Not Found</h2>
            <p>We can't find the page you're looking for. You can either return to the previous page, visit or contact our support team.</p>
            <div class="btn">
                <a href="#" onclick="location.reload();">Visit Home Page</a>
                <a href="https://aziz-webdev.netlify.app/#contact">Contact Us</a>
            </div>
        </div>
    </div>

    <!-- as_err 503 -->
    <div id="as_error503" class="as_error">
        <img src="https://raw.githubusercontent.com/Aziz-Sobirov/AS-library/main/img/error503.svg" alt="Aziz Sobirov Error Page">
        <div class="text">
            <h2>503 Service Temporarily Unavailable</h2>
            <p>The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later.</p>
        </div>
    </div>

    <!-- as_err 400 -->
    <div id="as_error400" class="as_error">
        <img src="https://raw.githubusercontent.com/Aziz-Sobirov/AS-library/main/img/error400.svg" alt="Aziz Sobirov Error Page">
        <div class="text">
            <h2>404. That's an Error</h2>
            <p>Your client has issued a malformed or illegal request. That's all we know.</p>
        </div>
    </div>`
}


// AS form
let as_form = document.getElementById("as_form")
if(as_form){
    as_form.innerHTML=`
<form id="as_form_sign-up"  onsubmit="return as_signUp()">
    <h2>Get Started</h2>
    <fieldset>
        <input type="name" name="Enter your name" id="as_username" minlength="3" maxlength="25" placeholder="Enter your name" required>
        <legend>Your Name</legend>
    </fieldset>
    <fieldset>
        <input type="email" name="Enter your email" id="as_userEmail" minlength="10" placeholder="Enter your email" required>
        <legend>Your Email</legend>
    </fieldset>
    <fieldset>
        <input type="password" name="Enter your password" id="as_password"
        minlength="8" maxlength="25" placeholder="Enter your password" required>
        <legend>Your Password</legend>
        <i onclick="as_showPassword(this)" class="ai-eye-closed"></i>
    </fieldset>
    <fieldset>
        <input type="password" name="Enter your Confirm password" id='as_conPassword' minlength="8" maxlength="25" placeholder="Retype your passowrd" required>
        <legend>Your Confirm Password</legend>
        <i onclick="as_showConPassword(this)" class="ai-eye-closed"></i>
    </fieldset>
    <button type="submit">Sign Up</button>
    <a href="#as_form_login">Already you have an account. Login</a>
</form>

<!-- login -->
<form action="" id="as_form_login" onsubmit="return as_login()">
    <h2>Login here</h2>
    <fieldset>
        <input type="email" name="Enter your email" id="as_loginEmail" minlength="10" placeholder="Enter your email" required>
        <legend class="as_loginEmailLegend">Your Email</legend>
    </fieldset>
    <fieldset>
        <input type="password" name="Enter your password" id="as_loginPassword"
        minlength="8" maxlength="25" placeholder="Enter your password" required>
        <legend class="as_loginPasswordLegend">Your Password</legend>
        <i onclick="as_showPassword(this)" class="ai-eye-closed"></i>
    </fieldset>
    <button type="submit">Login</button>
    <a href="#as_form_sign-up">Need an account. Sign Up</a>
</form>`

let as_username = document.getElementById("as_username")
let as_userEmail = document.getElementById("as_userEmail")
let as_password = document.getElementById('as_password')
let as_conPassword = document.getElementById('as_conPassword')
let as_loginEmail = document.getElementById("as_loginEmail")
let as_loginPassword = document.getElementById('as_loginPassword')
let asPass = false
let asConPass = false

function as_signUp(){
    as_user.push({
        name: as_username.value.trim(),
        email: as_userEmail.value.trim(),
        password: as_conPassword.value
    })
    as_form.style.display='none'
    return false;
}
function as_login(){
    for(let i=0;i<as_users.length;i++){
        let lg = document.querySelector(".as_loginEmailLegend")
        let lg1 = document.querySelector(".as_loginPasswordLegend")

        if(as_users[i].email.includes(as_loginEmail.value)){
            lg.innerHTML='Complated'
            lg.style.color='#00ad99'
        }else{
            lg.innerHTML='Email Not Found'
            lg.style.color='#ff0066'
        }
        if(as_users[i].email.includes(as_loginEmail.value) && as_users[i].password === as_loginPassword.value){
            lg1.innerHTML='Complated'
            lg1.style.color='#00ad99'
        }else{
            lg1.innerHTML='Password is wrong'
            lg1.style.color='#ff0066'
        }
        if(lg.innerHTML === 'Complated' && lg1.innerHTML === 'Complated'){
            as_user.push({
                name:as_users[i].name,
                email:as_users[i].email,
                password:as_users[i].password
            })
            as_form.style.display='none'
        }
    }
    return false;
}

function as_showPassword(i){
    if(!asPass){
        asPass = true
        i.classList = 'ai-eye-open'
        as_password.type = 'text'
        as_loginPassword.type = 'text'
    }else{
        asPass = false
        i.classList = 'ai-eye-closed'
        as_password.type = 'password'
        as_loginPassword.type = 'password'
    }
}
function as_showConPassword(i){
    if(!asConPass){
        asConPass = true
        i.classList = 'ai-eye-open'
        as_conPassword.type = 'text'
    }else{
        asConPass = false
        i.classList = 'ai-eye-closed'
        as_conPassword.type = 'password'
    }
}
}