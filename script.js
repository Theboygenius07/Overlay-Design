import { data } from './data.js'; // Import data from data.js
const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector("#close-btn");
const itemDetails = document.querySelector(".items-details");


//first set of animations
document.addEventListener("DOMContentLoaded", function()
{
  const counter3 = document.querySelector(".counter-3");
  
  for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }
  }

  const finalDiv = document.createElement("div");
  finalDiv.className = "num";
  finalDiv.textContent = "0";
  counter3.appendChild(finalDiv);

  function animate(counterElement, duration, delay = 0) {
    const numHeight = counterElement.querySelector(".num").clientHeight;
  
    const totalDistance = (counterElement.querySelectorAll(".num").length - 1) * numHeight;
  
    gsap.to(counterElement, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power2.inOut",
    });
  }
  

animate(counter3, 5);
animate(document.querySelector(".counter-2"), 6);
animate(document.querySelector(".counter-1"), 2, 4);
});

gsap.to(".digit", {  // Add a period before "digit"
  top: "-150px",
  stagger: {
    amount: 0.25,
  },
  delay: 6,
  duration: 1,
  ease: "power4.inOut",
});

gsap.from(".loader-1", {
  width: 0,
  duration: 6,
  ease: "power2.inOut",

});

gsap.from(".loader-2", {
  width: 0,
  delay: 1.9,
  duration: 3,
  ease: "power2.inOut",

});

gsap.to(".loader", {
  background: "none",
  delay: 6,
  duration: 0.1,
});

gsap.to(".loader-1", {
  rotate: 90,
  y: -50,
  delay: 6,
  duration: 0.5,
});

gsap.to(
  ".loader-2",
  {
    x: -75,
    y: 75,
    duration: 0.5,
  },
  "<"
);


gsap.to(".loader", {
  scale: 40,
  duration: 1,
  delay: 7,
  ease: "power2.inOut",
});

gsap.to(".loader", {
 rotate: 45,
 y: 500,
 x: 2000,
  duration: 1,
  delay: 7,
  ease: "power2.inOut",
});

gsap.to(".loading-screen", {
opacity: 0,
  duration: 0.5,
  delay: 7.5,
  ease: "power1.inOut",
});

// gsap.to(".bigContainer", {
//   delay: 7,
//   stagger: {
//     amount: 0.1,
//   },
//   ease: "power4.inOut",
// });



//second set of animations




const tl = gsap.timeline({ paused: true, overwrite: "auto" });

const items = document.querySelectorAll(".item");

   
tl.to(overlay, {
 bottom: "0px", 
rotation: 0,
 duration: 0.5,
 transformOrigin: "bottom center",
  ease: "power3.inOut" });


// Select all elements with class ".item"

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    updateOverlay(data[index]);

    tl.play();
  });
});

closebtn.addEventListener("click", () => {
  tl.reverse();
});

function updateOverlay(itemData) {
    // Update overlay content with the itemData
    document.getElementById("item-name").textContent = itemData.name;
    document.getElementById("item-category").textContent = itemData.category;
    document.getElementById("item-link").href = itemData.link;
    document.getElementById("item-copy").textContent = itemData.copy;
    document.getElementById("item-img").src = itemData.imgSrc;
  }

document.addEventListener("click", (e) => {
  if (!overlay.contains(e.target) && !isItem(e.target)) {
    // Add animation to hide the overlay and rotate it
    tl.reverse();
  }
});

function isItem(target) {
  return target.closest('.item');
}


  // document.querySelector("#item-link")
  // .addEventListener("mouseover", function(){
  //   gsap.to("img", {
  //     scale: 1.2,
  //     duration: 1,
  //     ease: "Power2.easeInOut"
  //   })
  // });

  document.querySelector("#item-link")
  .addEventListener("mouseleave", function(){
    gsap.to("img", {
      scale: 1,
      duration: 1,
      ease: "Power2.easeInOut"
    })
    

    gsap.to(items, { opacity: 1, filter: "blur(0px)", duration: 0.2, stagger: 0.2 });
  })


  document.querySelector("#item-link")
  .addEventListener("mouseover", function(){
    gsap.to("img", {
      scale: 1.1,
      duration: 0.5,
      ease: "Power2.easeInOut"
    })

    gsap.to(items, { opacity: 1,  filter: "blur(10px)", duration: 0.5, stagger: 0.2 });
  })

  
  