// 1. Registrando variáveis com os recursos DOM

const login_button = document.getElementById("login-button")
const register_button = document.getElementById("register-button")
const closed_eye = document.getElementById("closed-eye")
const opened_eye = document.getElementById("opened-eye")

// 2. Criando uma classe orientada ao objeto para fazer a lógica do login
 
class Login{
    // 2.1 Criando uma variável encapsulada para armazenar os e-mail's e as senhas
    #accounts = {}

    // 2.2 Criando um método que tem como objetivo criar contas, as adicionando no #accounts
    addAcount(){

        // 2.3 Registrando mais variáveis para captar o e-mail e senha digitados, e o texto de erro

        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        let error = document.getElementById("error")

        // 2.4 Criando uma regex para criar os padrões de senha

        let regex = /^(?=(?:.*?[A-Z]){3})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/; 

        // 2.5 Uma condição para que todo e-mail criado, termine com @gmail.com

        if(!email.endsWith("@gmail.com")) {

            error.innerText = 'O e-mail precisa terminar com "@gmail.com"!'
            error.style.cssText = "margin-right: 160px;"
            error.style.opacity = 1

            setTimeout(() => {
                error.innerText = "E-mail ou senha incorretos!"
                error.style.opacity = 0},10000)

            return;

        }
        // 2.6 Outra condição para que todo e-mail criado tenha mais de 13 caracteres
        else if(email.length < 13) {
            
            error.innerText = "O e-mail precisa ter mais de 13 caracteres!"
            error.style.cssText = "margin-right: 150px;"
            error.style.opacity = 1

            setTimeout(() => {
                error.innerText = "E-mail ou senha incorretos!"
                error.style.opacity = 0;}, 10000)
        
            return;

        }
        // 2.7 Uma condição para verificar se a senha tem mais de 8 digitos, caso contrário, retorna um erro
        else if (password.length < 8){

            error.innerText = "A senha deve conter no minímo 8 digitos!";
            error.style.cssText = "margin-right: 150px;margin-top:-175px;"
            error.style.opacity = 1;

            setTimeout(() => {
                error.innerText = "E-mail ou senha incorretos!"
                error.style.opacity = 0;},10000)
                
            return;
        }
        // 2.8 Outra condição, utilizando a regex para definir os padrões de senha
        else if (!regex.exec(password)){
            error.innerText = "A senha deve conter no mínimo 3 caracteres em maiúsculo, 2 números e 1 caractere especial!";
            error.style.cssText = "margin-left: 50px; margin-top: -175px; width: 400px;"
            error.style.opacity = 1;
            setTimeout(() => {
                error.innerText = "E-mail ou senha incorretos!"
                error.style.opacity = 0;}, 10000)

            return;
        }
        // 2.9 Uma condição para verificar se a conta já existe
        else if(this.#accounts[document.getElementById("email").value]) { 

            register_button.value = "Esta conta já existe!"

            setTimeout(() => {
                register_button.value = "Registrar"},5000)

            return;
        }

        //2.10 Salvar a conta e logar na página
        this.#accounts[document.getElementById("email").value] = document.getElementById("password").value
        console.log("Registrando e logado.")
   
        return;
        
    }

    // 3. Método para verificar se a conta existe e logar
    verifyAccount(){    

        // 3.1 Se a conta existir, logar, caso contrário, retornar um erro
        if(this.#accounts[document.getElementById("email").value] === document.getElementById("password").value) {

            console.log("Logado.");
            return;
        }
        else{
            error.style.opacity = 1;

            setTimeout(() => {
                error.style.opacity = 0;}, 5000)

            return;
        }
    }
    get Accounts(){
        return this.#accounts;
    }
}


// 4. Registrando a classe numa constante
const login = new Login()

// 5. Utilizando os métodos ao clicar em cada botão

register_button.addEventListener("click", () => {
    login.addAcount()
})

login_button.addEventListener("click", () => {
    login.verifyAccount()
})

// 6. Ao clicar no olho de segurança, deixar a senha escondida ou não
closed_eye.addEventListener("click", () => {
    closed_eye.style.zIndex = 3;
    closed_eye.style.opacity = 0;
    opened_eye.style.opacity = 0.2;
    opened_eye.style.zIndex = 4;
    document.getElementById("password").style.cssText = "-webkit-text-security: none;"
})

opened_eye.addEventListener("click", () => {
    closed_eye.style.zIndex = 4;
    opened_eye.style.opacity = 0
    closed_eye.style.opacity = 0.2
    opened_eye.style.zIndex = 3;
    document.getElementById("password").style.cssText = "-webkit-text-security: disc;"
})
    