// Logica de Heurística Específicas -> Alteração de vizinho

const produtos = [
    { nome: "A", diasProducao: 6, dataEntrega: 9 },
    { nome: "B", diasProducao: 4, dataEntrega: 12 },
    { nome: "C", diasProducao: 8, dataEntrega: 15 },
    { nome: "D", diasProducao: 2, dataEntrega: 8 }
  ];
  
  function calcularAtraso(sequencia) {
    let diasAcumulados = 0;
    let atrasoTotal = 0;
  
    sequencia.forEach(produto => {
      diasAcumulados += produto.diasProducao;
      const atraso = Math.max(diasAcumulados - produto.dataEntrega, 0);
      atrasoTotal += atraso;
    });
  
    return atrasoTotal;
  }
  
  function gerarVizinhos(sequencia) {
    const vizinhos = [];
    
    for (let i = 0; i < sequencia.length - 1; i++) {
      for (let j = i + 1; j < sequencia.length; j++) {
        const novoVizinho = [...sequencia];
        [novoVizinho[i], novoVizinho[j]] = [novoVizinho[j], novoVizinho[i]];
        vizinhos.push(novoVizinho);
      }
    }
  
    return vizinhos;
  }
  
  function encontrarMelhorVizinho(sequenciaInicial) {
    const vizinhos = gerarVizinhos(sequenciaInicial);
    let melhorSequencia = sequenciaInicial;
    let menorAtraso = calcularAtraso(sequenciaInicial);
  
    vizinhos.forEach(vizinho => {
      const atrasoVizinho = calcularAtraso(vizinho);
      if (atrasoVizinho < menorAtraso) {
        menorAtraso = atrasoVizinho;
        melhorSequencia = vizinho;
      }
    });
  
    return { melhorSequencia, menorAtraso };
  }
  
  const solucaoInicial = [produtos[0], produtos[1], produtos[2], produtos[3]];
  console.log("Atraso da solução inicial:", calcularAtraso(solucaoInicial));
  
  const { melhorSequencia, menorAtraso } = encontrarMelhorVizinho(solucaoInicial);
  console.log("Melhor sequência:", melhorSequencia.map(p => p.nome).join(", "));
  console.log("Menor atraso:", menorAtraso);