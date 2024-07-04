document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let empresas = JSON.parse(localStorage.getItem('empresas')) || [];
    
    if (!Array.isArray(empresas)) {
        empresas = [];
    }

    let novaEmpresa = {
        nome: document.getElementById('nome').value,
        area: document.getElementById('area').value,
        descricao: document.getElementById('descricao').value,
        contato: document.getElementById('contato').value,
        produtosServicos: document.getElementById('produtosServicos').value
    };

    empresas.push(novaEmpresa);
    localStorage.setItem('empresas', JSON.stringify(empresas));
    
    alert('Empresa cadastrada com sucesso!');
    document.getElementById('formCadastro').reset();
});
