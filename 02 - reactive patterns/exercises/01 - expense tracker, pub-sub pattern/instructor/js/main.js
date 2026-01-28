import './components/expense-card.js'
import './components/expenses-container.js'

import expenses from './pubsub-broker.js';

// wire expenseContainer's expenses attribute to the expenses publisher
const expenseContainer = document.querySelector('expense-container');

expenses.subscribe("update", (expenses) => {
    expenseContainer.setAttribute('expenses', JSON.stringify(expenses));
});


