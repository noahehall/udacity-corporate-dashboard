/* eslint-disable sort-vars, no-unused-vars */
import { connect } from 'react-redux';
import { pieSlices } from './piechart/generatearcs.js';
import { getPieChart } from 'store/selectors';
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
      chartHeight: 500,
      chartWidth: 500,
      margin: {  // eslintignore specially good for crating space for axes, legends, etc
        bottom: 50,
        left: 70,
        right: 20,
        top: 20,
      },
      svgHeight: 250,
      svgWidth: 250,
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

  shouldComponentUpdate () {
    return true;
  }

  componentWillUnmount () {
    if( typeof window !== 'undefined' )
      window.removeEventListener(`resize`, this.setSize);
  }

  setSize = (e, parent = this.pieChart) => {
    this.setState({
      chartHeight: parent.clientHeight - (this.state.margin.top + this.state.margin.bottom),
      chartWidth: parent.clientWidth - (this.state.margin.left + this.state.margin.right),
      svgHeight: parent.clientHeight,
      svgWidth: parent.clientWidth,
    });

    return true;
  }

  render () {
    return (
      <section
        id={this.props.id}
        ref={(pieChart) => this.pieChart = pieChart}
        style={{
          display: 'inline-block',
          height: this.state.svgHeight,
          overflow: 'hidden',
          position: 'relative',
          verticalAlign: 'top',
          width: this.state.svgWidth,
        }}
      >
        <svg
          className='chart-svg'
          preserveAspectRatio={'xMinYMin meet'}
          ref={(chartSVG) => this.chartSVG = chartSVG}
          style={{
            display: 'inline-block',
            position: 'absolute',
          }}
          viewBox={`0 0 ${this.state.svgWidth} ${this.state.svgHeight}`}
        >
          <g
            className='chart-g'
            height={this.state.chartWidth}
            ref={(chartG) => this.chartG = chartG}
            transform={`translate(${[ this.state.margin.left, this.state.margin.top ]})`}
            width={this.state.chartWidth}
          >
            <g
              className='piechart-slices-container'
              ref={(slicesContainer) => this.slicesContainer = slicesContainer}
              transform={`translate(${[ this.state.chartWidth/2, this.state.chartHeight/2 ]})`}
            >
              {pieSlices({
                chartHeight: this.state.chartHeight,
                data:this.props.pieChart.data
              })}
            </g>
          </g>
        </svg>
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
