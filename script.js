let rows = 10;
let columns = 10;
let cores = ['#25CCF7', '#EAB543', '#000', '#F97F51', '#FFF', '#82589F', '#FC427B', '#55E6C1'];

function criar_file() {
    let btn = document.getElementById("btn_load");

    btn.addEventListener("click", click_load);
}

function btn_click(ev) {
    let color = document.documentElement.style.getPropertyValue('--current_color');
    ev.srcElement.style.backgroundColor = color;
}

function criar_botao(id) {
    let botao = document.createElement("button");
    botao.setAttribute("id", id);
    botao.addEventListener('click', btn_click);
    botao.addEventListener('mouseenter', btn_click);

    let painel = document.getElementById("painel");
    painel.appendChild(botao);
}

function criar_painel() {
    let num_elements = rows * columns;

    for (let i = 0; i <= num_elements - 1; i++) {
        criar_botao("btn_" + (i + 1));
    }
}

function limpar_painel() {
    document.getElementById("painel").innerHTML = "";
    criar_painel();
}

function aplicar_configuracoes() {
    let linhas = document.getElementById("linhas").value;
    let colunas = document.getElementById("colunas").value;

    if (linhas > 0 && columns > 0) {
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

function click_load(ev) {
    let codigo = document.getElementById("codigo").value;
    let dados = codigo.split(",");

    rows = dados[0];
    columns = dados[1];
    document.getElementById("linhas").value = rows;
    document.getElementById("colunas").value = columns;
    aplicar_configuracoes();

    for (let i = 2; i <= dados.length - 1; i++) {
        let par = dados[i];
        let valores = par.split(":");
        let id = "btn_" + valores[0];
        let botao = document.getElementById(id);
        let indice_color = valores[1];
        let cor = cores[indice_color - 1];
        botao.style.backgroundColor = cor;
    }
}

criar_painel();
criar_paleta();
criar_file();