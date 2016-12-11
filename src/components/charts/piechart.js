import React from 'react';
import * as d3 from 'd3';

export class PieChart extends React.Component {
  static defaultProps = {
    id: 'piechart',
    label: 'You need to specify a label',
  }

  static propTypes = {
    id: React.PropTypes.string,
    label: React.PropTypes.string,
  }

  componentDidMount () {
    d3.select('#piechart .header').text('we changed the text!');
    d3.select('#piechart .header').append('div').html('some text');
    d3.selectAll('#piechart .item:nth-child(2n)').style('color', 'red');
    d3.select('#piechart .unordered').insert('li', ':nth-child(3n)').html('new item inserted');
    d3.select('#piechart .unordered').classed('items', true);
  }

  render () {
    appFuncs.console('dir')(d3);

    return (
      <section
        id={this.props.id}
      >
        <h1 className='piechart header'>{this.props.label}</h1>
        <ul className='piechart unordered'>
          <li className='piechart item'>one</li>
          <li className='piechart item'>two</li>
          <li className='piechart item'>three</li>
          <li className='piechart item'>four</li>
          <li className='piechart item'>five</li>
        </ul>
      </section>
    );
  }
}

export default PieChart;
