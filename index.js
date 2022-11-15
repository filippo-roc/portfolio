const menu = document.querySelector(".menu")

const hamburger = document.querySelector(".hamburger");

const changeModeButton = document.querySelector("#mode");
let darkModeIsOn = false;

//menu scroll
menu.addEventListener("click", function(e)
{
  e.preventDefault();
  //Matching strategy
  if(e.target.classList.contains("menu__item__link") || e.target.classList.contains("menu__item"))
  {
    document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  }
})

// hamburger menu' 
hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");

})


// night mode
changeModeButton.addEventListener("click", function(e){
    if(darkModeIsOn){
        document.documentElement.style.setProperty('--primary-color', '#121212');
        document.documentElement.style.setProperty('--secondary-color', '#f5f5f7e9');
        document.documentElement.style.setProperty('--tertiary-color', '#aeaeb4');
        document.documentElement.style.setProperty('--special-color', '#bb86fc');
        document.documentElement.style.setProperty('--alternative-color', '#bb86fc');
        return darkModeIsOn = false;
    }
    document.documentElement.style.setProperty('--primary-color', '#f5f5f7e9');
    document.documentElement.style.setProperty('--secondary-color', '#121212');
    document.documentElement.style.setProperty('--tertiary-color', '#6e6e73');
    document.documentElement.style.setProperty('--special-color', '#bb86fc');
    document.documentElement.style.setProperty('--alternative-color', '#000000cc');
    
    darkModeIsOn = true;
})



window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
