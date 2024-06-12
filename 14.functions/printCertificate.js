function formatGrade(grade) {
  if (grade < 3) {
    console.log(`Fail (2)`);
  } else if (grade >= 3 && grade < 3.5) {
    console.log(`Poor (${grade.toFixed(2)})`);
  } else if (grade >= 3.5 && grade < 4.5) {
    console.log(`Good (${grade.toFixed(2)})`);
  } else if (grade >= 4.5 && grade < 5.5) {
    console.log(`Very good (${grade.toFixed(2)})`);
  } else {
    console.log(`Excellent (${grade.toFixed(2)})`);
  }
}

function printName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

function printHeader() {
  console.log("~~~- {@} -~~~");
  console.log("~- Certificate -~");
  console.log("~~~- ~---~ -~~~");
}

function printCertificate(grade, namesArray) {
  printHeader();
  printName(namesArray[0], namesArray[1]);
  formatGrade(grade);
}

printCertificate(5.25, ["Peter", "Ivanov"]);
