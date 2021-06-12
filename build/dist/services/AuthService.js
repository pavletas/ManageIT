export const users = [{
  username: "Yoanna",
  email: "anni@gmail.com",
  password: "test123456",
  type: "sa"
}, {
  username: "Maria",
  email: "mimi@gmail.com",
  password: "test123456",
  type: "qa"
}, {
  username: "Pavleta",
  email: "pufi@gmail.com",
  password: "test123456",
  type: "dev"
}];
class AuthService {
  constructor() {
    this.handler = null;
  }
  set changeHandler(handler) {
    this.handler = handler;
  }
  get storedUser() {
    const auth = localStorage.getItem("authentication");
    if (!auth) {
      return null;
    }
    return JSON.parse(auth);
  }
  setCurrentUser(user) {
    if (user) {
      localStorage.setItem("authentication", JSON.stringify(user));
    } else {
      localStorage.removeItem("authentication");
    }
    this.handler?.(user);
  }
  login(user) {
    this.setCurrentUser(user);
  }
  logout() {
    this.setCurrentUser(null);
  }
  register(user) {
    users.push(user);
    this.setCurrentUser(user);
  }
}
const authService = new AuthService();
export default authService;
