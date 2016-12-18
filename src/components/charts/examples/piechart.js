/* eslint-disable sort-vars, no-unused-vars */
import { connect } from 'react-redux';
import { getPieChart } from 'store/selectors';
import { SVG } from './svg.js';
import * as d3 from 'd3';
import * as d3chromatic from 'd3-scale-chromatic'; // eslint-disable-line  //https://github.com/d3/d3-scale-chromatic
import React from 'react';

export class Examples extends React.Component {
  static defaultProps = {
    id: 'piechart',
  }

  static propTypes = {
    id: React.PropTypes.string,
    pieChart: React.PropTypes.object, // eslint-disable-line
  }

  constructor (props) {
    super(props);

    this.state = {
      chartHeight: 1,
      chartWidth: 1,
      margin: {  // eslintignore specially good for creating space for axes, legends, etc
        bottom: 20,
        left: 60,
        right: 60,
        top: 20,
      },
      parentHeight: 1,
      parentWidth: 1,
      radius: 5/2,
    };
  }

  componentDidMount () {
    this.setSize();
    if ( typeof window !== 'undefined' )
      window.addEventListener(`resize`, this.setSize, false);

    // single tooltip used for all charts
    const pieToolTip = d3 // eslint-disable-line
      .select('body')
      .append('section')
      .style('background', 'black')
      .style('border', '2px red dashed')
      .style('borderRadius', '4px')
      .style('opacity', 0)
      .style('padding', '10px')
      .style('position', 'absolute');
  }

  componentWillUnmount () {
    if( typeof window !== 'undefined' )
      window.removeEventListener(`resize`, this.setSize);
  }

  setSize = (e, container = this.container) => {
    const parent = container.parentNode;

    this.setState({
      chartHeight: parent.offsetHeight - (this.state.margin.top + this.state.margin.bottom),
      chartWidth: parent.offsetWidth - (this.state.margin.left + this.state.margin.right),
      parentHeight: parent.offsetHeight,
      parentWidth: parent.offsetWidth,
      radius: Math.min(
        parent.offsetHeight - (this.state.margin.top + this.state.margin.bottom),
        parent.offsetWidth - (this.state.margin.left + this.state.margin.right)
      ) / 2,
    });

    return true;
  }

  render () {
    return (
      <section
        id={this.props.id}
        ref={(container) => this.container = container}
        style={{
          display: 'block',
          height: this.state.parentHeight,
          overflow: 'hidden',
          position: 'relative',
          verticalAlign: 'top',
          width: this.state.parentWidth,
        }}
      >
        <SVG
          chartHeight={this.state.chartHeight}
          chartType='pie'
          chartWidth={this.state.chartWidth}
          data={this.props.pieChart.data}
          labels={[ 'lastName', 'total' ]}
          margin={this.state.margin}
          svgHeight={this.state.parentHeight}
          svgWidth={this.state.parentWidth}
          value='total'
        />
      </section>
    );
  }
}

const mapStateToProps = (state) =>
  ({
    pieChart: getPieChart(state),
  });


export default connect(
  mapStateToProps
)(Examples);
