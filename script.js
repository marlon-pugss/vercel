document.addEventListener("DOMContentLoaded", function () {
    const cepInput = document.getElementById("cepInput");
    const buscarButton = document.getElementById("buscarButton");
    const resultado = document.getElementById("resultado");

    buscarButton.addEventListener("click", function () {
        const cep = cepInput.value.replace(/\D/g, "");

        if (cep.length !== 8) {
            resultado.textContent = "O CEP deve conter 8 dígitos.";
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    resultado.textContent = "CEP não encontrado.";
                } else {
                    resultado.innerHTML = `
                        <h2>Resultado da busca:</h2>
                        <p><strong>CEP:</strong> ${data.cep}</p>
                        <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                        <p><strong>Bairro:</strong> ${data.bairro}</p>
                        <p><strong>Cidade:</strong> ${data.localidade}</p>
                        <p><strong>Estado:</strong> ${data.uf}</p>
                    `;
                }
            })
            .catch(error => {
                resultado.textContent = "Ocorreu um erro ao buscar o CEP.";
            });
    });
});
