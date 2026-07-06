//criar um constante que seleciona o botão html
const botao = document.querySelector("button");
//cria um evento de click e chama a função botãoClicado
botao.addEventListener("click",botaoClicado);

//cria a função que fará com que o texto do numero zero some + 1 a cada click.
function botaoClicado() {
    let texto = botao.querySelector("span");
    texto.textContent++;
}
//                 ####legendas;
//querySelector: seleciona o primeiro elemento que corresponde a um seletorCSS especificado.
//addEventListener: adiciona um evento de click, permitindo que você execute uma função quando o evento ocorre.
//textContent: modifica o conteúdo de texto de um elemento HTML.
