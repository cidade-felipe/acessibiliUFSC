# AcessibiliUFSC

Protótipo funcional de IHC para planejamento de rotas inclusivas no Campus Reitor João David Ferreira Lima, da UFSC Trindade, em Florianópolis.

O AcessibiliUFSC simula um guia acessível de campus. A pessoa escolhe origem, destino e perfil de acessibilidade, visualiza uma rota simulada no mapa, acompanha alertas e instruções passo a passo, pode usar modo texto e pode ativar leitura por voz para reforço auditivo.

## Problema Resolvido

Circular em um campus grande exige reconhecimento espacial, leitura de placas, memória de caminhos e adaptação a barreiras físicas. Isso pode ser mais difícil para pessoas com mobilidade reduzida, baixa visão, necessidade de pausas, pouca familiaridade com a UFSC ou preferência por instruções mais diretas.

O protótipo reduz essa carga cognitiva ao concentrar escolha de rota, feedback, mapa, texto alternativo e leitura em voz em um fluxo único. Na prática, isso aumenta autonomia, melhora previsibilidade do deslocamento e reduz dependência de ajuda presencial ou interpretação apenas visual do mapa.

## Fluxo Principal

1. Boas-vindas e apresentação do serviço.
2. Escolha de origem e destino por lista categorizada ou mapa interativo.
3. Seleção do perfil de acessibilidade.
4. Resultado da rota com mapa, métricas, alertas e instruções.
5. Passo a passo com progresso textual e visual.
6. Confirmação de chegada.
7. Opção de planejar nova rota ou revisar o mapa.

## Recursos Implementados

- Aplicação estática em HTML, CSS e JavaScript puro.
- Identidade visual com logo em `assets/logo.svg` e nome AcessibiliUFSC.
- Fundo visual neon aplicado como camada externa em todas as telas, mantendo os quadros internos claros e legíveis.
- Interface em português do Brasil, inglês e espanhol.
- Menu de idiomas com nomes fixos: Português (Brasil), English (USA) e Español (España).
- Modo alto contraste.
- Modo leitura para ler conteúdo importante da tela, nomes de botões, contexto de ações e pontos do mapa.
- Leitura de rota por voz usando a Web Speech API do navegador.
- Escolha explícita de voz por idioma quando o navegador oferece vozes compatíveis.
- Navegação por etapas com bloqueio visual e funcional das telas ainda não liberadas.
- Suporte ao voltar e avançar do navegador sem permitir pular etapas obrigatórias.
- Seleção de locais por listas categorizadas, com placeholder real em vez de opção falsa.
- Seleção alternativa por mapa interativo, com orientação sequencial: escolha primeiro a origem, depois o destino.
- Possibilidade de desmarcar origem ou destino clicando novamente no ponto já selecionado no mapa.
- Marcadores maiores no mapa para melhorar leitura em baixa visão.
- Mapa de seleção ampliado, com botão para recolher quando aberto.
- Botão para acessar a fonte oficial do mapa: `https://ufsc.br/mapa-e-enderecos/`.
- Validação imediata de origem, destino e origem diferente do destino.
- Rotas simuladas com tempo e distância ajustados conforme o perfil escolhido.
- Modo texto da rota com origem, destino, tempo, distância, passos, alertas e pontos de referência.
- Controles de leitura para resumo, alertas, modo texto, passo atual e todos os passos.
- Controles para pausar, continuar e parar a leitura.
- Opção de leitura automática ao mudar de passo.
- Servidor estático local opcional em Node.js para testar por URL.
- Ferramenta opcional de screenshots com Playwright em Python.

## Mapa e Fonte Oficial

A imagem base do mapa fica em `assets/mapa_ufsc.jpg`. Ela é usada como referência visual para os marcadores e para a simulação das rotas.

A fonte oficial indicada na interface é a página de Mapa e Endereços da UFSC:

```txt
https://ufsc.br/mapa-e-enderecos/
```

O ícone do botão de mapa usa `assets/map-location-dot.svg`, baseado no Font Awesome Free.

## Acessibilidade

A acessibilidade é parte central do protótipo, não apenas um acabamento visual.

Recursos presentes:

- HTML semântico com `header`, `main`, `section`, `nav`, `form`, `button`, `label`, `ol`, `ul` e `dl`.
- Link de pular para o conteúdo principal.
- Regiões `aria-live` para mudanças de estado, validações e leitura da rota.
- Foco visível destacado.
- Mensagens de erro associadas aos campos.
- Bloqueio de etapas indisponíveis com diferença visual clara.
- Alertas com categoria textual, ícone e descrição, sem depender apenas de cor.
- Alto contraste com paleta própria.
- Imagem do mapa com texto alternativo.
- Marcadores do mapa como botões acessíveis.
- Radio buttons reais para escolha de perfil.
- Rota em modo texto para reduzir dependência da imagem do mapa.
- Leitor de voz para reforço auditivo das instruções.
- Layout responsivo para desktop, tablet e celular.

Ponto de atenção técnico: a qualidade da voz da Web Speech API depende das vozes instaladas no navegador e no sistema operacional. O código tenta escolher a melhor voz por idioma, mas uma API externa de TTS exigiria backend/proxy e chave de serviço para não expor credenciais no front-end.

## Internacionalização

O idioma padrão é PT-BR. A interface também oferece inglês e espanhol.

A troca de idioma atualiza textos principais, botões, rótulos, mensagens de erro, alertas, instruções, status, nomes de locais traduzíveis e labels de acessibilidade. Os nomes do seletor de idioma não são traduzidos pelo idioma ativo para evitar confusão na hora da troca.

## Perfis de Rota

O protótipo permite escolher perfis como:

- Menos escadas.
- Menos inclinação.
- Mais pontos de descanso.
- Instruções simplificadas.
- Baixa visão.
- Rota padrão.

As métricas de tempo e distância são simuladas, mas variam conforme o perfil escolhido. Isso evita uma rota genérica demais e deixa a experiência mais coerente com necessidades diferentes de deslocamento.

## Como Executar

Opção simples, abra `index.html` diretamente no navegador.

Opção recomendada para testes por URL local:

```powershell
node tools\static-server.js
```

Depois acesse:

```txt
http://127.0.0.1:8000
```

Também é possível trocar a porta:

```powershell
$env:PORT=8080
node tools\static-server.js
```

## Screenshots com Playwright

O projeto possui uma ferramenta opcional para capturar screenshots. Ela ajuda a validar layout, responsividade e problemas visuais no mapa.

Se o ambiente ainda não existir:

```powershell
python -m venv venv
.\venv\Scripts\python.exe -m pip install -r requirements.txt
.\venv\Scripts\python.exe -m playwright install chromium
```

Para capturar uma tela:

```powershell
.\venv\Scripts\python.exe tools\screenshot.py --viewport 1920x1080
```

A pasta `venv/` e as imagens em `screenshots/` ficam fora do Git pelo `.gitignore`.

## Estrutura Principal

```txt
index.html
README.md
codex.md
requirements.txt
assets/
  logo.svg
  mapa_ufsc.jpg
  map-location-dot.svg
src/
  css/styles.css
  js/script.js
tools/
  static-server.js
  screenshot.py
instructions/
  instrucoes_codex.md
  trabalho_final_ihc_v2.html.md
```

## Justificativa de IHC

O protótipo aplica visibilidade do estado do sistema ao mostrar etapa atual, progresso, mensagens de erro, status da rota e confirmação de chegada.

A prevenção de erros aparece nas validações de origem, destino, origem diferente do destino e perfil obrigatório. As etapas bloqueadas também impedem que a pessoa chegue a telas sem dados suficientes.

O reconhecimento em vez de memorização aparece nas listas categorizadas, nos marcadores do mapa, nas instruções passo a passo e nos pontos de referência.

A redução de carga cognitiva aparece no fluxo guiado, na separação por etapas, no modo texto, no modo leitura e nos alertas claros.

O controle e liberdade aparecem nos botões de voltar, editar rota, recolher e abrir mapa, usar voltar e avançar do navegador, desmarcar pontos no mapa e planejar nova rota.

## Validações Recomendadas

Antes de apresentar ou entregar, vale testar:

- Navegação só por teclado.
- Troca entre PT-BR, EN e ES em todas as etapas.
- Origem e destino vazios.
- Origem igual ao destino.
- Escolha e remoção de pontos pelo mapa.
- Modo alto contraste.
- Modo leitura em cada idioma.
- Resultado da rota em desktop e celular.
- Zoom do navegador em 200%.

Validação técnica rápida:

```powershell
node --check src\js\script.js
git diff --check
```

## Dados Simulados e Limites

Este protótipo utiliza dados simulados para fins acadêmicos. As rotas, tempos, distâncias e alertas não devem ser usados como orientação oficial de acessibilidade da UFSC.

Fato: a imagem do mapa tem fonte indicada como Mapa e Endereços da UFSC.

Inferência: os dados simulados são suficientes para avaliação de IHC, porque o foco do trabalho é demonstrar fluxo, acessibilidade, feedback, internacionalização e tomada de decisão na interface.

Opinião técnica: para uso real em produção, o próximo passo seria integrar dados oficiais de acessibilidade, validar rotas em campo e substituir ou complementar a Web Speech API por uma solução de TTS com qualidade consistente entre idiomas.
