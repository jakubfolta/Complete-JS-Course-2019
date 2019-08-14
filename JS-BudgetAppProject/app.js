// BUDGETY CONTROLLER
var budgetController = (function() {



})();

// UI CONTROLLER
var UIController = (function() {

    // some code

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function() {

        // 1. Get the filled input data
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget in the UI

    })

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13) {
            console.log('ENTER was pressed!');
        }

    })

})(budgetController, UIController);