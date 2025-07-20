let user = {
    id: 1,
    name: "Chanchito feliz",
    age: 25,
};

for (let prop in user) {
    console.log(prop);
    console.log(prop,user[prop]);
}
