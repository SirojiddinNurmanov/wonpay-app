import { groupBy } from "../helpers";

// export const notifications = [
//     {
//         "datetime": "25.08.2022",
//         "data": [
//             {
//                 title: "Farruh siz taklif qilgan kursga norozi bo'ldi.",
//                 body: "$1 = ￦1 450",
//                 time: "10:25",
//                 type: "query",
//                 isRead: false
//             },
//             {
//                 title: "Farruh siz taklif qilgan kursga norozi bo'ldi.",
//                 body: "$1 = ￦1 450",
//                 time: "10:25",
//                 type: "query",
//                 isRead: false
//             },
//             {
//                 title: "Farruh siz taklif qilgan kursga norozi bo'ldi.",
//                 body: "$1 = ￦1 450",
//                 time: "10:25",
//                 type: "offer",
//                 isRead: false
//             },
//             {
//                 title: "Farruh siz taklif qilgan kursga norozi bo'ldi.",
//                 body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis vel cupiditate illo molestias temporibus enim officiis unde corrupti, necessitatibus esse expedita dolorem eligendi debitis laboriosam.",
//                 time: "10:25",
//                 type: "offer",
//                 isRead: false
//             },
//             {
//                 title: "Farruh siz taklif qilgan kursga norozi bo'ldi.",
//                 body: "$1 = ￦1 450",
//                 time: "10:25",
//                 type: "offer",
//                 isRead: true
//             },
//         ]
//     }
// ]

export const notifications = [];

export const notificationTemplates = [
    {
        "datetime": "25.08.2022",
        "data": [
            {
                title: "<strong>Pul Berish:</strong> Somebody",
                body: "<strong>-3.215,45</strong> +998 99 999 9999",
                time: "10:25",
                type: "offer",
                isRead: false
            }
        ]
    }
];

export const transactions = [
    {
        id: 1,
        type: "query",
        amount_krw: "￦12.500.000",
        amount_usd: null,
        rate: null,
        carrier: "Alisher Alimov",
        status: "pending"
    }, {
        id: 2,
        type: "query",
        amount_krw: "￦13.000.000",
        amount_usd: "$10.000",
        rate: "$1 = ￦1.300",
        carrier: "Alisher Alimov",
        status: "finished"
    },
    {
        id: 3,
        type: "offer",
        amount_krw: "￦1.270.000",
        amount_usd: "$3.000",
        rate: "$1 = ￦1.270",
        carrier: "Mustafo",
        status: "finished"
    },
    {
        id: 4,
        type: "offer",
        amount_krw: "￦1.270.000",
        amount_usd: "$3.000",
        rate: "$1 = ￦1.270",
        carrier: "Mustafo",
        status: "finished"
    }
];

export const groupedTransactions = groupBy("status", transactions);