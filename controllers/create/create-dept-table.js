const mySqlPool = require("../../connection");

(async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS DEPT (
        DID int NOT NULL,
        DNAME varchar(20) NOT NULL,
        DLOC varchar(30) NOT NULL,
        PRIMARY KEY (DID)
      ) ENGINE=InnoDB;`;

      try {
          await mySqlPool.execute(query);
          console.log('dept table created')
          process.exit(0);
      } catch(e) {
          console.log(e);
          process.exit(1);
      }
})();