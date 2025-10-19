const resObj = [
    {
        "info": {
            "id": "1003414",
            "name": "Pizza Hut",
            "cloudinaryImageId": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
            "costForTwo": "₹350 for two",
            "cuisines": ["Pizzas"],
            "avgRating": 4.3,
            "deliveryTime": 50
        }
    },
    {
        "info": {
            "id": "234875",
            "name": "Adil Hotel",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
            "costForTwo": "₹150 for two",
            "cuisines": ["North Indian", "Biryani", "Tandoor"],
            "avgRating": 4.1,
            "deliveryTime": 37
        }
    },
    {
        "info": {
            "id": "630193",
            "name": "Champaran Handi Restaurant",
            "cloudinaryImageId": "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg",
            "costForTwo": "₹200 for two",
            "cuisines": ["North Indian"],
            "avgRating": 3.5,
            "deliveryTime": 43
        }
    },
    {
        "info": {
            "id": "618037",
            "name": "Jai Ganesh Bhojnalaya",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
            "costForTwo": "₹200 for two",
            "cuisines": ["North Indian", "South Indian", "Indian", "Chinese"],
            "avgRating": 4.2,
            "deliveryTime": 42
        }
    },
    {
        "info": {
            "id": "151515",
            "name": "Gupta Bhojnalay",
            "cloudinaryImageId": "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
            "costForTwo": "₹200 for two",
            "cuisines": ["Fast Food", "Indian", "Beverages"],
            "avgRating": 4.5,
            "deliveryTime": 41
        }
    },
    {
        "info": {
            "id": "151648",
            "name": "Mr. Gurung Momo & Chinese Corner",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
            "costForTwo": "₹150 for two",
            "cuisines": ["Momos", "Chinese", "Fast Food"],
            "avgRating": 3.9,
            "deliveryTime": 42
        }
    },
    {
        "info": {
            "id": "615927",
            "name": "Roof 5",
            "cloudinaryImageId": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
            "costForTwo": "₹200 for two",
            "cuisines": ["Indian"],
            "avgRating": 3.8,
            "deliveryTime": 54
        }
    },
    {
        "info": {
            "id": "184424",
            "name": "Sab Ghar Tak Foods",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
            "costForTwo": "₹200 for two",
            "cuisines": ["North Indian", "South Indian", "Chinese", "Beverages", "Fast Food", "Desserts"],
            "avgRating": 4.1,
            "deliveryTime": 46
        }
    },
    {
        "info": {
            "id": "201001",
            "name": "The Spice Route",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
            "costForTwo": "₹300 for two",
            "cuisines": ["Indian", "Tandoor", "Biryani"],
            "avgRating": 4.2,
            "deliveryTime": 45
        }
    },
    {
        "info": {
            "id": "201002",
            "name": "Burger Blast",
            "cloudinaryImageId": "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
            "costForTwo": "₹250 for two",
            "cuisines": ["Burgers", "Fast Food", "Snacks"],
            "avgRating": 4.3,
            "deliveryTime": 38
        }
    },
    {
        "info": {
            "id": "201003",
            "name": "Urban Cafe",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
            "costForTwo": "₹400 for two",
            "cuisines": ["Cafe", "Italian", "Desserts"],
            "avgRating": 4.4,
            "deliveryTime": 50
        }
    },
    {
        "info": {
            "id": "201004",
            "name": "Biryani Junction",
            "cloudinaryImageId": "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
            "costForTwo": "₹280 for two",
            "cuisines": ["Biryani", "Indian", "Tandoor"],
            "avgRating": 4.0,
            "deliveryTime": 44
        }
    },
    {
        "info": {
            "id": "201005",
            "name": "Taco Tales",
            "cloudinaryImageId": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
            "costForTwo": "₹350 for two",
            "cuisines": ["Mexican", "Snacks"],
            "avgRating": 3.8,
            "deliveryTime": 48
        }
    },
    {
        "info": {
            "id": "201006",
            "name": "Sushi World",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1553621042-f6e147245754",
            "costForTwo": "₹600 for two",
            "cuisines": ["Japanese", "Asian"],
            "avgRating": 4.5,
            "deliveryTime": 55
        }
    },
    {
        "info": {
            "id": "201007",
            "name": "The Dosa Factory",
            "cloudinaryImageId": "https://images.pexels.com/photos/5394513/pexels-photo-5394513.jpeg",
            "costForTwo": "₹180 for two",
            "cuisines": ["South Indian", "Fast Food"],
            "avgRating": 3.9,
            "deliveryTime": 35
        }
    },
    {
        "info": {
            "id": "201008",
            "name": "Chaat Corner",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85",
            "costForTwo": "₹120 for two",
            "cuisines": ["Street Food", "Snacks", "Indian"],
            "avgRating": 3.6,
            "deliveryTime": 32
        }
    },
    {
        "info": {
            "id": "201009",
            "name": "Healthy Bite",
            "cloudinaryImageId": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
            "costForTwo": "₹250 for two",
            "cuisines": ["Healthy", "Salads", "Juices"],
            "avgRating": 4.1,
            "deliveryTime": 40
        }
    },
    {
        "info": {
            "id": "201010",
            "name": "Sweet Cravings",
            "cloudinaryImageId": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
            "costForTwo": "₹300 for two",
            "cuisines": ["Desserts", "Bakery", "Cafe"],
            "avgRating": 4.4,
            "deliveryTime": 36
        }
    },
    // New 3 entries below 👇
    {
        "info": {
            "id": "201011",
            "name": "The Curry Bowl",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
            "costForTwo": "₹220 for two",
            "cuisines": ["Indian", "Curry", "Rice Bowls"],
            "avgRating": 3.9,
            "deliveryTime": 39
        }
    },
    {
        "info": {
            "id": "201012",
            "name": "Wrap It Up",
            "cloudinaryImageId": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
            "costForTwo": "₹180 for two",
            "cuisines": ["Wraps", "Fast Food", "Rolls"],
            "avgRating": 4.0,
            "deliveryTime": 34
        }
    },
    {
        "info": {
            "id": "201013",
            "name": "Ocean Breeze Seafood",
            "cloudinaryImageId": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
            "costForTwo": "₹500 for two",
            "cuisines": ["Seafood", "Grill", "Continental"],
            "avgRating": 4.3,
            "deliveryTime": 52
        }
    }
];

export default resObj;
