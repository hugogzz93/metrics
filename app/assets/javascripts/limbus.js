function toggleForm () {
	$('.bg, .fg, .form-box').toggleClass('active');
}
$(document).on("limbus#index:loaded", function() {
	$('.content').on('click', function(e) {
	    toggleForm();
	});

	$('input[type="submit"]').on('click', function (e) {
		var _ = (query) => $(query).val();
		e.preventDefault();
		var id = $(e.target).attr('id');
		if(id == 'limbus'){
			$.ajax({
				url: '/api/limbus/general',
				type: 'POST',
				data: {weight: _('#weight'), sleep: _('#sleep'), fat: _('#fat'), water: _('#water'), muscle: _('#muscle')}
			})
		} else {
			$.ajax({
				url: 'api/food/new',
				type: 'POST',
				data: {food: _('select'), grams: _('#grams')}
			})
		}
		toggleForm();
	})

	$('select').select2();
	var handle = (fn, query, arr, color, roll) => {
		$(".content-accent", query).html(arr[arr.length - 1]);
		fn(d3.select(query + " .content-sub-graph"), arr, color, roll || null);
	};

	var handle2 = (i, num, color) => {
		if (num >= 1) {
			$(".dash-row:nth-child(5) .widget:nth-child(" + i + ")").addClass(
				"light"
			);
			color = "#3B5B7A";
		} else if (num <= 0.5) {
			color = "#F55D8D";
		} else if (num >= 0.75) {
			color = "#3DB3C0";
		} else {
			color = "#FAC963";
		}
		num = num.toFixed(2);
		circleChart(
			d3.select(
				".dash-row:nth-child(5) .widget:nth-child(" +
					i +
					") .content-main-graph"
			),
			num,
			color
		);
	};

	var handle3 = (i, num, color) => {
		if (num >= 1) {
			$(".dash-row:nth-child(6) .widget:nth-child(" + i + ")").addClass(
				"light"
			);
			color = "#3B5B7A";
		} else if (num <= 0.5) {
			color = "#F55D8D";
		} else if (num >= 0.75) {
			color = "#3DB3C0";
		} else {
			color = "#FAC963";
		}
		num = num.toFixed(2);
		circleChart(
			d3.select(
				".dash-row:nth-child(6) .widget:nth-child(" +
					i +
					") .content-main-graph"
			),
			num,
			color
		);
	};

	var handle4 = (i, num, color) => {
		if (num >= 1) {
			$(".dash-row:nth-child(7) .widget:nth-child(" + i + ")").addClass(
				"light"
			);
			color = "#3B5B7A";
		} else if (num <= 0.5) {
			color = "#F55D8D";
		} else if (num >= 0.75) {
			color = "#3DB3C0";
		} else {
			color = "#FAC963";
		}
		num = num.toFixed(2);
		circleChart(
			d3.select(
				".dash-row:nth-child(7) .widget:nth-child(" +
					i +
					") .content-main-graph"
			),
			num,
			color
		);
	};

	function setProtein(current, goal) {
  
		num = (current / goal).toFixed(2);
		if (num >= 1) {
			$(".dash-row:nth-child(2) .widget:nth-child(3)").addClass("light");
			color = "#3B5B7A";
		} else if (num <= 0.5) {
			color = "#F55D8D";
		} else if (num >= 0.75) {
			color = "#3DB3C0";
		} else {
			color = "#FAC963";
		}
		circleChart(
			d3.select(
				".dash-row:nth-child(2) .widget:nth-child(3) .content-main-graph"
			),
			num,
			color
		);
		$(".dash-row:nth-child(2) .widget:nth-child(3) .content-sub-text").html(
			current.toFixed(0) + "g"
		);
	}

	function setEnergy(current, goal) {
  
		num = (current / goal).toFixed(2);
		if (num >= 1) {
			$(".dash-row:nth-child(2) .widget:nth-child(4)").addClass("light");
			color = "#3B5B7A";
		} else if (num <= 0.5) {
			color = "#F55D8D";
		} else if (num >= 0.75) {
			color = "#3DB3C0";
		} else {
			color = "#FAC963";
		}
		circleChart(
			d3.select(
				".dash-row:nth-child(2) .widget:nth-child(4) .content-main-graph"
			),
			num,
			color
		);
		$(".dash-row:nth-child(2) .widget:nth-child(4) .content-sub-text").html(
			current.toFixed(0) + "kcal"
		);
	}

	fetch("http://localhost:3000/api/daily_summary")
		.then(response => response.json())
		.then(data => {
			var m = data.musclesPercentages
				.map(m => Number.parseFloat(m.value))
				.reverse();
			var w = data.waterPercentages
				.map(m => Number.parseFloat(m.value))
				.reverse();
			var we = data.weights.map(m => Number.parseFloat(m.value)).reverse();
			var f = data.fatPercentages
				.map(m => Number.parseFloat(m.value))
				.reverse();
			var s = data.sleepTime.map(m => Number.parseFloat(m.value)).reverse();

			handle(
				lineChart,
				".dash-row:nth-child(2) .widget:nth-child(1)",
				m,
				"#3DB3C0",
				d3.curveCatmullRom
			);
			handle(
				lineChart,
				".dash-row:nth-child(2) .widget:nth-child(2)",
				w,
				"#3DB3C0",
				d3.curveCatmullRom
			);
			handle(
				lineChart,
				".dash-row:nth-child(3) .widget:nth-child(1)",
				we,
				"#F55D8D",
				d3.curveCatmullRom
			);
			handle(
				lineChart,
				".dash-row:nth-child(3) .widget:nth-child(2)",
				f,
				"#FAC963",
				d3.curveCatmullRom
			);
			handle(
				lineChart,
				".dash-row:nth-child(3) .widget:nth-child(4)",
				s,
				"#FAC963"
			);

			var c = data.consumption.map(c => {
				return { usda_id: c.usda_id, grams: c.grams };
			});
			var fn = (function(d) {
				return function(c) {
					la = {};
					// setProtein
					setProtein(c[203].value, d.weights[0].value * 2.2 * 0.91);
					setEnergy(c[208].value, 2471);
					// setFats(c[204], 2471/10);

					for (f of d.nutrientGoals) {
						if (c[f.nutrient_id]) {
							la[f.nutrient_id] = Number.parseFloat(
								(Number.parseFloat(c[f.nutrient_id].value) /
									Number.parseFloat(f.value)
								).toFixed(2)
							);
							la[f.nutrient_id + "_name"] = c[f.nutrient_id].name;
							la[f.nutrient_id + "_value"] = c[f.nutrient_id].value;
							la[f.nutrient_id + "_goal"] = f.value;
						}
					}
					return la;
				};
			})(data);
			Repo.fetchFoodData(c)
				.then(fn)
				.then(x => {
          
					handle2(1, x[304] || 0, "#F55D8D");
					handle2(2, x[309] || 0, "#3DB3C0");
					handle2(3, x[255] || 0, "#3B5B7A");
					handle2(4, x[301] || 0, "#3B5B7A");
					handle2(5, x[306] || 0, "#3DB3C0");
					handle2(6, x[303] || 0, "#3B5B7A");

					handle3(1, x[320] || 0, "#F55D8D");
					handle3(2, x[404] || 0, "#3DB3C0");
					handle3(3, x[405] || 0, "#3B5B7A");
					handle3(4, x[415] || 0, "#3B5B7A");
					handle3(5, x[418] || 0, "#3DB3C0");
					handle3(6, x[401] || 0, "#3B5B7A");

					handle4(1, x[328] || 0, "#F55D8D");
					handle4(2, x[323] || 0, "#3DB3C0");
					handle4(3, x[430] || 0, "#3B5B7A");
					handle4(4, x[435] || 0, "#3B5B7A");
					handle4(5, x[269] || 0, "#3DB3C0");
					handle4(6, x[601] || 0, "#3B5B7A");
				});
		});

	barChart(
		d3.select(".dash-row:nth-child(4) .content-chart"),
		genData(98),
		"#3DB3C0"
	); //cals

	$(".percent-btn").on("click", () => $(".light").toggleClass("alt"));
});

// fetch('http://localhost:3000/api/nutrient_goals').then(response => response.json()).then(data => console.log(data))
