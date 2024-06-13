document.querySelector(".navbar-toggler").addEventListener("click",()=>{
   try{
    document.querySelectorAll(".hideItem").forEach((item)=>{
        item.classList.add("hide")
    })
   }catch{

   }
})

function closeNavBar(){
    try{
        document.querySelectorAll(".hideItem").forEach((item)=>{
            item.classList.remove("hide")
        })
    }catch{

    }
    document.querySelector(".navbar-collapse").classList.remove("show")
    document.querySelector('.navbar-toggler').setAttribute('aria-expanded', 'false')
}