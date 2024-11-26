// Seleciona todos os elementos de símbolos
const symbols = document.querySelectorAll('.symbol');
const output = document.getElementById('output');
const deleteButton = document.getElementById('delete-button');
const clearButton = document.getElementById('clear-button');

// Inicializa a frase vazia
let phrase = "";

// Adiciona um evento de clique a cada símbolo
symbols.forEach(symbol => {
    symbol.addEventListener('click', () => {
        // Obtém a letra correspondente do atributo 'data-char'
        const char = symbol.getAttribute('data-char');
        // Adiciona a letra à frase
        phrase += char;
        // Atualiza o conteúdo da div de saída
        updateOutput();
    });
});

// Atualiza o conteúdo da div de saída
function updateOutput() {
    if (phrase) {
        output.textContent = phrase;
    } else {
        output.textContent = "Nenhum símbolo foi clicado ainda.";
    }
}

// Evento para deletar a última letra da frase
deleteButton.addEventListener('click', () => {
    if (phrase.length > 0) {
        // Remove o último caractere da frase
        phrase = phrase.slice(0, -1);
        updateOutput();
    }
});

// Evento para limpar a frase inteira
clearButton.addEventListener('click', () => {
    phrase = "";  // Reseta a frase
    updateOutput();
});
