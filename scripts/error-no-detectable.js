const INICIAR_COMPONENTES = {
    init() {
        this.popovers();
    },
    popovers() {
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    }
};

const EVENTOS = {
    init() {
        this.errorNoDetectable();
        this.clienteSolucion();
        this.escenarios();
        this.autonomia();
        this.tipificacion();
    },
    errorNoDetectable() {
        $("body").on("click", "#titulo_error_no_detectable", (evento) => {
            $(".boton_accion").removeClass("active");
            $("#btn_error_no_detectable").addClass("active");
            
            $(".container_error_no_detectable").removeClass("d-none");
            $(".container_cliente_solucion").addClass("d-none");
            $(".container_escenarios").addClass("d-none");
            $(".container_autonomia").addClass("d-none");
            $(".container_tipificacion").addClass("d-none");
        });
    },
    clienteSolucion() {
        $("body").on("click", "#btn_cliente_solucion", (evento) => {
            $(".boton_accion").removeClass("active");
            $("#btn_cliente_solucion").addClass("active");

            $(".container_error_no_detectable").addClass("d-none");
            $(".container_cliente_solucion").removeClass("d-none");
            $(".container_escenarios").addClass("d-none");
            $(".container_autonomia").addClass("d-none");
            $(".container_tipificacion").addClass("d-none");
        });
    },
    escenarios() {
        $("body").on("click", "#btn_escenarios", (evento) => {
            $(".boton_accion").removeClass("active");
            $("#btn_escenarios").addClass("active");

            $(".container_error_no_detectable").addClass("d-none");
            $(".container_cliente_solucion").addClass("d-none");
            $(".container_escenarios").removeClass("d-none");
            $(".container_autonomia").addClass("d-none");
            $(".container_tipificacion").addClass("d-none");
        });
    },
    autonomia() {
        $("body").on("click", "#btn_nc_occ_conceptos", (evento) => {
            $(".boton_accion").removeClass("active");
            $("#btn_autonomia").addClass("active");

            $(".container_error_no_detectable").addClass("d-none");
            $(".container_cliente_solucion").addClass("d-none");
            $(".container_escenarios").addClass("d-none");
            $(".container_autonomia").removeClass("d-none");
            $(".container_tipificacion").addClass("d-none");
        });
    },
    tipificacion() {
        $("body").on("click", "#btn_tipificacion", (evento) => {
            $(".boton_accion").removeClass("active");
            $("#btn_tipificacion").addClass("active");

            $(".container_error_no_detectable").addClass("d-none");
            $(".container_cliente_solucion").addClass("d-none");
            $(".container_escenarios").addClass("d-none");
            $(".container_autonomia").addClass("d-none");
            $(".container_tipificacion").removeClass("d-none");
        });
    }
};

(() => {
    INICIAR_COMPONENTES.init();
    EVENTOS.init();
})();