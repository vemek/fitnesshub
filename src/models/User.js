class User {
  constructor({name, age, height, goals, assessments}) {
    Object.assign(this, {name, age, height, goals, assessments});
  }

  static new() {
    return new User({
      name: 'Ian Malcolm',
      age: 0,
      height: '',
      goals: '',
      assessments: [],
    });
  }
}

export default User;
