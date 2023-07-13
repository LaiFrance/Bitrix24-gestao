# Bitrix24-gestao
Integração do Sistema Web com o Bitrix24

🚀 Projeto Bitrix24 Integration

Este projeto tem como objetivo criar uma integração entre a plataforma de gestão Bitrix24 e um Sistema Web, com o propósito de apresentar um resumo visual das horas trabalhadas por departamento e colaborador.

## Clonando o Projeto

Siga as instruções abaixo para clonar o projeto em seu ambiente local:

1. Abra o terminal do seu sistema operacional.

2. Navegue até o diretório em que deseja clonar o projeto.

3. Execute o seguinte comando para clonar o repositório:

   ```
   git clone https://github.com/LaiFrance/Bitrix24-gestao.git
   ```

4. Aguarde até que o processo de clonagem seja concluído.

## Instalando as Dependências

Após clonar o projeto, siga as instruções abaixo para instalar as dependências necessárias:

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode verificar a versão instalada executando o seguinte comando no terminal:

   ```
   node -v
   ```

   Se o Node.js não estiver instalado, faça o download e a instalação a partir do site oficial do Node.js.

2. Navegue até o diretório raiz do projeto clonado.

3. Execute o seguinte comando para instalar as dependências do projeto:

   ```
   npm install
   ```

4. Aguarde até que o processo de instalação das dependências seja concluído.

Após concluir essas etapas, você estará pronto para executar e utilizar o projeto Bitrix24-gestao em seu ambiente local.

## ℹ️ Informações Gerais

### Plataforma Bitrix24

🔗 [Bitrix24](https://www.bitrix24.com/)

A plataforma Bitrix24 é uma ferramenta de gestão de projetos e colaboração. Neste projeto, utilizaremos a API fornecida pelo Bitrix24 para ler as informações inseridas na plataforma. A documentação da API pode ser encontrada em 🔗 [Bitrix24 REST API](https://training.bitrix24.com/rest_help).

Este é um projeto que utiliza as seguintes tecnologias:

## ![HTML](https://img.icons8.com/color/48/000000/html-5--v1.png) HTML

HTML (HyperText Markup Language) é a linguagem de marcação padrão para a criação de páginas da web. É utilizada para estruturar o conteúdo e os elementos de uma página web.

## ![CSS](https://img.icons8.com/color/48/000000/css3.png) CSS

CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para controlar a apresentação visual de documentos em HTML. Ele permite definir o layout, cores, fontes e outros aspectos visuais de uma página.

## ![JavaScript](https://img.icons8.com/color/48/000000/javascript--v1.png) JavaScript

JavaScript é uma linguagem de programação de alto nível e interpretada que adiciona interatividade e comportamento às páginas web. É amplamente utilizado para criar e manipular elementos dinâmicos em uma página, validar formulários, criar animações e muito mais.

## API do Bitrix24

O Bitrix24 é uma plataforma de gestão de relacionamento com o cliente (CRM) baseada em nuvem. Ele fornece uma API (Interface de Programação de Aplicativos) que permite integrar o Bitrix24 com outras aplicações e sistemas.
Através da API do Bitrix24, podemos enviar e receber dados, automatizar processos e interagir com as informações armazenadas no CRM, facilitando a integração do sistema com outras partes do projeto.

## ![Axios](https://img.icons8.com/ios-filled/50/000000/axios.png) Axios

Axios é uma biblioteca JavaScript baseada em Promise que permite realizar requisições HTTP a partir do navegador ou de um servidor Node.js. É amplamente utilizada para facilitar a comunicação com APIs externas.
Neste projeto, utilizamos o Axios para realizar requisições HTTP à API do Bitrix24. Ele nos ajuda a fazer solicitações, passando os parâmetros necessários e obtendo as respostas da API.
O Axios simplifica o processo de comunicação com a API do Bitrix24, fornecendo métodos convenientes para lidar com as requisições e respostas, além de suportar funcionalidades como autenticação, manipulação de erros e interceptadores de requisição e resposta.


### Sistema Web

O Sistema Web será integrado com o Bitrix24 por meio da API, permitindo a leitura das informações relevantes. Na página web, será apresentado um resumo do dia atual, destacando as seguintes informações:

✅ Total de horas trabalhadas até o momento da consulta, considerando todos os registros na plataforma Bitrix24.

✅ Hierarquia dos departamentos e colaboradores, mostrando a distribuição das horas trabalhadas em cada nível hierárquico.

## 📝 Instruções

Aqui estão as instruções para realizar as etapas necessárias nos sistemas envolvidos:

### Plataforma Bitrix24

1. Crie uma conta gratuita na plataforma Bitrix24.
2. Crie Grupos de Trabalho na plataforma (é recomendado criar mais de um Grupo para permitir seleção no Sistema Web).
3. Após a criação dos Grupos de Trabalho, crie cartões de tarefas para registrar as informações com horas.
4. Para registrar o tempo de execução de uma tarefa, habilite a opção "Rastreamento de tempo" ao criar o cartão e clique no botão "Iniciar Gerenciador de Tempo".
5. O tempo de execução de cada tarefa será utilizado pelo Sistema Web para exibição das informações.

## 💻 Desenvolvimento

O desenvolvimento deste projeto envolve a integração com a API do Bitrix24 para leitura das informações relevantes, bem como a criação de um Sistema Web para apresentar o resumo das horas trabalhadas.
## Documentação - Solicitações no Script JavaScript

A seguir, você encontrará uma explicação das principais solicitações feitas no script JavaScript para a página HTML .

## Arquivo HTML 

O arquivo HTML fornecido contém uma estrutura básica para uma página web que exibe um relatório de horas de funcionários de diferentes departamentos. A página possui um menu de navegação, um formulário de seleção de departamento e duas tabelas onde os dados serão preenchidos dinamicamente.

## Solicitações no arquivo "script.js"

### 1. Carregar Departamentos

A função `carregarDepartamentos()` é chamada quando o botão "BUSCAR" é clicado. Essa função é responsável por carregar os departamentos disponíveis a partir de uma fonte de dados e preencher o elemento `<select>` no formulário.

```javascript
function carregarDepartamentos() {
  // Implementação da lógica para carregar os departamentos
}
```

### 2. Preencher Tabela Bitrix24

A função `preencherTabelaBitrix24(dados)` é responsável por preencher a tabela com o ID "tabelaBitrix24" com os dados fornecidos. Os dados são passados para a função como um parâmetro `dados` no formato adequado.

```javascript
function preencherTabelaBitrix24(dados) {
  // Implementação da lógica para preencher a tabela "tabelaBitrix24" com os dados fornecidos
}
```

### 3. Preencher Outra Tabela

A função `preencherOutraTabela(dados)` é responsável por preencher a tabela com o ID "outraTabela" com os dados fornecidos. Os dados são passados para a função como um parâmetro `dados` no formato adequado.

```javascript
function preencherOutraTabela(dados) {
  // Implementação da lógica para preencher a tabela "outraTabela" com os dados fornecidos
}
```
#### Exemplo de utilização
Suponhamos que você deseje obter o departamento do usuário através da rota 

[https://b24-4qk6uy.bitrix24.com.br/rest/4/dzcurri03cfeld8c/user.get.json?UF_DEPARTMENT=1](https://b24-4qk6uy.bitrix24.com.br/rest/4/dzcurri03cfeld8c/user.get.json?UF_DEPARTMENT=1)

Essa rota específica retorna o departamento do usuário quando o parâmetro UF_DEPARTMENT é definido como 1.

Você pode configurar um webhook para receber uma notificação sempre que o departamento do usuário for obtido. A notificação enviada para o seu endpoint conterá os dados do departamento em formato JSON.

No seu sistema, você pode receber a notificação no endpoint configurado e realizar ações como armazenar o departamento em um banco de dados, enviar notificações internas ou iniciar um fluxo de trabalho automatizado com base nas informações recebidas.

## Considerações Finais

As solicitações descritas acima são parte do script JavaScript utilizado na página HTML fornecida. Essas funções são responsáveis por carregar os departamentos disponíveis, preencher as tabelas com os dados adequados e manipular as informações exibidas na página

## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

