import './App.css'
import Login from './components/Login'

function App() {

  return (
    <main>
      <section id='logo'>
        <h1 id='zen'>Zen</h1><h1 id='hosty'>Hosty</h1>
      </section>
      <section id='loginPainel'>
        <h2>Login</h2>
        <Login />
      </section>
    </main>
  )
}

export default App
