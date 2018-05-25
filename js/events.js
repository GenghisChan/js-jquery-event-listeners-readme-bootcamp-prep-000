//define functions here

$(document).ready(function(){

  
});

 function getIt(){
    $('p').on('click',function(){
      alert("Hey!");
    });
 }
 
 function frameIt(){
   $('.tasty').on('load',function(){
     
   });
 }
 
 function pressIt(){
   $('input').on('keydown',function(key){
     if(key.which === 103){
       alert("G is pressed")
     }
     
   })
 }
 
 