import React, { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import Error from "../../Shared/Error/Error";
import { toast } from "react-toastify";
import GoogleIcon from "../../../icons/google.png";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, errorReset] =
    useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
  };
  const handleReset = async (e) => {
    e.preventDefault();
    if (email) {
      console.log(email);
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      alert("enter mail first");
    }
  };
  if (loading || loadingGoogle) {
    return <Loading></Loading>;
  }
  if (user || userGoogle) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container   mt-5">
      <Form onSubmit={(e) => handleSubmit(e)} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <div>
            {error && <Error key={Math.random()} error={error}></Error>}
            {errorGoogle && (
              <Error key={Math.random()} error={errorGoogle}></Error>
            )}
          </div>
          <span>
            Don't have an account? <Link to="/register"> register here</Link>
          </span>
          <br />
          <span>
            Forgot password?{" "}
            <button onClick={(e) => handleReset(e)} className="btn btn-link">
              {" "}
              reset password
            </button>
          </span>
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button className="w-50" variant="primary" type="submit">
            Login
          </Button>
        </div>

        <div
          style={{
            width: "100%",
            height: "20px",
            borderBottom: "1px solid black",
            textAlign: "center",
          }}
        >
          <span
            className="rounded-pill"
            style={{
              fontSize: "25px",
              backgroundColor: "white",
              padding: " 0 10px",
            }}
          >
            OR
          </span>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => signInWithGoogle()}
            className="w-50 btn btn-light border-secondary rounded-pill"
          >
            <img
              style={{ width: "40px", height: "40px" }}
              className="me-2 "
              src={GoogleIcon}
              alt=""
            />
            Continue with google
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
