
let indicator_buttons = document.querySelectorAll(".indicator_buttons .btn");
let vechicle_name = document.querySelector(".vechicle-name");
let vechicle_details = document.querySelector(".vechicle-details");
let vehicle_img_main = document.querySelector(".vehicle-img-main");

let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");

indicator_buttons.forEach(buttons => {
    buttons.addEventListener("click",()=>{
        indicator_buttons.forEach(buttons =>{
            buttons.classList.remove("active-btn");
        })
        buttons.classList.add("active-btn");
    })
});
var x = window.matchMedia("(max-width: 700px)")

btn1.addEventListener("click",()=>{
    if(x.matches){
        vechicle_name.innerText = "Launch vehicle";
    vechicle_details = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;
    vehicle_img_main.style.backgroundImage = "url('./assets/technology/image-launch-vehicle-landscape.jpg')";
    }
    else{
        vechicle_name.innerText = "Launch vehicle";
        vechicle_details = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;
        vehicle_img_main.style.backgroundImage = "url('./assets/technology/image-launch-vehicle-portrait.jpg')";
    }
})
btn2.addEventListener("click",()=>{
    vechicle_name.innerText = "Spaceport";
    vechicle_details = `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`;
    vehicle_img_main.style.backgroundImage = "url('./assets/technology/image-spaceport-portrait.jpg')";
})
btn3.addEventListener("click",()=>{
    vechicle_name.innerText = "Space capsule";
    vechicle_details = `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`;
    vehicle_img_main.style.backgroundImage = "url('./assets/technology/image-space-capsule-portrait.jpg')";
})