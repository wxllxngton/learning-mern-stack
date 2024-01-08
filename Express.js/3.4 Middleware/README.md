### Middleware

#### Introduction

In between sending requests for instance between the **Server** and the **Routes** (GET, POST etc) comes the **middleware** where it can work with these requests before they get **processed**.

#### Things the middleware can do:

1. **Pre-process the request**
    - Fucntions can be performed on the requests before the final routing.
2. **Logging the request**
    - What type of the request it is, GET, POST, PUT etc.
    - How long does it take for the request to come through?
    - What is the status of the request being handled?.
3. **Authentification**
    - Checking whether access to the requested resourse can be granted.
4. **Process any errors in the requests**

A commonly used middleware is the `body-parser`.

#### Install body=parser

```bash
npm i body-parser
```

#### Using body parser as middleware

```javascript
// Since we are parsing html content
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
```

Now every request object has a body.

```javascript
console.log(req.body);
```

Output:

```json
{ "street": "Ndom", "pet": "Mike" }
```
