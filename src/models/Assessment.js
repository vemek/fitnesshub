class Assessment {
  constructor({
    id, date, bloodPressureSystolic, bloodPressureDiastolic, heartRate, weight,
    msNeck, msUpperArm, msChest, msUpperAbs, msLowerAbs, msHips, msThigh, msCalf,
    bfBicep, bfTricep, bfSubscap, bfSuper, bfLeanMass, bfPercentage,
    flHamstring, flChest, flOther,
    coreTest, plankTimeSecs, lowerAbLegDrop,
    posHeadNeck, posShoulders, posUpperBack, posLowerBack, posHips, posLegsFeet,
  }) {
    Object.assign(this, {
      id, date, bloodPressureSystolic, bloodPressureDiastolic, heartRate, weight,
      msNeck, msUpperArm, msChest, msUpperAbs, msLowerAbs, msHips, msThigh, msCalf,
      bfBicep, bfTricep, bfSubscap, bfSuper, bfLeanMass, bfPercentage,
      flHamstring, flChest, flOther,
      coreTest, plankTimeSecs, lowerAbLegDrop,
      posHeadNeck, posShoulders, posUpperBack, posLowerBack, posHips, posLegsFeet,
    });
  }

  static new() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return new Assessment({
      id: uuidv4(),
      date: `${year}-${month}-${day}`,
      bloodPressureSystolic: 120,
      bloodPressureDiastolic: 80,
    });
  }
}

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      // eslint-disable-next-line no-mixed-operators
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export default Assessment;
