function printUserInfo(name: string, age: number, email?: string): void {
  console.log(name);
  console.log(age);
  if (email) {
    console.log(email)
  }
  
}

printUserInfo("Artem", 13);
