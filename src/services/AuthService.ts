export interface UserAuth {
  username: string;
  email: string | null;
  password: string;
  type: string | null;
}

export const users: UserAuth[] = [{
  username: 'Yoanna',
  email: 'anni@gmail.com',
  password: 'test123456',
  type: 'sa'
}, {
  username: 'Maria',
  email: 'mimi@gmail.com',
  password: 'test123456',
  type: 'qa'
}, {
  username: 'Pavleta',
  email: 'pufi@gmail.com',
  password: 'test123456',
  type: 'dev'
}];

type UserChangeHandler = (user: UserAuth | null) => void;

class AuthService {
  private handler: UserChangeHandler | null = null;

  set changeHandler(handler: UserChangeHandler | null) {
    this.handler = handler;
  }

  get storedUser(): UserAuth | null {
    const auth = localStorage.getItem('authentication');

    if (!auth) {
      return null;
    }

    return JSON.parse(auth);
  }

  private setCurrentUser(user: UserAuth | null) {
    if (user) {
      localStorage.setItem('authentication', JSON.stringify(user));
    } else {
      localStorage.removeItem('authentication');
    }
    this.handler?.(user);
  }

  login(user: UserAuth) {
    this.setCurrentUser(user);
  }

  logout() {
    this.setCurrentUser(null);
  }

  register(user: UserAuth) {
    users.push(user);
    this.setCurrentUser(user);
  }
}

const authService = new AuthService();
export default authService;