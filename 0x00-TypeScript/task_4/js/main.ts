export const cpp = new Subjects.Cpp():
export const React = new Subjects.React():
export const Java = new Subjects.Java():

const cTeacher = {
    firstName: 'ali',
    lastName: "benamor",
    experienceTeachingC: 10
}

console.log("c++")
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())


console.log('Java');
Java.setTeacher = cTeacher;
console.log(Java.getRequirements());
console.log(Java.getAvailableTeacher());

console.log('React');
React.setTeacher = cTeacher;
console.log(React.getRequirements());
console.log(React.getAvailableTeacher());