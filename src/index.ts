import { User } from "./models/User";

const user = new User({ name: "Myname", age: 23 });

user.on("change", () => {});
user.on("change", () => {});
user.on("sf", () => {});

console.log(user);
