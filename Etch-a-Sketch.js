let squareContainer = document.querySelector(".container");

for (let i=0 ; i<256 ;i++){
    let square = document.createElement("div");
    square.classList.add("square");
    squareContainer.appendChild(square);
}

squareContainer.addEventListener('mouseover',(event)=>{
   if (event.target.classList.contains("square")){
    event.target.classList.add("ishovered");
   }
})
const newgrid = () =>{
    
    let numSquaresPerSide = prompt("enter the number of squares per side for the new grid");
    let totalSquares = numSquaresPerSide*numSquaresPerSide
    let squareSizePercentage = 100/numSquaresPerSide;
    
    squareContainer.innerHTML = "";   
    

    for (let i = 0 ; i < totalSquares ; i++){
        
        let square = document.createElement("div");
        
        square.classList.add("square");
        
        square.style.width = `${squareSizePercentage}`
        square.style.height = `${squareSizePercentage}`
        squareContainer.appendChild(square);
    }
}