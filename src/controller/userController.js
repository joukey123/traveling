import User from "../model/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join");
export const postJoin = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  const emailExists = await User.exists({ email });
  if (password !== confirmPassword) {
    return res
      .status(400)
      .render("join", { errorMessage: "❌ 입력된 비밀번호가 다릅니다." });
  }
  if (emailExists) {
    return res
      .status(400)
      .render("join", { errorMessage: "❌ 이미 가입된 이메일 입니다." });
  }
  try {
    await User.create({
      email,
      password,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", { errorMessage: error._message });
  }
};
export const getLogin = (req, res) => res.render("login");
export const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .render("login", { errorMessage: "❌ 가입된 정보가 없습니다." });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res
      .status(400)
      .render("login", { errorMessage: "❌ 비밀번호가 틀립니다." });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
