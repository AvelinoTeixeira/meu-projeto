import {useState} from 'react'

function Condicional() {
    const [email, setEmail] = useState()
    const [useEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function LimparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..." onChange={(e) => setEmail(e.target.value)}></input>
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
                {useEmail && (
                    <div>
                        <p>O e-mail do usuário é:{useEmail}</p>
                        <button onClick={LimparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}


export default Condicional