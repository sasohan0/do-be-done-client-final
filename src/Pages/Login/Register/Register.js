import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-toastify";
import GoogleIcon from "../../../icons/google.png";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [sendEmailVerification, sending, errorV] =
    useSendEmailVerification(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    toast("Sent email");
  };

  if (
    user?.user?.providerData[0]?.providerId === "password" &&
    !user?.emailVerified
  ) {
    return (
      <div className="text-center mt-5">
        <h3 className="text-danger">Did you verify through mail?</h3>
        <h5 className="text-primary">
          {" "}
          If not please try again. <small>(check spam mails also)</small>
        </h5>
        <button
          className="btn btn-danger"
          onClick={async () => {
            await sendEmailVerification();
            alert("Sent email");
          }}
        >
          Resend Verification Mail
        </button>
      </div>
    );
  }

  if (error || errorGoogle) {
    return (
      <div>
        <p>Error: {error?.message || errorGoogle?.message}</p>
      </div>
    );
  }

  if (loading || loadingGoogle) {
    return <Loading></Loading>;
  }

  if (user?.user) {
    console.log(user);
    if (user || userGoogle) {
      return (
        <div>
          <p>Registered User: {user?.user?.email || userGoogle?.user?.email}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>verify your mail</p>
        </div>
      );
    }
  }

  return (
    <div className="container   mt-5">
      <Form onSubmit={(e) => handleSubmit(e)} className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <span>
            Already have an account? <Link to="/login"> login here</Link>
          </span>
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button className="w-50" variant="primary" type="submit">
            Sign Up
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
            className=" btn btn-light  w-50 rounded-pill border-secondary"
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

export default Register;
