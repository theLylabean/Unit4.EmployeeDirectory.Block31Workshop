import employees from "./db/employees.js";
import express from "express";
const app = express();

app.route('/').get((req, res) => {
    res.send('Hello employees!');
})

app.route('/employees').get((req, res) => {
    res.send(employees);
})

app.route('/employees/random').get((req, res) => {
    const idx = Math.floor(Math.random() * employees.length);
    const found = employees[idx]
    res.send({ id: found.id, name: found.name })
})

app.route('/employees/:id').get((req, res) => {
    const idx = Number(req.params.id);
    const found = employees.find(employee => employee.id === idx);
    if(found) {
        res.send(found)
    } else {
        res.status(404).send('There is no employee with that id.')
    }
})

export default app

