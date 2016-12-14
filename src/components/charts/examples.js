import { connect } from 'react-redux';
import { getArrayData, getColors, getBarChart } from 'store/selectors';
import * as d3 from 'd3';
import Circle from 'components/svg/circle.js';
import Ellipse from 'components/svg/ellipse.js';
import Line from 'components/svg/line.js';
import Path from 'components/svg/path.js';
import React from 'react';
import Rect from 'components/svg/rect.js';
import Text from 'components/svg/text.js';

export class Examples extends React.Component {
  static defaultProps = {
    footer: 'You need to supply a footer',
    header: 'You need to specify a header',
    id: 'piechart',
  }

  static propTypes = {
    barChart: React.PropTypes.object,
    colors: React.PropTypes.object,
    data: React.PropTypes.array,
    footer: React.PropTypes.string,
    header: React.PropTypes.string,
    id: React.PropTypes.string,
  }

  componentDidMount () {
    appFuncs.console('dir')(d3);
    // basics
    d3.select(`#${this.props.id} .header`).text('we changed the text!');
    d3.select(`#${this.props.id} .header`).append('div').html('some text');
    d3.selectAll(`#${this.props.id} .item:nth-child(2n)`).style('color', 'red');
    d3.select(`#${this.props.id} .unordered`).insert('li', ':nth-child(3n)').html('new item inserted');
    d3.select(`#${this.props.id} .unordered`).classed('items', true);

    // arrays
    // bind data to element, and modify existing elements
    const arrayItems = d3.select(`#${this.props.id} .array`)
      .selectAll('.item')
      .data(this.props.data)
      .text((d) => d)
      .style('font-size', (d) => `${d}px`)
      .style('background-color', (d, i) => this.props.colors.list[i]);
    // add additional dom nodes for items in data, and modify  new elements
    arrayItems
      .enter()
      .append('li')
      .text((d) => d)
      .style('font-size', (d) => `${d}px`)
      .style('background-color', (d, i) => this.props.colors.list[i]);
    // remove extra dom nodes, if any
    arrayItems
      .exit()
      .remove();

    // square within a square
    d3.select('#svg-container7')
      .append('svg')
      .attr('height', 500)
      .attr('width', 500)
      .style('background-color', 'red')
      .append('rect')
      .attr('x', 10)
      .attr('y', 10)
      .attr('height', 100)
      .attr('width', 100)
      .style('fill', 'blue');

    const
      height = 300,
      width = 300;

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

    // set color scale that goes from one to another
    const colorScale2 = d3
      .scaleLinear()
      .domain([ 0, this.props.barChart.data.length ])
      .range([ this.props.colors.two[0], this.props.colors.two[1] ]);

    // bar chart
    const barChart = d3.select('#svg-container8')
      .append('svg')
      .attr('height', height)
      .attr('width', width)
      .selectAll('rect')
      .data(this.props.barChart.data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => barXScale(i)) // eslintignore `i * (barWidth + barOffset)` if you're not using scaleBands
      .attr('y', (d) => height - barYScale(d))
      .attr('height', (d) => barYScale(d))
      .attr('width', barXScale.bandwidth())
      .style('fill', (d, i) => colorScale2(i));

    // consoles the data associated with the specific bar
    barChart.on('click', (d) => appFuncs.console('dir')(d));
    // changes fill color on mouseover
    barChart.on('mouseover', function (d) { // eslint-disable-line
      const barColor = this.style.fill; // eslint-disable-line
      const thisItem = d3.select(this)
        .style('opacity', 0.7)
        .style('fill', 'green');

      appToolTip
        .style('opacity', 1)
        .style('color', 'white')
        .style('left', `${d3.event.pageX}px`)
        .style('top', `${d3.event.pageY}px`)
        .html(d);

      thisItem.on('mouseout', function () { // eslint-disable-line
        thisItem
          .style('opacity', 1)
          .style('fill', barColor);

        appToolTip
          .style('opacity', 0);
      });
    });
  }

  render () {
    return (
      <section
        id={this.props.id}
      >
        <h1 className='piechart header'>{this.props.header}</h1>
        <ul className='piechart unordered'>
          <li className='piechart item'>one</li>
          <li className='piechart item'>two</li>
          <li className='piechart item'>three</li>
          <li className='piechart item'>four</li>
          <li className='piechart item'>five</li>
        </ul>
        <section className='piechart array'>
          <h2>This is an array</h2>
          <ul className='piechart unordered'>
            <li className='piechart item'>one</li>
          </ul>
        </section>
        <section id='svg-container'>
          <svg height='200' width='200'>
            <Text />
          </svg>
        </section>
        <section id='svg-container2'>
          <svg height='200' width='200'>
            <Rect />
          </svg>
        </section>
        <section id='svg-container4'>
          <svg height='200' width='200'>
            <Circle />
          </svg>
        </section>
        <section id='svg-container3'>
          <svg height='200' width='200'>
            <Ellipse />
          </svg>
        </section>
        <section id='svg-container5'>
          <svg height='200' width='200'>
            <Line />
          </svg>
        </section>
        <section id='svg-container6'>
          <svg height='200' width='200'>
            <Path />
          </svg>
        </section>
        <section id='svg-container7' />
        <section id='svg-container8' />
        <footer>
          <h2>{this.props.footer}</h2>
        </footer>
      </section>
    );
  }
}

const mapStateToProps = (state) =>
  ({
    barChart: getBarChart(state),
    colors: getColors(state),
    data: getArrayData(state),
  });


export default connect(
  mapStateToProps
)(Examples);
