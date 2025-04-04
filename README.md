# README.md
## DecolaTech Angular Blog
Este é o meu projeto clonado e melhorado: DecolaTech-angular-blog, Um blog simples construído com Angular.
Clonado a partir de: https://github.com/felipeAguiarCode/angular-blog. . Aqui, registro as mudanças que fiz para adicionar novas funcionalidades e corrigir problemas.


## Visão Geral do Projeto
Com base em quatro componentes principais:
Menu-Title: Mostra o título do blog ("Marvel Blog").

Menu-Bar: Tem links para redes sociais (LinkedIn, Github, Instagram) e o botão para alternar o modo escuro(implementado).

Big-Card: Exibe o post principal (ex.: "Anuncia novo homem de ferro").

Small-Card: Exibe posts menores (ex.: "Novo filme do pantera negra lançado em breve").

O projeto usa Angular 18, com Node.js 22.14.0 e npm 10.9.2, e roda localmente com ng serve.

 ## Histórico de Mudanças
### Adição do Modo Escuro
![image](https://github.com/user-attachments/assets/168bbcd4-8a5c-49e8-afb4-4af7aca3e182)

![image](https://github.com/user-attachments/assets/c7969fd6-6253-4193-bcc0-8ce0f09378c9)


### Objetivo
Queria adicionar a funcionalidade de modo escuro ao blog, permitindo alternar entre os temas claro e escuro com um botão.
Passos Realizados
### 1. Correção de Erros para Rodar o Projeto
Tentei rodar o projeto com ng serve, mas apareceram erros do TypeScript (TS2582) no arquivo node_modules/@types/node/stream/web.d.ts, relacionados a ReadableByteStreamController, ReadableStreamBYOBReader, e ReadableStreamBYOBRequest. Resolvi adicionando "skipLibCheck": true no tsconfig.json, o que ignorou os erros e permitiu que o projeto rodasse em http://localhost:4200.
### Problemas e Soluções
Os erros TS2582 eram causados por uma incompatibilidade entre o @types/node e o Node.js 22.14.0. Tentei atualizar o @types/node para versões mais recentes (20.14.0 e 22.7.4), mas o problema persistiu. Como o blog não usa essas APIs de streams, o skipLibCheck foi suficiente e não afetou o funcionamento.

### 2. Implementação do Modo Escuro
Adicionei um botão no MenuBarComponent para alternar o tema e gerenciei o tema no mesmo componente, usando lifecycle hooks para carregar e salvar a preferência do usuário. Configurei o AppComponent para reaplicar o tema ao carregar a página. No styles.css, criei variáveis CSS para os temas claro e escuro, definindo cores para o background e o texto de cada componente.
### Problemas e Soluções
Erros no AppComponent: Encontrei erros de TypeScript no AppComponent, como Cannot find module '@angular/core', Cannot find name 'OnInit', e Parameter 'savedTheme' implicitly has an 'any' type'. Corrigi ajustando as importações, adicionando a tipagem string | null para savedTheme, e reinstalando as dependências com npm install(algumas vezes tive que deletar a pasta de 'node_modules' 'limpar cache' e reinstalar).

### Estilos não aplicados nos componentes: 
Os componentes não mudavam de cor devido à encapsulação do Angular. Usei :host nos arquivos CSS dos componentes para aplicar as variáveis CSS, garantindo que o background e o texto mudassem.

### Texto não mudava de cor: 
O texto dentro dos componentes não mudava de cor. Adicionei uma regra nos arquivos CSS dos componentes(:host) para que os elementos filhos herdassem a cor do elemento pai.

### Links não mudavam de cor: 
Os links (ex.: "LinkedIn", "Anuncia novo homem de ferro") não mudavam de cor por causa dos estilos padrão do navegador. Criei a variável --link-color no styles.css e use para garantir que os links mudassem de cor no modo escuro.

### 3. Ajustes Finais e Testes
Testei o modo escuro clicando no botão no MenuBarComponent. O background, o texto e os links mudaram corretamente entre os modos claro e escuro. Fechei e reabri o navegador para confirmar que o tema persistia. Fiz ajustes finais inspecionando elementos no navegador para corrigir cores que ainda não mudavam.
### Problemas e Soluções
A encapsulação do Angular dificultou a aplicação dos estilos globais. Pensei em usar um serviço para gerenciar o tema(complexo por enquanto para mim), mas preferi manter a abordagem com componentes e lifecycle hooks, já que achei mais simples para o meu nível.
### Resultado
Consegui implementar o modo escuro com sucesso! Agora, o blog:
Permite alternar entre modo claro e escuro com um botão no MenuBarComponent.

Muda o background, o texto e os links de todos os componentes.

Salva a preferência do usuário, mantendo o tema ao recarregar a página.
