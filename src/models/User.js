class User {
  constructor(name, age, goals, bloodPressure, assessments) {
    this.name = name;
    this.age = age;
    this.goals = goals;
    this.bloodPressure = bloodPressure;
    this.assessments = assessments;
  }

  static new() {
    return new User(
      '',
      0,
      '',
      '',
      []
    );
  }
}

export default User;
