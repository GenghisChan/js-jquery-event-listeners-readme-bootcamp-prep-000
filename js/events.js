//define functions here

$(document).ready(function(){

  
});

 function getIt(){
    $('p').on('click',function(){
      alert("Hey!");
    });
 }
 
 function frameIt(){
   $('img:first').on('load',function(){
     $('img:first').addClass'.tasty')
   });
 }
 
 function pressIt(){
   $('input').on('keydown',function(key){
     if(key.which === 71){
       alert("G is pressed")
     }
     
   })
 }
 
 