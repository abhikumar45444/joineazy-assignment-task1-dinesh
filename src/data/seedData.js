export const usersKey = "users";
export const assignmentsKey = "assignments";
export const currentUserKey = "current_user";

export const USERS = [
    {
        id: "stu-1",
        name: "student-1",
        role: "student",
        email: "student1@gmail.com",
    },
    {
        id: "stu-2",
        name: "student-2",
        role: "student",
        email: "student2@gmail.com",
    },
    {
        id: "stu-3",
        name: "student-3",
        role: "student",
        email: "student3@gmail.com",
    },
    {
        id: "stu-4",
        name: "student-4",
        role: "student",
        email: "student4@gmail.com",
    },
    {
        id: "stu-5",
        name: "student-5",
        role: "student",
        email: "student5@gmail.com",
    },
    { id: "adm-1", name: "admin-1", role: "admin", email: "admin1@gmail.com" },
    { id: "adm-2", name: "admin-2", role: "admin", email: "admin2@gmail.com" },
];

//date format -> YYYY-MM-DD
export const ASSIGNMENTS = [
    {
        id: "asm-1",
        title: "assignment1",
        description: "assignment 1 description",
        dueDate: "2026-11-10",
        driveLink:
            "https://drive.google.com/drive/folders/assignments/assigment1",
        createdBy: "adm-1",
        assignedStudentIds: ["stu-1", "stu-2", "stu-3", "stu-4", "stu-5"],
        submittedStudentIds: ["stu-1", "stu-3"],
    },
    {
        id: "asm-2",
        title: "assignment2",
        description: "assignment 2 description",
        dueDate: "2026-11-20",
        driveLink:
            "https://drive.google.com/drive/folders/assignments/assigment2",
        createdBy: "adm-2",
        assignedStudentIds: ["stu-1", "stu-2", "stu-3", "stu-4", "stu-5"],
        submittedStudentIds: ["stu-2", "stu-4", "stu-3"],
    },
    {
        id: "asm-3",
        title: "assignment3",
        description: "assignment 3 description",
        dueDate: "2026-11-30",
        driveLink:
            "https://drive.google.com/drive/folders/assignments/assigment3",
        createdBy: "adm-1",
        assignedStudentIds: ["stu-1", "stu-2"],
        submittedStudentIds: [],
    },
];