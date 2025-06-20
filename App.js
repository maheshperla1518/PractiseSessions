import React from "react";
import ReactDOM from "react-dom/client";
var Header = () => (
  <div className="headerstyle">
    <img
      className="logo"
      src="https://img.freepik.com/free-vector/quill-pen-logo-template_23-2149852429.jpg?semt=ais_hybrid&w=740"
    ></img>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Support</li>
    </ul>
  </div>
);

var RestCard_list = [
  {
    Id: "0",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9e-rtaoF52xo4u7IPEBCeA9HXjrZkFVzbWA&s",
    Resturant_Name: "Plum By Bent Chair",
    Address: "The Walk, Worldmark 2, Aerocity, New Delhi",
    location: "Aerocity",
    City: "New Delhi",
    star_rating: "4.6",
    Cuisines: "Asian",
    Phone_Number: "011 61495178",
    offer: "",
    Cost_for_two: "₹1800",
    Restaurant_Type: "",
  },
  {
    Id: "1",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxKMm1C28pInn-yKHF3j6kWSOUxAM-dV9EQ&s",
    Resturant_Name: "AIR- An Ivory Region",
    Address:
      "1/83, Third Floor, Club Road, West Punjabi Bagh, Punjabi Bagh, New Delhi",
    location: "Punjabi Bagh",
    City: "New Delhi",
    star_rating: "4.0",
    Cuisines: "North Indian",
    Phone_Number: "011 66103930",
    offer: "",
    Cost_for_two: "₹1000",
    Restaurant_Type: "",
  },
  {
    Id: "2",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9DiVo-DH1TH9Ck9Ui8ZIU11E2PO3ZuaoZg&s",
    Resturant_Name: "Pa Pa Ya",
    Address:
      "Dome, Level 4, Select Citywalk, A-3, District Centre, Saket, New Delhi",
    location: "Saket",
    City: "New Delhi",
    star_rating: "4.5",
    Cuisines: "Asian",
    Phone_Number: "011 66103779",
    offer: "",
    Cost_for_two: "₹2000",
    Restaurant_Type: "",
  },
  {
    Id: "3",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxuDVSOHhkXWd-reUJpUbXg7fK1dN_MD7Zg&s",
    Resturant_Name: "Haldiram's",
    Address: "1A/24, H-Block, Sector 63, Noida",
    location: "Sector 63",
    City: "Noida",
    star_rating: "3.9",
    Cuisines: "North Indian",
    Phone_Number: "+91 8588000502",
    offer: "",
    Cost_for_two: "₹600",
    Restaurant_Type: "Vegetarian",
  },
  {
    Id: "4",
    URL: "https://www.thespruceeats.com/thmb/Rci484g2g12snQzgm8DfDAqbGXg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lachcha-paratha-layered-indian-bread-1957343-hero-01-d9a77d131da94bc5ba7d6fe04d806c9b.jpg",
    Resturant_Name: "Om Sweets & Snacks",
    Address: "SCO 17, Main Market, Sector 31, Gurgaon",
    location: "Sector 31",
    City: "Gurgaon",
    star_rating: "4.1",
    Cuisines: "North Indian",
    Phone_Number: "0124 4271101| 0124 4271102",
    offer: "BOGO",
    Cost_for_two: "₹500",
    Restaurant_Type: "Vegetarian",
  },
  {
    Id: "5",
    URL: "https://media.istockphoto.com/id/889609260/photo/indian-feast-with-butter-chicken-chicken-tandoori-lamb-curry-vegetable-curry-samosas-pakoras.jpg?s=612x612&w=0&k=20&c=H5e015cZrjMeimrjcNEt-mSgF0CpA2hX4nqXYwZa20U=",
    Resturant_Name: "Cake",
    Address: "21, Golf Course Road, Gurgaon",
    location: "Golf Course Road",
    City: "Gurgaon",
    star_rating: "2.8",
    Cuisines: "Bakery",
    Phone_Number: "+91 8860838157",
    offer:
      "30% off on all dine-in and home-delivery orders. Offer on home-delivery only applicable when you order online on Zomato or the restaurant app.",
    Cost_for_two: "₹300",
    Restaurant_Type: "",
  },
  {
    Id: "6",
    Resturant_Name: "Kamat Resturant",
    Cuisines: "North indian, Andhra cusines",
    star_rating: "4.62",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC52b9Onr-ZXTzDWML7oLJjp1E_y5kuRPkfg&s",
    Cost_for_two: "₹300",
  },
  {
    Id: "7",
    Resturant_Name: "KFC",
    Cuisines: "Burger,chicken popcorn, coco-Kola, wings",
    star_rating: "4.89",
    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb89B6Icp3H_QGr5IMxo_bc4HT-X2O33kBkA&s",
    Cost_for_two: "₹400",
  },
];

var Res_card = (props) => {
  var { resdata } = props;
  return (
    <div className="res-card">
      <img className="res-img" alt="res-logo" src={resdata.URL} />
      <h3>{resdata.Resturant_Name}</h3>
      <p>{resdata.Cuisines}</p>
      <h5>{resdata.star_rating}⭐</h5>
      <h4>35 mins</h4>
    </div>
  );
};

var Body = () => {
  return (
    <div className="app_body">
      <div className="search-box">
        <input type="text" placeholder="Search your favs"></input>
        <button>Search</button>
      </div>
      <div className="restuarant-container">
        {/* <Res_card resdata={RestCard_list[0]}/>
        <Res_card resdata={RestCard_list[1]}/>
        <Res_card resdata={RestCard_list[2]}/>
        <Res_card resdata={RestCard_list[3]}/>
        <Res_card resdata={RestCard_list[4]}/>
        <Res_card resdata={RestCard_list[5]}/>
        <Res_card resdata={RestCard_list[6]}/> */}

        {RestCard_list.map((ele) => (
          <Res_card key={ele.index} resdata={ele} />
        ))}

        {/* {for( i=0;i<RestCard_list.lengthi++){
          <Res_card resdata={(i)}/>
        }} */}
      </div>
    </div>
  );
};

var AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
