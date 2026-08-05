// Função para copiar a chave Pix
function copiarPix() {
  const chave = document.getElementById("pix-chave").innerText;
  navigator.clipboard.writeText(chave).then(() => {
    alert("Chave Pix copiada!");
  });
}

// Funções para abrir e fechar o modal de imagens
function abrirModal(src) {
  document.getElementById("imagemModal").src = src;
  document.getElementById("modal").style.display = "block";
}
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}
