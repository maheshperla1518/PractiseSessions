import { Logo_url } from "./Utlis/images";

var Header = () => (
  <div className="headerstyle">
    <img
      className="logo"
      src={Logo_url}
    ></img>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Support</li>
    </ul>
  </div>
);

export default Header;


