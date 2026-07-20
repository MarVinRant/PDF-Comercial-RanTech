# PDF Comercial RanTech

Apresentação comercial premium em HTML/CSS, preparada para envio digital e evolução futura como landing page.

## Arquivos principais

- `index.html`: estrutura semântica das quatro páginas.
- `styles.css`: identidade visual, layout e responsividade.
- `script.js`: comportamento mínimo da página.
- `assets/`: logo, mockup do projeto e QR Code derivados dos materiais fornecidos.
- `export/PDF_Comercial_RanTech.pdf`: PDF final para compartilhamento.

## Editar conteúdo

Atualize textos, links e serviços diretamente no `index.html`. As cores e padrões de espaçamento ficam centralizados no início de `styles.css`, em `:root`.

Antes do envio, substitua o link provisório do WhatsApp (`5500000000000`) por um número oficial no botão da última página. O QR Code foi recortado do banner fornecido; também deve ser validado após a definição do contato final.

## Exportar o PDF novamente

Com Node.js e Playwright disponíveis, execute no diretório do projeto:

```powershell
$env:NODE_PATH='C:\Users\mvran\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules'
$env:BROWSER_PATH='C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
node export-pdf.mjs
```

O arquivo será atualizado em `export/PDF_Comercial_RanTech.pdf`.
