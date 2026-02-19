export  interface MenuItem {
    'id': string;
    'name': string;
    'description'?: string;
    'price': number;
    'image': string;
    'category': 'main' | 'side-dish'| 'proteins';

}

export const JOLLOF_MENU: MenuItem[] = [
    {
        "id": "1",
        "name": " Party smoky Jollof Rice",
        "price": 5000,
        "image": "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26",
        'description': "A delicious blend of rice, tomatoes, and spices, perfect for any occasion.",
        "category": "main"
    },
    {
        "id": "2",
        "name": "fried dodo and plantain ",
        "price": 600,
        "image": "https://images.unsplash.com/photo-162123456789-abcdef123456",
        'description': "Crispy fried plantains, a sweet and savory side dish that complements any meal.",
        "category": "side-dish"
    },
    {
        "id": "3",
        "name": "grilled chicken",
        "price": 1500,
        "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
        'description': "Juicy grilled chicken marinated in a blend of spices, perfect for any meal.",
        "category": "proteins"
    }
]

