//métodos
class Validator{

    constructor() {
        this.validations = [
            'data-min-length',
            'data-max-length',
            'data-only-letters',
            'data-email-validate',
            'data-required',
            'data-equal',
            'data-password-validate',
            
        ]
    }

    //inicio da validação de todos os campos
    validate(form) {
        //limpa todas as validações antigas
        let currentValidations = document.querySelectorAll('form .error-validation');

        if(currentValidations.length) {
            this.cleanValidations(currentValidations);
        }

        //pegar todos os inputs
        let inputs = form.getElementsByTagName('input');

        //colocar os inputs ek Array (lista)
        let inputsArray = [...inputs];

        //loop para percorrer os inputs do Array(lista)
        inputsArray.forEach(function(input, obj) {
            // fazer validação de acordo com o atributo do input
            for(let i = 0; this.validations.length > i; i++) {
                if(input.getAttribute(this.validations[i]) != null) {

                    // limpa string para saber o método
                    let method = this.validations[i].replace("data-", "").replace("-", "");

                    // valor do input
                    let value = input.getAttribute(this.validations[i])

                    // invoca o método
                    this[method](input,value);

                }

            }
          
        }, this);

    }

    // método para validar se tem um mínimo de carcteres

minlength(input, minValue) {

        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

        if(inputLength < minValue) {
            this.printMessage(input, errorMessage);

        }
    }

//método para validar o máximo de caracteres 

    maxlength(input, maxValue) {

        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;

        if(inputLength > maxValue) {
            this.printMessage(input, errorMessage);
        }
    }

    onlyletters(input) {

        let re = /^[A-Za-z]+$/;;

        let inputValue = input.value;

        let errorMessage = `Este campo não aceita números nem caracteres especiais`;

        if(!re.test(inputValue)) {
          this.printMessage(input, errorMessage);
            }
        }
       
    //método para validar email

emailvalidate(input) {
        let re = /\S+@\S+\.\S+/;

        let email = input.value;

        let errorMessage = `Insira um e-mail no padrão senai@sp.senai.br`;

        if(!re.test(email)) {
            this.printMessage(input, errorMessage);
        }

        //verifica se um campo está igual ao outro
    }

    equal(input, inputName) {

         let inputToCompare = document.getElementsByName(inputName)[0];

         let errorMessage = `Este campo precisa estar igual ao ${inputName}`;

         if(input.value != inputToCompare.value) {
            this.printMessage(input, errorMessage);
         }
        }
     
        required(input) {

            let inputValue = input.value;

            if(inputValue === '') {
                let errorMessage = `Este campo é obrigatório`;

                this.printMessage(input, errorMessage);
            }
        }

        //validar o campo de senha

passwordvalidate(input) {
            let charArr = input.value.split("");
            
            let uppercases = 0;
            let numbers = 0;

            for(let i = 0; charArr.length > i; i++) {
                if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
                    uppercases++;
                } else if(!isNaN(parseInt(charArr[i]))) {
                    numbers++;
                }
            }

            if(uppercases === 0 || numbers === 0) {
                let errorMessage = `A senha precisa ter um caractere maiúsculo e um número`;
                this.printMessage(input, errorMessage);
            }
        }

        //Método para imprimir mensagem de
        printMessage(input, msg) {

            //checa os erros presentes no input
            let errorsQty = input.parentNode.querySelector('.error-validation');

            //Imprime erro se a variável for nula 
            if(errorsQty === null) {
                let template = document.querySelector('.error-validation').cloneNode(true);

                template.textContent = msg;

                let inputParent = input.parentNode;

                template.classList.remove('template');

                inputParent.appendChild(template);
            }
        }

        // remove todas as validações para fazer a checagem novamente 
        cleanValidations(validations) {
            validations.forEach(el => el.remove());
        }

}

function limpaForm(){

    const formulario = document.querySelector('#register-form');
    formulario.reset();
  }
  
    


let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');

let validator = new Validator();

//evento de envio do form para validação

submit.addEventListener('click', function(e) {
    e.preventDefault();

    validator.validate(form);
}); 


const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
//validar telefone
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

const cpfPhone = (event) => {
    let input = event.target
    input.value = cpfMask(input.value)
  }
//validar cpf
const cpfMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{3})(\d)/,"$1.$2")
    value = value.replace(/(\d{3})(\d)/,"$1.$2")
    value = value.replace(/(\d{3})(\d)/,"$1-$2")  
    return value
  }



