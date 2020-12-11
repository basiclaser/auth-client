import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const { REACT_APP_API_URL = "http://localhost:4000" } = process.env;

const Profile = () => {
  const [profile, setProfile] = useState();
  let history = useHistory();
  useEffect(() => {
    fetch(REACT_APP_API_URL + "/profile", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      "Access-Control-Allow-Origin": "http://localhost:4000",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === false) {
          return history.push("/login");
        }
        setProfile(res.user);
      });
  }, []);

  if (profile) {
    return <h1>Welcome, {profile.name}</h1>;
  } else {
    return "loading..";
  }
};

export default Profile;
