
import './App.css'
import Counter from './components/Counter/Counter'
import ContactForm from './components/Forms/ContactForm'
import RegistrationForm from './components/Forms/RegistrationForm'

function App() {

  return (
    <>

      <div className="counter-container">
        <Counter />
      </div>

      <div className="contact-form-container">
        <ContactForm />
      </div>

      <div className="registration-form-container">
        <RegistrationForm />
      </div>

    </>
  )

}

export default App
