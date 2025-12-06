var carts = document.querySelectorAll(" img");
var index=0;

   
for (var i =1 ; i < carts.length; i++) {
        carts[i].style.display = "none";
    }

 
    function play() {

    for(i=0;i<carts.length;i++){
        carts[i].style.display = "none";
        
        carts[index].style.display = "block";


    }
    
    index++;
}
 
    setInterval(play, 5000);