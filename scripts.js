document.getElementById('formularioCadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value.trim();
    var idade = document.getElementById('idade').value.trim();
    var sexo = document.getElementById('sexo').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefone = document.getElementById('telefone').value.trim();

    if (nome === '' || idade === '' || sexo === '' || email === '' || telefone === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var padraoEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!padraoEmail.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return;
    }
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'indexx.html';
});
