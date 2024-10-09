// Seleção dos botões pelo ID
const funcionarioBtn = document.getElementById('funcionarioBtn');
const gerenteBtn = document.getElementById('gerenteBtn');
const adminBtn = document.getElementById('adminBtn');

// Verificação se os botões foram corretamente capturados
if (funcionarioBtn && gerenteBtn && adminBtn) {
    console.log("Botões encontrados");
    // Redirecionamento direto para cada página de login ao clicar no botão correspondente
    
    funcionarioBtn.addEventListener('click', () => {
        alert('Redirecionando para login do Funcionário');
        window.location.href = 'login-funcionario.html';
    });

    gerenteBtn.addEventListener('click', () => {
        alert('Redirecionando para login do Gerente');
        window.location.href = 'login-gerente.html';
    });

    adminBtn.addEventListener('click', () => {
        alert('Redirecionando para login do Administrador Master');
        window.location.href = 'login-admin.html';
    });

} else {
    console.log("Erro ao capturar os botões.");
}

function acessarFuncionario() {
    // Simulação de verificação de credenciais
    const email = document.getElementById('emailFuncionario').value;
    const password = document.getElementById('passwordFuncionario').value;

    if (email === 'funcionario@wayne.com' && password === 'func123') {
        window.location.href = 'dashboard-funcionario.html';
    } else {
        alert('Senha ou e-mail errado. Por favor, tente novamente.');
    }
}

function acessarGerente() {
    // Simulação de verificação de credenciais
    const email = document.getElementById('emailGerente').value;
    const password = document.getElementById('passwordGerente').value;

    if (email === 'gerente@wayne.com' && password === 'ger123') {
        window.location.href = 'dashboard-gerente.html';
    } else {
        alert('Senha ou e-mail errado. Por favor, tente novamente.');
    }
}

function acessarAdmin() {
    // Simulação de verificação de credenciais
    const email = document.getElementById('emailAdmin').value;
    const password = document.getElementById('passwordAdmin').value;

    if (email === 'admin@wayne.com' && password === 'adm123') {
        window.location.href = 'dashboard-admin.html';
    } else {
        alert('Senha ou e-mail errado. Por favor, tente novamente.');
    }
}