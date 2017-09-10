
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genData(n) {
	array = []
	while(n--) {
		array.push(getRandomInt(0, 100))
	}
	return array
}

getWidth = function (elem) {
	rect = elem.node().getBoundingClientRect()
	return rect.right - rect.left	
}

getHeight = function (elem) {
	rect = elem.node().getBoundingClientRect()
	return rect.bottom - rect.top
}

getPadding = function (elem) {
	top = parseInt(elem.style('padding-top').substr(0, elem.style('height').length - 2))
	bottom = parseInt(elem.style('padding-bottom').substr(0, elem.style('height').length - 2))
	left = parseInt(elem.style('padding-left').substr(0, elem.style('height').length - 2))
	right = parseInt(elem.style('padding-right').substr(0, elem.style('height').length - 2))
	max = (x, y) => x > y ? x : y

	return max(max(top, bottom), max(left, right))
}

function lineChart(elem, dataset, color, curve) {
	padding = getPadding(elem)
	h = getHeight(elem)
	w = getWidth(elem)
	svg = elem.append('svg').attr('height', h).attr('width', w)
	g = svg.append('g')
	xScale = d3.scaleLinear()
						 .domain([0, dataset.length, 0])
						 .range([0+padding, w - padding])
	yScale = d3.scaleLinear()
						 .domain([d3.max(dataset), 0])
						 .range([0+padding, h - padding])
	curve = curve || d3.curveLinear
	line = d3.line().x((d, i) => xScale(i)).y(d => yScale(d)).curve(curve)
	path = g.append('path')
			.attr('d', line(dataset))
			.attr('fill', 'none')
			.attr('stroke', color)


	totalLength = path.node().getTotalLength()
	path.attr('stroke-dasharray', totalLength + ' ' + totalLength )
			.attr('stroke-dashoffset', totalLength)
			.transition()
				.duration(2000)
				.attr('stroke-dashoffset', 0)


	g.append('circle')
			.attr('cx', xScale(0))
			.attr('cy', yScale(dataset[0]))
			.attr('r', '3')
			.attr('fill', color)
			.transition()
				.duration(2000)
				.attrTween("transform", translateAlong(path.node()))
				.attr('cy', () => null)

				  function translateAlong(path) {
				    var l = path.getTotalLength();
				    return function(i) {
				      return function(t) {
				        var p = path.getPointAtLength(t * l);
				        return "translate(" + p.x + "," + p.y +")";//Move marker
				      }
				    }
				  }

	g.style('transform', 'translate(10%, 0px)')
}

function circleChart(elem, percent, color) {
	padding = 10
	h = getHeight(elem) - padding
	w = getWidth(elem) - padding
	r = h > w ? w/2 : h/2

	color = color || 'orange'
	svg = elem.append('svg').attr('height', h).attr('width', w)
	g = svg.append('g').attr('height', h).attr('width', w)
	
	x = (x, r, theta) => x + r * Math.sin(theta)						 
	y = (y, r, theta) => y + r * (1 - Math.cos(theta))
	c = (st, r, fn) => (theta) => fn(st, r, theta)
	xc = c(0, r, x)
	yc = c(0, r, y)

	arc = d3.arc()
					.innerRadius(r-1.5)
					.outerRadius(r)
					.startAngle(0)

	tau = 2 * Math.PI

	foreground = g.append('path')
									.datum({endAngle: 0})
									.attr('d', arc)
									.style('fill', color)
									.style('transform', 'translate(' + w/2 + 'px, ' + h/2 + 'px)')

	arcTween = function (newAngle) {
		return function (d) {
			interpolate = d3.interpolate(d.endAngle, newAngle)
			return function(t) {
				d.endAngle = interpolate(t)
				return arc(d)
			}
		}
	}

	ballTween = function (percent, fn) {
		return function (d) {
			interpolate = d3.interpolate(d.percent, percent * tau)
			return function (t) {
				d.percent = interpolate(t)
				return fn(d.percent)
			}
		}
	}

	textVal =  '0%'
	text = g.append('text')
					.attr('x', w/2)
					.attr('y', h/2)
					.text(textVal)
					.attr('text-anchor', 'middle')
					.attr('dy', '0.25em')

	foreground.transition()
						.duration(2000)
						.attrTween('d', arcTween(percent*tau))


	circle = g.append('circle').datum({percent: 0})
		 .attr('cx', x(0, r, 0))
		 .attr('cy', y(0, r, 0))
		 .attr('r', '4')
		 .style('transform', 'translate(' + w/2 + 'px, 0px)')
		 .attr('fill', color)

	circle.transition()
		 .duration(2000)
		 .attrTween('cx', ballTween(percent, xc))
		 .attrTween('cy', ballTween(percent, yc))

	text.transition()
			.duration(2000)
			.text(d3.interpolate(text.text, percent + '%'))
}

function barChart(elem, data, color) {
	days = [{day:"Mo"},
    {day:"Tu"},
    {day:"We"},
    {day:"Th"},
    {day:"Fr"},
    {day:"Sa"},
    {day:"Su"}]

	padding = 10
	h = getHeight(elem)
	w = getWidth(elem) - padding
	color = color || 'orange'

	xScale = d3.scaleLinear()
	           .domain([0, data.length])
	           .range([0, w])

	band = d3.scaleBand()
					 .domain(d3.range(data.length))
					 .range([0,w])
					 .padding(0.05)

	yScale = d3.scaleLinear()
	           .domain([0, d3.max(data)])
	           .range([0, h * 0.60])

	svg = elem.append('svg').attr('height', h).attr('width', w)
	bars = svg.append('g')

	bars.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
			.attr('x', (d, i) => xScale(i))
			.attr('y', (d) => h - yScale(d))
			.transition()
			.duration(2000)
			.attr('width', band.bandwidth())
			.attr('height', (d) => yScale(d))
			.attr('fill', '#2A3760')

	oScale = d3.scaleBand()
    .domain(days.map(function(d){ return d.day}))
    .range([0, w*0.95])

  dg = svg.append('g').attr('class', 'axis')
  xAxis = d3.axisBottom(oScale)
	dg.call(xAxis).style('transform', 'translate(1px, 0px)')
}

$(document).on('limbus#index:loaded', function () {
	h = 500
	w = 500
	// svg = d3.select('body').append('svg').attr('height', h).attr('width', w)
	// elem = svg
	dataset = [6, 5, 3, 4, 2, 1]
	lineChart(d3.select('.dash-row:nth-child(2) .widget:nth-child(2) .content-sub-graph'), [4, 2, 4, 1], '#3DB3C0', d3.curveCatmullRom)
	lineChart(d3.select('.dash-row:nth-child(2) .widget:nth-child(1) .content-sub-graph'), [6,5,3, 4, 2, 1], '#3DB3C0')
	lineChart(d3.select('.dash-row:nth-child(3) .widget:nth-child(1) .content-sub-graph'), [4, 6, 2, 5, 2], '#F55D8D')
	lineChart(d3.select('.dash-row:nth-child(3) .widget:nth-child(2) .content-sub-graph'), [5, 1, 7, 3, 3], '#FAC963')
	barChart(d3.select('.dash-row:nth-child(4) .content-chart'), genData(100), '#3DB3C0')
	// circleChart(d3.select('.dash-row:nth-child(2) .widget:nth-child(1) .content-sub-text'), 1, 'blue')
	
})

