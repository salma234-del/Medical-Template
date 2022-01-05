jQuery(document).ready(function($) {
    var height = $(".header").height();
    $(window).scroll(function(){
    if($(this).scrollTop() > height) $(".navbar").addClass("fixed-top");
    else $(".navbar").removeClass("fixed-top");

})  
});