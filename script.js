let rows = 10;
let columns = 10;

window.onload = function () {
    criar_painel();
    criar_paleta();
};

function btn_click(ev) {
    let color = document.documentElement.style.getPropertyValue('--current_color');
    ev.srcElement.style.backgroundColor = color;
}

function criar_botao() {
    let botao = document.createElement("button");
    botao.addEventListener('click', btn_click);
    botao.addEventListener('mouseenter', btn_click);

    let painel = document.getElementById("painel");
    painel.appendChild(botao);
}

function criar_painel() {
    let num_elements = rows * columns;

    for (let i = 0; i <= num_elements - 1; i++)  {
        criar_botao();
    }
}

function limpar_painel() {
    document.getElementById("painel").innerHTML = "";
    criar_painel();
}

function aplicar_configuracoes()  {
    let linhas = document.getElementById("linhas").value;
    let colunas = document.getElementById("colunas").value;

    if (linhas > 0 && columns > 0)  {
        document.getElementById("painel").innerHTML = "";
        rows = linhas;
        columns = colunas;
        document.documentElement.style.setProperty('--row', linhas);
        document.documentElement.style.setProperty('--col', colunas);
        criar_painel();
    }
}

function criar_paleta() {
    let paleta = document.getElementById("paleta");
    let cores = ['#25CCF7', '#EAB543', '#000', '#F97F51', '#FFF', '#82589F', '#FC427B', '#55E6C1'];
    let num_cores = cores.length;

    for (let i = 0; i <= num_cores - 1; i++) {
        let botao = document.createElement("button");
        botao.style.backgroundColor = cores[i];
        botao.addEventListener('click', click_paleta);
        paleta.appendChild(botao);
    }
}

function click_paleta(ev) {
    let color = ev.srcElement.style.backgroundColor;
    document.documentElement.style.setProperty('--current_color', color);
}