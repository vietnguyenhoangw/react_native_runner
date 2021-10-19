export default class UserModel {
  constructor(json) {
    this.phone = json.phone;
    this.name = json.name;
    this.gender = json.gender;
    this.email = json.email;
    this.password = json.password;
    this.balance = 125200000;
  }

  toJson() {
    return {
      phone: this.phone,
      name: this.name,
      gender: this.gender,
      email: this.email,
      password: this.password,
      balance: this.balance,
    };
  }
}
