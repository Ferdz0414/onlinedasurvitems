/*For Flip Card */
var flipcards = document.querySelectorAll('.flip-card-inner');
flipcards.forEach(card=>{
    card.addEventListener('click', ()=>{
        /*remove the flip card in other*/
        flipcards.forEach(c => c.classList.remove('flipped'));

        /*flip card when you click one item*/
        card.classList.toggle('flipped');
    });
});






/*For Slide */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function currentDiv(n){
    showDivs(slideIndex = n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if(n > x.length){slideIndex = 1}
    if(n < 1){slideIndex = x.length}
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    for (i = 0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace("w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "w3-white";
}

/* For Dark Mode */
function toggledarkmode(){
    document.body.classList.toggle("darkmode");
}

/* For Sign Up */
var modal = document.getElementById('signup');

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}

function closeWin(){
    document.getElementById('signup').style.display='none';
}

/*For ChatBot */
function openForm(){
    document.getElementById("chatbox").style.display='block';
}

function closeForm(){
    document.getElementById("chatbox").style.display='none';
}