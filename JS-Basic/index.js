// API: https://automationintesting.online

// GET Request
console.log(fetch("https://automationintesting.online/room"))

// POST Request
fetch("https://automationintesting.online/auth/login", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(
        {
            "username": "admin",
	        "password": "password"
        }
    )
})



