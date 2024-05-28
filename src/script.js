// Adiciona um ouvinte de evento ao formulário com o id "tabuadaForm" quando ele é submetido
document.getElementById('tabuadaForm').addEventListener('submit', function (event) {
    // Evita o comportamento padrão de submissão do formulário
    event.preventDefault();

    // Obtém o valor do campo de entrada com o id "numero" e o converte em um número inteiro
    let numero = parseInt(document.getElementById('numero').value);

    // Verifica se o valor inserido é um número válido
    if (!isNaN(numero)) {
        // Chama a função para mostrar a tabuada, passando o número como argumento
        mostrarTabuada(numero);
    }
});

// Define a função para mostrar a tabuada com base no número fornecido
function mostrarTabuada(numero) {
    // Obtém a referência ao elemento onde a tabuada será exibida
    const tabuadaResultado = document.getElementById('tabuadaResultado');

    // Verifica se o número fornecido é maior que zero
    if (numero > 0) {
        // Constrói a estrutura da tabela HTML para exibir a tabuada
        let tabuadaHTML = `
            <h3 class="text-xl font-bold mb-2 text-cyan-900 text-center">Tabuada do ${numero}</h3>
            <table class="w-full mb-4 rounded-lg overflow-hidden border border-cyan-300 shadow-sm">
                <tr class="bg-cyan-700 text-white">
                    <th class="px-4 py-2">Número</th>
                    <th class="px-4 py-2">Resultado</th>
                </tr>`;

        // Loop de 1 a 10 para construir as linhas da tabela com a tabuada
        for (let i = 1; i <= 10; i++) {
            tabuadaHTML += `
                <tr>
                    <td class="border px-4 py-2">${numero} x ${i}</td>
                    <td class="border px-4 py-2">${numero * i}</td>
                </tr>`;
        }

        // Fecha a tabela HTML
        tabuadaHTML += '</table>';

        // Define o conteúdo da tabuada na página
        tabuadaResultado.innerHTML = tabuadaHTML;
    } else {
        // Se o número fornecido não for válido, exibe uma mensagem de erro na página
        tabuadaResultado.innerHTML = '<p class="text-red-500 px-4 py-2 text-center">Por favor, insira um número inteiro válido.</p>';
    }
}
