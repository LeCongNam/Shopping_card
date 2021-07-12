function Validator(options) {
    var formElement = document.querySelector(options.form);


    if (formElement) {
       options.rules.forEach(function(rule) {
           var inputElement= formElement.querySelector(rule.selector);
           if (inputElement) {
            inputElement.onblur= function() {
                
            }
           }
       });
    }
}



// định nghĩa Rules
Validator.isRequred = function (selector) {
    return {
        selector: selector,
        test: function () {
console.log(123);
        }
    }
}



Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function () {

        }
    }
}