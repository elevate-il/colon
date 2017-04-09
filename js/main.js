$(function(){

 $('.checkbox').click(function(){


  $(this).toggleClass("on");

})
 $('.button').click(function(){

    if($('.on').length==2){
        
        window.location='14573_form_a4_c.pdf';
    }else{
        swal('נא לאשר תקנון ושאתם מעל גיל 18')
    }
})
})
