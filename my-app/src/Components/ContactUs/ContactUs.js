import { useRef } from "react";
import { Card } from "react-bootstrap";
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
      body: JSON.stringify(userList),
    });
    nameInput.current.value = "";
    emailInput.current.value = "";
    phoneInput.current.value = "";
  };
  return (
    <div>
      {document.body.style["backgroundColor"]="green"}
      {document.body.style["color"]="transparent"}
      <Card
        style={{
          backgroundColor: "white",
          height: 500,
          width: 500,
          marginTop: 25,
          marginLeft: 500,
        }}
      >
        <Card.Title style={{textAlign:"center",marginTop:55,fontSize:35,fontFamily:"fantasy",color:"black"}}>Contact Us</Card.Title>
        <Card.Body>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            style={{ width: 350, marginLeft: 65, marginTop: 35,height:35 }}
            autoComplete="off"
            placeholder="Name"
            ref={nameInput}
          />
          <input
            type="email"
            style={{ width: 350, marginLeft: 65, marginTop: 25,height:35 }}
            placeholder="Email"
            autoComplete="off"
            ref={emailInput}
          />
          <input
            type="number"
            style={{ width: 350, marginLeft: 65, marginTop: 25,height:35 }}
            autoComplete="off"
            placeholder="Phone"
            ref={phoneInput}
          />
          <button style={{ float: "left", marginTop: 25, marginLeft: 65,width:100 }}>
            Submit
          </button>
        </form>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ContactUs;
