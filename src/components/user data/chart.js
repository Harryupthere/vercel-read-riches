/* App.js */
import React, { useRef } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
// var CanvasJSReact = require('@canvasjs/react-charts');

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartCom = () => {
	const chartRef = useRef(null);

	const toggleDataSeries = (e) => {
		if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else {
			e.dataSeries.visible = true;
		}
		chartRef.current.render(); // Use ref to call chart methods
	};

	const options = {
		theme: "light2",
		animationEnabled: true,
		title: {
			text: "Units Sold, Profit, and Expenses"
		},
		subtitles: [{
			text: "Click Legend to Hide or Unhide Data Series"
		}],
		axisX: {
			title: "States"
		},
		axisY: {
			title: "Units Sold / Expenses",
			titleFontColor: "#6D78AD",
			lineColor: "#6D78AD",
			labelFontColor: "#6D78AD",
			tickColor: "#6D78AD"
		},
		axisY2: {
			title: "Profit in USD",
			titleFontColor: "#51CDA0",
			lineColor: "#51CDA0",
			labelFontColor: "#51CDA0",
			tickColor: "#51CDA0"
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: toggleDataSeries
		},
		data: [
			{
				type: "stackedColumn", // First stacked bar graph
				name: "Units Sold",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#,##0 Units",
				dataPoints: [
					{ x: new Date(2017, 0, 1), y: 120 },
					{ x: new Date(2017, 1, 1), y: 135 },
					{ x: new Date(2017, 2, 1), y: 144 },
					{ x: new Date(2017, 3, 1), y: 103 },
					{ x: new Date(2017, 4, 1), y: 93 },
					{ x: new Date(2017, 5, 1), y: 129 },
					{ x: new Date(2017, 6, 1), y: 143 },
					{ x: new Date(2017, 7, 1), y: 156 },
					{ x: new Date(2017, 8, 1), y: 122 },
					{ x: new Date(2017, 9, 1), y: 106 },
					{ x: new Date(2017, 10, 1), y: 137 },
					{ x: new Date(2017, 11, 1), y: 142 }
				]
			},
			{
				type: "stackedColumn", // Second stacked bar graph (Expenses)
				name: "Expenses",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#,##0 Expenses",
				dataPoints: [
					{ x: new Date(2017, 0, 1), y: 80 },
					{ x: new Date(2017, 1, 1), y: 90 },
					{ x: new Date(2017, 2, 1), y: 100 },
					{ x: new Date(2017, 3, 1), y: 70 },
					{ x: new Date(2017, 4, 1), y: 60 },
					{ x: new Date(2017, 5, 1), y: 110 },
					{ x: new Date(2017, 6, 1), y: 120 },
					{ x: new Date(2017, 7, 1), y: 130 },
					{ x: new Date(2017, 8, 1), y: 100 },
					{ x: new Date(2017, 9, 1), y: 95 },
					{ x: new Date(2017, 10, 1), y: 125 },
					{ x: new Date(2017, 11, 1), y: 140 }
				]
			},
			{
				type: "line", // Line chart for profit
				name: "Profit",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.#",
				dataPoints: [
					{ x: new Date(2017, 0, 1), y: 19034.5 },
					{ x: new Date(2017, 1, 1), y: 20015 },
					{ x: new Date(2017, 2, 1), y: 27342 },
					{ x: new Date(2017, 3, 1), y: 20088 },
					{ x: new Date(2017, 4, 1), y: 20234 },
					{ x: new Date(2017, 5, 1), y: 29034 },
					{ x: new Date(2017, 6, 1), y: 30487 },
					{ x: new Date(2017, 7, 1), y: 32523 },
					{ x: new Date(2017, 8, 1), y: 20234 },
					{ x: new Date(2017, 9, 1), y: 27234 },
					{ x: new Date(2017, 10, 1), y: 33548 },
					{ x: new Date(2017, 11, 1), y: 32534 }
				]
			}
		]
	};

	return (
		<div>
			<CanvasJSChart options={options} onRef={ref => chartRef.current = ref} />
		</div>
	);
};

export default ChartCom;
