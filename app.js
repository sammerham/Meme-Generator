const imageURL = document.querySelector("#imgurl");
const form = document.querySelector("#memeform");
const topText = document.querySelector("#toptext");
const bottomText = document.querySelector("#bottomtext");
const gallery = document.querySelector("#memes");

form.addEventListener("submit", function(evt){
    evt.preventDefault();

    
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("parent-div");
    

    const topSpan = document.createElement("span"); 
    topSpan.classList.add("top-text");
    const textInside = document.createTextNode(topText.value); 
    topSpan.appendChild(textInside);  
    parentDiv.appendChild(topSpan);

    

    const bottomSpan = document.createElement("span"); 
    bottomSpan.classList.add("bottom-text");
    const bottomInside = document.createTextNode(bottomText.value); 
    bottomSpan.appendChild(bottomInside);  
    parentDiv.appendChild(bottomSpan);


    const image = document.createElement("img"); 
    image.classList.add("image");
    image.src = imageURL.value;
    image.width = "600";
    image.height = "800";
    parentDiv.appendChild(image);  
  


    const mainDiv = document.createElement("div");
    mainDiv.classList.add("biggest-div")
    mainDiv.appendChild(parentDiv);
    gallery.appendChild(mainDiv);
    form.reset();

    mainDiv.addEventListener("click", function(){
        mainDiv.removeChild(parentDiv);
    });

});

















