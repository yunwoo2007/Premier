import logo from "../assets/img/logo.png";
import backgroundLogo from "../assets/img/background-logo.png";
import { useState } from "react";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

import { signUp, signInWithGoogle } from "../firebase";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = async () => {
    await signUp(email, password);
  };

  const onGoogleLogin = async () => {
    await signInWithGoogle();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: `url('${backgroundLogo}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            position: "absolute",
            top: 40,
            left: 34,
          }}
        ></img>
        <div
          style={{
            display: "flex",
            width: "882px",
            padding: "94px 45px 23px 45px",
            borderRadius: "30px",
            border: "1px solid",
            borderColor: "#000",
            position: "relative",
            gap: "56px",
            backgroundColor: "#fff",
          }}
        >
          <div
            style={{
              width: "308px",
            }}
          >
            <img
              style={{ width: "139px", marginBottom: "21px" }}
              src={logo}
              alt="logo"
            ></img>
            <div
              style={{
                fontSize: "30px",
                marginBottom: "21px",
                fontWeight: "600",
              }}
            >
              Sign Up
            </div>
            <div style={{ color: "#666", marginTop: "10px" }}>
              If you have ID <br />
              You can{" "}
              <a
                href="/"
                style={{
                  color: "#C10C99",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Login here !
              </a>
            </div>
          </div>
          <div>
            <div style={{}}>
              <label style={{ fontSize: "14px" }}>Email</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #ccc",
                  padding: "0.5rem 0",
                  width: "428px",
                }}
              >
                <MdOutlineEmail style={{ marginRight: "0.5rem" }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>
            <div style={{ textAlign: "left", marginTop: "49px" }}>
              <label style={{ fontSize: "14px" }}>Password</label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #ccc",
                  padding: "0.5rem 0",
                }}
              >
                <MdOutlineLock style={{ marginRight: "0.5rem" }} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>
            <button
              onClick={onSignUp}
              style={{
                width: "100%",
                marginTop: "96px",
                padding: "0.75rem",
                backgroundColor: "#C10C99",
                color: "#000",
                borderRadius: "32px",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(193, 12, 153, 0.3)",
              }}
            >
              Sign up
            </button>
            <p
              style={{
                color: "#B5B5B5",
                margin: "32px 0",
                textAlign: "center",
              }}
            >
              or continue with
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FcGoogle
                onClick={onGoogleLogin}
                style={{
                  cursor: "pointer",
                  width: "41px",
                  height: "41px",
                  marginRight: "0.5rem",
                  fontSize: "18px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
