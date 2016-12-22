import { connect } from 'react-redux';
import {
  getBarChart,
  getLineChart,
  getMargins,
  getPieChart,
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
    barChart: React.PropTypes.object,
    id: React.PropTypes.string,
    lineChart: React.PropTypes.object,
    margins: React.PropTypes.object,
    pieChart: React.PropTypes.object,
    scatterPlotChart: React.PropTypes.object,
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
    this.setState({
      containerHeight: this.container.offsetHeight,
      containerWidth: this.container.offsetWidth,
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
            colorScaleType='categorical'
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
            colorScaleType='categorical'
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
            chart={this.props.barChart}
            chartType='bar'
            colorScaleScheme='schemeAccent'
            colorScaleType='categorical'
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            datumLabels={[ 'lastName', 'total' ]}
            id='bar-chart'
            margins={this.props.barChart.margins}
            preserveAspectRatio='xMinYMin meet'
            xAxis={true}
            xAxisLabel='person and total'
            xScale={true}
            yAxis={true}
            yAxisLabel='total'
            yScale={true}
            yValue='total'
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
            chart={this.props.pieChart}
            chartType='pie'
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            datumLabels={[ 'lastName', 'total' ]}
            id='pie-chart'
            margins={this.props.margins}
            preserveAspectRatio='xMinYMin meet'
            xAxis={false}
            xScale={false}
            yAxis={false}
            yScale={false}
            yValue='total'
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
    barChart: getBarChart(state),
    lineChart: getLineChart(state),
    margins: margins(state),
    pieChart: getPieChart(state),
    scatterPlotChart: getScatterPlot(state),
  };
};

export default connect(
  mapStateToProps
)(Examples);
