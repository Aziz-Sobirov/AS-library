// as_navbar
let as_navbar = document.getElementById("as_navbar")

if(as_navbar){
    as_navbar.innerHTML=`
<div class="as_navbar-title">
    <h2>${as_nav_h2}</h2>
    <h3>${as_nav_h3}</h3>
</div>
<div id="as_navbar_bars" onclick="as_nav()">
    <span></span><span></span><span></span>
</div>
<!--_list -->
<div id="as_navbar_desktop"></div>
<div id="as_navbar_mobile"></div>
<!-- close -->
<div id="as_navbar_close" onclick="as_nav()"></div>`

// 
let as_ScrollTop = 0;
window.addEventListener("scroll",function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollTop > as_ScrollTop ? as_navbar.style.top="-55px" : as_navbar.style.top="0"
    as_ScrollTop = scrollTop;
    as_navbar.classList.toggle("bg", window.scrollY > 0)
})


let as_navbar_desktop = document.getElementById("as_navbar_desktop")
let as_navbar_mobile = document.getElementById("as_navbar_mobile")

// desktop
for(let i=0;i<as_nav_list.length;i++){
    as_navbar_desktop.innerHTML+=`<a href="${as_nav_list[i].href}">${as_nav_list[i].name}</a>`
}
// mobile
for(let i=0;i<as_nav_list.length;i++){
    as_navbar_mobile.innerHTML+=`<a href="#${as_nav_list[i].href}" onclick="as_nav()">
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
                <a href="https://sobirov.netlify.app/#contact">Contact Us</a>
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
