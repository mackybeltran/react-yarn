import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import { getRow } from '../actions/index';
import { connect } from 'react-redux';
import StoryEdit from './StoryEdit.js';
import { Modal, Button, Row, Col } from 'react-materialize';
import { getPanels } from '../actions/index';

class StoryChart extends Component {
  constructor(props) {
    super(props);
<<<<<<< Updated upstream
    }
=======

    this.chartEvents = [
    {
      eventName: 'select',
      callback(Chart) {
        console.log('Selected', Chart.chart.getSelection());
      },
    },
    ]
  }


>>>>>>> Stashed changes

   componentDidMount() {
    this.props.dispatch(getRow(this.props.match.params.storyid));
    this.props.dispatch(getPanels(this.props.match.params.storyid));
  }

  columnRow = (dataFromDb) => {
    let result = dataFromDb.map((row, index) => {
      var array = [];
        array.push(row.index2.toString(), row.index.toString(), row.panel_title.toString())
        return array
    });
      return result;
  }


  render() {
    let rowsData = this.columnRow(this.props.rows);

    if (rowsData.length === 0) {
      return <div />
    }

return (
  <div>
    <Row className="build">
      <Col m={3}>
        <h3 className="bldtitle2"> View Chapters: </h3>
        <Modal
          header='Chapter 1: The Beginning'
          trigger={
            <Button waves='light'>Chapter 1 : The Beginning</Button>
          }>
          <p>The Beginning</p>
        </Modal>
        <StoryEdit panels={this.props.panels}/>
      </Col>

      <Col m={8} className="chart">
        <h3 className="bldtitle3">Story Paths:</h3>
        <Chart
          chartType="OrgChart"
          rows={rowsData}
          columns={[
            {
              type: 'string',
              label: 'Child',
            },
            {
              type: 'string',
              label: 'Parent'
            },
            {
              type: 'string',
              label: 'Tooltip'
            }
        ]}
          graph_id="OrgChart"
          width={'50%'}
          height={'50%'}
          legend_toggle
          chartEvents={this.chartEvents}
        />
      </Col>
      <Col m={1}/>
      </Row>
    </div>
  );
 }
}



function mapStateToProps(state) {
  return{rows: state.rows.rows,
        panels: state.panels.panels}

}

export default connect(mapStateToProps)(StoryChart);

