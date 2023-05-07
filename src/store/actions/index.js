import * as Types from "../actionTypes";

import { BACKEND_URL } from "../../constants";

export const getUserNotifications = () => async (dispatch, getState) => {
    try {
        const { user, notifications } = getState().app;

        const res = await fetch(`${BACKEND_URL}/notifications`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            // let unread = data.filter(notification => notification.status === 0)
            // if (unread.length > 0) {
            dispatch({
                type: Types.GET_USER_NOTIFICATIONS,
                payload: data
            });
            // }
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const setNotificationAsRead = (notificationId) => async (dispatch, getState) => {
    try {
        const token = getState().app.user.token;

        const res = await fetch(`${BACKEND_URL}/notifications/as-read/${notificationId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        await res.json();
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const getUser = () => async (dispatch) => {
    try {
        showLoading();

        let chat_id = localStorage.getItem("chat_id");

        let params = window.location.search.split("=");
        if (params.length === 2) {
            if (params[0] === "?chat_id") {
                chat_id = params[1];
            }
        }

        if (chat_id) {
            localStorage.setItem("chat_id", chat_id);
        }

        const res = await fetch(`${BACKEND_URL}/bot-login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id
            })
        });

        const { data } = await res.json();
        dispatch({
            type: Types.GET_USER,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
    hideLoading();
};

export const getUserProcesses = (callback = false) => async (dispatch, getState) => {
    try {
        const user = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.GET_PROCESSES,
                payload: data
            });
            if (callback) {
                callback();
            }
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const getAllProcesses = () => async (dispatch, getState) => {
    try {
        const user = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/all`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.GET_ALL_PROCESSES,
                payload: data
            });
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const getClientProcesses = (clientId) => async (dispatch, getState) => {
    try {
        const user = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/client/${clientId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.GET_CLIENT_PROCESSES,
                payload: data
            });
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const getUserMoneyFlow = () => async (dispatch, getState) => {
    try {
        const user = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/moneyflow`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.GET_MONEY_FLOW,
                payload: data
            });
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const getQueries = () => async (dispatch, getState) => {
    try {
        const user = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/queries`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.GET_QUERIES,
                payload: data
            });
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const getOffers = (callback = false) => async (dispatch, getState) => {
    try {
        const user = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/offers`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.GET_OFFERS,
                payload: data
            });

            if (callback) {
                callback();
            }
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const getCarriers = () => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/carriers`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.GET_CARRIERS,
                payload: data
            });
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const getAllUsers = () => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/users`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.GET_ALL_USERS,
                payload: data
            });
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const getProfits = () => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/profits`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.GET_PROFITS,
                payload: data
            });
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const toggleUserRoles = (carriers, clients) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/carriers/toggle`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                carriers,
                clients
            })
        });

        const { data } = await res.json();
        dispatch({
            type: Types.GET_CARRIERS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const addToCarriers = (id) => async (dispatch, getState) => {
    dispatch({
        type: Types.ADD_TO_CARRIERS,
        payload: id
    });
};

export const removeFromCarriers = (id) => async (dispatch, getState) => {
    dispatch({
        type: Types.REMOVE_FROM_CARRIERS,
        payload: id
    });
};

export const addToClients = (id) => async (dispatch, getState) => {
    dispatch({
        type: Types.ADD_TO_CLIENTS,
        payload: id
    });
};

export const removeFromClients = (id) => async (dispatch, getState) => {
    dispatch({
        type: Types.REMOVE_FROM_CLIENTS,
        payload: id
    });
};

export const changeQueryRate = (id, value) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/queries/changerate/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                value
            })
        });

        const { data } = await res.json();

        dispatch({
            type: Types.CHANGE_QUERY_RATE,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const setQueryRate = (id) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/queries/setrate/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        await res.json();
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const rejectQueryRate = (id) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/queries/rejectrate/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        await res.json();

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const changeOfferRate = (id, buyRate, sellRate) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        let body = {};
        if (buyRate !== undefined) {
            body.buyRate = buyRate;
        }

        if (sellRate !== undefined) {
            body.sellRate = sellRate;
        }

        const res = await fetch(`${BACKEND_URL}/processes/offers/changerate/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        const { data } = await res.json();

        dispatch({
            type: Types.CHANGE_OFFER_RATE,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const setOfferRate = (id) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/offers/setrate/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        await res.json();

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const rejectOfferRate = (id) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/offers/rejectrate/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        await res.json();

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const setProcessCarrier = (id, carrierId) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/setcarrier/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                carrierId: carrierId
            })
        });

        const { success, message } = await res.json();

        if (success) {
            dispatch({
                type: Types.CHANGE_QUERY_CARRIER
            });
            dispatch(getOffers());
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const sendOfferQueries = (id, selectedQueryIds, showConfirmationModal) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/offers/store-all/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                selectedQueryIds: selectedQueryIds
            })
        });

        const { success, message } = await res.json();

        showConfirmationModal(true);

        if (success) {
            dispatch({
                type: Types.SET_OFFER_QUERIES
            });
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const saveProofImage = (id, url) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/queries/proof-image/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                url: url
            })
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.SET_TRANSACTION_PROOF,
                payload: data
            });
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const unsetProofImage = (id, url) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/queries/unset-proof-image/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.SET_TRANSACTION_PROOF,
                payload: data
            });
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const changeQueryStatus = (id, value) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/queries/changestatus/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                value
            })
        });

        const { data } = await res.json();

        dispatch({
            type: Types.CHANGE_QUERY_STATUS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const closeOffer = (offerId) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/offers/closeoffer/${offerId}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const { data } = await res.json();

        dispatch({
            type: Types.CLOSE_OFFER,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};


/**
 * MoneyFlow request
 */

export const getTransactions = () => async (dispatch, getState) => {
    try {
        const user = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/moneyflow`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.GET_TRANSACTIONS,
                payload: data
            });
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const getUserTransactions = (userId) => async (dispatch, getState) => {
    try {
        const user = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/moneyflow/user/transactions/${userId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });

        const { success, message, data } = await res.json();

        if (success) {
            dispatch({
                type: Types.GET_USER_TRANSACTIONS,
                payload: data
            });
        } else {
            dispatch({
                type: Types.USER_ERROR,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const clientGiveMoney = (user_id, amount_usd, amount_uzs, rate) => async (dispatch, getState) => {
    try {
        let { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/moneyflow/client/give`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                user_id, amount_usd, amount_uzs, rate
            })
        });

        await res.json();

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const receiverConfirmMoney = (transactionId) => async (dispatch, getState) => {
    try {
        let { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/moneyflow/receiver/confirm/${transactionId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        await res.json();

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const receiverRejectMoney = (transactionId) => async (dispatch, getState) => {
    try {
        let { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/moneyflow/receiver/reject/${transactionId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        await res.json();

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const giverGiveMoney = (user_id, process_id, amount_usd, amount_uzs, rate) => async (dispatch, getState) => {
    try {
        let { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/moneyflow/giver/give`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                user_id, process_id, amount_usd, amount_uzs, rate
            })
        });

        const { success } = await res.json();

        if (success) {
            dispatch(getAllProcesses());
        }

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const clientConfirmMoney = (transactionId) => async (dispatch, getState) => {
    try {
        let { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/moneyflow/client/confirm/${transactionId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        await res.json();

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const clientRejectMoney = (transactionId) => async (dispatch, getState) => {
    try {
        let { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/moneyflow/client/reject/${transactionId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        await res.json();

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const adminGiveMoney = (user_id, amount_usd, amount_uzs, rate) => async (dispatch, getState) => {
    try {
        let { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/moneyflow/admin/give`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                user_id, amount_usd, amount_uzs, rate
            })
        });

        await res.json();

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const adminTakeMoney = (user_id, amount_usd, amount_uzs, rate) => async (dispatch, getState) => {
    try {
        let { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/moneyflow/admin/take`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                user_id, amount_usd, amount_uzs, rate
            })
        });

        await res.json();

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};


export const takeMoney = (user_id, amount_usd, amount_uzs, rate) => async (dispatch, getState) => {
    try {
        let { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/moneyflow/take`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                user_id, amount_usd, amount_uzs, rate
            })
        });

        await res.json();

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const changeClientDetails = (user_id, payload) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/users/change-details`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                user_id,
                ...payload
            })
        });

        await res.json();
        dispatch(getAllUsers());

    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};

export const deleteProcess = (process_id) => async (dispatch, getState) => {
    try {
        const { token } = getState().app.user;

        const res = await fetch(`${BACKEND_URL}/processes/${process_id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        await res.json();
        dispatch(getQueries());
        dispatch(getOffers());
    } catch (error) {
        dispatch({
            type: Types.USER_ERROR,
            payload: error?.response?.statusText ?? "Error"
        });
    }
};


/**
 * Loading actions
 */

export const showLoading = () => ({
    type: Types.SHOW_LOADING
});

export const hideLoading = () => ({
    type: Types.HIDE_LOADING
});