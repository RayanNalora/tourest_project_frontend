import './FormContent.css'

const FormContent = ({ title, fields, buttonText , classname}) => {
    return (
      <section className={`contact ${classname}`}>
        <div className="contact-card">
          <h2>{title}</h2>
  
          <form>
            {fields.map((field, index) =>
              field.type === "textarea" ? (
                <textarea
                  key={index}
                  placeholder={field.placeholder}
                  rows="6"
                ></textarea>
              ) : (
                <input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              )
            )}
  
            <button>{buttonText}</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default FormContent;
  