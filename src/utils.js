export const getTotalExpenses = (expenses) => expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

export const moneyFormat = (amount) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })

    return formatter.format(amount);
}