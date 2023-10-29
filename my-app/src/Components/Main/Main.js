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
            style={{ widows: 10, height: 40, margin: -20, marginBottom: 5 }}
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
      <Card.Body>
        <div className="row">
          <img
            src="https://www.billboard.com/wp-content/uploads/2023/06/midyear-albums-billboard-1548.jpg?w=942&h=623&crop=1"
            alt="description"
          />
          <ol>
            <h1>List of Albums</h1>
            <li style={{ color: "blue", fontSize: 25 }}>
              100 Gecs, 10,000 Gecs
            </li>
            <li style={{ color: "blue", fontSize: 25 }}>
              Alex Andwandter, El Diablo en el Cuerpo
            </li>
            <li style={{ color: "blue", fontSize: 25 }}>
              Arlo Parks, My Soft Machine
            </li>
            <li style={{ color: "blue", fontSize: 25 }}>
              Avalon Emerson, Avalon Emerson & The Charm
            </li>
            <li style={{ color: "blue", fontSize: 25 }}>
              boygenius, The Record
            </li>
            <li style={{ color: "blue", fontSize: 25 }}>
              Carin León, Colmillo de Leche
            </li>
          </ol>
        </div>
      </Card.Body>
    </>
  );
};
export default Main;
