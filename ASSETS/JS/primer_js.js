$(function(){

    $(".seccion").hide();
    $("#indice").show();

    $(".nav-btn").on("click", function(event) {
        event.preventDefault();

        const seccion = $(this).data("seccion");

        $(".seccion").hide();

        $("#" + seccion).show();


        $(".nav-link").removeClass("active");
        $(this).addClass("active");

    })




})