
const requestHandler = ((req,res) => {
    const { url, method } = req;
    if(url === "/"){
        res.setHeader("content-type", "text/html");
        res.write("<h1>Welcome to this site!</h1>");
        res.write("<form action='/create-user' method='POST'><input type='text' name='username'/><button type='submit'>send</button></form>")
        res.statusCode = 200;
        return res.end();
    }
    if(url === "/users"){
        res.setHeader("content-type", "text/html");
        res.write("<ul>Users List: <li>User 1</li><li>User 2</li><li>User 3</li></ul>");
        res.statusCode = 200;
        return res.end();
    }
    if(url === "/create-user" && method === "POST"){
        const body = [];

        req.on("data", (chunk) => {
            body.push(chunk);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const data = parsedBody.split("=")[1];
            console.log("data: ", data);
            res.writeHead(302, { Location: "/"}) ;
            return res.end();
        })
    }
    res.writeHead(200, {
        "content-type": "text/html",
    })
});

module.exports = requestHandler;