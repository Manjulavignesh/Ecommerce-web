import { useRef, useState } from "react";
import { Card } from "react-bootstrap";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const userInput = useRef();
  const passwordInput = useRef();
  const loginHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const enteredEmail = userInput.current.value;
    const enteredPassword = passwordInput.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClT_guw8H83BK_KfQmFnfVzaGOk2n4yfs",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.idToken);
        setIsLogin(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      {isLogin && (
        <div>
         {window.location.href="http://localhost:3000/store"} 
        </div>
      )}
      {!isLogin && (
        <div>
          {
            (document.body.style["backgroundImage"] =
              "url('https://wallpapercave.com/wp/YsmdCUB.jpg')")
          }
          {(document.body.style["color"] = "transparent")}
          <Card
            style={{
              backgroundColor: "#006666",
              height: 500,
              width: 500,
              marginTop: 50,
              marginLeft: 500,
              backgroundImage:
                "url('https://th.bing.com/th/id/OIP.1ILPEtXXYmvnPIHhh_YxAwHaEo?pid=ImgDet&rs=1')",
              backgroundSize: "cover",
            }}
          >
            <Card.Title
              style={{
                color: "black",
                marginTop: 40,
                textAlign: "center",
                fontSize: 35,
                fontFamily: "fantasy",
              }}
            >
              Login Form
            </Card.Title>
            <Card.Body>
              <form onSubmit={loginHandler}>
                <input
                  type="text"
                  placeholder="Email"
                  style={{
                    marginTop: 50,
                    width: 400,
                    height: 40,
                    borderColor: "green",
                    marginLeft: 30,
                  }}
                  ref={userInput}
                />
                <input
                  type="password"
                  placeholder="Password"
                  style={{
                    marginTop: 35,
                    width: 400,
                    height: 40,
                    borderColor: "green",
                    marginLeft: 30,
                  }}
                  ref={passwordInput}
                />
                {!isLoading && (
                  <button
                    style={{
                      marginTop: 35,
                      width: 150,
                      height: 40,
                      borderColor: "green",
                      marginLeft: 280,
                    }}
                  >
                    LogIn
                  </button>
                )}
                {isLoading && (
                  <p style={{ color: "black", marginTop: 35 }}>
                    Sending Request....
                  </p>
                )}
              </form>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Login;
