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
  
const users: User[] = data.split("\n")
    .filter((line: string) => line !== "")
    .map((line: string) => {
        const [name, ageString, premiumUserString] = line.split(",");
        const user: User = { name, age: Number(ageString), premiumUser: premiumUserString === "1" };
        return user;
    });

  // ここにコードを足す
  
  for (const user of users) {
    if (user.premiumUser) {
      console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
    } else {
      console.log(`${user.name} (${user.age})はプレミアムユーザーではありません。`);
    }
  }