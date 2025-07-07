import { Res_card_img } from "./Utlis/images";

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

export default Res_card;
