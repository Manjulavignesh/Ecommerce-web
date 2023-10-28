import { Card } from "react-bootstrap";
import "./Main.css";
const Main = () => {
  return (
    <>
      <Card.Header
        style={{
          fontSize: 60,
          fontFamily: "fantasy",
          textAlign: "center",
          background: "salmon",
        }}
      >
        The Generics
        <Card.Body
          style={{
            fontSize: 25,
            fontFamily: "cu",
            textAlign: "center",
            background: "salmon",
          }}
        >
          <button>Get Our Latest Album</button>
        </Card.Body>
        <button className="button play">
          <img
            src="https://s3.amazonaws.com/ket-uploads-education-ga/wp-content/uploads/sideways-triangle.png"
            style={{widows:10,height:40,margin:-20,marginBottom:5}}
          />
        </button>
      </Card.Header>
      <Card.Header
        style={{
          fontSize: 25,
          fontFamily: "cu",
          textAlign: "center",
        }}
      >
        Tours
      </Card.Header>
    <Card.Body><img src="img.png" alt='description' style={{margin:200}} /></Card.Body>  
    </>
  );
};
export default Main;
