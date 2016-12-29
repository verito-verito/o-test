$(document).ready(function(){
    
var link = $(".olapic-nav [data-link]");
    images = $("[data-img]");

    
    link.on("click", function(category){
        var category = $(this).attr("data-link");
        
        images
            .hide()
            .filter('[data-img="' + category + '"]').show();
            
    });




});