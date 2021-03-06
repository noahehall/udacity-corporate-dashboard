import { connect } from 'react-redux';
import {
  getMargins,
  getNewIssues,
  getOpenIssues,
  getPayingCustomers,
} from 'store/selectors';
import Chart from './charts';
import React from 'react';

export class Examples extends React.Component {
  static get defaultProps () {
    return {
      id: 'examples-of-charts3',
    };
  }

  static propTypes = {
    id: React.PropTypes.string,
    margins: React.PropTypes.object,
    newIssues: React.PropTypes.object,
    openIssues: React.PropTypes.object,
    payingCustomers: React.PropTypes.object,
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
        <h4>number of open issues</h4>
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
            chart={this.props.openIssues}
            chartDataGroupBy='' // eslintignore only used if xScaleTime = true
            chartType='pie'
            colorScaleScheme='schemeCategory20'
            colorScaleType='basic'
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            datumLabels={[ 'status', 'total' ]}
            id='open-issues'
            margins={this.props.openIssues.margins}
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
        <h4>number of paying customers over a period of time</h4>
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
            chart={this.props.payingCustomers}
            chartDataGroupBy='type'
            chartType='line'
            colorScaleScheme='schemeCategory20'
            colorScaleType='basic'
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            datumLabels={['total']}
            id='paying-customers'
            margins={this.props.payingCustomers.margins}
            preserveAspectRatio='xMinYMin meet'
            r=''
            xAxis={true}
            xAxisLabel='Date'
            xScale={true}
            xScaleTime={true}
            xScaleTimeFormat='%Y/%m/%d'
            xValue='date'
            yAxis={true}
            yAxisLabel='Total Paying Customers'
            yScale={true}
            yValue='totalPayingCustomers'
          />
        </section>
        <h4>number of reported issues over a period of time</h4>
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
            chart={this.props.newIssues}
            chartDataGroupBy=''
            chartType='bar'
            colorScaleScheme='schemeCategory20'
            colorScaleType='basic'
            containerHeight={this.state.containerHeight}
            containerWidth={this.state.containerWidth}
            datumLabels={['date']}
            id='new-issues'
            margins={this.props.newIssues.margins}
            preserveAspectRatio='xMinYMin meet'
            r=''
            xAxis={true}
            xAxisLabel='Date'
            xScale={true}
            xScaleTime={false}
            xScaleTimeFormat='%Y/%m/%d'
            xValue='date'
            yAxis={true}
            yAxisLabel='Total New Issues'
            yScale={true}
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
    margins: margins(state),
    newIssues: getNewIssues(state),
    openIssues: getOpenIssues(state),
    payingCustomers: getPayingCustomers(state),
  };
};

export default connect(
  mapStateToProps
)(Examples);
