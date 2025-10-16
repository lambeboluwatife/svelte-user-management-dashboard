import { writable } from "svelte/store";

export const UsersStore = writable([
  {
    id: 1,
    name: "Alice Baker",
    email: "alicebaker@hotmail.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "smithbobby@yahoomail.com",
    role: "engineer",
  },
  {
    id: 3,
    name: "Charlie Johnson",
    email: "charles1995@gmail.com",
    role: "designer",
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "princessdiana@outlook.com",
    role: "manager",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethanthehunter@hotmail.com",
    role: "analyst",
  },
  {
    id: 6,
    name: "Fiona Gallagher",
    email: "princessfifi@yahoomail.com",
    role: "developer",
  },
  {
    id: 7,
    name: "George Lucas",
    email: "georgelucas@gmail.com",
    role: "director",
  },
  {
    id: 8,
    name: "Hannah Montana",
    email: "montanahannah@outlook.com",
    role: "artist",
  },
  {
    id: 9,
    name: "Ian Fleming",
    email: "ianfleming@hotmail.com",
    role: "writer",
  },
  {
    id: 10,
    name: "Julia Roberts",
    email: "juliaroberts@yahoomail.com",
    role: "actress",
  },
]);
