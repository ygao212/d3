var dataArray = [5,11,18];
var dataDays = ['Mon', 'Wed', 'Fri']

// var x = d3.scaleOrdinal()
// 				.domain(dataDays)
// 				.range([25, 85, 145])

// var x = d3.scalePoint()
// 				.domain(dataDays)
// 				.range([0,170]);

var x = d3.scaleBand()
				.domain(dataDays)
				.range([0,170])
				.paddingInner(0.1176)

var xAxis = d3.axisBottom(x);

var svg = d3.select("body").append("svg")
			.attr("height", "100%")
			.attr("width", "100%");

svg.append("g")
		.attr("class", "x axis hidden")
		.attr("transform", "translate(50,300)")
		.call(xAxis);

svg.selectAll("rect")
		.data(dataArray)
		.enter().append("rect")
					.attr("height", function(d,i){ return d*15; })
					.attr("width", 50)
					.attr("x", function(d,i){ return 50+60*i; })
					.attr("y", function(d,i){ return 300-d*15; })
					.attr("fill", "pink");

var newX = 300;
svg.selectAll("circle.first")
		.data(dataArray)
		.enter().append("circle")
					.attr("class", "first")
					.attr("cx", function(d,i){ newX+=(d*3)+(i*20); return newX; })
					.attr("cy", 100)
					.attr("r", function(d,i){ return d*3; });

var newX = 600;
svg.selectAll("ellipse")
		.data(dataArray)
		.enter().append("ellipse")
					.attr("cx", function(d,i){ newX+=(d*3)+(i*20); return newX; })
					.attr("cy", 100)
					.attr("rx", function(d,i){ return d*3; })
					.attr("ry", 30);

var newX = 900;
svg.selectAll("line")
		.data(dataArray)
		.enter().append("line")
					.attr("x1", newX)
					.attr("stroke", "blue")
					.attr("stroke-width", 2)
					.attr("y1", function(d,i){ return 80+(i*20)})
					.attr("x2", function(d,i){ return newX+(d*15); })
					.attr("y2", function(d,i){ return 80+(i*20)});

var textArray = ["start", "middle", "end"];
svg.append("text").selectAll("tspan")
	.data(textArray)
	.enter().append("tspan")
	.text(function(d){ return d; })
	.attr("font-size", 30)
	.attr("fill", "none")
	.attr("stroke", "blue")
	.attr("text-anchor", "start")
	.attr("dominant-baseline", "middle")
	.attr("stroke-width", 2)
	.attr("x", newX)
	.attr("y", function(d,i) { return 150+(i*30);});

svg.append("line")
	.attr("x1",newX)
	.attr("y1",150)
	.attr("x2",newX)
	.attr("y2", 210);
