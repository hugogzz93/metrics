
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
						 .domain([d3.max(dataset), d3.min(dataset)])
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
	h = getHeight(elem)
	w = getWidth(elem)
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
			return function (interpolate) {return function(t) {
				d.endAngle = interpolate(t)
				return arc(d)
			}}(interpolate)
		}
	}

	ballTween = function (percent, fn) {
		return function (d) {
			interpolate = d3.interpolate(d.percent, percent * tau)
			return function(interpolate) { return function (t) {
				d.percent = interpolate(t)
				return fn(d.percent)
			}}(interpolate)
		}
	}


	percent = percent||0;
	if(percent < 1) {
		if(percent == 0)
			newText = '0%'
		else
			newText = String(percent).substr(2) + '%'

		text = g.append('text')
						.attr('x', w/2)
						.attr('y', h/2)
						.text(newText)
						.attr('text-anchor', 'middle')
						.attr('dy', '0.25em')
						.attr('font-size', '1.6em')
				    .attr('fill', 'white')
				    .attr('fill-opacity', '0.7')
	} else {
		percent = 1;
		elem.append('i').attr('class', 'fa fa-check complete-circle').attr('aria-hidden', 'true')
	}

	circle = g.append('circle').datum({percent: 0})
		 .attr('cx', x(0, r, 0))
		 .attr('cy', y(0, r, 0))
		 .attr('r', '4')
		 .style('transform', 'translate(' + w/2 + 'px, 0px)')
		 .attr('fill', color)

	duration = 500 + 2000 * Math.random()
	foreground.transition()
						.duration(duration)
						.attrTween('d', arcTween(percent*tau))

	circle.transition()
		 .duration(duration)
		 .attrTween('cx', ballTween(percent, xc))
		 .attrTween('cy', ballTween(percent, yc))
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
					 .padding(0.5)

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
			.attr('y', (d) => h)
			.attr('height', (d) => yScale(d))
			.attr('width', band.bandwidth())
			.attr('fill', '#2A3760')
			.transition()
			.delay((d,i) => 1000 * Math.random())
			.duration((d, i) => 500 + 1000 * Math.random())
			.attr('y', (d) => h - yScale(d))

	oScale = d3.scaleBand()
    .domain(days.map(function(d){ return d.day}))
    .range([0, w*0.95])

  dg = svg.append('g').attr('class', 'axis')
  xAxis = d3.axisBottom(oScale)
	dg.call(xAxis).style('transform', 'translate(1px, 0px)')
}

function progressBar(elem, percent, color) {
	padding = getPadding(elem)
	h = getHeight(elem)
	w = getWidth(elem)
	svg = elem.append('svg').attr('height', h).attr('width', w)
	g = svg.append('g')
	xScale = d3.scaleLinear()
						 .domain([0, 100])
						 .range([0+padding, w - padding])
	// yScale = d3.scaleLinear()
						 // .domain([d3.max(dataset), 0])
						 // .range([0+padding, h - padding])

	line = d3.line().x((d, i) => xScale(i)).y(d => yScale(d)).curve(curve)
	path = g.append('path')
			.attr('d', line(percent))
			.attr('fill', 'none')
			.attr('stroke', color)
}