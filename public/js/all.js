$(document).ready(function(){
    
    /*var menuDesktop = $(".olapic-nav [data-link]"),
        menuMobile = $(".olapic-nav .mobile_options"),
        images = $("[data-img]"),
        category = "",
        menuMobileText = $(".menu_mobile .menu_mobile_text");

    menuDesktop.on("click", function(){
        category = $(this).data("link");
        menuMobile.find("option").filter(function() {
            return $(this).val() === category; 
        }).prop('selected', true);

        menuMobile.trigger("change");
    });

    menuMobile.on("change", function(){
        var text = menuMobile.find("option:selected").text();
        category = menuMobile.val();
        
        activarImgs(category);
        menuMobileText.text(text);
    });
    
    function activarImgs(c){
        images
            .hide()
            .filter('[data-img="' + c + '"]').show();
    }*/

    /*$(".mobile_options").val(function(){
        $("[data-name]").trigger( "click" );
    });*/

    var menuMobile = $(".olapic-nav_mobile .mobile_options");
    menuMobileText = $(".menu_mobile .menu_mobile_text");

    menuMobile.on("change", function(){
        var value = menuMobile.val();        
        var text = menuMobile.find("option:selected").text();

        $('#olapic-filters [data-name="' + value + '"]').trigger("click");
        menuMobileText.text(text);
    }); 
});









