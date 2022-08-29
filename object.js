let students = [
    {

        id: 1,
        name: "loi",
        DOB: "13/9/1998",
        gender: true,
        Email: "aaa"

    },
    {

        id: 1,
        name: "loi",
        DOB: "13/9/1998",
        gender: true,
        Email: "aaa"

    },
    {

        id: 1,
        name: "loi",
        DOB: "13/9/1998",
        gender: true,
        Email: "aaa"

    },
    {

        id: 1,
        name: "loi",
        DOB: "13/9/1998",
        gender: true,
        Email: "aaa"

    },
    {

        id: 1,
        name: "loi",
        DOB: "13/9/1998",
        gender: true,
        Email: "aaa"

    }
]

function renderStudent() {
    let htmls = students.map(function (student) {
        return `
                    <span>${student.id}</span>
                    <h4>${student.name}</h4>
                    <span>${student.DOB}</span>
                    <span>${student.gender}</span>
                    <a href="">${student.Email}</a>
            `
    })
    document.querySelector('.students').innerHTML = htmls.join("")
}
renderStudent()