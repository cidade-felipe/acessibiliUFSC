# AcessibiliUFSC

Protótipo funcional de IHC para planejamento de rotas inclusivas no Campus Reitor João David Ferreira Lima, da UFSC Trindade, em Florianópolis.

O projeto simula um guia acessível de campus. Ele ajuda estudantes, visitantes, servidores e pessoas estrangeiras a escolher origem, destino e perfil de acessibilidade, visualizar uma rota simulada, acompanhar instruções passo a passo e confirmar a chegada.

## Problema Resolvido

Circular em um campus grande pode exigir muita tentativa e erro, principalmente para pessoas com mobilidade reduzida, baixa visão, necessidade de pausas, preferência por instruções simples ou pouca familiaridade com o espaço.

O AcessibiliUFSC reduz essa carga cognitiva com um fluxo guiado, feedback textual, mapa, rota em modo texto, alertas e leitura por voz. Na prática, isso aumenta autonomia, melhora previsibilidade do deslocamento e reduz o risco de uma pessoa depender apenas de orientação visual ou ajuda presencial.

## Fluxo Principal

1. Tela de boas-vindas com apresentação do serviço.
2. Escolha de origem e destino por lista categorizada ou por mapa.
3. Seleção do perfil de acessibilidade.
4. Resultado da rota com mapa, métricas, alertas e instruções.
5. Modo passo a passo com progresso textual e visual.
6. Confirmação de chegada.
7. Opção de planejar nova rota ou voltar ao mapa.

## Recursos Implementados

- Aplicação estática em HTML, CSS e JavaScript puro.
- Interface em português do Brasil e inglês.
- Modo alto contraste.
- Link de pular para o conteúdo principal.
- Navegação por etapas com bloqueio de telas ainda não liberadas.
- Suporte ao voltar e avançar do navegador sem permitir pular etapas obrigatórias.
- Seleção de locais por categorias: centros de ensino, serviços do campus, administração e eventos.
- Alternativa de escolha por mapa interativo.
- Marcadores posicionados sobre `assets/mapa_ufsc.jpg`.
- Rotas simuladas com métricas ajustadas por perfil de acessibilidade.
- Origem e destino fixos no mapa, com deslocamento apenas das etiquetas quando necessário.
- Fonte oficial do mapa indicada na interface, com botão para acessar `https://ufsc.br/mapa-e-enderecos/`.
- Modo texto da rota com origem, destino, tempo, distância, passos, alertas e pontos de referência.
- Leitor de rota por voz usando a Web Speech API do navegador.
- Controles para ler resumo, alertas, modo texto, passo atual e todos os passos.
- Controles de pausar, continuar e parar a leitura.
- Opção de leitura automática ao mudar de passo.
- Servidor estático local opcional em Node.js para testes por URL.
- Ferramenta opcional de screenshot com Playwright em Python.

## Acessibilidade

A acessibilidade é parte central do projeto, não só um detalhe visual.

Recursos presentes:

- HTML semântico com `header`, `main`, `section`, `nav`, `form`, `button`, `label`, `ol`, `ul` e `dl`.
- Regiões `aria-live` para mudanças de estado e status do leitor de rota.
- Foco visível destacado.
- Mensagens de erro associadas aos campos.
- Alertas com categoria textual, ícone e descrição, sem depender apenas de cor.
- Alto contraste com paleta própria.
- Imagem do mapa com texto alternativo.
- Marcadores do mapa como botões acessíveis.
- Radio buttons reais para escolha de perfil.
- Rota em modo texto para reduzir dependência da imagem do mapa.
- Leitor de voz para reforço auditivo das instruções.
- Layout responsivo para desktop, tablet e celular.

Ponto de atenção técnico: os selects visíveis usam uma camada customizada sobre o select original. Isso melhora o acabamento visual, mas precisa ser validado com teclado e leitor de tela real antes da apresentação final.

## Internacionalização

O idioma padrão é PT-BR, com opção de alternar para EN no topo da interface.

A troca de idioma atualiza textos principais, botões, rótulos, mensagens de erro, alertas, instruções, textos de status e labels de acessibilidade.

## Perfis de Rota

O protótipo permite escolher entre perfis como:

- Menos escadas.
- Menos inclinação.
- Mais pontos de descanso.
- Instruções simplificadas.
- Baixa visão.
- Rota padrão.

As métricas de tempo e distância são simuladas, mas variam conforme o perfil escolhido. Isso deixa a experiência mais coerente do que usar um número fixo para todos os casos.

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

O projeto possui uma ferramenta opcional para capturar screenshots, útil para validar layout, responsividade e problemas visuais no mapa.

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
assets/
  logo.svg
  mapa_ufsc.jpg
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

A prevenção de erros aparece nas validações de origem, destino, origem diferente do destino e perfil obrigatório. As etapas bloqueadas também impedem que o usuário chegue a telas sem dados suficientes.

O reconhecimento em vez de memorização aparece nas listas categorizadas, nos marcadores do mapa, nas instruções passo a passo e nos pontos de referência.

A redução de carga cognitiva aparece no fluxo guiado, na separação por etapas, no modo texto, no leitor de rota e nos alertas claros.

O controle e liberdade do usuário aparecem nos botões de voltar, editar rota, usar voltar e avançar do navegador, ver mapa novamente e planejar nova rota.

## Dados Simulados

Este protótipo utiliza dados simulados para fins acadêmicos. As rotas apresentadas não devem ser usadas como orientação oficial de acessibilidade da UFSC.

A imagem do mapa tem fonte indicada como Mapa e Endereços da UFSC: `https://ufsc.br/mapa-e-enderecos/`.
