Generator = function (options) {
	svg = null
	xScale = options.xScale
	yScale = options.yScale
	padding = options.padding || 10

	_getWidth = function () {
		return svg.style('width').substr(-2)
	}

	_getHeight = function () {
		return svg.style('height').substr(-2)
	}

	_setScales = function () {
		xScale = xScale || d3.scaleLinear()
							 .domain([0, dataset.length])
							 .range([0+padding, _getWidth() - padding])
		yScale = yScale || d3.scaleLinear()
							 .domain([0, d3.max(dataset.length)])
							 .range([0+padding, _getHeight() - padding])
	}

	_getLineGen = function () {
		if(options.curve == 'linear')
		return d3.line().x((d, i) => xScale(i)).y(d => yScale(y))
	}

	_generate = function (ds) {
		throw {error: 'Implement in child class'}
	}

	return  {
		setSvg: (c) => {
			svg = c
			return this
		},

		generate: (ds) => {
			setScales()
			svg.append('path')
				 .data(dataset)
				 .attr('d', _getLineGen())
		}
	}
}



LineChart = function (dataset) {
	getGenerator = function (options) {
		
	}
	return {
		appendTo: (selector, options) => {
			canvas = createCanvasOn(selector)
			generator = getGenerator(options).setCanvas(canvas)
			generator.generate(dataset)
		}
	}
}


