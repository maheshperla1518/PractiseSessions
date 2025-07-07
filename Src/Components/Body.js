import Res_card from "./Res_card";
import { useState } from "react";
import RestCard_list from "./Utlis/Mockdata";



var Body = () => {
  //normal js variable
// var listofrest = [
//   {
//     Id: "3",
//     URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxuDVSOHhkXWd-reUJpUbXg7fK1dN_MD7Zg&s",
//     Resturant_Name: "Haldiram's",
//     Address: "1A/24, H-Block, Sector 63, Noida",
//     location: "Sector 63",
//     City: "Noida",
//     star_rating: "3.9",
//     Cuisines: "North Indian",
//     Phone_Number: "+91 8588000502",
//     offer: "",
//     Cost_for_two: "₹600",
//     Restaurant_Type: "Vegetarian",
//   },
//   {
//     Id: "4",
//     URL: "https://www.thespruceeats.com/thmb/Rci484g2g12snQzgm8DfDAqbGXg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lachcha-paratha-layered-indian-bread-1957343-hero-01-d9a77d131da94bc5ba7d6fe04d806c9b.jpg",
//     Resturant_Name: "Om Sweets & Snacks",
//     Address: "SCO 17, Main Market, Sector 31, Gurgaon",
//     location: "Sector 31",
//     City: "Gurgaon",
//     star_rating: "4.1",
//     Cuisines: "North Indian",
//     Phone_Number: "0124 4271101| 0124 4271102",
//     offer: "BOGO",
//     Cost_for_two: "₹500",
//     Restaurant_Type: "Vegetarian",
//   },
// ]

//State variable --  superfast super powerful react variable

var [Listofrest, setListofrest] = useState(RestCard_list);

  return (
    <div className="app_body">
      <div className="search-box">
        <input type="text" placeholder="Search your favs"></input>
        <button
          className="btn-search"
          // onMouseOver={() => console.log("hello mahesh")}
          //filter logic 
          onClick={()=>{
            var filteredlist = Listofrest.filter(
              (ele)=> ele.star_rating >= 4
            );
            setListofrest(filteredlist);
           //console.log(Listofrest);
          }}
        >
          filter
        </button>
      </div>
      <div className="restuarant-container">
        {/* <Res_card resdata={RestCard_list[0]}/>
        <Res_card resdata={RestCard_list[1]}/>
        <Res_card resdata={RestCard_list[2]}/>
        <Res_card resdata={RestCard_list[3]}/>
        <Res_card resdata={RestCard_list[4]}/>
        <Res_card resdata={RestCard_list[5]}/>
        <Res_card resdata={RestCard_list[6]}/> */}

        {Listofrest.map((ele) => (
          <Res_card key={ele.Id} resdata={ele} />
        ))}

        {/* {for( i=0;i<RestCard_list.lengthi++){
          <Res_card resdata={(i)}/>
        }} */}
      </div>
    </div>
  );
};

export default Body;
