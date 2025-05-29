import axios from "axios";
import { useEffect, useState } from "react";

function Characters() {
  const api = "https://68219a2d259dad2655afc2ba.mockapi.io/login";
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get(api).then((res) => setInfo(res.data));
  }, []);

  const saveCard = () => {
    const newCard = {
      image,
      name,
      gender,
    };
    axios.post(api, newCard).then((res) => {
      setInfo([...info, res.data]);
      setName("");
      setImage("");
      setGender("");
    });
  };

  const localStorageId = localStorage.getItem("email");
  // axios.delete(`${api}/${id}`)
  const dele = (id) => {
    axios.delete(`${api}/${id}`).then(() => {
      // setInfo(del);
      setInfo(info.filter((char) => char.id !== id));
    });


  };
  return (
    <div>
      <div className="flex flex-col min-h-screen w-full justify-center items-center p-5 gap-5">
        <div className="flex flex-col justify-center items-center gap-5 shadow-2xl p-5 rounded-2xl ">
          <p className="text-2xl font-medium">Add Post</p>
          <input
            className="border h-10 w-100 rounded-lg pl-2"
            type="text"
            placeholder="Character Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border h-10 w-100 rounded-lg  pl-2"
            type="text"
            placeholder="Character url image "
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            className="border h-10 w-100 rounded-lg  pl-2"
            type="text"
            placeholder="Character gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <button
            className="border h-10 w-100 rounded-lg bg-blue-950 text-white font-medium text-lg"
            onClick={saveCard}
          >
            Save
          </button>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {info.map((item) => (
            <div
              key={item.id}
              className="flex flex-col shadow-2xl w-100  p-3 rounded-2xl gap-5 bg-white border border-gray-300"
            >
              <div className="flex flex-col p-5 rounded-2xl gap-10 h-auto ">
                <div className="">
                  <img src={item.image} alt="" className="rounded-2xl " />
                </div>
                <div>
                  <p className="text-3xl font-medium"> {item.name} </p>
                  <p> {item.gender} </p>
                </div>
              </div>
              <div className="h-full flex items-end w-full ">
                {localStorageId === item.email && (
                  <button
                    className="bg-red-500 rounded-2xl w-full"
                    onClick={() => dele(item.id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Characters;
