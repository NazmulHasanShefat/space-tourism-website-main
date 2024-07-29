let btn1 = document.querySelector("#crew_1");
let btn2 = document.querySelector("#crew_2");
let btn3 = document.querySelector("#crew_3");
let btn4 = document.querySelector("#crew_4");

let crew_name = document.querySelector(".crew-name p");
let crew_details = document.querySelector(".crew-details p");
let crew_image = document.querySelector(".crew-image img");
let crew_rank = document.querySelector(".crew-rank p")

btn1.addEventListener("click",()=>{
    crew_rank.innerText = "commander";
    crew_name.innerText = "douglas hurley";
    crew_details.innerText = `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`;
    crew_image.src = "./assets/crew/image-douglas-hurley.webp";
});
btn2.addEventListener("click",()=>{
    crew_rank.innerText = "Mission Specialist";
    crew_name.innerText = "Mark Shuttleworth";
    crew_details.innerText = `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`;
    crew_image.src = "./assets/crew/image-mark-shuttleworth.webp";
});
btn3.addEventListener("click",()=>{
    crew_rank.innerText = "Pilot";
    crew_name.innerText = " Victor Glover";
    crew_details.innerText = ` Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.`;
    crew_image.src = "./assets/crew/image-victor-glover.webp";
});
btn4.addEventListener("click",()=>{
    crew_rank.innerText = "Flight Engineer";
    crew_name.innerText = "Anousheh Ansari";
    crew_details.innerText = `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.`;
    crew_image.src = "./assets/crew/image-anousheh-ansari.webp";
});