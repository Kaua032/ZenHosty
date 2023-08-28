import './Login.css'
import { useState } from 'react';
import axios from 'axios';

function Login(){

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);

    const response = await axios.get('http://localhost:3000/user', 
      JSON.stringify({email, password}),
      {
        headers: { 'Content-Type' : 'application/json' }
      }
    );
  };

  return (
    <main>
      <section id='logo'>
        <h1 id='zen'>Zen</h1><h1 id='hosty'>Hosty</h1>
      </section>
      <section id='loginPainel'>
        <h2>Login</h2>
        <form action="">
            <input id='email' type="email" name='email' placeholder='Email' required onChange={(e => setEmail(e.target.value))} />
            <input id='password' type="password" name='password' placeholder='Senha' required onChange={(e) => setPassword(e.target.value)} />
            <p id='register'>Não possui uma conta? <a href="./register">Cadastre-se</a></p>
            <div id='confirmArea'>
                <button id='entrar' type='submit' onClick={(e) => handleLogin(e)}>Entrar</button>
                <div>
                    <hr />
                    <p>ou</p>
                    <hr />
                </div>
                <button id='google'>Faça login com o google</button>
            </div>
        </form>
      </section>
    </main>
  );
};

export default Login;