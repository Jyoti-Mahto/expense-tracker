export function validateBody(body) {
    if (!body.userName) {
        throw new Error(JSON.stringify({
            field: "userName",
            error: "username is missing"
        }))
    }
    if (!body.password) {
        throw new Error(JSON.stringify({
            field: "password",
            error: "password is missing"
        }))
    }
    if (!body.emailId) {
        throw new Error(JSON.stringify({
            field: "emailId",
            error: "emailId is missing"
        }))
    }
    if (!body.contactNumber) {
        throw new Error(JSON.stringify({
            field: "contactNumber",
            error: "contact number is missing"
        }))
    }
}
