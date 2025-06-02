import { readingUser, sortUser } from "../services/user.services.js";

const getUsers = async (req, res) => {
  const { sortBy, order } = req.query;

  let users = await readingUser();
  if (sortBy && order) {
    users = sortUser(users, sortBy, order);
  }
  res.send(users);
};

export default getUsers;
