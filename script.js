// 1. O BANCO DE DADOS DA AVENTURA
const cidadesDoParana = {
    // CIDADE INICIAL
    "curitiba": {
        nome: "Curitiba",
        descricao: "Você chegou em Curitiba, capital conhecida por sua organização e parques. Onde você vai primeiro?",
        imagem: "curitiba.jpg", // Nome do seu arquivo de imagem
        opcoes: [
            { texto: "Pegar o trem para o litoral (Morretes)", destino: "morretes" },
            { texto: "Ir para o Oeste ver as Cataratas (Foz do Iguaçu)", destino: "foz_do_iguacu" },
            { texto: "Conhecer a história dos Tropeiros (Lapa)", destino: "lapa" }
        ]
    },
    
    // ROTA LITORAL
    "morretes": {
        nome: "Morretes",
        descricao: "Chegando pelo trem na histórica Morretes, o cheiro de Barreado te convida. O que fazer?",
        imagem: "morretes.jpg",
        opcoes: [
            { texto: "Comer o Barreado e relaxar", destino: "fim_litoral" },
            { texto: "Explorar a Serra do Mar e ir para Guaratuba", destino: "guaratuba" }
        ]
    },
    
    // ROTA OESTE
    "foz_do_iguacu": {
        nome: "Foz do Iguaçu",
        descricao: "As Cataratas! A grandiosidade da natureza te emociona. Você quer explorar o Brasil, o Paraguai ou a Argentina?",
        imagem: "foz.jpg",
        opcoes: [
            { texto: "Visitar a Usina de Itaipu (Brasil)", destino: "itaipu" },
            { texto: "Fazer compras no Paraguai", destino: "fim_foz_compras" }
        ]
    },
    
    // ROTA HISTÓRICA
    "lapa": {
        nome: "Lapa",
        descricao: "Você está na histórica Lapa, palco do Cerco da Lapa. Você se aprofunda na história militar ou na arquitetura colonial?",
        imagem: "lapa.jpg",
        opcoes: [
            { texto: "Visitar o Panteon dos Heróis", destino: "fim_lapa_historia" },
            { texto: "Voltar para o mapa (Curitiba)", destino: "curitiba" }
        ]
    },

    // ESTADOS FINAIS (Finais da Aventura)
    "fim_litoral": {
        nome: "Fim da Aventura (Sabor Litoral)",
        descricao: "A digestão do Barreado te pegou de jeito! A aventura termina aqui, mas você está feliz e satisfeito. **Parabéns!**",
        imagem: "barreado.jpg",
        opcoes: []
    },
    "fim_foz_compras": {
        nome: "Fim da Aventura (Compras)",
        descricao: "Sua mala está cheia de eletrônicos. Você fez um bom negócio! **A aventura termina aqui.**",
        imagem: "sacolas.jpg",
        opcoes: []
    }
    // Adicione mais cidades e finais!
};


// 2. FUNÇÕES DE RENDERIZAÇÃO E NAVEGAÇÃO
const tituloEl = document.getElementById('titulo-cidade');
const descricaoEl = document.getElementById('descricao-cidade');
const imagemEl = document.getElementById('imagem-cidade');
const opcoesEl = document.getElementById('opcoes');

/**
 * Atualiza a interface com os dados da cidade.
 * @param {string} cidadeKey - A chave da cidade no objeto cidadesDoParana.
 */
function exibirCidade(cidadeKey) {
    const cidade = cidadesDoParana[cidadeKey];

    // 1. Atualiza Título, Descrição e Imagem
    tituloEl.textContent = cidade.nome;
    descricaoEl.textContent = cidade.descricao;
    // IMPORTANTE: Você precisa ter uma pasta 'images' com os arquivos 'curitiba.jpg', 'morretes.jpg', etc.
    imagemEl.src = `images/${cidade.imagem}`; 
    
    // 2. Limpa e Gera Novas Opções
    opcoesEl.innerHTML = ''; 

    if (cidade.opcoes && cidade.opcoes.length > 0) {
        cidade.opcoes.forEach(opcao => {
            const button = document.createElement('button');
            button.textContent = opcao.texto;
            // Chama a função 'viajarPara' com o destino da opção
            button.onclick = () => viajarPara(opcao.destino);
            opcoesEl.appendChild(button);
        });
    } else {
        // Se não houver opções (FIM de jogo), adiciona um botão de Recomeçar
        const restartButton = document.createElement('button');
        restartButton.textContent = "Recomeçar Aventura";
        restartButton.onclick = () => viajarPara('curitiba');
        opcoesEl.appendChild(restartButton);
    }
}

/**
 * Lógica de transição entre cidades.
 * @param {string} destinoKey - A chave da próxima cidade.
 */
function viajarPara(destinoKey) {
    if (cidadesDoParana[destinoKey]) {
        exibirCidade(destinoKey);
    } else {
        // Trata chaves inexistentes (opcional)
        alert("Erro: Destino não encontrado no mapa!");
    }
}

