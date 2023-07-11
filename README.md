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

Para obter mais detalhes sobre a implementação, consulte o código-fonte fornecido neste repositório.

## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

