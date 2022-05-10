type User = {
    name: string;
    age: number;
    premiumUser: boolean;
  }
  
  const data: string = `
  uhyo,26,1
  John Smith,17,0
  Mary Sue,14,1
  `;
  
const users = data.split("\n")
    .filter((s: string) => s !== "")
    .map((s: string) => {
        const [name, age, premiumUser] = s.split(",");
        const user: User = { name, age: Number(age), premiumUser: premiumUser === "1" };
        return user;
  })

  // ここにコードを足す
  
  for (const user of users) {
    if (user.premiumUser) {
      console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    } else {
      console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
    }
  }