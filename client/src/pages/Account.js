import React from "react";

const Account = (props) => {

  return (
    <div>
      <div><img src={props.picture} alt=''/></div>
      <p>{props.name}</p>
      <p>Email: {props.email}</p>

      <section className='hidden-form'>
        <form>
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
              name="picture_URL"
              type="text"
              placeholder="https://i.imgur.com/tRxbS89m.jpg"
              value={formValues.email}
            />
          </div>
        </form>
      </section>
    </div>
  )
}

export default Account