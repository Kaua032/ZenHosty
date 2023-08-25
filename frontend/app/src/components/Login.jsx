import './Login.css'

function Login(){
    return (
        <form action="">
            <input id='email' type="email" name='email' placeholder='Email' />
            <input id='password' type="password" name='password' placeholder='Senha' />
            <p id='register'>Não possui uma conta? <a href="">Registre-se</a></p>
            <div id='confirmArea'>
                <button id='entrar'>Entrar</button>
                <div>
                    <hr />
                    <p>ou</p>
                    <hr />
                </div>
                <button id='google'>Faça login com o google</button>
            </div>
        </form>
    )
}

export default Login