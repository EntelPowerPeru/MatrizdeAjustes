const EVENTOS = {
    init() {
        this.irErrorDetectable();
    },
    irErrorDetectable() {
        $("body").on("click", "#btn_error_detectable", (evento) => {
            location = "./error-detectable.html"
        });
    }
};

(() => {
    EVENTOS.init();
})();