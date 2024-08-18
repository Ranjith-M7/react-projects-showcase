import React, { useState} from "react";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [usernameColor, setUsernameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      setUsernameColor("green");
      setErrorUsername("");
    } else {
      setUsernameColor("red");
      setErrorUsername("Username Should be more than 8 letters");
    }
    if (email.includes("gmail.com")) {
      setEmailColor("green");
      setErrorEmail("");
    } else {
      setEmailColor("red");
      setErrorEmail("Email must have @gmail.com");
    }

    if (password.length > 8) {
      setPasswordColor("green");
      setPassword("");
    } else {
      setPasswordColor("red");
      setErrorPassword("Password should be more than 8 digits");
    }

    if (password !== "" && password === confirmPassword) {
      setConfirmPasswordColor("green");
      setErrorConfirmPassword("");
    } else {
      setConfirmPasswordColor("red");
      setErrorConfirmPassword("Password didn't match");
    }

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <>
      <div className="signup d-flex justify-content-center align-items-center">
        <div className="signup-container shadow">
          <div className="image"></div>
          <form
            onSubmit={validate}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h1>Sign Up</h1>
            <input
              style={{ borderColor: usernameColor }}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p>{errorUsername}</p>

            <input
              style={{ borderColor: emailColor }}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>{errorEmail}</p>

            <input
              style={{ borderColor: passwordColor }}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{errorPassword}</p>

            <input
              style={{ borderColor: confirmPasswordColor }}
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p>{errorConfirmPassword}</p>

            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
