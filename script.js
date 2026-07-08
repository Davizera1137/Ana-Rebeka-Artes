let carrinho = [];

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalSpan = document.getElementById("total");
  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.produto} - R$${item.preco} 
      <button onclick="removerItem(${index})">❌</button>`;
    lista.appendChild(li);
    total += parseFloat(item.preco);
  });

  totalSpan.innerText = total.toFixed(2);
}

function adicionarCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  atualizarCarrinho();
  alert(`${produto} foi adicionado ao carrinho!`);
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function comprarAgora(produto, preco) {
  alert(`Você comprou ${produto} por R$${preco}!`);
  // Aqui você pode redirecionar para checkout
  // window.location.href = "checkout.html";
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
  } else {
    alert("Compra finalizada com sucesso!");
    carrinho = [];
    atualizarCarrinho();
  }
}

// Ativar botões dos produtos
document.querySelectorAll(".produto").forEach(produtoDiv => {
  const nome = produtoDiv.querySelector("h3").innerText;
  const preco = produtoDiv.querySelector(".preco").innerText.replace("R$", "").replace(",", ".");

  const btnCarrinho = produtoDiv.querySelector("button:nth-of-type(1)");
  const btnComprar = produtoDiv.querySelector("button:nth-of-type(2)");

  btnCarrinho.addEventListener("click", () => adicionarCarrinho(nome, preco));
  btnComprar.addEventListener("click", () => comprarAgora(nome, preco));
});

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
  } else {
    window.location.href = "checkout.html";
  }
}

