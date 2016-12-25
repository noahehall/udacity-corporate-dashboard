// best random generator: https://www.mockaroo.com/
import employeesAtLocations from './fakedata/employeesatlocations.json';
import openIssues from './fakedata/openissues.json';
import payingCustomers from './fakedata/payingcustomers.json';
import newIssues from './fakedata/newissues.json';
import table from './fakedata/table.json';

export default {
  data: {
    newIssues: {
      data: newIssues,
      margins: {
        bottom: 60,
        left: 60,
        right: 60,
        top: 20,
      },
    },
    openIssues: {
      data: openIssues,
      margins: {
        bottom: 20,
        left: 20,
        right: 20,
        top: 20,
      },
    },
    payingCustomers: {
      data: payingCustomers,
      margins: {
        bottom: 60,
        left: 60,
        right: 60,
        top: 20,
      },
    },
    table: {
      data: table,
      margins: {
        bottom: 10,
        left: 10,
        right: 10,
        top: 10,
      },
    },
    totalEmployees: {
      data: employeesAtLocations,
      margins: {
        bottom: 100,
        left: 60,
        right: 60,
        top: 20,
      },
    },
  },
  msg: 'welcome to your application',
};
