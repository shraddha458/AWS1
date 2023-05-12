let studentName,
    email,
    website,
    imgLink,
    gender,
    skills = "";

document.getElementById('enrollmentForm').addEventListener('submit', (e) => {
    e.preventDefault(); //prevent page from refreshing
    studentName = document.getElementById('nameInput').value;
    email = document.getElementById('emailInput').value;
    website = document.getElementById('websiteInput').value;
    imgLink = document.getElementById('imgLinkInput').value;
    //console.log(studentName, email, website, imgLink);

    let radios = document.getElementsByName('genderRadios');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
            break;
        }
    }
    //console.log(gender);

    let checks = document.getElementsByName("skillsCheck");
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            skills += checks[i].value + ", ";
        }
    }
    skills = skills.slice(0, skills.length - 2);    //remove extra ' 
    //console.log(skills);
    insertInTable();
});

const insertInTable = () => {
    //appending enrolled students table
    $('#enrolledTable').find('tbody').append(`
        <tr>
            <td>
                <h5 class="fw-bold mb-0">${studentName}</h5>
                <span>${gender}</span><br>
                <a href="mailto:${email}" class="text-decoration-none">${email}</a><br>
                <a href="${website}">${website}</a><br>
                <span>${skills}</span>
            </td>

            <td class="text-center img-data">
                <img src=${imgLink} alt="img" class="img-fluid" />
            </td>
        </tr>
    `);
}