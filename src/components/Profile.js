import { useState, useEffect } from "react";
const { REACT_APP_API_URL = "http://localhost:4000" } = process.env;

const Profile = () => {
  const [profile, setProfile] = useState();
  useEffect(() => {
    fetch(REACT_APP_API_URL + "/profile")
      .then((res) => res.json())
      .then((res) => setProfile(res));
  }, []);

  if (profile) {
    return <h1>Welcome, {profile.name}</h1>;
  } else {
    return "loading..";
  }
};

export default Profile;
