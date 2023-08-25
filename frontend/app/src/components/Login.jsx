import './Login.css'

function Login(){
    return (
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
    )
}

export default Login