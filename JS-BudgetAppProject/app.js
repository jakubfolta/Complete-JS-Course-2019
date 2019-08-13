var budgetController = (function() {
    x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})();

var UIController = (function() {

    // some code

})();

var controller = (function(budgetCtrl, UICtrl) {

    z = budgetController.publicTest(2);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);