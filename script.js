//Navbar css property in scroll
window.addEventListener("scroll", ()=>{
    const navbar=document.querySelector(".navbar");
    if(window.scrollY > 100){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }
    });

// profile section redirecting
const profileicon=document.querySelector(".profile-icon");
profileicon.addEventListener("click", ()=>{
    window.location.href="profile-details.html";
});

//Movie card
const movieCard=document.querySelectorAll(".content-card");
movieCard.forEach((card)=>{
    card.addEventListener("mouseEnter",() =>{
        card.computedStyleMap.transform="scale(1.05)";
    });

    card.addEventListener("mouseLeave", ()=>{
        card.computedStyleMap.transform="scale(1)";
    })
});