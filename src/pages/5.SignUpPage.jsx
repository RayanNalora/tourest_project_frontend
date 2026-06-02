import React from 'react'
import FormContent from '../component/9.FormContent/FormContent'
import { datafrom } from '../data/dataSignup'
import Section from '../component/6.Section/Section'

const SignUpPage = () => {
  return (
    <div>
        <FormContent
        title={datafrom.title}
        fields={datafrom.fields}
        buttonText={datafrom.buttonText}
        classname="signup"
        />
    </div>
  )
}

export default SignUpPage