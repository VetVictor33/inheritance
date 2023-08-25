import User, { UserData } from "./User";

type StudentData = UserData & { grades: number[] }

export default class Student extends User {
  private _grades: number[] = []
  constructor(student: UserData) {
    super(student)
  }


  public set grade(grade: number) {
    this._grades.push(grade)
  }

  public get grades(): number[] {
    return this._grades
  }


  public getAverageGrades(): number {
    if (!this._grades.length) return 0
    let totalGrades = 0;
    for (const note of this._grades) {
      totalGrades += note
    }
    return totalGrades / this._grades.length
  }
}