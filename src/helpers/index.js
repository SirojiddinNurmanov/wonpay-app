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

export const formatAmount = (amount, float = false) => {
    let number = 0
    
    if (float) {
        number = amount.toFixed(2).replaceAll(" ", "")
    } else {
        number = amount.toString().replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "")
    }

    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export const trimAmount = (amount) => {
    return amount.toString().replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "")
}

export const sumProcessAmount = (processes = false) => {
    if (!processes) {
        return 0
    }

    if (processes.length === 0) {
        return 0
    }

    if (processes.length === 1) {
        return processes[0].amount
    }
    return processes.map(el => el.amount).reduce((prev, curr) => prev + curr)
}