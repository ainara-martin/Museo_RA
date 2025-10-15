$(function(){
    //SPA

    $("div.seccion").hide(); 

    $("a.nav-btn").on("click", function(event) {
        event.preventDefault();

        const seccion = $(this).data("seccion");

        $("div.seccion").hide();

        $("div.seccion").filter("[id='" + seccion + "']").show();

        $("a.nav-btn").removeClass("active");
        $(this).addClass("active");
    });

    //Concepto central

    $(".ver-mas").on("click", function() {
        const cardBody = $(this).closest(".card-body");
        const contenido = cardBody.find(".contenido-oculto");

        if (contenido.is(":visible")) {
        contenido.slideUp();
        $(this).text("Ver más");
        } else {
            contenido.slideDown();
            $(this).text("Ver menos");
        }
    });

    //Productos

    $("#productos .card .card-body").hide();

    
    $("#productos .btn-ver-mas").on("click", function() {
        
        $(this).closest(".card").find(".card-body").slideToggle();

        
        const btn = $(this);
        if (btn.text() === "Ver más") {
            btn.text("Ver menos");
            btn.removeClass("btn-secondary").addClass("btn-primary");
        } else {
            btn.text("Ver más");
            btn.removeClass("btn-primary").addClass("btn-secondary");
        }
    });

    //Formulario

    $("form").each(function() {
        const formulario = $(this);

        formulario.on("submit", function(event) {
            event.preventDefault();

            
            const nombre = formulario.find("input").eq(0).val().trim();
            const apellidos = formulario.find("input").eq(1).val().trim();
            const email = formulario.find("input[type='email']").val().trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            
            if (nombre === "" || apellidos === "" || !emailRegex.test(email)) {
                alert("Por favor, completa todos los campos correctamente.");
                return;
            }

            
            const modal = new bootstrap.Modal($("#modalConfirmacion"));
            modal.show();

            
            formulario[0].reset();
        });
    });

    //Buscador

    $("button#boton").on("click", function(event) {
        event.preventDefault();

        const buscador = $(this).closest("form").find("input[type='search']").val().toLowerCase();

        
        $("div.seccion").hide();
        $("#productos").show();
        $("a.nav-btn").removeClass("active");
        $("a.nav-btn[data-seccion='productos']").addClass("active");

        
        $("#productos .card").each(function() {
            const titulo = $(this).find(".card-header").text().toLowerCase(); 
            if (titulo.includes(buscador)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

})