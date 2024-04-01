import { User } from "../interfaces";

/**
 * Simulates a request to retrieve a user from the server
 * @param userID - The ID of the user to retrieve
 * @returns - The user object
 */
const getUser = (userID: number): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userID: userID,
        name: "John Doe",
        email: "johndoe@housetable.com",
      });
    }, 1000);
  });
};

const userService = { getUser };

export default userService;
