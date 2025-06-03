function criaCartao(categoria, pergunta, resposta){
let container =document.getElementById('container')
let.cartao = document.createElement('article')
cartao.className = 'cartao'
 
cartao.innerHTML =´
<articule class="cartao">
    <div class="cartao__conteudo">
        <h3>Times de Futebol </h3>
        <div class="cartao__conteudo__pergunta">
             <p>Qual o time conhecido como Imortal ?<p>
        </div>
    <div class="cartao__conteudo__resposta"></div>
        <p>È o Grêmio<p>
    </div>
    </div>

    container.appendChild(cartao)
´

}