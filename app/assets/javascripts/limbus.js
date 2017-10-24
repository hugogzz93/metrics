$(document).on('limbus#index:loaded', function () {
	var handle = (fn, query, arr, color) => {
		$('.content-accent', query).html(arr[arr.length - 1]);
		fn(d3.select(query + ' .content-sub-graph'), arr, color);
	}

	var handle2 = (i, num, color) => {
		circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(' + i + ') .content-main-graph'), num, color)		
	}

	fetch('http://localhost:3000/api/daily_summary')
	.then(response => response.json())
	.then(data => {
		var m = data.musclesPercentages.map(m => Number.parseFloat(m.value));
		var w = data.waterPercentages.map(m => Number.parseFloat(m.value));
		var we = data.weights.map(m => Number.parseFloat(m.value));
		var f = data.fatPercentages.map(m => Number.parseFloat(m.value));
		
		handle(lineChart, '.dash-row:nth-child(2) .widget:nth-child(1)', m, '#3DB3C0');
		handle(lineChart, '.dash-row:nth-child(2) .widget:nth-child(2)', w, '#3DB3C0');
		handle(lineChart, '.dash-row:nth-child(3) .widget:nth-child(1)', we, '#F55D8D');
		handle(lineChart, '.dash-row:nth-child(3) .widget:nth-child(2)', f, '#FAC963');


		var c = data.consumption.map(c => {return {usda_id: c.usda_id, grams: c.grams}});
		var fn = function (d) {
			return function (c) {
				console.log(d);
				la = {}
				for( f of d.nutrientGoals){
					if(c[f.nutrient_id]){
					  la[f.nutrient_id] = Number.parseFloat((Number.parseFloat(c[f.nutrient_id].value)/Number.parseFloat(f.value)).toFixed(2))
					  la[f.nutrient_id + '_name'] = c[f.nutrient_id].name;
					  la[f.nutrient_id + '_value'] = c[f.nutrient_id].value;
					  la[f.nutrient_id + '_goal'] = f.value;
					}
				}
				return la;
			}
		}(data)
		Repo.fetchFoodData(c).then(fn).then(x => {
			handle2(1, x[304], '#F55D8D');
			handle2(2, x[309], '#3DB3C0');
			handle2(3, x[301], '#3B5B7A');
			// handle2(4, x[], '#3B5B7A');
			handle2(5, x[306], '#3DB3C0');
			handle2(6, x[303], '#3B5B7A');
		});

	})

	barChart(d3.select('.dash-row:nth-child(4) .content-chart'), genData(98), '#3DB3C0') //cals


	// circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(1) .content-main-graph'), Math.random().toFixed(2), '#F55D8D') //mg
	// circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(2) .content-main-graph'), Math.random().toFixed(2), '#3DB3C0') //zn
	// circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(3) .content-main-graph'), 1, '#3B5B7A') //i
	// circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(4) .content-main-graph'), 1, '#3B5B7A') //ca
	// circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(5) .content-main-graph'), Math.random().toFixed(2), '#3DB3C0') //k
	// circleChart(d3.select('.dash-row:nth-child(5) .widget:nth-child(6) .content-main-graph'), 1, '#3B5B7A') //n3



})

// fetch('http://localhost:3000/api/nutrient_goals').then(response => response.json()).then(data => console.log(data))