const cats = [
    {
        id: 1,
        name: "Кольца"
    },
    {
        id: 2,
        name: "Подвески"
    },
    {
        id: 3,
        name: "Серьги"
    }
]

let items = [
    {
        id: 11,
        cat: 2,
        title: "Подвеска",
        price: 5000,
        imageUrl: "/img/img1/11.jpg",
    },
    {
        id: 12,
        cat: 1,
        title: "Кольцо",
        price: 2000,
        imageUrl: "/img/img1/12.jpg",
    },
    {
        id: 13,
        cat: 2,
        title: "Подвеска",
        price: 3500,
        imageUrl: "/img/img1/13.jpg",
    },
    {
        id: 14,
        cat: 3,
        title: "Серьги",
        price: 4000,
        imageUrl: "/img/img1/14.jpg",
    },
    {
        id: 15,
        cat: 2,
        title: "Подвеска",
        price: 6000,
        imageUrl: "/img/img1/15.jpg",
    },
    {
        cat: 2,
        title: "Подвеска",
        price: 5500,
        imageUrl: "/img/img1/16.jpg",
    },
];

export async function getCatalogItems() {
    await new Promise(r => setTimeout(r, 500));
    return items;
}

export async function getCats() {
    await new Promise(r => setTimeout(r, 500));
    return cats;
}