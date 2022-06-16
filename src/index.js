import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeaderProvider, { HeaderContext } from './providers/auth';

/**
 * Utilizando context API:
 * O Context API é usado para alterar estados de forma global
 * no caso dessa aplicação, o Header deveria mudar de estado toda vez que é logado
 * Pra isso foi criado um provider somente para ele, na qual, é disponibilizado um objeto
 * que trata-se da url e do titulo de uma aba.
 * Ao logar, o estado desse objeto muda, toda vez que a pagina é recarregada, o header verifica se existe a sessao 
 * Caso não exista, esse estado é mudado novamente para Entrar e mudado tambem, a url para /Login
 * Um provider é um provedor, é ele que vai ser disponibilizado para toda a aplicação
 * é criado tambem um contexto, no caso, HeaderContext, e esse contexto começa sendo vazio.
 * O contexto vira uma provider, que recebe os valores dos objetos, juntamente do seu useState
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HeaderProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HeaderProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
