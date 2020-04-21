import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts'

class CustomLineChart extends Component {
    constructor(props) {
        super(props);

        let titleText = props.titleText;
        let xAxisData = props.selectedStat.map((stat, index) => stat.date);
        let yAxisData = props.selectedStat.map((stat, index) => (titleText === 'Views') ? stat.page_views : stat.clicks);

        this.state = {
            series: [{
                name: "Values",
                data: yAxisData
            }],
            options: {
                chart: {
                    type: 'line',
                    width: '100%',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: titleText,
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: xAxisData,
                }
            },
        };
    }

    render() {
        return (
            <div>
                <div id="chart">
                    <ReactApexChart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                        height={350} />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
};

export default CustomLineChart;