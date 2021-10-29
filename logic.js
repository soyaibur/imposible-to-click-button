const evilButton = document.getElementById("evil-button")

evilButton.addEventListener("click",()=>{
    alert("You are cheater you just can't but you prass tap button")
    
})


document.addEventListener("click",(e)=>{
   const x = e.pageX
   const y = e.pageY
   const buttonBox = evilButton.getBoundingClientRect()
    
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x,x,buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y,y,buttonBox.height)
})

function distanceFromCenter(boxPosition,mousePosition, boxSize){
    return boxPosition - mousePosition + boxSize / 2
}


