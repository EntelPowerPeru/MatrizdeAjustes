const EVENTOS = {
    init() {
        this.irErrorDetectable();
        this.irErrorNoDetectable();
        this.irMotivoNoDebeAjustar();
    },
    irErrorDetectable() {
        $("body").on("click", "#btn_error_detectable", (evento) => {
            location = "./error-detectable.html"
        });
    },
    irErrorNoDetectable() {
        $("body").on("click", "#btn_error_no_detectable", (evento) => {
            location = "./error-no-detectable.html"
        });
    },
    irMotivoNoDebeAjustar() {
        $("body").on("click", "#btn_motivo_no_debe_ajustar", (evento) => {
            location = "./motivo-no-debe-ajustar.html"
        });
    }
};

(() => {
    EVENTOS.init();
})();