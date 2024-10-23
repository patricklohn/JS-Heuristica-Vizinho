# JS-Heuristica-Vizinho
Solução para encontrar a menor data de atraso de criação de produtos. 

# Resumo do problema:

Dados dos produtos:
Produto A: 6 dias de produção, data de entrega 9
Produto B: 4 dias de produção, data de entrega 12
Produto C: 8 dias de produção, data de entrega 15
Produto D: 2 dias de produção, data de entrega 8
Solução inicial: S = (A, B, C, D)
Dias de produção acumulados: 6, 10, 18, 20.
Atrasos calculados: (0; 0; 3; 12), totalizando 15 dias de atraso.

O que foi feito:
Foi encontrado uma solução com o menor número de dias de atraso utilizando a heurística do vizinho, que envolve a troca da ordem de dois produtos para criar novas soluções "vizinhas". Em seguida, comparar os atrasos gerados por cada solução e escolher a melhor (com menor atraso).