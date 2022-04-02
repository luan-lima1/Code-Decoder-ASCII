# Projeto back-end com Node.js com Typescript

Este projeto pode codificar strings em valores ASCII e decodificá-las.

# Para codificar

A string inserida via parâmetro no endpoint, exemplo: (GET) "http://localhost:8080/v1/encoding/string". Irá retornar um valor em ASCII.

# Para decodificar

Este valor deve ser inserido via json no endpoint: (GET) "http://localhost:8080/v1/decoding", da seguinte forma {"ascii": "valor recebido"}, e a resposta será a string préviamente codificada.

# Para instalar Dependências do Projeto

```bash
  yarn add
  ou
  npm install
```

# Para executar aplicativo no ambiente de desenvolvimento

```bash
  yarn dev
  or
  npm run dev
```

# Para construir aplicativo

```bash
  yarn build
  or
  npm run build
```

# Para realizar o teste unitário

```bash
  yarn test
  or
  npm run test
```
