import "./AboutIntro.css";

const AboutIntro = ({
  title,
  subtitle,
  text,
  image,
  classname
}) => {
  return (
    <section className="about-intro">

      <div className={`about-intro-content ${classname}`}>

        <span>{subtitle}</span>

        <h2>{title}</h2>

        <p>{text}</p>

      </div>

     {image ? 
      <div className="about-intro-image">
      <img src={image} alt={title} />
    </div> : " "}

    </section>
  );
};

export default AboutIntro;
