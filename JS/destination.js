let destination_nav = document.querySelectorAll(".destination-nav ul li a");

destination_nav.forEach(link =>{
    link.addEventListener("click",function(event){
        destination_nav.forEach(link=>{
            link.classList.remove("active");
        })
        this.classList.add("active");
    })
})
let moon = document.querySelector(".moon");
let mars = document.querySelector(".mars");
let Europa = document.querySelector(".Europa");
let Titan = document.querySelector(".titan");
let planet_name = document.querySelector(".destination-name");
let planet_details = document.querySelector(".destination-details p");
let planet_ditence = document.querySelector(".d-d");
let planet_travel_t = document.querySelector(".d-t");
let planet_image = document.querySelector(".planet-image img");

moon.addEventListener("click",()=>{
    planet_name.innerHTML = "MOON";
    planet_details.innerText = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`;
    planet_ditence.innerHTML = `384,400 KM`;
    planet_travel_t.innerHTML = "3 DAYS";
    planet_image.src = "./assets/destination/image-moon.webp";
})
mars.addEventListener("click",()=>{
    planet_name.innerHTML = "MARS";
    planet_details.innerText = `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`;
    planet_ditence.innerHTML = `225 MIL. KM`;
    planet_travel_t.innerHTML = "9 MONTHS";
    planet_image.src = "./assets/destination/image-mars.webp";
})
Europa.addEventListener("click",()=>{
    planet_name.innerHTML = "EUROPA";
    planet_details.innerText = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`;
    planet_ditence.innerHTML = `628 mil. KM`;
    planet_travel_t.innerHTML = "3 YEARS";
    planet_image.src = "./assets/destination/image-europa.webp";
})
Titan.addEventListener("click",()=>{
    planet_name.innerHTML = "TITAN";
    planet_details.innerText = `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`;
    planet_ditence.innerHTML = `1.6 bil. KM`;
    planet_travel_t.innerHTML = "7 YEARS";
    planet_image.src = "./assets/destination/image-titan.webp";
})