

$("#navbarMenu ul .submenu > a").append('<span class="submenu-button"></span>');


$(".toggleMenu").click(function(e){
    $("nav > ul").slideToggle();
    e.preventDefault();
});


$(".submenu ul li").click(function(e){
    e.stopPropagation();
});

//CLICK ON SUBMENU LINK
$(".submenu").click(function(e){
    //CLOSE OPEN SUBMENU
    if($(this).hasClass("active")){
        $("#navbarMenu ul li").removeClass('active');
        $('#navbarMenu ul li ul').slideUp();
    }else{
        $("#navbarMenu ul li").removeClass('active');
        $("#navbarMenu ul li ul").slideUp();
        $(this).addClass("active");
        $(this).find('ul').stop().slideToggle();
        e.stopPropagation();
    }
    $("#navbarMenu ul li").removeClass('openSub');
    $(this).addClass('openSub');

});

$("body, html").click(function(){
    $("#navbarMenu ul li").removeClass('active openSub');
    $('#navbarMenu ul li ul').slideUp();
});