
document.querySelector(".menuMobile").addEventListener("click", function () {
    if(document.querySelector(".menu nav ul").style.display == 'flex'){
        document.querySelector(".menu nav ul").style.display = 'none';
        
    } else {
        document.querySelector(".menu nav ul").style.display = 'flex';
        // document.querySelector("header").style.backgroundColor = '#2f2f2f';
    }
});


// window.onload =  function loading() {
//     document.getElementsByClassName('box-pre')[0].style.display = 'none';    
//     document.getElementsByClassName('content')[0].style.display = 'block'; 
// }



