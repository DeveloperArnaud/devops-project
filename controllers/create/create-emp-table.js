const mySqlPool = require("../../connection");

(async () => {
    const query = `
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
      ) ENGINE=InnoDB;
      `;
      try {
          await mySqlPool.execute(query);
          console.log('emp table created')
          process.exit(0);
      } catch(e) {
          console.log(e);
          process.exit(1);
      }
})();