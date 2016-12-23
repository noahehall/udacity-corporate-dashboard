// best random generator: https://www.mockaroo.com/
import scatterPlotData from './fakedata/scatterplot.json';
import lineChartData from './fakedata/linechart.json';
import employeesAtLocations from './fakedata/employeesatlocations.json';

export default {
  data: {
    barChart: {
      data: [
        {
          gender: 'Male',
          lastName: 'Hello',
          total: 141.92,
        }, {
          gender: 'Male',
          lastName: 'Good Bye',
          total: 149.79,
        }, {
          gender: 'Male',
          lastName: 'Blooper',
          total: 134.23,
        }, {
          gender: 'Male',
          lastName: 'Roberts',
          total: 141.92,
        }, {
          gender: 'Male',
          lastName: 'Mills',
          total: 149.79,
        }, {
          gender: 'Male',
          lastName: 'Watson',
          total: 134.23,
        }, {
          gender: 'Female',
          lastName: 'Alexander',
          total: 272.14,
        }, {
          gender: 'Female',
          lastName: 'Mason',
          total: 102.42,
        }, {
          gender: 'Female',
          lastName: 'Ward',
          total: 189.61,
        }, {
          gender: 'Male',
          lastName: 'Dean',
          total: 246.51,
        }, {
          gender: 'Female',
          lastName: 'Morrison',
          total: 184.31,
        }, {
          gender: 'Female',
          lastName: 'Howard',
          total: 247.02,
        }, {
          gender: 'Male',
          lastName: 'Hicks',
          total: 268.50,
        },
      ],
      margins: {
        bottom: 100,
        left: 60,
        right: 60,
        top: 20,
      },
    },
    lineChart: {
      data: lineChartData,
      margins: {
        bottom: 60,
        left: 60,
        right: 60,
        top: 20,
      },
    },
    scatterPlot: {
      data: scatterPlotData,
      margins: {
        bottom: 40,
        left: 60,
        right: 60,
        top: 20,
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
