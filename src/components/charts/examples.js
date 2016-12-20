import { connect } from 'react-redux';
import { getBarChart, getMargins, getPieChart } from 'store/selectors';
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
    margins: React.PropTypes.object,
    pieChart: React.PropTypes.object,
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
            colorScale='schemeAccent'
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            id='bar-chart'
            labels={[ 'lastName', 'total' ]}
            margins={this.props.margins}
            value='total'
            xAxis={true}
            xScale={true}
            yAxis={true}
            yScale={true}
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
            // implement colorscale for pie charts
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            id='pie-chart'
            labels={[ 'lastName', 'total' ]}
            margins={this.props.margins}
            value='total'
            xAxis={false}
            xScale={false}
            yAxis={false}
            yScale={false}
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
    margins: margins(state),
    pieChart: getPieChart(state),
  };
};

export default connect(
  mapStateToProps
)(Examples);
