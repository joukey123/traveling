import User from "../model/User";

export const user = (req, res) => res.send("<h1>User</h1>");

export const getJoin = (req, res) => res.render("join");
export const postJoin = async (req, res) => {
  const { name, id, password, confirmPassword } = req.body;
  await User.create({
    name,
    id,
    password,
    confirmPassword,
  });

  return res.redirect("/login");
};
export const login = (req, res) => res.render("login");
