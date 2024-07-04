document.getElementById('btn-pesquisar').addEventListener('click', function() {
    const servico = document.getElementById('tipo-servico').value.toLowerCase();
    const produto = document.getElementById('tipo-produto').value.toLowerCase();
    const pesquisa = document.getElementById('barra-pesquisa').value.toLowerCase();

    let empresas = JSON.parse(localStorage.getItem('empresas')) || [];
    let resultados = empresas.filter(empresa => {
        let match = true;

        if (servico && !empresa.produtosServicos.toLowerCase().includes(servico)) {
            match = false;
        }
        if (produto && !empresa.produtosServicos.toLowerCase().includes(produto)) {
            match = false;
        }
        if (pesquisa && !(
            empresa.nome.toLowerCase().includes(pesquisa) ||
            empresa.descricao.toLowerCase().includes(pesquisa) ||
            empresa.contato.toLowerCase().includes(pesquisa) ||
            empresa.produtosServicos.toLowerCase().includes(pesquisa)
        )) {
            match = false;
        }

        return match;
    });

    mostrarResultados(resultados);
});

function mostrarResultados(resultados) {
    const resultadosDiv = document.getElementById('resultados-pesquisa');
    resultadosDiv.innerHTML = '';

    if (resultados.length === 0) {
        resultadosDiv.innerHTML = '<p>Nenhuma empresa encontrada.</p>';
        return;
    }

    resultados.forEach(empresa => {
        const divEmpresa = document.createElement('div');
        divEmpresa.className = 'empresa';
        divEmpresa.innerHTML = `
            <h2>${empresa.nome}</h2>
            <p><strong>Área:</strong> ${empresa.area}</p>
            <p><strong>Descrição:</strong> ${empresa.descricao}</p>
            <p><strong>Contato:</strong> ${empresa.contato}</p>
            <p><strong>Produtos e Serviços:</strong> ${empresa.produtosServicos}</p>
        `;
        resultadosDiv.appendChild(divEmpresa);
    });
}

