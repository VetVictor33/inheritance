import Student from "./Student";
import User, { UserData } from "./User";

export default class Professor extends User {
  constructor(professor: UserData) {
    super(professor)
  }

  public addGradeOf(student: Student, grade: number) {
    student.grade = grade
  }
}