import { connect } from 'react-redux';
import {
  getMargins,
  getTable,
} from 'store/selectors';
import Chart from './charts';
import React from 'react';

export class Examples extends React.Component {
  static get defaultProps () {
    return {
      id: 'examples-of-charts2',
    };
  }

  static propTypes = {
    id: React.PropTypes.string,
    margins: React.PropTypes.object,
    table: React.PropTypes.object,
  }

  constructor (props) {
    super(props);
    this.state = {
      containerHeight: 200,
      containerWidth: 200,
    };
  }

  componentDidMount () {
    // filter the table
    appFuncs.filterTable.setFilterGrid('table');
    appFuncs.sortTable.init();

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
      containerHeight = 200;
    }

    try {
      containerWidth = this.container.offsetWidth;
    } catch (err) {
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
        <h4>all issues</h4>
        <section
          className='chart-container'
          ref={(container) => this.container = container}
          style={{
            display: 'block',
            fontSize: '8px',
            maxHeight: '400px',
            overflow: 'scroll',
            position: 'relative',
            verticalAlign: 'top',
            width: '100%',
          }}
        >
          <Chart
            chart={this.props.table}
            chartDataGroupBy=''
            chartType='table'
            colorScaleScheme=''
            colorScaleType=''
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            datumLabels={[]}
            filterable={true}
            id='table'
            margins={this.props.table.margins}
            preserveAspectRatio=''
            r=''
            sortable={true}
            xAxis={false}
            xAxisLabel=''
            xScale={false}
            xScaleTime={false}
            xScaleTimeFormat=''
            xValue=''
            yAxis={false}
            yAxisLabel=''
            yScale={false}
            yValue=''
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
    margins: margins(state),
    table: getTable(state),
  };
};

export default connect(
  mapStateToProps
)(Examples);
