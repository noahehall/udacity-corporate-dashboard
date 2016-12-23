import { connect } from 'react-redux';
import {
  getLineChart,
  getMargins,
  getOpenIssues,
  getTotalEmployees,
  getScatterPlot,
} from 'store/selectors';
import Chart from './charts';
import React from 'react';

export class Examples extends React.Component {
  static get defaultProps () {
    return {
      id: 'examples-of-charts',
    };
  }

  static propTypes = {
    id: React.PropTypes.string,
    lineChart: React.PropTypes.object,
    margins: React.PropTypes.object,
    openIssues: React.PropTypes.object,
    scatterPlotChart: React.PropTypes.object,
    totalEmployees: React.PropTypes.object,
  }

  constructor (props) {
    super(props);

    this.state = {
      containerHeight: 200,
      containerWidth: 200,
    };
  }

  componentDidMount () {
    this.setSize();
    if (typeof window !== 'undefined') window.addEventListener(`resize`, this.setSize, false);
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !appFuncs._.isEqual(nextState, this.state)
      || !appFuncs._.isEqual(nextProps, this.props);
  }

  componentWillUnmount () {
    if (typeof window !== 'undefined') window.removeEventListener(`resize`, this.setSize);
  }

  setSize = () => {
    let containerHeight, containerWidth;

    try {
      containerHeight = this.container.offsetHeight;
    } catch (err) {
      appFuncs.console('error')(err);
      appFuncs.console('dir')(this.container);
      containerHeight = 200;
    }

    try {
      containerWidth = this.container.offsetWidth;
    } catch (err) {
      appFuncs.console('error')(err);
      appFuncs.console('dir')(this.container);
      containerWidth = 200;
    }

    this.setState({
      containerHeight,
      containerWidth,
    });

    return true;
  }

  render () {
    return (
      <article
        id={this.props.id}
        style={{
          width: '100%',
        }}
      >
        <section
          className='chart-container'
          ref={(container) => this.container = container}
          style={{
            display: 'block',
            maxHeight: '400px',
            overflow: 'hidden',
            position: 'relative',
            verticalAlign: 'top',
            width: '100%',
          }}
        >
          <Chart
            // https://github.com/d3/d3-time-format/blob/master/README.md#locale_format
            chart={this.props.totalEmployees}
            chartDataGroupBy='' // eslintignore only used if xScaleTime = true
            chartType='bar' // eslintignore requires x and y axis to have integer values
            colorScaleScheme='schemeCategory20'
            colorScaleType='basic'
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            datumLabels={['location']}
            id='employees-at-each-location'
            margins={this.props.totalEmployees.margins}
            preserveAspectRatio='xMinYMin meet'
            r={3.5}
            xAxis={true}
            xAxisLabel='Employees at Each Location'
            xScale={true}
            xScaleTime={false}
            xScaleTimeFormat='' // eslintlignore must match the format of your dates
            xValue='location'
            yAxis={true}
            yAxisLabel='Total Employees'
            yScale={true}
            yValue='totalEmployees' // eslintignore used for pie chart as well
          />
        </section>
        <section
          className='chart-container'
          style={{
            display: 'block',
            maxHeight: '400px',
            overflow: 'hidden',
            position: 'relative',
            verticalAlign: 'top',
            width: '100%',
          }}
        >
          <Chart
            // https://github.com/d3/d3-time-format/blob/master/README.md#locale_format
            chart={this.props.openIssues}
            chartDataGroupBy='' // eslintignore only used if xScaleTime = true
            chartType='pie'
            colorScaleScheme='schemeCategory20'
            colorScaleType='basic'
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            datumLabels={[ 'status', 'total' ]}
            id='open-issues'
            margins={this.props.totalEmployees.margins}
            preserveAspectRatio='xMinYMin meet'
            r=''
            xAxis={false}
            xAxisLabel=''
            xScale={false}
            xScaleTime={false}
            xScaleTimeFormat='' // eslintlignore must match the format of your dates
            xValue=''
            yAxis={false}
            yAxisLabel=''
            yScale={true}
            yValue='total' // eslintignore used for pie chart slice size as well
          />
        </section>
        <section
          className='chart-container'
          style={{
            display: 'block',
            maxHeight: '400px',
            overflow: 'hidden',
            position: 'relative',
            verticalAlign: 'top',
            width: '100%',
          }}
        >
          <Chart
            chart={this.props.lineChart}
            chartDataGroupBy='artist' // eslintignore only used if xScaleTime = true
            chartType='line'
            colorScaleScheme='schemeAccent'
            colorScaleType='chromatic'
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            datumLabels={[ 'artist', 'downloads' ]}
            id='line-chart'
            margins={this.props.lineChart.margins}
            preserveAspectRatio='xMinYMin meet'
            xAxis={true}
            xAxisLabel='Date'
            xScale={true}
            xScaleTime={true}
            // https://github.com/d3/d3-time-format/blob/master/README.md#locale_format
            xScaleTimeFormat='%Y/%m/%d'
            xValue='date'
            yAxis={true}
            yAxisLabel='Downloads'
            yScale={true}
            yValue='downloads'
          />
        </section>
        <section
          className='chart-container'
          style={{
            display: 'block',
            maxHeight: '400px',
            overflow: 'hidden',
            position: 'relative',
            verticalAlign: 'top',
            width: '100%',
          }}
        >
          <Chart
            chart={this.props.scatterPlotChart}
            chartType='scatterplot'
            colorScaleScheme='schemeAccent'
            colorScaleType='chromatic'
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            datumLabels={[ 'gender', 'age' ]}
            id='scatterplot-chart'
            margins={this.props.scatterPlotChart.margins}
            preserveAspectRatio='xMinYMin meet'
            r={3.5}
            xAxis={true}
            xAxisLabel='hours per week'
            xScale={true}
            xValue='hoursWorkedPerWeek'
            yAxis={true}
            yAxisLabel='salary'
            yScale={true}
            yValue='salary'
          />
        </section>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  // selector shared with multiple components
  const margins = getMargins();

  return {
    lineChart: getLineChart(state),
    margins: margins(state),
    openIssues: getOpenIssues(state),
    scatterPlotChart: getScatterPlot(state),
    totalEmployees: getTotalEmployees(state),
  };
};

export default connect(
  mapStateToProps
)(Examples);
