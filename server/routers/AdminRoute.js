import express from 'express';
import con from '../utility/db.js'; // Correct path to db.js
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const router = express.Router();  // Use 'router' instead of 'routers'

router.post('/adminlogin', (req, res) => {
    console.log(`${req.body.email} ${req.body.password}`);  // This should log the request body to the terminal
    // res.send("Payload received");  // Send a response back to the client
    const sql = "SELECT * FROM admin WHERE email = ? AND password = ?"
    con.query(sql,[req.body.email, req.body.password], (err,result)=> {
        if(err) return res.json({loginStatus: false, Error: "Query error"})
            if (result.length >0){
                const email = result[0].email;
                const token = jwt.sign({role: "admin",email:email}, 
                    "jwt_secret_key",
                     {expiresIn: '1d'}
                   )
                   res.cookie('token', token)
                  return res.json({loginStatus:true})
            } else{
                return res.json({loginStatus: false, Error: "wrong credentials"})
            }
    })
})

router.get('/category', (req, res) => {
    const sql = "SELECT * FROM category";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" });
        return res.json({Status: true, Result: result});  // Return the query result as the response
    });

    router.post('/addcategory', (req, res) => {
        const sql = "INSERT INTO category (`name`) VALUES (?)"
       // Ensure you're accessing 'category' correctly from the request body
    
        con.query(sql, [req.body.category], (err, result) => {
            if (err) return res.json({ Status: false, Error: "Query Error" })
            return res.json({ Status: true });
        });
    });

});

router.post('/addemployee', (req, res) => {
  
    const sql = `INSERT INTO employee (name, email, password, salary, address) VALUES (?, ?, ?, ?, ?)`;

    // Hash the password before inserting it into the database
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) return res.json({ Status: false, Error: "Hashing Error" });

        const values = [
            req.body.name,
            req.body.email,
            hash, // Use the hashed password
            req.body.salary,
            req.body.address,
            // req.body.image // Assume the image is a string (e.g., file path or base64 string)
        ];

        con.query(sql, values, (err, result) => {
            if (err) return res.json({ Status: false, Error: "Query Error" });
            return res.json({ Status: true });
        });
    });
});

router.get('/employee', (req, res) => {
    const sql = "SELECT * FROM employee";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query Error" });
        return res.json({Status: true, Result: result});  // Return the query result as the response
    });
})

export { router as adminRoute };  // Export 'router' as 'adminRoute'

 