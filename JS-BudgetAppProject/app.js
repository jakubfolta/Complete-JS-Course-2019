// BUDGETY CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, id;

            // Create new id
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

            // Create new item based on type
            if (type === 'exp') {
                newItem = new Expense(id, des, val);
            } else if (type === 'inc') {
                newItem = new Income(id, des, val);
            }
        },

        // Push new item into data structure
        data.allItems[type].push(newItem);

        // Return new element
        return newItem;
    }
})();


// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addButton: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.addButton).addEventListener('click', ctrlAddItem)
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        })

    };

    var ctrlAddItem = function() {
        // 1. Get the filled input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller
        budgetCtrl.addItem(input.getInput.type, input.getInput.description, input.getInput.value)
        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget in the UI
    };

    return {
        init: function() {
            console.log('Initialize Listeners...')
            setupEventListeners();
        }
    };+


})(budgetController, UIController);

controller.init()








