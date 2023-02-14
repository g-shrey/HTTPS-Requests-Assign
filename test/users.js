import supertest from "supertest";

//const request = supertest("https://gorest.co.in/public-api/")
const request = supertest("https://automationintesting.online")

const TOKEN = 
    "46cc5d0cf5b76cefcae1264137564fba80774d0aa85186146d3e4aff06a0803b";

describe("Users", () => {
    it("GET /users", () => {
        //request.get('users?access-token=${TOKEN}').end((err,res) => {
        request.get('/room/').end((err,res) => {
                console.log(err);
                console.log(res);
            });
    });
});