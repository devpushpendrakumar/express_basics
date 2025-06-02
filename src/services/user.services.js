import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const readingUser = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const user = fs.readFileSync(
    path.join(__dirname, "..", "data", "user.data.json"),
    "utf-8"
  );
  return JSON.parse(user);
};

const sortUser = (users, sortBy, order) => {
  const sortedUsers = [...users].sort((a, b) => {
    // Compare as string or number depending on field
    const fieldA =
      typeof a[sortBy] === "string" ? a[sortBy].toLowerCase() : a[sortBy];
    const fieldB =
      typeof b[sortBy] === "string" ? b[sortBy].toLowerCase() : b[sortBy];

    if (fieldA < fieldB) return order === "asc" ? -1 : 1;
    if (fieldA > fieldB) return order === "asc" ? 1 : -1;
    return 0;
  });
  return sortedUsers;
};

export { readingUser, sortUser };
