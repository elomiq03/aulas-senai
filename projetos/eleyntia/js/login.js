class Validator {

    constructor() {

        this.validations = [ //metodos de validação
            'data-min-length',
            'data-max-length',
            'data-required',
            'data-password-validate',

        ]
    }

    // INICIO DA VALIDAÇÃO DE TODOS OS CAMPOS
    validate(form) {
        //limpa todas as validações antigas
        let currentValidations = document.querySelectorAll('form .error-validation');

        if (currentValidations.length) {
            this.cleanValidations(currentValidations);
        }

        //pegar todos os input
        let inputs = form.getElementsByTagName('input');

        //Colocar os inputs em Array (lista)
        let inputsArray = [...inputs];

        //Loop para percorrer os Array input
        inputsArray.forEach(function (input, obj) {

            //Fazer a validação de acordo com os atributos do input
            for (let i = 0; this.validations.length > i; i++) {
                if (input.getAttribute(this.validations[i]) != null) {

                    //Limpa String para saber o método
                    let method = this.validations[i].replace("data-", "").replace("-", "");

                    //Valor do Input
                    let value = input.getAttribute(this.validations[i])

                    // Invoca o método min-l
                    this[method](input, value);
                }
            }

        }, this);



    }

    //método para validar se tem um mínimo de caracteres
    minlength(input, minValue) {
        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter no mínimo ${minValue} caracteres`;

        if (inputLength < minValue) {
            this.printMessage(input, errorMessage);
        }
    }

    //método para validar se tem um max de caracteres
    maxlength(input, maxValue) {
        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter no máximo ${maxValue} caracteres`;

        if (inputLength > maxValue) {
            this.printMessage(input, errorMessage);
        }
    }



    required(input) {

        let inputValue = input.value;

        if (inputValue === '') {
            let errorMessage = `Este campo é obrigatório!`;

            this.printMessage(input, errorMessage);
        }
    }

    //Validar o campo senha
    passwordvalidate(input) {
        let charArr = input.value.split("");
        let uppercases = 0;
        let numbers = 0;

        for (let i = 0; charArr.length > i; i++) {
            if (charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
                uppercases++;
            } else if (!isNaN(parseInt(charArr[i]))) {
                numbers++;
            }
        }

        if (uppercases === 0 || numbers === 0) {
            let errorMessage = `A senha precisa ter um caractere maiúsculo e um número`;

            this.printMessage(input, errorMessage);
        }
    }

    // Método para imprimir mensagem de erro
    printMessage(input, msg) {
        //checa os erros presentes nos inputs
        let errorsQty = input.parentNode.querySelector('.error-validation');

        //Imprime erro se a varaivel for nula
        if (errorsQty === null) {
            let template = document.querySelector('.error-validation').cloneNode(true);

            template.textContent = msg;

            let inputParent = input.parentNode;

            template.classList.remove('template');

            inputParent.appendChild(template);
        }

    }

    //remover todasas validações para fazer checagem novamente
    cleanValidations(validations) {
        validations.forEach(el => el.remove());
    }
}
function limpaForm() {

    const formulario = document.querySelector('#register-form');
    formulario.reset();
}


let form = document.getElementById('formulario_login');
let submit = document.getElementById('btn-submit');

let validator = new Validator();


//evento de envio do form para validação

submit.addEventListener('click', function (e) {
    e.preventDefault();

    validator.validate(form);

});

