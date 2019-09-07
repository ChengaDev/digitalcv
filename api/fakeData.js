let faker = require('faker');

let generateCopmanies = () => {
    let companies = [];

    for (let id = 0 ; id < 0 ; id++) {
        let companyName = faker.company.companyName();

        companies.push({
            "id": id,
            "CompanyName": companyName,
            "DepartmentId": 123123,
            "CompanyId": 123123
        });
    }
    return { "companies": companies };
};

module.exports = generateCopmanies;