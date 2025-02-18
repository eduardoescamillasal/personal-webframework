import { User } from "./models/User";

const user = new User({ id: 1, name: "neweer name", age: 989 });

console.log(user.get("name"));

user.on("save", () => {
  console.log(user);
});
user.save();
