import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("email contain (@), (.)");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("password grater than 6");
  // const [userId, setUserId] = useState("1");

  let navigate = useNavigate();

  const register = () => {
    let isValid = true;

    if (email == "") {
      isValid = false;
      setEmailErr("email is empty");
    } else if (!email.includes("@") && !email.includes(".")) {
      isValid = false;
      setEmailErr("email is not valid");
    }

    if (password == "") {
      isValid = false;
      setPasswordErr("password is empty");
    } else if (password.length < 6) {
      isValid = false;
      setPasswordErr("password is less than 6");
    }

    const api = "https://68219a2d259dad2655afc2ba.mockapi.io/login";
    if (isValid == true) {
      const registerInfo = {
        email,
        password,
      };

      axios.post(api, registerInfo).then(() => {
        setUserId(userId + 1)
      });

      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      // localStorage.setItem("id", email);

      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center  w-100 h-100">
        <div className="flex flex-col gap-5 w-full shadow-2xl p-5 rounded-2xl">
          <p className="text-2xl text-center font-medium">Register</p>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="pl-2 h-8 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-xs text-gray-500">{emailErr}</span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="pl-2 h-8 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="text-xs text-gray-500">{passwordErr}</span>
          </div>
          <button
            className="text-white h-8 rounded-lg bg-blue-950  "
            onClick={register}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
