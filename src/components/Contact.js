import { useCallback, useState } from 'react';
import './Contacts.css'

const MIN = 8

function Contact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const validateSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if(email.length < MIN || name.length < MIN) {
        alert(`Some of your input is lower than ${MIN}`)
      } else if (age <= 0) {
        alert('Invalid age input')
      } else {
        alert('Your contact has been sent')
      }
    },
    [age, email.length, name.length],
  )

  return (
    <div>
      <h2 class="h2">Contact</h2>

      <div class="container">
        <form action="/action_page.php" onSubmit={validateSubmit}>
          <div class="row">
            <div class="col-25">
              <label for="fname">Email</label>
            </div>
            <div class="col-75">
              <input type="email" id="email" name="email" placeholder="Your email.." value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Name</label>
            </div>
            <div class="col-75">
              <input type="text" id="name" name="name" placeholder="Your name.." value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="country">Age</label>
            </div>
            <div class="col-75">
              <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
          </div>
          <div class="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;