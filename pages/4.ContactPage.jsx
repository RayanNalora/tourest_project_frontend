import Hero from '../component/2.Hero/Hero'
import FormContent from '../component/9.FormContent/FormContent'
import { formData } from '../data/dataForm'

const ContactPage = () => {
  return (
    <div>
        <Hero
          bgImage="/im8.jpg"
          title="Contact"
          classname='about'
       />
        <FormContent
          title={formData.title}
          fields={formData.fields}
          buttonText={formData.buttonText}
        />
    </div>
  )
}

export default ContactPage