function carregarEmpresas() {
    let empresas = JSON.parse(localStorage.getItem('empresas')) || [];
    let listaEmpresas = document.getElementById('listaEmpresas');
    listaEmpresas.innerHTML = '';

    empresas.forEach(empresa => {
        let divEmpresa = document.createElement('div');
        divEmpresa.className = 'empresa';
        divEmpresa.innerHTML = `
            <h2>${empresa.nome}</h2>
            <p><strong>Área:</strong> ${empresa.area}</p>
            <p><strong>Descrição:</strong> ${empresa.descricao}</p>
            <p><strong>Contato:</strong> ${empresa.contato}</p>
            <p><strong>Produtos e Serviços:</strong> ${empresa.produtosServicos}</p>
        `;
        listaEmpresas.appendChild(divEmpresa);
    });
}

window.onload = carregarEmpresas;
