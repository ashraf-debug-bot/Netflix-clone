var accodian = document.getElementsByClassName("faq-title");
for (var i=0; i <accodian.length; i++){
  accodian[i].addEventListener("click",function () {
   if (this.childNodes[1].classList.contains("fa-plus")){
     this.childNodes[1].classList.remove("fa-plus");
     this.childNodes[1].classList.add("fa-times");
   }
    else{
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }
var content=this.nextElementSibling;
if(content.style.maxHeight){
  content.style.maxHeight = null;
}else{
  content.style.maxHeight= content.scrollHeight + "px";
}

 });
}
