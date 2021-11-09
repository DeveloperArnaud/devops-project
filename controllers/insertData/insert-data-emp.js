const mySqlPool = require("../../connection");

(async () => {
    const query = `
        insert into EMP values(7839, 'KING',    'PRESIDENT',    null, date '1981-11-17', 7500.00,   null,   null);
        insert into EMP values(7566, 'JONES',   'MANAGER',      7839, date '1981-04-02', 2975.00,   null,   20);
        insert into EMP values(7698, 'BLAKE',   'MANAGER',      7839, date '1981-05-01', 2850.00,   null,   30);
        insert into EMP values(7782, 'CLARK',   'MANAGER',      7839, date '1981-06-09', 2450.00,   null,   10);
        insert into EMP values(8000, 'SMITH',   'MANAGER',      7839, date '1980-12-17', 3000.00,   null,   10);
        --
        insert into EMP values(7788, 'SCOTT',   'ANALYST',      7566, date '1981-11-09', 3000.00,   null,   20);
        insert into EMP values(7902, 'FORD',    'ANALYST',      7566, date '1981-12-03', 3000.00,   null,   20);
        --
        insert into EMP values(7499, 'ALLEN',   'SALESMAN',     7698, date '1981-02-20', 1600.00,   300.00, 30);
        insert into EMP values(7521, 'WARD',    'SALESMAN',      7698, date '1981-02-22', 1250.00,   500.00, 30);
        insert into EMP values(7654, 'MARTIN',  'SALESMAN',     7698, date '1981-09-28', 1250.00,   1400.00, 30);
        insert into EMP values(7844, 'TURNER',  'SALESMAN',     7698, date '1981-09-08', 1500.00,   0.00,   30);
        --
        insert into EMP values(7900, 'JAMES',   'CLERK',        7698, date '1981-12-03', 950.00,    null,   30);
        insert into EMP values(7934, 'MILLER',  'CLERK',        7782, date '1982-01-23', 1300.00,   null,   10);
        insert into EMP values(7876, 'ADAMS',   'CLERK',        7788, date '1981-09-23', 1100.00,   null,   20);
        insert into EMP values(7369, 'SMITH',   'CLERK',        7902, date '1980-12-17', 800.00,    null,   20);
        
        -- Table MISSION
        insert into MISSION values(218, 7499, 'Decathlon',  'LYON',     date '2011-12-24');
        insert into MISSION values(209, 7654, 'BMW',        'BERLIN',   date '2011-02-09'); -- Martin
        insert into MISSION values(212, 7698, 'MacDo',      'CHICAGO',  date '2011-03-04'); -- Blake
        insert into MISSION values(216, 7698, 'IBM',        'CHICAGO',  date '2011-02-09'); -- Blake
        insert into MISSION values(219, 7782, 'BMW',        'CHICAGO',  date '2011-08-16');
        insert into MISSION values(214, 7900, 'Fidal',      'PARIS',    date '2011-06-07');
        insert into MISSION values(213, 7902, 'Oracle',     'DALLAS',   date '2011-04-11');
        insert into MISSION values(220, 7369, 'IBM',        'LONDON',   date '2015-06-20');
        insert into MISSION values(300, 8000, 'ECE',        'PARIS',    date '2018-06-11');
      `;
      try {
          await mySqlPool.execute(query.replace(/\n/g, ''));
          console.log('emp data inserted')
          process.exit(0);
      } catch(e) {
          console.log(e);
          process.exit(1);
      }
})();