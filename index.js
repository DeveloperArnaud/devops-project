const express = require('express');
const employeeRoutes = require('./routes/employee')
const departmentRoutes = require('./routes/department')

const app = express();


const client = require('./connection')

client.on('error', (err) => {
    
    console.log(err)
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/create-table', (req, res) => {

    const sqlDept = `
    CREATE TABLE IF NOT EXISTS DEPT (
        DID int NOT NULL,
        DNAME varchar(20) NOT NULL,
        DLOC varchar(30) NOT NULL,
        PRIMARY KEY (DID)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`
    
      client.query(sqlDept.replace(/\n/g, ''), (err,result) => {
        if(err) {
            res.status(500).json({error: err})
        } else {
            res.send("table dept created")
        } 
    })
})

app.use('/create-table-emp', (req, res) => {

    const sqlEmp = `
    CREATE TABLE IF NOT EXISTS EMP (
        EID int NOT NULL,
        ENAME varchar(20) NOT NULL,
        JOB varchar(20) NOT NULL,
        MGR int DEFAULT NULL,
        HIRED date NOT NULL,
        SAL decimal(6,2) NOT NULL,
        COMM decimal(6,2) DEFAULT NULL,
        DID int DEFAULT NULL,
        PRIMARY KEY (EID),
        KEY EMP_FK_MNGR (MGR),
        KEY EMP_FK_DID (DID),
        CONSTRAINT EMP_FK_DID FOREIGN KEY (DID) REFERENCES DEPT (DID),
        CONSTRAINT EMP_FK_MNGR FOREIGN KEY (MGR) REFERENCES EMP (EID),
        CONSTRAINT EMP_CK_EMP_HIRED_DATE CHECK ((HIRED <= sysdate())),
        CONSTRAINT EMP_CK_EMP_SALARE_7500 CHECK ((((JOB <> _utf8mb4'PRESIDENT') and (SAL < 7500)) or ((JOB = _utf8mb4'PRESIDENT') and (SAL > 0))))
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
      `;

    client.query(sqlEmp.replace(/\n/g, ''), (err,result) => {
        if(err) {
            res.status(500).json({error: err})
        } else {
            res.send("table emp created")
        } 
    })
})

app.use('/insert-dept', (req, res) => {
    const insertDept = 
    `insert into DEPT values(10, 'ACCOUNTING','NEW-YORK');insert into DEPT values(20, 'RESEARCH','DALLAS');insert into DEPT values(30, 'SALES','CHICAGO');insert into DEPT values(40,'OPERATIONS','BOSTON');`;
    client.query(insertDept.replace(/\n/g, ''), (err,result) => {
        if(err) {
            throw err
        } else {
            res.send("data dept inserted")
        } 
    })
})

app.use('/insert-emp', (req, res) => {
    const insertEmp = 
    `insert into EMP values(7839, 'KING',    'PRESIDENT',    null, date '1981-11-17', 7500.00,   null,   null);
    insert into EMP values(7566, 'JONES',   'MANAGER',      7839, date '1981-04-02', 2975.00,   null,   20);
    insert into EMP values(7698, 'BLAKE',   'MANAGER',      7839, date '1981-05-01', 2850.00,   null,   30);
    insert into EMP values(7782, 'CLARK',   'MANAGER',      7839, date '1981-06-09', 2450.00,   null,   10);
    insert into EMP values(8000, 'SMITH',   'MANAGER',      7839, date '1980-12-17', 3000.00,   null,   10);
    insert into EMP values(7788, 'SCOTT',   'ANALYST',      7566, date '1981-11-09', 3000.00,   null,   20);
    insert into EMP values(7902, 'FORD',    'ANALYST',      7566, date '1981-12-03', 3000.00,   null,   20);
    insert into EMP values(7499, 'ALLEN',   'SALESMAN',     7698, date '1981-02-20', 1600.00,   300.00, 30);
    insert into EMP values(7521, 'WARD',    'SALESMAN',      7698, date '1981-02-22', 1250.00,   500.00, 30);
    insert into EMP values(7654, 'MARTIN',  'SALESMAN',     7698, date '1981-09-28', 1250.00,   1400.00, 30);
    insert into EMP values(7844, 'TURNER',  'SALESMAN',     7698, date '1981-09-08', 1500.00,   0.00,   30);
    insert into EMP values(7900, 'JAMES',   'CLERK',        7698, date '1981-12-03', 950.00,    null,   30);
    insert into EMP values(7934, 'MILLER',  'CLERK',        7782, date '1982-01-23', 1300.00,   null,   10);
    insert into EMP values(7876, 'ADAMS',   'CLERK',        7788, date '1981-09-23', 1100.00,   null,   20);
    insert into EMP values(7369, 'SMITH',   'CLERK',        7902, date '1980-12-17', 800.00,    null,   20);`;
    client.query(insertEmp.replace(/\n/g, ''), (err,result) => {
        if(err) {
            throw err
        } else {
            res.send("data emp inserted")
        } 
    })
})


app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes)




app.listen(3306)

module.exports = app
