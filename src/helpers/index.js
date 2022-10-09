export const priceFormatter = (number) => {
    let num = String(Number(number).toFixed(2))
    let arr = num.split(".")
    let arr1 = []
    number = arr[0]

    while (number.length >= 3) {
        arr1.unshift(number.slice(-3))
        number = number.slice(0, number.length - 3)
    }
    number.length !== 0 && arr1.unshift(number)
    return arr1.join(" ") + "." + arr[1]
}

export const priceFormatter_2 = (number) => {
    let num = String(Number(number).toFixed(2))
    let arr = num.split(".")
    let arr1 = []
    number = arr[0]

    while (number.length >= 3) {
        arr1.unshift(number.slice(-3))
        number = number.slice(0, number.length - 3)
    }
    number.length !== 0 && arr1.unshift(number)
    return arr1.join(" ")
}

export const groupBy = (key, array) => array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
}, {})

export const fetchTransaction = (transactions, transactionId) => transactions.filter(transaction => transaction.id === transactionId)

export const formatAmount = (amount) => {
    let number = amount.toString().replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "")
    if (number.length < 10){
        return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
    return amount.substring(0, amount.length - 1)
}