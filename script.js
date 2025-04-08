document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Senha fixa para o exemplo
    const correctPassword = 'skibidi';

    if (password === correctPassword) {
        // Redireciona para o link do Google Drive
        window.location.href = 'https://drive.google.com/your-link-aqui'; // Substitua pelo link real do Drive
    } else {
        // Mostra mensagem de erro
        errorMessage.style.display = 'block';
    }
});
