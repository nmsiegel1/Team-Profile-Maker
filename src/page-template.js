
const generateCards = employeeArray => {
    return `
    <div class="card employee-card">
  <div class="card-header">
${employeeArray
    .filter(({manager}) => manager)
    .map(({name, id, email, office}) => {
    return `

    <h2 class="card-title>">${employee.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
  </div>
  <div class="card-body">
    <ul class="list-body">
      <li class="list-group-item">Id: ${employee.getEmail()}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
      </li>
      <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
`;
})
.join('')}

${employeeArray
    .filter(({engineer}) => engineer)
    .map(({name, id, email, office}) => {
        return `
    <h2 class="card-title>">${employee.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-solid fa-glasses"></i>Engineer</h3>
  </div>
  <div class="card-body">
    <ul class="list-body">
      <li class="list-group-item">Id: ${employee.getId()}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
      </li>
      <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
      `;
    })
    .join('')}

${employeeArray
            .filter(({intern}) => intern)
            .map(({name, id, email, office}) => {
        return`
    <h2 class="card-title>">${employee.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-solid fa-graduation-cap"></i>Intern</h3>
  </div>
  <div class="card-body">
    <ul class="list-body">
      <li class="list-group-item">Id: ${employee.getId()}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
      </li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
      `;
    })
    .join('')}
    </ul>
  </div>
</div>
        `;

};

module.exports = employeeData => {
    const {manager, engineer, intern} = employeeData;
    console.log("manager", manager)
    return`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Team</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="team col-12 d-flex justify-content-center">
            ${generateCards(employeeData)}
            </div>
          </div>
        </div>
      </body>
    </html>
    `;
}