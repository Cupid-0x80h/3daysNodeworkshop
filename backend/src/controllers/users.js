import { db } from "../db/db.js";

export const getAllUsers = function (req, res) {

    const query = "SELECT * FROM users";
    db.query(query, function (err, results) {
        if (err) {
            return res.status(500).send("Error fetching users");
        }
        res.status(200).json(results);
    });
}


export const createUser = function (req, res) {
    const username = req.body.username;
    const email = req.body.email;

    const query = `INSERT INTO users (username, email) VALUES ("${username}","${email}")`;

    db.query(query, function (err, results) {
        if (err) {
            return res.status(500).send("Error creating user");
        }
        res.status(201).json({ id: results.insertId, username, email });
    });

}