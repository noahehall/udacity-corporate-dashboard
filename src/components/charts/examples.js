import { connect } from 'react-redux';
import { getBarChart, getMargins, getPieChart } from 'store/selectors';
import BarChart from './examples/barchart';
import PieChart from './examples/piechart';
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
    margin: React.PropTypes.object,
    pieChart: React.PropTypes.object,
  }

  constructor (props) {
    super(props);

    this.state = {
      containerHeight: 100,
      containerWidth: 100,
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
          id='chart-container'
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
          <BarChart
            chart={this.props.barChart}
            chartType='bar'
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            id='bar-chart'
            margin={this.props.margin}
          />
        </section>
        <section
          id='chart-container'
          style={{
            display: 'block',
            maxHeight: '400px',
            overflow: 'hidden',
            position: 'relative',
            verticalAlign: 'top',
            width: '100%',
          }}
        >
          <PieChart
            chart={this.props.pieChart}
            chartType='pie'
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            id='pie-chart'
            margin={this.props.margin}
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
    margin: margins(state),
    pieChart: getPieChart(state),
  };
};

export default connect(
  mapStateToProps
)(Examples);
