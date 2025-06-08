const editword = document.querySelector(".edit-word")

const biFonts = document.querySelector(".box-bi-fonts")

const optionsFonts = document.querySelector(".options-fonts")

// Buttons Para Mudar A fonte
const fontArial = document.querySelector(".font-arial")
const fontCourier = document.querySelector(".font-courier")
const fontImpact = document.querySelector(".font-impact")

// end

biFonts.addEventListener("click", ()=>{
    optionsFonts.classList.toggle("options-fonts-on")
})

fontArial.addEventListener("click", ()=>{
    editword.classList.toggle("edit-word-arial")
    editword.classList.remove("edit-word-courier")
    editword.classList.remove("edit-word-impact")

})

fontCourier.addEventListener("click", ()=>{
    editword.classList.toggle("edit-word-courier")
    editword.classList.remove("edit-word-arial")
    editword.classList.remove("edit-word-arial")

})

fontImpact.addEventListener("click", ()=>{
    editword.classList.remove("edit-word-courier")
    editword.classList.remove("edit-word-arial")
    editword.classList.toggle("edit-word-impact")

})