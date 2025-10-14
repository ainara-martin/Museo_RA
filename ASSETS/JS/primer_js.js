$(function(){

    $("#indice").show();
    $(".seccion").not("#indice").hide();

    $(".nav-btn").on("click", function(event) {
        event.preventDefault();

        const seccion = $(this).data("seccion");

        $(".seccion").not("#indice").hide();

        $("#" + seccion).show();


        $(".nav-link").removeClass("active");
        $(this).addClass("active");

    })




})