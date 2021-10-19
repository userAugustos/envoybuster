# Envoybuster

A envoy video store

### Features (until now) :triumph:

  ## API

  ![Badge](https://img.shields.io/badge/NODEJS-14.17.4-%23339933?style=for-the-badge&logo=nodejs)

  ![Badge](https://img.shields.io/badge/EXPRESS-4.17.1-%23000000?style=for-the-badge&logo=express)

  ![Badge](https://img.shields.io/badge/YUP-0.32.11-%23000000?style=for-the-badge)

  ![Badge](https://img.shields.io/badge/TYPESCRIPT-4.4.4-%233178C6?style=for-the-badge&logo=typescript)

  ## Front-end

  ![Badge](https://img.shields.io/badge/nodeSass-%23CC6699?style=for-the-badge&logo=sass)

  ![Badge](https://img.shields.io/badge/React-17.0.2-%2361DAFB?style=for-the-badge&logo=react)

  ![Badge](https://img.shields.io/badge/ReactIcons-0.32.11-%23000000?style=for-the-badge)

  ![Badge](https://img.shields.io/badge/Redux-7.2.5-%23764ABC?style=for-the-badge&logo=redux)

  ![Badge](https://img.shields.io/badge/ReduxSaga-1.1.3-%23000000?style=for-the-badge) 


### Como Rodar o projeto

Ao clonar o projeto, entre na */api*, e rode o comando "**yarn**", para baixar as features, após a instalação apenas rode, "**yarn start**"
(se quiser brincar com a Api, rode "**yarn dev**").
Depois, volte *cd ..*, e entre na */envoybuster*, assim como na api, rode o comando "**yarn**, e apóis a instalação apenas rode **yarn start**"

*aah e não vai esquecer hein, o node é 14.17.4, provavelmente qualquer versão a cima funcionará também*

#### Relatório de desenvolvimento

Após ler o desafio, fiz um fluxo do projeto no Notion, vendo, decidi criar uma pequena API, apenas para poder ter um bom controle e validação dos dados, também escolhi o framework que possuo maior domínio (ReactJS), redux e redux-saga, creio que vá facilitar tanto a trabalhar os estados da aplicação, quanto a manutenção ou alterações caso queira mudar algo em relação aos estados e dados que recebo/envio no front-end.
 Pensando até esse momento em um front-end com 2 rotas, Home "/" onde listo todos os filmes e apresento opções como, cadastrar um filme, edita-lo ou remover, modal para adicionar os filmes, e "/:movie", onde listo os detalhes do filme, e apresento mais uma vez, as opções de altera-lo ou remove-lo.
 
 **dia 14/10**: Primeiro dia do desafio, inciei a API com typescript e express, o CRUD é simples e funcional, como era o plano, e acredito que bem feito também, possui as validações que queria inicialmente, e o PATCH, um protocolo HTTP que até então não conhecia, mas pesquisando, percebi que atendia bem ao caso de atualizações de filmes, onde vou permitir atualizar apenas um, ou mais ou todos os dados de um filme.
 Termino o dia testando a API usando insominia, e inciando o projeto front-end com Reactjs e typescript.
 
 **dia 15/10**: Segundo dia, pequenas alterações na api, pensando na opção de adicionar imagem, o link dela; Iniciando o as requests com redux-saga, deixando elas prontas, comecei com Axios, depois percebendo que não tem tanta necessidade, o fetch resolve essas requests muito bem, criei um api.ts na pasta services, acho que ficou bem legal e esta simples e servindo bem, espero que o código esteja ficando legível, algumas coisas a melhorar no Reudx.
 
 **dia 16/10**: terceiro dia, sem grandes atualizações, sai de manhã e tarde, mas pelo menos estou vacinado agora, apenas mudando algumas coisas no saga, e vendo se minha lógica esta indo bem
 
 **dia 17/10**: ok, penúltimo dia, os cards ficaram legais eu acho, e ta bem independente, excluindo e listando os filmes, funcionando bem, usando OOCSS no meu SASS, bom pelo menos até onde conheço (nível iniciante), preciso ler amanhã sobre pra ajustar, antes de enviar o projeto. Fluxo de commits vai se prejudicado por esse sábado, era pra ter revisado o redux de sexta e a home, e subido, mas, seguimos.
 -- ultimo commit aqui antes de ir dormir, lembrei que não tava nem retornando um filme só pelo id, nem retornando o success true/false, ajeitando a api e testando então, agora sim, amanhã, formulários pra criar e editar os filmes, e entregar o projeto, LESGOO
 
 **dia 18/10**: ok, um problema tenebroso com o *"html data-lt-installed="true""*, resolvendo. Continuando sobre o ultimo dia, agora as 21:30, tempo está acabando, mas bom, ADICIONANDO E EDITANDO OS FILMES, parece que foi, nossa, o problema do html resolveu comer umas 4 horas, e eu nem sei o que era, só removi o node_modules e dei um yarn de novo. queria implementar um teste pro form, mas pelo jeito sem tempo :/, bom, agora é estilizar o form, e testar na mão.
 Ok, testado o formulário, claro a estilização dele foi feita às pressas, mas, ficou interessante.
 No fim gostei das estilizações, embora não tenha tido o tempo de revisar a estrutura do meu CSS, apesar dos pesares, empecilhos, foi legal fazer esse teste, algumas pesquisas muito interessantes.



👤 **Felipe Augustos**

- Twitter: [@AugustosUser](https://twitter.com/AugustosUser)
- Linkedin: [Felipe Augustos](https://www.linkedin.com/in/felipe-augustos/)
