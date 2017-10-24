$(document).on('limbus#index:loaded', function () {
	lineChart(d3.select('.dash-row:nth-child(2) .widget:nth-child(2) .content-sub-graph'), genData(8), '#3DB3C0', d3.curveCatmullRom)
	lineChart(d3.select('.dash-row:nth-child(2) .widget:nth-child(1) .content-sub-graph'), genData(getRandomInt(4, 12)), '#3DB3C0')
	lineChart(d3.select('.dash-row:nth-child(3) .widget:nth-child(1) .content-sub-graph'), genData(getRandomInt(4, 12)), '#F55D8D')
	lineChart(d3.select('.dash-row:nth-child(3) .widget:nth-child(2) .content-sub-graph'), genData(getRandomInt(4, 12)), '#FAC963')
	barChart(d3.select('.dash-row:nth-child(4) .content-chart'), genData(100), '#3DB3C0')

	circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(1) .content-main-graph'), Math.random().toFixed(2), '#F55D8D')
	circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(2) .content-main-graph'), Math.random().toFixed(2), '#3DB3C0')
	circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(3) .content-main-graph'), 1, '#3B5B7A')
	circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(4) .content-main-graph'), 1, '#3B5B7A')
	circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(5) .content-main-graph'), Math.random().toFixed(2), '#3DB3C0')
	circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(6) .content-main-graph'), 1, '#3B5B7A')
})

// fetch('http://localhost:3000/api/nutrient_goals').then(response => response.json()).then(data => console.log(data))