interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};
const student1: Student = {
    firstName: "bohali",
    lastName: "weldhoma",
    age: 45,
    location: "sahra"
};
const student2: Student = {
    firstName: "joe",
    lastName: "weldyooo",
    age: 23,
    location: "beach"

};
const studentsList: Array<Student> = [ student1, student2 ]

const table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach((row) => {
    const tr = table.insertRow();
    row.forEach((column) => {
        const td = tr.insertCell();
        td.innerText = column;
    });
})
