const mySqlPool = require("../../connection");

(async () => {
    const query = "INSERT INTO DEPT(DID, DNAME, DLOC) VALUES ( 10, 'ACCOUNTING', 'NEW-YORK');INSERT INTO DEPT VALUES ( 20, 'RESEARCH', 'DALLAS');INSERT INTO DEPT VALUES ( 30, 'SALES', 'CHICAGO');INSERT INTO DEPT VALUES ( 40, 'OPERATIONS','BOSTON');";
      try {
          await mySqlPool.execute(query.replace(/\n/g, ''));
          console.log('dept data inserted')
          process.exit(0);
      } catch(e) {
          console.log(e);
          process.exit(1);
      }
})();