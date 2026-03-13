//port config
const PORT = 3001;
//express config
const express = require('express');
//config the server application
const app = express(); 
//app.listen(PORT, () => {
    //console.log(`Server: Somidu | Batch: 24.2 | Started at http://localhost:${PORT}`);
//});
// //new way
//app.listen(PORT);
app.use(express.urlencoded({ extended: true }));


let submittedName = "";

const uiStyle = `
    <style>
        body {
            background-color: #0b0f19;
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .card {
            background-color: #171c28;
            padding: 40px 30px;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            text-align: center;
            width: 320px;
        }
        h2 {
            color: #a87ffb;
            font-size: 28px;
            margin-top: 0;
            margin-bottom: 10px;
        }
        p {
            color: #8b949e;
            font-size: 13px;
            margin-bottom: 25px;
        }
        input {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            background-color: #0b0f19;
            border: 1px solid #2a303c;
            border-radius: 8px;
            color: white;
            box-sizing: border-box;
            outline: none;
        }
        input:focus {
            border-color: #6366f1;
        }
        button {
            width: 100%;
            padding: 12px;
            background-color: #6366f1;
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 15px;
        }
        button:hover {
            background-color: #4f46e5;
        }
        a.go-back {
            color: #8b949e;
            text-decoration: none;
            font-size: 14px;
        }
        a.go-back:hover {
            color: #a87ffb;
        }
    </style>
`;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            ${uiStyle}
        </head>
        <body>
            <div class="card">
                <h2>Welcome</h2>
                <p>Please enter your name to receive a greeting.</p>
                <form action="/submit-name" method="POST">
                    <input type="text" name="userName" placeholder="Enter your name" required>
                    <button type="submit">Get Greeting</button>
                </form>
            </div>
        </body>
        </html>
    `);
});

app.post('/submit-name', (req, res) => {
    submittedName = req.body.userName; 
    res.redirect('/greeting'); 
});

app.get('/greeting', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            ${uiStyle}
        </head>
        <body>
            <div class="card">
                <h2>Hello, ${submittedName}!</h2>
                <br>
                <a href="/" class="go-back">Go Back</a>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server: Somidu | Batch: 24.2 | Started at http://localhost:${PORT}`);
});