document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('imcForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obter os valores dos inputs
        const nome = document.getElementById('nome').value;
        const alturaCm = parseFloat(document.getElementById('altura').value);
        const peso = parseFloat(document.getElementById('peso').value);

        // Converter altura de cm para metros
        const alturaM = alturaCm / 100;

        // Calcular IMC
        const imc = peso / (alturaM * alturaM);

        // Determinar a classificação
        let classification = '';

        if (imc < 16) {
            classification = 'Baixo peso muito grave';
        } else if (imc >= 16 && imc <= 16.99) {
            classification = 'Baixo peso grave';
        } else if (imc >= 17 && imc <= 18.49) {
            classification = 'Baixo peso';
        } else if (imc >= 18.50 && imc <= 24.99) {
            classification = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.99) {
            classification = 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.99) {
            classification = 'Obesidade grau I';
        } else if (imc >= 35 && imc <= 39.99) {
            classification = 'Obesidade grau II';
        } else {
            classification = 'Obesidade grau III';
        }

        // Exibir resultados
        resultDiv.innerHTML = `<p>Nome: ${nome}</p>
                               <p>IMC: ${imc.toFixed(2)}</p>
                               <p>Classificação: ${classification}</p>`;
    });
});
