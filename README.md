Web Scrapper Iesb

Um bot para pegar os boletos da faculdade.

Para rodar na sua máquina:
- Clone o repositório
- Rode o comando ```npm install```
- Crie um arquivo .env semelhante a esse:
```
LOGIN=seu_login
SENHA=sua_senha
USER=seu_user_windows
```
- Rode o comando ```yarn start``` ou ```npm start``` dependendo do seu gerenciador de dependências do Node


###### Obs. caso não esteja usando o windows, altere o path onde o chrome está instalado e o path de destino do boleto (e também não será necessária a variável USER no .env)
###### Obs. caso também queira utilizar o chromium, apenas apague as linhas 11 e 12 no index.js
