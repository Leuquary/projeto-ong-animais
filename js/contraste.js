(function () {
    const chave = "contraste";
    const raiz = document.documentElement;
    const botao = document.querySelector(".contraste");

    function aplicar(alto) {
        if (alto) {
            raiz.setAttribute("data-contraste", "alto");
        } else {
            raiz.removeAttribute("data-contraste");
        }

        if (botao) {
            botao.setAttribute("aria-pressed", alto ? "true" : "false");
        }
    }

    let salvo = null;
    try {
        salvo = localStorage.getItem(chave);
    } catch (erro) {
        salvo = null;
    }

    const alto = salvo === "alto" || (salvo !== "normal" && window.matchMedia("(prefers-contrast: more)").matches);
    aplicar(alto);

    if (!botao) {
        return;
    }

    botao.addEventListener("click", () => {
        const ligado = raiz.getAttribute("data-contraste") !== "alto";
        try {
            localStorage.setItem(chave, ligado ? "alto" : "normal");
        } catch (erro) {
            console.log(erro)
        }
        aplicar(ligado);
    });
})();
