# Projeto Desenvolvido com Node.js com Typescript

Este projeto pode codificar strings em valores ASCII e decodificá-las.

# Para codificar

A string inserida via parâmetro no endpoint, exemplo: (GET) "http://localhost:8080/v1/encoding/suaStringAqui". Irá retornar um valor em ASCII.
![image](https://github.com/luan-lima1/Code-Decoder-ASCII/assets/86292651/e9cf110a-8a6c-4f4e-bbbc-9cd1634dacd4)


# Para decodificar

Este valor deve ser inserido via json no endpoint: (GET) "http://localhost:8080/v1/decoding", da seguinte forma {"ascii": "valor recebido anteriormente"}, e a resposta será a string préviamente codificada.

![image](https://github.com/luan-lima1/Code-Decoder-ASCII/assets/86292651/b8e11c19-5a26-439c-94fe-4388e2b0a0c2)


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

# Para realizar o teste unitário

```bash
  yarn test
  or
  npm run test
```
