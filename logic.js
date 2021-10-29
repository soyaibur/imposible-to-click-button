const evilButton = document.getElementById("evil-button")

evilButton.addEventListener("click",()=>{
    alert("You are cheater you just can't but you prass tap button")
    
})


document.addEventListener("click",(e)=>{
   const x = e.pageX
   const y = e.pageY
   var buttonBox = evilButton.getBoundingClientRect()
   
})


