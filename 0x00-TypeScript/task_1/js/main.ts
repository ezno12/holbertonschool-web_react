interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number,
}
interface printTeacherFun {
    (firstName: string, lastName: string): string
}


export const printTeacher: printTeacherFun =  (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`
}