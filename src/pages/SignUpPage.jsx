import logo from "../assets/img/logo.png";
import backgroundLogo from "../assets/img/background-logo.png";
import { useState } from "react";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { signUp, signInWithGoogle } from "../utils/firebase_auth";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);
  const [subject, setSubject] = useState("");



  const navigate = useNavigate();


  //no used
  const onGoogleLogin = async () => {
    var result = await signInWithGoogle();
    if(result){
      //로그인 페이지 이동
      navigate("/");
    }
  };


  
  const onSignUp = async () => {

    if(!isCodeCorrect){
      alert("check your code");
      return;
    }

    if(subject == ""){
      alert("select your subject");
      return;
    }

    var result = await signUp(email, password,subject);
    if(result){
      //로그인 페이지 이동
      navigate("/");
    }
  };


  
 

  const onCode = (code) => {
    setCode(code);
    console.log(code);

    if(codeSent == code && codeSent != ""){
      setIsCodeCorrect(true);
      alert("code is correct");
    }else{
      setIsCodeCorrect(false);
    }
  };


  const isValidEmail = (email) => {
    const googleEmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return googleEmailRegex.test(email);
  };

  const onCheckEmail = async () => {
    if (!email) {
      alert("type your email");
      return;
    }
    
    if (!isValidEmail(email)) {
      alert("Only Google email (@gmail.com) is allowed.");
      return;
    }
    

    var code = generateRandomCode();
    setCodeSent(code);
    
    alert(`send auth code to your email (${code})`);

    // var result = await checkEmail(email);
    // alert(result);
  };


  //랜덤숫자 생성.
  const generateRandomCode = () => {
    return Math.floor(100000 + Math.random() * 900000);
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
                <button 
                  onClick={onCheckEmail}
                  style={{
                    backgroundColor: "#C10C99",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>

            <div>
              <input
                  type="code"
                  value={code}
                  onChange={(e) => onCode(e.target.value)}
                  placeholder="Enter your auth code"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "14px",
                    borderBottom: "1px solid #ccc",
                    marginTop: "10px",
                    padding: "0.5rem 0",
                  }}
                />
               
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


            <div>
              <label style={{ fontSize: "14px" }}>Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem", 
                  marginTop: "49px",
                  fontSize: "14px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  outline: "none"
                }}
              >
                <option value="" disabled>Select subject</option>
                <option value="english">English</option>
                <option value="math">Math</option>
                <option value="art">Art</option>
                <option value="science">Science</option>
                <option value="history">History</option>
              </select>

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
            {/* <p
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
            </div> */}


          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;