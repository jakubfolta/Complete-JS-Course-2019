// BUDGETY CONTROLLER
var budgetController = (function() {



})();


// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(inputType).value, // will be either inc or exp
                description: document.querySelector(inputDescription).value,
                value: document.querySelector(inputValue).value,
            }
        }
    }
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // 1. Get the filled input data
        var input = UICtrl.getInput();
        console.log(input);
        var type = UICtrl.getInput.type;
        var description = UICtrl.getInput.description;
        var value = UICtrl.getInput.value;
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget in the UI
        console.log('It works!')
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
         ctrlAddItem();
        }
    })

})(budgetController, UIController);