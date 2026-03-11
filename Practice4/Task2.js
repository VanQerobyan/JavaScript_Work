student = {

    name: "Hayk",
    age: 22,
    assessment: 8,
    height: 177
};

// student["weight"] = 70;
Object.freeze(student);

student.age = 77;
student.height = 100;

student["weight"] = 70;


console.log(student);


