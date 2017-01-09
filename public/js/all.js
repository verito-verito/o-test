$(document).ready(function(){

    var menuMobile = $(".olapic-nav_mobile .mobile_options");
    menuMobileText = $(".menu_mobile .menu_mobile_text");

    menuMobile.on("change", function(){
        var value = menuMobile.val();        
        var text = menuMobile.find("option:selected").text();

        $('#olapic-filters [data-name="' + value + '"]').trigger("click");
        menuMobileText.text(text);
    }); 
});









