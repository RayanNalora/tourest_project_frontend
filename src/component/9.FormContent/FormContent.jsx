import "./FormContent.css";

const FormContent = ({
  title,
  fields,
  buttonText,
  classname,
  formData,
  handleChange,
  handleSubmit,
  message,
  error,
}) => {
  return (
    <section className={`contact ${classname}`}>
      <div className="contact-card">
        <h2>{title}</h2>

        <form onSubmit={handleSubmit}>
          {fields.map((field, index) =>
            field.type === "textarea" ? (
              <textarea
                key={index}
                name={field.name}
                placeholder={field.placeholder}
                rows="6"
                value={formData[field.name] || ""}
                onChange={handleChange}
              />
            ) : (
              <input
                key={index}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={handleChange}
              />
            )
          )}

          <button type="submit">{buttonText}</button>

          {message && (
            <p className="success-message">
              {message}
            </p>
          )}

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default FormContent;
