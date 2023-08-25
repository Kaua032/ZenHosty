import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <section id='logo'>
        <h1 id='zen'>Zen</h1><h1 id='hosty'>Hosty</h1>
      </section>
      <section id='loginPainel'>
        <h2>Login</h2>
        <form action="">
          <input id='email' type="email" name='email' placeholder='Email' />
          <input id='password' type="password" name='password' placeholder='Senha' />
          <p id='register'>Não possui uma conta? <a href="">Registre-se</a></p>
          <div>
            <button id='entrar'>Entrar</button>
            <p>ou</p>
            <button id='google'>Google</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default App
