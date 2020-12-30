let express = require('express');
const port = process.env.PORT || 5000
const app = express();
const cors = require('cors');
const pool = require('./db');


// middleware
app.use(express.json());
app.use(cors());

// routes

// Add employee
app.post('/api/addemp', async(req,res)=>{
    try {
        const allEmployee = await pool.query(`INSERT INTO employee (name,age,salary,created_on) values ('${req.body.name}', ${req.body.age},${req.body.salary}, NOW())`);
            let result = {
                status:200,
                message: 'Employee added successfully'
        }
        res.send(result)
    } catch (error) {
        res.send(error);
    }
});

// Getall Employees
app.get('/api/allemp', async(req, res) => {
    try {
      const allEmployee = await pool.query('select * from employee');
      result = allEmployee.rows;
        res.send(result); 
    } catch (error) {
        res.send(error);
    }
});

// Get Employee by id
app.get('/api/allemp/:id', async(req, res) => {
    try {
      const allEmployee = await pool.query(`select * from employee where empid= ${req.params.id}; `);
      result = allEmployee.rows;
        res.send(result); 
    } catch (error) {
        res.send(error);
    }
});

// Update employee
app.put('/api/updateemp', async(req,res)=>{
    try {
        const allEmployee = await pool.query(`update employee set name='${req.body.name}',age =${req.body.age},salary = ${req.body.salary} where empid = ${req.body.empid} `);
            let result = {
                status:200,
                message: 'Employee updated successfully'
        }
        res.send(result)
    } catch (error) {
        res.send(error);
    }
});

// Update employee
app.delete('/api/deleteemp', async(req,res)=>{
    try {
        const allEmployee = await pool.query(`delete from employee where empid= ${req.query.empid};  `);
            let result = {
                status:200,
                message: 'Employee deleted successfully'
        }
        res.send(result)
    } catch (error) {
        res.send(error);
    }
});

// creating a listner
app.listen(5000, () => {
    console.log('Listening on port 5000 .....');
});

