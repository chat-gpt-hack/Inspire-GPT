function testGetRandomInt() {
  const min = 3;
  const max = 9;
  const numTests = 1000;

  for (let i = 0; i < numTests; i++) {
    const randomInt = testGetRandomInt();
    if (randomInt < min || randomInt > max) {
      console.log(
        `Test failed! Generated integer ${randomInt} is outside the range of ${min} to ${max}.`
      );
      return;
    }
  }

  console.log(`All ${numTests} tests passed!`);
}
