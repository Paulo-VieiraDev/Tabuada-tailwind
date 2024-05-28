document.getElementById('tabuadaForm').addEventListener('submit', function (event) {
    event.preventDefault()
    let numero = parseInt(document.getElementById('numero').value)
    if (!isNaN(numero)) {
        mostrarTabuada(numero)
    }
})

function mostrarTabuada(numero) {
    const tabuadaResultado = document.getElementById('tabuadaResultado');

    if (numero > 0) {
        let tabuadaHTML = `
            <h3 class="text-xl font-bold mb-2 text-cyan-900 text-center">Tabuada do ${numero}</h3>
            <table class="w-full mb-4 rounded-lg overflow-hidden border border-cyan-300 shadow-sm">
                <tr class="bg-cyan-700 text-white">
                    <th class="px-4 py-2">Número</th>
                    <th class="px-4 py-2">Resultado</th>
                </tr>`;

        for (let i = 1; i <= 10; i++) {
            tabuadaHTML += `
                <tr">
                    <td class="border px-4 py-2">${numero} x ${i}</td>
                    <td class="border px-4 py-2">${numero * i}</td>
                </tr>`;
        }

        tabuadaHTML += '</table>';
        tabuadaResultado.innerHTML = tabuadaHTML;
    } else {
        tabuadaResultado.innerHTML = '<p class="text-red-500 px-4 py-2 text-center">Por favor, insira um número inteiro válido.</p>';
    }
}

