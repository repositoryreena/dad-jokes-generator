const btn = document.getElementById("btn")
const paragraph = document.getElementById("dadjoke")

btn.addEventListener("click", ()=>{
    paragraph.innerText = "Updating..."
    setTimeout(()=>{paragraph.innerText="I'm on a seafood diet. I see food and I eat it!"}, 3000)
})