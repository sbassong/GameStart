import React, {useState} from "react";

const iState = { name: '', email: '', picture: '' }


const Account = (props) => {
  const [formValues, setFormValues] = useState(iState)

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div><img src={props.picture} alt=''/></div>
      <p>{props.name}</p>
      <p>Email: {props.email}</p>

      <section className='hidden-form'>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="John Smith"
              value={formValues.name}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="Picture URL">Picture URL</label>
            <input
              onChange={handleChange}
              name="picture"
              type="text"
              placeholder="https://i.imgur.com/tRxbS89m.jpg"
              value={formValues.picture}
            />
          </div>
          <button disabled={!formValues.email || !formValues.name || !formValues.picture}>Update</button>
        </form>
      </section>
    </div>
  )
}

export default Account