let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.burger-menu');

menuBtn.addEventListener('click', function(e){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


 //  окно
 var modal = document.getElementById("orderModal");

 // кнопка открытия окна
 var btn = document.getElementById("orderBtn");
 
 //  <span> элемент закрывающий окно
 var span = document.getElementsByClassName("close")[0];
 
 // открытие окна при нажатии кнопки
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // при клике <span> (x), закрыть окно
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // при клике за пределами окна, окно закрывается
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

