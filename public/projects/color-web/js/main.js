function toggleSideBar(){
    document.querySelector(".sideBar").classList.toggle("sideBarShow")
  }
  const sideBar = document.querySelector('.sideBar');

  const closeButton = document.createElement('div');
  closeButton.classList.add('close-btn');

  closeButton.innerHTML = '<i class="fas fa-times"></i>';

  sideBar.insertBefore(closeButton, sideBar.firstChild);

 document.querySelector(".fa-times").addEventListener("click",()=>{
  document.querySelector(".sideBar").classList.toggle("sideBarShow")
 })

