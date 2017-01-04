$(document).ready(function(){
    
    var menuDesktop = $(".olapic-nav [data-link]"),
        menuMobile = $(".olapic-nav .mobile_options"),
        images = $("[data-img]"),
        category = "";

    menuDesktop.on("click", function(){
        category = $(this).data("link");
        menuMobile.find("option").filter(function() {
            return $(this).val() === category; 
        }).prop('selected', true);

        activarImgs(category);
    });

    menuMobile.on("change", function(){
        category = menuMobile.val();
        activarImgs(category);
    });

    function activarImgs(c){
        images
            .hide()
            .filter('[data-img="' + c + '"]').show();
    }

});









