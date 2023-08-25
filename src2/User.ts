export type UserData = { name: string, email: string, phone: string, password: string }

export default abstract class User {
  protected name: string
  protected email: string
  protected phone: string
  protected password: string

  constructor(user: UserData) {
    this.name = user.name
    this.email = user.email
    this.phone = user.phone
    this.password = user.password
  }

  public authenticate(password: string): string {
    if (this.password === password) return `Correct password`
    return `Wrong password`
  }
}