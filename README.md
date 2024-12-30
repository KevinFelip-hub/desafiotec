# Desafio - Dev Tracker

Este projeto é uma aplicação React Native que permite buscar informações de usuários do GitHub e visualizar detalhes como o Perfil e repositórios do desenvolvedor.

---

## 🚀 Funcionalidades

- **Busca de Usuários no GitHub:** Insira o nome de usuário do GitHub para obter informações detalhadas.
- **Exibição do Perfil:** Mostra avatar, nome, email, biografia e estatísticas como seguidores e seguidos.
- **Listagem de Repositórios:** Repositórios ordenados pelo número de estrelas.

---

## 🛠️ Tecnologias Utilizadas

- **React Native:** Framework para criação de apps nativos.
- **Redux Toolkit:** Gerenciamento de estado moderno e eficiente.
- **React Navigation:** Navegação Simples e Intuitiva
- **Async/Await:** Para requisições assíncronas.
- **Axios:** Biblioteca para chamadas HTTP.
- **FontAwesome:** Ícones elegantes para a interface.

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── models/            # Modelos para estruturar dados
├── navigation/        # Configuração do React Navigation
├── redux/             # Configuração de Redux e Slices
├── services/          # Serviços externos (ex.: API GitHub)
├── style/             # Estilos para componentes e telas
├── viewmodels/        # Lógica para conexão entre Redux e Views
├── views/             # Componentes visuais e telas
```

---

## 🔧 Como Rodar o Projeto

**Pré-requisitos:**

- **Node.js:** >= 16.
- **Expo CLI** instalado.
- **Emulador:** Android ou dispositivo físico.

---

##  🚀 Instalação e Execução

### 1º Clone este repositório:

```plaintext
git clone https://github.com/KevinFelip-hub/desafiotec.git
```
Entre no diretório do projeto:
```plaintext
cd desafiotec
```
<br/>

### 2º Instale as dependências:
  Certifique-se de que você tem o Node.js instalado em sua máquina. Depois, execute:

```plaintext
npm install
```
<br/>

### 3º Configure o ambiente de desenvolvimento:

1º Instale o Android Studio com os seguintes componentes:

- Android SDK.<br/>
- Android SDK Platform-Tools.<br/>
- Android Virtual Device (AVD).<br/>
  
2º Configure as variáveis de ambiente:

- Adicione ANDROID_HOME ao seu sistema:

  ```plaintext
  ANDROID_HOME = C:\Users\<SeuUsuario>\AppData\Local\Android\Sdk
  ```
  Atualize o PATH:

  ```plaintext
  %ANDROID_HOME%\platform-tools
  %ANDROID_HOME%\tools
  ```

3º No diretório android/, crie um arquivo local.properties:
  ```plaintext
  sdk.dir=C:/Users/<SeuUsuario>/AppData/Local/Android/Sdk
  ```

###  4º Inicie o servidor Metro:
  O servidor Metro é usado para empacotar o código JavaScript:

```plaintext
npm start
```
###  5º Execute o aplicativo:
  
  🤖 Android:
  <br/>

  1º Certifique-se de que o emulador está ativo ou o dispositivo físico está conectado com Depuração USB ativada.

  2° Execute o comando
```plaintext
npm run android
```

### 6º Verifique o Ambiente: 
Para verificar se o ambiente está configurado corretamente:

```plaintext
npx react-native doctor
```
--- 

## 📞 Contato

Se tiver dúvidas ou sugestões, entre em contato:

- E-mail: devkevinfelip@gmail.com
- GitHub: [KevinFelip-hub](https://github.com/KevinFelip-hub)

---

