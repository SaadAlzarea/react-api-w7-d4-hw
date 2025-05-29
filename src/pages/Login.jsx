import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

function Login() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("email contain (@), (.)");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("password grater than 6");

  let navigate = useNavigate();

  const login = () => {
    const api = "https://68219a2d259dad2655afc2ba.mockapi.io/login";
    axios.get(api).then((res) => {     
      const user = res.data.find(
        (i) => i.email === email && i.password === password
      );
      if (user) {
        swal(`Welcome ${email}`);
        navigate("/char")
      } else {
        swal("Email or password is not valid");
      }
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center  w-100 h-100">
        <div className="flex flex-col gap-5 w-full shadow-2xl p-5 rounded-2xl">
          <p className="text-2xl text-center font-medium">Login</p>
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
            className="text-white h-8 rounded-lg bg-blue-950"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
