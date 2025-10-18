import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantConatiner
 *      - RestaurantCard
 *          - Img
 *          - Name of Restaurant, Start Rating, Cusine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
*/

const resObj = [
    {
        id: 0,
        resImg: "https://sherohomefood.in/wp-content/uploads/2021/05/SHF_home-slide-1.jpg",
        resName: "Atithi Restaurant",
        cuisine: "Biryani, North Indian, Asian",
        rating: "4.4 star",
        delTime: 38
    },
    {
        id: 1,
        resImg: "https://cdn.sanity.io/images/kbqq3e0r/production/8cab9a549a5bc09e4bcc391632d8640d495f4bd3-1200x667.png?w=3840&q=100",
        resName: "KFC",
        cuisine: "Burger, Fast Food",
        rating: "4.5 star",
        delTime: 28
    },
    {
        id: 2,
        resImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_kaq5y-PxYHhj-fyGwLeAaRgnEBb3wmDyA&s",
        resName: "Subway",
        cuisine: "Subwrap, Toasties",
        rating: "4 star",
        delTime: 40
    },
    {
        id: 3,
        resImg: "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/686e703d7cc50185a9667d87_BBQ_Brisket_1_Jr%20(1).jpg",
        resName: "Burger King",
        cuisine: "Burger, Fast Food",
        rating: "3.8 star",
        delTime: 15
    },
    {
        id: 4,
        resImg: "https://b.zmtcdn.com/data/pictures/2/19241192/ba0ace0f3ce2794fbd54cc762ea3de8f.jpg?fit=around|960:500&crop=960:500;*,*",
        resName: "Barbeque Nation",
        cuisine: "North Indian, Asian",
        rating: "4.5 star",
        delTime: 36
    },
    {
        id: 5,
        resImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MUGh422MCwJkkasAReJ9jLXgxhrlA_ENxw&s",
        resName: "Roti Wala",
        cuisine: "Roti, Parathas",
        rating: "4.2 star",
        delTime: 10
    },
    {
        id: 6,
        resImg: "https://sherohomefood.in/wp-content/uploads/2021/05/SHF_home-slide-1.jpg",
        resName: "Atithi Restaurant",
        cuisine: "Biryani, North Indian, Asian",
        rating: "4.4 star",
        delTime: 38
    },
    {
        id: 7,
        resImg: "https://cdn.sanity.io/images/kbqq3e0r/production/8cab9a549a5bc09e4bcc391632d8640d495f4bd3-1200x667.png?w=3840&q=100",
        resName: "KFC",
        cuisine: "Burger, Fast Food",
        rating: "4.5 star",
        delTime: 28
    },
    {
        id: 8,
        resImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_kaq5y-PxYHhj-fyGwLeAaRgnEBb3wmDyA&s",
        resName: "Subway",
        cuisine: "Subwrap, Toasties",
        rating: "4 star",
        delTime: 40
    },
    {
        id: 9,
        resImg: "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/686e703d7cc50185a9667d87_BBQ_Brisket_1_Jr%20(1).jpg",
        resName: "Burger King",
        cuisine: "Burger, Fast Food",
        rating: "3.8 star",
        delTime: 15
    },
    {
        id: 10,
        resImg: "https://b.zmtcdn.com/data/pictures/2/19241192/ba0ace0f3ce2794fbd54cc762ea3de8f.jpg?fit=around|960:500&crop=960:500;*,*",
        resName: "Barbeque Nation",
        cuisine: "North Indian, Asian",
        rating: "4.5 star",
        delTime: 36
    },
    {
        id: 11,
        resImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MUGh422MCwJkkasAReJ9jLXgxhrlA_ENxw&s",
        resName: "Roti Wala",
        cuisine: "Roti, Parathas",
        rating: "4.2 star",
        delTime: 10
    }
];

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    alt="App Logo"
                    src="https://ziggystore.com/cdn/shop/files/Logo_ZIGGY_RGB.png?v=1709754407&width=2048" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = ({ restaurant }) => {
    const { resImg, resName, cuisine, rating, delTime } = restaurant;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="Restaurant Image"
                src={resImg} />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{delTime} mins</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resObj.map((restaurant) => (<RestaurantCard key={restaurant.id} restaurant={restaurant} />))};
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);