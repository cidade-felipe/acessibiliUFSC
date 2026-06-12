# UFSC Acessível

Protótipo funcional de Interface e Interação Humano-Computador para planejamento de rotas inclusivas no Campus Reitor João David Ferreira Lima, da UFSC Trindade, em Florianópolis.

## Descrição curta

O projeto simula um produto chamado **UFSC Acessível**, pensado para ajudar estudantes, visitantes, servidores e pessoas estrangeiras a se orientarem no campus com mais autonomia. A aplicação roda direto no navegador, sem backend, usando HTML, CSS e JavaScript puro.

## Problema resolvido

Circular por um campus grande pode ser difícil para pessoas com diferentes necessidades de acessibilidade. O protótipo reduz esse risco ao oferecer um fluxo guiado para escolher origem, destino e perfil de navegação, exibindo rota visual, instruções textuais, alertas e confirmação de chegada.

Na prática, isso aumenta autonomia, reduz esforço cognitivo, melhora previsibilidade do deslocamento e diminui o risco de o usuário depender apenas de tentativa e erro dentro do campus.

## Fluxo principal

1. O usuário acessa a tela de boas-vindas.
2. Escolhe origem e destino dentro do campus.
3. Seleciona um perfil de acessibilidade ou preferência de navegação.
4. Visualiza a rota sugerida no mapa da UFSC.
5. Revisa tempo, distância, nível de acessibilidade, alertas e instruções.
6. Pode abrir a rota em modo texto.
7. Inicia o modo passo a passo.
8. Confirma a chegada ao destino.
9. Pode planejar uma nova rota ou ver o mapa novamente.

## Recursos de acessibilidade implementados

- HTML semântico com `header`, `main`, `section`, `nav`, `form`, `fieldset`, `legend`, `button`, `label`, `ol` e `ul`.
- Link “Pular para o conteúdo principal”.
- Navegação por teclado usando controles nativos.
- Foco visível destacado com `:focus-visible`.
- Radio buttons reais nos cards de perfil.
- Mensagens de erro associadas aos campos por `aria-describedby`.
- Região `aria-live="polite"` para anunciar erros e mudanças importantes.
- Imagem do mapa com texto alternativo.
- Marcadores do mapa como botões acessíveis.
- Alertas com ícone textual, categoria escrita e mensagem, sem depender apenas de cor.
- Modo alto contraste.
- Modo texto da rota, com origem, destino, distância, tempo, passos, alertas e pontos de referência.
- Barra de progresso visual e textual no passo a passo.
- Layout responsivo para desktop, tablet e celular.

## Internacionalização implementada

O idioma padrão é português do Brasil. A interface permite alternar entre:

- PT-BR
- EN

Todos os textos principais são gerados pelo JavaScript a partir de um objeto de traduções, incluindo títulos, botões, rótulos, placeholders, mensagens de erro, instruções, alertas, confirmação e labels ARIA.

## Como executar

Abra o arquivo `index.html` diretamente no navegador. Não é necessário instalar dependências, criar servidor local ou configurar backend.

Estrutura principal:

```txt
index.html
src/css/styles.css
src/js/script.js
assets/mapa_ufsc.jpg
README.md
```

## Justificativa de IHC e acessibilidade

O protótipo aplica visibilidade do estado do sistema ao mostrar etapa atual, mensagens de erro, status da rota calculada e progresso textual no modo passo a passo.

A prevenção de erros aparece nas validações de origem obrigatória, destino obrigatório, origem diferente do destino e perfil obrigatório. Isso reduz retrabalho e evita que o usuário avance com uma rota sem sentido.

A consistência visual e textual é mantida por botões, cards, métricas, alertas e etapas com padrões repetidos. O usuário reconhece a lógica da interface sem precisar reaprender a cada tela.

O reconhecimento em vez de memorização aparece nos selects com nomes e tipos dos locais, nas instruções passo a passo, nos pontos de referência e no modo texto. O usuário não precisa decorar a rota inteira antes de começar.

A redução de carga cognitiva vem do fluxo guiado, das instruções curtas, dos agrupamentos visuais e da separação entre escolha, resultado, navegação e conclusão.

O controle e liberdade do usuário aparecem nos botões para voltar, alterar a rota, ver o mapa novamente e planejar uma nova rota.

A ergonomia física foi considerada com botões grandes, foco visível, navegação por teclado e controles nativos. A ergonomia cognitiva foi considerada com linguagem simples, etapas progressivas e feedback claro.

A acessibilidade foi tratada como parte central do produto: contraste, semântica, foco visível, alto contraste, feedback textual, modo texto do mapa, internacionalização e uso de ARIA quando necessário.

## Dados simulados

Este protótipo utiliza dados simulados para fins acadêmicos. As rotas apresentadas não devem ser usadas como orientação oficial de acessibilidade da UFSC.
