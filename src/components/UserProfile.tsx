import { useEffect, useState } from "react";
import { User } from "../interfaces";
import "./UserProfile.css";
import { IconAddressBook } from "@tabler/icons-react";
import userService from "../services/userService";

const UserProfile = ({ userID }: { userID: number }) => {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await userService.getUser(userID);
      setUser(response);
    };
    fetchUserData();
  }, [userID]);

  return (
    <div className="Page">
      {!!user && (
        <div className="ProfileCard">
          <div className="IconCircle">
            <IconAddressBook size="30px" color="#999" />
          </div>
          <div className="UserData">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </div>
      )}
      {!user && <div>Loading...</div>}
    </div>
  );
};

export default UserProfile;
