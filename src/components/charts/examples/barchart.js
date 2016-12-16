import { connect } from 'react-redux';
import { getArrayData, getBarChart } from 'store/selectors';
import * as d3 from 'd3';
import * as d3chromatic from 'd3-scale-chromatic'; // eslintignore https://github.com/d3/d3-scale-chromatic
import React from 'react';

export class Examples extends React.Component {
  static defaultProps = {
    id: 'barchart',
  }

  static propTypes = {
    barChart: React.PropTypes.object,
    data: React.PropTypes.array,
    id: React.PropTypes.string,
  }

  componentDidMount () {
    const
      margin = {  // eslintignore specially good for crating space for axes, legends, etc
        bottom: 50,
        left: 70,
        right: 20,
        top: 20,
      },
      height = 300 - margin.top - margin.bottom, // eslint-disable-line
      width = 300 - margin.left - margin.right;

    // single tooltip used for all charts
    const appToolTip = d3
      .select('body')
      .append('section')
      .style('background', 'black')
      .style('border', '2px red dashed')
      .style('borderRadius', '4px')
      .style('opacity', 0)
      .style('padding', '10px')
      .style('position', 'absolute');

    // anywhere you need the Y dimension of the bar to scale to the viewport of the svg
    // first send it into this function e.g. below in the Height and Y properties
    const barYScale = d3
      .scaleLinear()
      .domain([ 0, d3.max(this.props.barChart.data) ])
      .range([ 0, height ]);

    // anywhere you need the X dimension of the bar to scale to the viewport of the svg
    const barXScale = d3
      .scaleBand()
      .domain(d3.range(0, this.props.barChart.data.length))
      .rangeRound([ 0, width ])
      .paddingInner(0.1)
      .paddingOuter(0.5);


    // set color scale based on
    const barChartScale = d3
      .scaleOrdinal(d3chromatic.schemeAccent);

    // bar chart
    const barChartSvg = d3.select(`#${this.props.id}`)
      .append('svg')
      .attr('height', height + margin.top + margin.bottom)
      .attr('width', width + margin.left + margin.right)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .classed('svg-chart', true);

    const barChart = barChartSvg
      .append('g')
      //.classed('barchart-bars')
      .selectAll('rect')
      .data(this.props.barChart.data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => barXScale(i)) // eslintignore `i * (barWidth + barOffset)` if you're not using scaleBands
      .attr('y', (d) => height - barYScale(d))
      .attr('height', (d) => barYScale(d))
      .attr('width', barXScale.bandwidth())
      .style('fill', (d, i) => barChartScale(i));

    // barchart vertical scale
    const vScale = barYScale.copy()
        .range(barYScale.range().reverse()); // eslintignore need 0 to be in bottom left
    // barchart vertical axis
    const vAxis = d3
      .axisLeft(vScale);

    barChartSvg
      .append('g')
      //.attr('transform', `translate(-${margin.left}, -${margin.top})`)
      .call(vAxis);

    // barchart horizontal scale
    const hScale = barXScale.copy();

    // barchart horizontal axis
    const hAxis = d3
      .axisBottom(hScale);

    barChartSvg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(hAxis);

    // consoles the data associated with the specific bar
    barChart.on('click', (d) => appFuncs.console('dir')(d));
    // changes fill color on mouseover
    barChart.on('mouseover', function (d) { // eslint-disable-line
      const barColor = this.style.fill; // eslint-disable-line
      const thisItem = d3.select(this)
        .style('opacity', 0.7)
        .style('fill', 'green');

      const appToolTipTransition = d3
        .transition()
        .duration(250)
        .delay(100)
        .ease(d3.easePolyIn);

      try{
        appToolTip
          .transition(appToolTipTransition)
          .style('opacity', 1)
          .style('color', 'white')
          .style('left', `${d3.event.pageX}px`)
          .style('top', `${d3.event.pageY}px`);
      } catch (err) {
        // do nothing on err when too many interrupts of transitions
      }

      appToolTip
        .html(d);

      thisItem.on('mouseout', function () { // eslint-disable-line
        thisItem
          .style('opacity', 1)
          .style('fill', barColor);

        try { // eslintignore if too many transitions, will throw err, read https://github.com/d3/d3-transition#the-life-of-a-transition
          appToolTip
            .transition(appToolTipTransition)
            .style('opacity', 0);
        } catch (err) {
          appFuncs.console('dir')(err);
        }
      });
    });
  }

  render () {
    return (
      <section
        id={this.props.id}
      />
    );
  }
}

const mapStateToProps = (state) =>
  ({
    barChart: getBarChart(state),
    data: getArrayData(state),
  });


export default connect(
  mapStateToProps
)(Examples);
