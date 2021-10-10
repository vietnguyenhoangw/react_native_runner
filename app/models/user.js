export default class UserModel {
  constructor(json) {
    this.phone = json.phone;
    this.name = json.name;
    this.gender = json.gender;
    this.email = json.email;
  }

  toJson() {
    return {
      phone: this.phone,
      name: this.name,
      gender: this.gender,
      email: this.email,
    };
  }
}
