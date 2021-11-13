const mySqlPool = require("../../connection");

(async () => {
    const query = `
    DROP DATABASE IF EXISTS company;

    -- 1. DROP all tables
    
    -- Note: beware of foreign keys
    --
    
    --
    -- 2. CREATE database 
    --
    
    CREATE DATABASE company;
    `;

    try {

        await mySqlPool.execute(query.replace(/\n/g, ''))
        console.log('database created')
        process.exit(0);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
})();