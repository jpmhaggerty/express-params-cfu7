const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.get("/students", (request, response) => {
  console.log(`At ${request.path}`);
  if (request.query.search) {
    console.log(`Looking for names matching ${request.query.search}`);
  }
});

app.get("/students/:studentId", (request, response) => {
  console.log(`At ${request.path}`);
  console.log(`Looking for ${request.params.studentId}`);
});

app.get("/grades:studentId", (request, response) => {
  console.log(`At ${request.path}`);
  console.log(`Looking for ${request.params.studentId}'s grades`);
});

app.post("/grades", (request, response) => {
  if (request.query.studentId && request.query.grade) {
    console.log(
      `${request.query.studentId} received a grade of ${request.query.grade}`
    );
    response.json({'gradeReceived': 'true'});
  } else {
    response.json({'gradeReceived': 'false'});
  }
});

app.post("/register/:studentId", (request, response) => {
  if (request.params.studentId) {
    //Run student check routine
    console.log(`Welcome ${request.params.studentId}`);
    response.json({'registered': 'true'});
  } else {
    response.json({'registered': 'false'});
  }
});
