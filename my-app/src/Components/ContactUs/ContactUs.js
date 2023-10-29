import { useRef } from "react";
const ContactUs = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const userList = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
    };
    fetch("https://react-http-aa920-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(userList)
    });
    nameInput.current.value="";
    emailInput.current.value="";
    phoneInput.current.value="";
  };
  return (
    <form
      style={{ margin: 150, marginLeft: 600, marginTop: 100 }}
      onSubmit={submitHandler}
    >
      <label>Name:</label>
      <br />
      <input
        type="text"
        style={{ width: 350 }}
        autoComplete="off"
        ref={nameInput}
      />
      <br />
      <label>Email Id:</label>
      <br />
      <input
        type="email"
        style={{ width: 350 }}
        autoComplete="off"
        ref={emailInput}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        type="number"
        style={{ width: 350 }}
        autoComplete="off"
        ref={phoneInput}
      />
      <br />
      <button style={{ float: "left", marginTop: 25 }}>Submit</button>
    </form>
  );
};
export default ContactUs;
