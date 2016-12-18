import { connect } from 'react-redux';
import { getArrayData, getColors } from 'store/selectors';
import * as d3 from 'd3';
import Circle from 'components/svg/circle.js';
import Ellipse from 'components/svg/ellipse.js';
import Line from 'components/svg/line.js';
import Path from 'components/svg/path.js';
import React from 'react';
import Rect from 'components/svg/rect.js';
import Text from 'components/svg/text.js';
import BarChart from './examples/barchart';
import PieChart from './examples/piechart';

export class Examples extends React.Component {
  static defaultProps = {
    footer: 'You need to supply a footer',
    header: 'You need to specify a header',
    id: 'examples-of-charts',
  }

  static propTypes = {
    colors: React.PropTypes.object,
    data: React.PropTypes.array,
    footer: React.PropTypes.string,
    header: React.PropTypes.string,
    id: React.PropTypes.string,
  }

  componentDidMount () {
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
  }

  render () {
    return (
      <section
        id={this.props.id}
        style={{
          maxHeight: '400px',
          width: '100%',
        }}
      >
        <PieChart />
        <BarChart />
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
    colors: getColors(state),
    data: getArrayData(state),
  });


export default connect(
  mapStateToProps
)(Examples);
