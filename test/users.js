import supertest from "supertest";

const request = supertest("https://automationintesting.online")

describe("Users", () => {
    it("GET /users", () => {
        request.get('/room/').end((err,res) => {
                console.log(err);
                console.log(res);
            });
    });
});
