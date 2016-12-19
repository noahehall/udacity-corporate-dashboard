import { Bars } from './barchart/bars.js';
import { PieSlices } from './piechart/slices.js';
import * as d3 from 'd3';
import * as scales from './lib/scales.js';
import React from 'react';

export class SVG extends React.Component {
  static get defaultProps () {
    return {
      colorScale: 'schemeAccent',
      id: 'chart',
      preserveAspectRatio: 'xMinYMin meet',
      xAxis: false,
      xScale: false,
      yAxis: false,
      yScale: false,
    };
  }

  static propTypes = {
    chartType: React.PropTypes.string,
    colorScale: React.PropTypes.string, // eslint-disable-line
    data: React.PropTypes.array,
    id: React.PropTypes.string,
    labels: React.PropTypes.array,
    margin: React.PropTypes.object,
    preserveAspectRatio: React.PropTypes.string,
    svgHeight: React.PropTypes.number,
    svgWidth: React.PropTypes.number,
    value: React.PropTypes.string,
    xAxis: React.PropTypes.bool,
    xScale: React.PropTypes.bool,
    yAxis: React.PropTypes.bool,
    yScale: React.PropTypes.bool,
  }

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    if (this.props.yScale && this.props.yAxis)
      this.getYAxis(true);

    if (this.props.xScale && this.props.xAxis)
      this.getXAxis(true);
  }

  shouldComponentUpdate (nextProps) {
    return !appFuncs._.isEqual(nextProps, this.props);
  }

  componentDidUpdate () {
    if (this.props.xScale && this.props.xAxis)
      this.getXAxis(true);
  }

  getLabels = (d) => {
    let thisLabel = '';
    this.props.labels.forEach((label) => thisLabel += `${d[label]} `);

    return thisLabel;
  }

  getVisualContainerTransform = (chartWidth, chartHeight) => {
    switch(this.props.chartType.toLowerCase()) {
      case 'pie': return `translate(${[ chartWidth/2, chartHeight/2 ]})`;
      default : return 'translate(0, 0)';
    }
  }

  getXScale = () => {
    const dataLabelsArray = this.props.data.map((d) => this.getLabels(d));

    return scales.xScale({
      chartWidth: this.props.svgWidth - (this.props.margin.left + this.props.margin.right),
      dataLabelsArray,
    });
  }

  getXAxis = (getAxis = false) => {
    if (getAxis) {
      const xScale = this.getXScale();
      const xAxis = d3.axisBottom(xScale);
      d3.select(this.svg).select('.x.axis').call(xAxis);
    }
  }

  getYScale = () => {
    const dataMaxNumber = appFuncs._.maxBy(this.props.data, (o) => o[this.props.value])[this.props.value];

    return scales.yScale({
      chartHeight: this.props.svgHeight - (this.props.margin.top + this.props.margin.bottom),
      dataMaxNumber,
    });
  }

  getYAxis = (getAxis = false) => {
    if (getAxis) {
      // const node = this.refs.yAxis;
      const yScale = this.getYScale();
      // barchart vertical scale
      const yAxis = yScale.copy() // eslint-disable-line
            .range(yScale.range().reverse()); // eslintignore need 0 to be in bottom left
      // barchart vertical axis
      // appFuncs.console('dir')(node);
    }
  }

  render () {
    let ChartType;
    switch (this.props.chartType.toLowerCase()) {
      case 'pie':
        ChartType = PieSlices;
        break;
      case 'bar':
        ChartType = Bars;
        break;
      default : return <span />;
    }

    const
      chartHeight = this.props.svgHeight - (this.props.margin.top + this.props.margin.bottom),
      chartWidth = this.props.svgWidth - (this.props.margin.left + this.props.margin.right);

    let
      thisColorScale,
      thisXScale,
      thisYScale;

    if (this.props.yScale)
      thisYScale = this.getYScale();

    if (this.props.xScale)
      thisXScale = this.getXScale();

    if (this.props.colorScale)
      thisColorScale = scales.colorScale(this.props.colorScale); // eslint-disable-line

    return (
      <svg
        className='chart-svg'
        preserveAspectRatio={this.props.preserveAspectRatio}
        ref={(svg) => this.svg = svg}
        style={{
          display: 'block',
          position: 'relative',
        }}
        viewBox={`0 0 ${this.props.svgWidth} ${this.props.svgHeight}`}
        xmlns='http://www.w3.org/2000/svg'
      >
        <g
          className='chart-svg-g'
          height={chartHeight}
          transform={`translate(${this.props.margin.left}, ${this.props.margin.top})`}
          width={chartWidth}
        >
          <g
            className={`${this.props.chartType.toLowerCase()}-visual-container`}
            transform={this.getVisualContainerTransform(chartWidth, chartHeight)}
          >
            {ChartType({
              chartHeight,
              chartWidth,
              colorScale: thisColorScale,
              data: this.props.data,
              labels: this.props.labels,
              value: this.props.value,
              xScale: thisXScale,
              yScale: thisYScale,
            })}
          </g>
        </g>
        { this.props.xAxis &&
          <g
            className='x axis'
            ref={(xAxis) => this.xAxis = xAxis}
            transform={`translate(0, ${this.props.svgHeight})`}
          />
        }
        { this.props.yAxis &&
          <g
            className='y axis'
            ref={(yAxis) => this.yAxis = yAxis}
          />
        }
        <section
          id={`${this.props.id}-tooltip`}
          style={{
            backgroundColor: 'black',
            border: '2px red dashed',
            borderRadius: '4px',
            opacity: 0,
            padding: '10px',
            position: 'absolute',
          }}
        />
      </svg>
    );
  }
}
