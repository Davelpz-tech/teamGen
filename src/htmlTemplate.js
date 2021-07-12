function generateHTML(teamArray) {
    `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${employee.name}</h5>
        <img src="./images/iconmonstr-coffee-7.svg" alt="">
        <h6 class="role">${title}</h6>

        <div class="role-info">
            <p>ID: ${employeee.id}</p>
            <p>Email: ${employee.email}</p>
        </div>
    </div>
  </div>
    `
}

module.exports = generateHTML;