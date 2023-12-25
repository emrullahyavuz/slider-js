const rightArrow = document.querySelector(".rightArrow");
const leftArrow = document.querySelector(".leftArrow");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll("img");


let currentImg = 1;

leftArrow.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeOut);
    updateImage();
    

    
})
rightArrow.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeOut);
    updateImage();
    
    
})

function updateImage() {

    if(currentImg > images.length ) 
    {
        currentImg = 1;
    }
    if(currentImg == 0) {
        currentImg = 5;
    }

    slider.style.transform = `translateX(${(currentImg - 1) * (-700)}px)`

    timeOut = setTimeout(() => {
        currentImg++;
        updateImage();
    },3500)

}

updateImage();
