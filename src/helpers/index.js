import _ from "lodash";

export const groupBy = (key, array) => array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
}, {});

export const fetchTransaction = (transactions, transactionId) => transactions.filter(transaction => transaction.id === transactionId);

export const formatAmount = (amount, float = false, intval = false) => {
    let number = 0;

    if (float) {
        number = amount.toFixed(2).replaceAll(" ", "");
    } else {
        number = amount.toString().replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "");
    }

    if (intval) {
        number = _.round(number, 2);
    }

    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const trimAmount = (amount) => {
    return amount.toString().replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "");
};

export const sumProcessAmount = (processes = false) => {
    if (!processes) {
        return 0;
    }

    if (processes.length === 0) {
        return 0;
    }

    if (processes.length === 1) {
        return processes[0].amount;
    }
    return processes.map(el => el.amount).reduce((prev, curr) => prev + curr);
};

export const groupByDate = (notifications) => {
    return _.groupBy(notifications?.map(notification => ({
        ...notification,
        date: notification.created_at.substr(0, 10)
    })), "date");
};

export const changeNumberSign = (query) => {
    let sign = "";
    let result = query?.amount / query?.exchange_rate - query?.amount / query?.assigned_offer?.buy_rate;
    if (result > 0) {
        sign = "+" + sign;
    } else {
        sign = "-" + sign;
    }

    return sign + (result).toLocaleString("en-US", { style: "currency", currency: "USD" }).replaceAll("-", "");
};

export const getColor = (query) => {
    let result = query?.amount / query?.exchange_rate - query?.amount / query?.assigned_offer?.buy_rate;
    if (result == 0) {
        return "";
    } else if (result > 0) {
        return "green";
    } else {
        return "red";
    }
};