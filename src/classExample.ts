function createUser(name: string, age: number): (message: string) => string {
    return(message: string): string => {
        if (name === "") {
            throw new Error("名前は空にできません");
        }
        return `${name} (${age}) 「${message}」`;
    }
}

const getMessage = createUser("uhyo", 26);
console.log(getMessage("こんにちは"));
