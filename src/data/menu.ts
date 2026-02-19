export interface MenuItem {
    id: string;
    name: string;
    description?: string;
    price: number;
    image: string;
    category: 'main' | 'side-dish' | 'proteins' | 'drinks';
}

export const JOLLOF_MENU: MenuItem[] = [
    // MAIN DISHES (10 items)
    {
        id: "main-1",
        name: "Pounded yam and Egusi",
        price: 5000,
        image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&h=400&fit=crop",
        description: "A delicious blend of yam, tomatoes, and spices, perfect for any occasion.",
        category: "main"
    },
    {
        id: "main-2",
        name: "Coconut burger",
        price: 4500,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=400&fit=crop",
        description: "Fragrant burger cooked in rich coconut milk with aromatic spices.",
        category: "main"
    },
    {
        id: "main-3",
        name: "Fried Rice Special",
        price: 4800,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=400&fit=crop",
        description: "Colorful fried rice with mixed vegetables, prawns, and chicken.",
        category: "main"
    },
    {
        id: "main-4",
        name: "Ofada Rice & Stew",
        price: 5500,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&h=400&fit=crop",
        description: "Local brown rice served with spicy ofada stew and assorted meat.",
        category: "main"
    },
    {
        id: "main-5",
        name: "White Rice & Stew",
        price: 3500,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=400&fit=crop",
        description: "Perfectly cooked white rice with rich tomato stew.",
        category: "main"
    },
    {
        id: "main-6",
        name: "Basmati Rice Deluxe",
        price: 5200,
        image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=500&h=400&fit=crop",
        description: "Premium basmati rice with exotic spices and garnish.",
        category: "main"
    },
    {
        id: "main-7",
        name: "Turmeric Rice",
        price: 4200,
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=400&fit=crop",
        description: "Golden turmeric-infused rice with health benefits and great taste.",
        category: "main"
    },
    {
        id: "main-8",
        name: "Vegetable Rice",
        price: 4000,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=400&fit=crop",
        description: "Healthy rice loaded with fresh vegetables and herbs.",
        category: "main"
    },
    {
        id: "main-9",
        name: "Spicy Jollof Rice",
        price: 4800,
        image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&h=400&fit=crop&sat=1.2",
        description: "Extra spicy version of our famous jollof rice for heat lovers.",
        category: "main"
    },
    {
        id: "main-10",
        name: "Mixed Rice Platter",
        price: 6000,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=400&fit=crop&sat=1.1",
        description: "A combination of jollof, fried rice, and coconut rice on one plate.",
        category: "main"
    },

    // SIDE DISHES (10 items)
    {
        id: "side-1",
        name: "Fried Dodo (Plantain)",
        price: 600,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
        description: "Crispy fried plantains, a sweet and savory side dish.",
        category: "side-dish"
    },
    {
        id: "side-2",
        name: "Moi Moi",
        price: 800,
        image: "https://images.unsplash.com/photo-1609501676725-7186f734b2b0?w=500&h=400&fit=crop",
        description: "Steamed bean pudding with fish, eggs, and spices.",
        category: "side-dish"
    },
    {
        id: "side-3",
        name: "Coleslaw",
        price: 500,
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&h=400&fit=crop",
        description: "Fresh cabbage and carrot salad with creamy dressing.",
        category: "side-dish"
    },
    {
        id: "side-4",
        name: "Garden Salad",
        price: 700,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop",
        description: "Mixed greens with tomatoes, cucumber, and vinaigrette.",
        category: "side-dish"
    },
    {
        id: "side-5",
        name: "Steamed Vegetables",
        price: 600,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=400&fit=crop",
        description: "Fresh seasonal vegetables lightly steamed to perfection.",
        category: "side-dish"
    },
    {
        id: "side-6",
        name: "Akara (Bean Cakes)",
        price: 400,
        image: "https://images.unsplash.com/photo-1609501676725-7186f734b2b0?w=500&h=400&fit=crop&hue=30",
        description: "Deep-fried bean cakes, crispy outside and soft inside.",
        category: "side-dish"
    },
    {
        id: "side-7",
        name: "Yam Porridge",
        price: 1200,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=400&fit=crop&hue=20",
        description: "Soft yam cooked in palm oil with vegetables and spices.",
        category: "side-dish"
    },
    {
        id: "side-8",
        name: "Potato Chips",
        price: 800,
        image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=500&h=400&fit=crop",
        description: "Crispy golden potato chips, perfectly seasoned.",
        category: "side-dish"
    },
    {
        id: "side-9",
        name: "Cucumber Salad",
        price: 450,
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&h=400&fit=crop&hue=120",
        description: "Refreshing cucumber slices with onions and dressing.",
        category: "side-dish"
    },
    {
        id: "side-10",
        name: "Boiled Yam",
        price: 900,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=400&fit=crop&sat=0.8",
        description: "Soft boiled yam served with palm oil sauce.",
        category: "side-dish"
    },

    // PROTEINS (10 items)
    {
        id: "protein-1",
        name: "Grilled Chicken",
        price: 1500,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&h=400&fit=crop",
        description: "Juicy grilled chicken marinated in a blend of spices.",
        category: "proteins"
    },
    {
        id: "protein-2",
        name: "Fried Chicken",
        price: 1400,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=500&h=400&fit=crop",
        description: "Crispy fried chicken with golden coating and tender meat.",
        category: "proteins"
    },
    {
        id: "protein-3",
        name: "Grilled Fish",
        price: 2000,
        image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500&h=400&fit=crop",
        description: "Fresh fish grilled to perfection with herbs and spices.",
        category: "proteins"
    },
    {
        id: "protein-4",
        name: "Fried Fish",
        price: 1800,
        image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500&h=400&fit=crop&sat=1.2",
        description: "Crispy fried fish with a golden crust and flaky interior.",
        category: "proteins"
    },
    {
        id: "protein-5",
        name: "Beef Steak",
        price: 2500,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop",
        description: "Tender beef steak grilled to your preference.",
        category: "proteins"
    },
    {
        id: "protein-6",
        name: "Turkey",
        price: 1800,
        image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=500&h=400&fit=crop",
        description: "Succulent turkey meat seasoned and cooked to perfection.",
        category: "proteins"
    },
    {
        id: "protein-7",
        name: "Goat Meat (Asun)",
        price: 2200,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop&hue=15",
        description: "Spicy grilled goat meat with peppers and onions.",
        category: "proteins"
    },
    {
        id: "protein-8",
        name: "Prawns",
        price: 2800,
        image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&h=400&fit=crop",
        description: "Fresh prawns grilled with garlic and herbs.",
        category: "proteins"
    },
    {
        id: "protein-9",
        name: "Beef Suya",
        price: 1600,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&h=400&fit=crop&sat=1.3",
        description: "Spicy grilled beef skewers with suya spice blend.",
        category: "proteins"
    },
    {
        id: "protein-10",
        name: "Chicken Suya",
        price: 1400,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&h=400&fit=crop&sat=1.3",
        description: "Tender chicken skewers with traditional suya seasoning.",
        category: "proteins"
    },

    // DRINKS (10 items)
    {
        id: "drink-1",
        name: "Fresh Orange Juice",
        price: 800,
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&h=400&fit=crop",
        description: "Freshly squeezed orange juice, packed with vitamin C.",
        category: "drinks"
    },
    {
        id: "drink-2",
        name: "Chapman Cocktail",
        price: 1200,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=400&fit=crop",
        description: "Nigerian cocktail with grenadine, cucumber, and citrus fruits.",
        category: "drinks"
    },
    {
        id: "drink-3",
        name: "Zobo Drink",
        price: 600,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=400&fit=crop&hue=300",
        description: "Hibiscus tea with ginger, cucumber, and natural spices.",
        category: "drinks"
    },
    {
        id: "drink-4",
        name: "Tiger Nut Drink",
        price: 700,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&h=400&fit=crop&hue=30",
        description: "Creamy tiger nut milk, naturally sweet and nutritious.",
        category: "drinks"
    },
    {
        id: "drink-5",
        name: "Coca Cola",
        price: 400,
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&h=400&fit=crop",
        description: "Classic Coca Cola, ice cold and refreshing.",
        category: "drinks"
    },
    {
        id: "drink-6",
        name: "Sprite",
        price: 400,
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=500&h=400&fit=crop",
        description: "Crisp lemon-lime soda, perfect for any meal.",
        category: "drinks"
    },
    {
        id: "drink-7",
        name: "Fanta Orange",
        price: 400,
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&h=400&fit=crop&sat=1.5",
        description: "Orange flavored soda with a burst of citrus taste.",
        category: "drinks"
    },
    {
        id: "drink-8",
        name: "Bottled Water",
        price: 200,
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop",
        description: "Pure bottled water, essential for hydration.",
        category: "drinks"
    },
    {
        id: "drink-9",
        name: "Pineapple Juice",
        price: 900,
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&h=400&fit=crop&hue=60",
        description: "Fresh pineapple juice, tropical and sweet.",
        category: "drinks"
    },
    {
        id: "drink-10",
        name: "Watermelon Juice",
        price: 850,
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&h=400&fit=crop&hue=120",
        description: "Refreshing watermelon juice, perfect for hot days.",
        category: "drinks"
    }
]

