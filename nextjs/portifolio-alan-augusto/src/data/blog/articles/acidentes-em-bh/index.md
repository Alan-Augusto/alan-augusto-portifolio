# Explorando o Monte Carlo Tree Search (MCTS) para Análise de Acidentes de Trânsito em Belo Horizonte

Este artigo nasceu de um trabalho acadêmico em que eu e meu grupo analisamos dados de acidentes de trânsito em Belo Horizonte, utilizando um algoritmo chamado Monte Carlo Tree Search (MCTS). Nosso objetivo era identificar padrões e subgrupos de acidentes que pudessem fornecer insights para políticas de segurança no trânsito. A seguir, vou explicar de maneira prática como o MCTS funciona e mostrar o que encontramos.



### O Contexto: A Situação do Trânsito em Belo Horizonte

Belo Horizonte é uma cidade com uma dinâmica de trânsito complexa, especialmente nas regiões centrais e em horários de pico. De acordo com dados da BHTrans, acidentes são frequentes e alguns locais são mais críticos que outros. Nossa análise usou o MCTS para vasculhar esses dados e entender padrões que podem orientar estratégias de redução de acidentes.

![Figura 1 - Quantidade de Acidentes por Região ao Longo do Tempo](https://i.ibb.co/dfj2RnD/2.png)  
*Figura 1: Histórico de acidentes ao longo do tempo em diferentes regiões de BH*

Assim como visto nesse panorama geral, os acidentes de BH sofreram uma redução drástica após 2012. Isso ocorreu por diversos motivos, como a aplicação da lei seca, implentação de novos radares de velocidade nas vias de acesso rápido e principalmente pela mudança na técnica de coleta de dados pela BH Trans. Mas o que de fato importava para o nosso trabalho era entender a dinâmica dos acidentes e não entender porque os acidentes (ou os dados deles) reduziram.

### A Escolha do MCTS: O que é e Por que Usamos?

O Monte Carlo Tree Search é um algoritmo que explora grandes quantidades de dados para encontrar padrões e tomar decisões. Ele “simula” vários cenários e escolhe os mais promissores, o que é ideal para lidar com dados extensos e complexos, como registros de acidentes. Em vez de simplesmente apresentar estatísticas, o MCTS explora cada ponto de dados (local do acidente, tipo de veículo, horário, etc.) e destaca onde podem estar os principais problemas. 



### Como o MCTS Funciona na Prática?

Imagine o MCTS como uma “árvore de decisões”. Ele começa com um ponto de dados – digamos, o horário e o local de um acidente – e usa isso como base para simular novas “ramificações” e identificar padrões ocultos. Por exemplo, descobrimos que muitos acidentes na região Centro-Sul de Belo Horizonte ocorrem durante o horário de pico e envolvem automóveis. Essas descobertas ajudam a sugerir intervenções direcionadas, como maior fiscalização ou instalação de radares.



### Principais Padrões Identificados com o MCTS

Com o MCTS, conseguimos identificar padrões específicos que são especialmente críticos para a segurança no trânsito. Abaixo estão alguns dos principais subgrupos:

1. **Alta Frequência de Acidentes na Região Centro-Sul**  
   A região Centro-Sul, que concentra áreas comerciais e de grande fluxo, apresentou o maior número de acidentes, especialmente em horários de pico. Descobrimos que, embora seja a área com mais acidentes, a instalação de radares ajudou a reduzir as fatalidades, o que pode ser visto no mapa de calor abaixo.

   ![Figura 2 - Mapa de calor dos acidentes em Belo Horizonte](https://i.ibb.co/Tgs1zQZ/5.png)  
   *Figura 2: Mapa de calor indicando áreas com maior densidade de acidentes.*

2. **Acidentes com Automóveis na Madrugada e nos Finais de Semana**  
   Outro padrão interessante foi a alta frequência de acidentes com automóveis nas madrugadas de sábado. Esse horário pode estar associado ao cansaço e à condução sob efeito de álcool. Como vimos no gráfico a seguir, automóveis são o tipo de veículo mais envolvido em acidentes, o que sugere a necessidade de ações específicas de fiscalização.

3. **Horário de Pico da Tarde e Incidência de Acidentes**  
   Durante o pico da tarde (16h-19h), a concentração de acidentes aumenta consideravelmente. Esse horário mostra um alto índice de abalroamentos, o que pode ser visto na figura abaixo. Os dados sugerem que o aumento do tráfego de veículos e pedestres nesse horário torna as vias mais perigosas.


### Como o MCTS Contribui para Decisões Práticas?

A vantagem do MCTS é que ele permite uma análise profunda e dinâmica dos dados. Em vez de simplesmente observar estatísticas isoladas, o MCTS cria uma visão “navegável” das informações, sugerindo intervenções eficazes para cada subgrupo identificado. Por exemplo, sabendo que automóveis são frequentemente envolvidos em acidentes na madrugada, campanhas de conscientização e aumento da fiscalização nesses horários podem fazer diferença. O algoritmo também aponta para onde concentrar recursos, como na instalação de radares em áreas de maior risco.



### Limitações e Desafios na Análise dos Dados

Nem tudo foi fácil na nossa análise. Um dos grandes desafios foi lidar com dados incompletos – mais de 90% dos registros tinham lacunas, como falta de horário exato. Isso limita a precisão, mas o MCTS ainda conseguiu destacar padrões significativos. Uma coleta de dados mais completa, com sensores de tráfego, poderia enriquecer futuras análises.



### Conclusão: Como o MCTS Pode Ajudar a Reduzir Acidentes em BH?

Aplicar o MCTS aos dados de acidentes foi uma experiência reveladora, mostrando o potencial da análise de dados para guiar políticas de segurança no trânsito. O algoritmo permitiu identificar padrões que ajudam a entender os horários, tipos de veículos e locais com mais incidentes. Sugerimos que a Prefeitura de Belo Horizonte priorize ações específicas, como fiscalização noturna e instalação de radares, especialmente em áreas críticas da região Centro-Sul.

Esse artigo foi uma oportunidade de mostrar como o MCTS – um algoritmo de inteligência artificial – pode ser aplicado em problemas urbanos e melhorar a segurança no trânsito em nossas cidades.