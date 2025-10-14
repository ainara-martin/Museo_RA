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

    //Formulario

    $("form").each(function() {
        const formulario = $(this);

        formulario.on("submit", function(event) {
            event.preventDefault();

            // Buscar dentro del formulario los inputs
            const nombre = formulario.find("input").eq(0).val().trim();
            const apellidos = formulario.find("input").eq(1).val().trim();
            const email = formulario.find("input[type='email']").val().trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Validación básica
            if (nombre === "" || apellidos === "" || !emailRegex.test(email)) {
                alert("Por favor, completa todos los campos correctamente.");
                return;
            }

            // Mostrar modal de confirmación
            const modal = new bootstrap.Modal($("#modalConfirmacion"));
            modal.show();

            // Limpiar formulario
            formulario[0].reset();
        });
    });

    //Buscador

    $("button#boton").on("click", function(event) {
        event.preventDefault();

        const buscador = $(this).closest("form").find("input[type='search']").val().toLowerCase();

        // Muestra la sección de productos
        $("div.seccion").hide();
        $("#productos").show();
        $("a.nav-btn").removeClass("active");
        $("a.nav-btn[data-seccion='productos']").addClass("active");

        // Filtrar los proyectos (cards)
        $("#productos .card").each(function() {
            const texto = $(this).text().toLowerCase();
            if (texto.includes(buscador)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

})