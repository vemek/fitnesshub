class User {
  constructor({name, age, height, goals, assessments}) {
    Object.assign(this, {name, age, height, goals, assessments});
  }

  static new() {
    return new User({
      name: '',
      age: 0,
      height: '',
      goals: '',
      assessments: [],
    });
  }
}

export default User;
