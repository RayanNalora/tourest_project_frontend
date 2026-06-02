import "./Container.css";


const Container = ({ title , text, images, reverse , classname }) => {
  return (
    <div className={`destination ${reverse ? "reverse" : ""} ${classname}`}>
      
      {/* النص */}
      <div className="text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      {/* الصور */}
      <div className="images">
        {images?.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </div>

    </div>
  );
};

export default Container;
