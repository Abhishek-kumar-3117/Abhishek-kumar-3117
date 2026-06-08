let user = {
    name: "abhishek",
    email: "abhi@gmail.com"
};

function register(user) {
    return `${user.name} Registered Successfully`;
}

console.log(register(user));