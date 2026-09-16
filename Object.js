const student = {
    name : "Monica",
    age: 20,
    faculty: "Computer Science",
    Status: "Single",
    MataKuliah: "Front-end"
};

student.active = true; //tambah
student.age = student.age - 1; //dikurangi
delete student.active; //hapus


console.log(student.name);
console.log(student.age);
console.log(student.Status);
console.log(student.MataKuliah);
console.log(student["faculty"]); //Bracket
