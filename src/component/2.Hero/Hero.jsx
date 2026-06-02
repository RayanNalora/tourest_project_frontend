import PrimaryBotton from "../4.primaryBotton/PrimaryBotton";
import "./Hero.css";

const Hero = ({ bgImage, title, description, btn , classname }) => {
  return (
    <div
      className={`hero ${classname}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        {title ? <h1>{title}</h1> : " "} 
        {description ? <p>{description}</p> : " "}
        {btn ? <PrimaryBotton>{btn}</PrimaryBotton> : " "}
      </div>
    </div>
  );
};

export default Hero;
