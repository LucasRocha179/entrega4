document.addEventListener("DOMContentLoaded", () => {
  const valorInput = document.getElementById("valor");

  valorInput.addEventListener("change", function (event) {
    let valor = event.target.value.replace(/[^\d.,]/g, "");
    const num = parseFloat(valor.replace(",", ".")) || 0;

    event.target.value = num.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  });
});
