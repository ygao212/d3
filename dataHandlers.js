// requesting csv
var parseDate = d3.timeParse("%m/%d/%Y");

d3.csv("prices.csv")
	.row(function(d){ return {
		month: parseDate(d.month), 
		price: Number(d.price.trim().slice(1))}; })
	.get(function(error,data){
		// console.log(data)
	});


// requesting tsv
d3.tsv("data.tsv")
	.row(function(d){ return {
		month: parseDate(d.month), 
		price: Number(d.price.trim().slice(1))}; })
	.get(function(error,data){
		// console.log(data)
	});


// requesting dsv
var psv = d3.dsvFormat("|");
d3.text("data.txt")
	.get(function(error,data){
		var rows = psv.parse(data);
		var newrows = [];
		for (var p=0; p<rows.length; p++){
			newrows.push({
				month: parseDate(rows[p].month), 
				price: Number(rows[p].price.trim().slice(1))
		})};
		// console.log(newrows);
	})


// requesting json
d3.json("treedata.json")
	.get(function(error,data){
		// console.log(data[0])
		// console.log(data[0].children)
		// console.log(data[0].children[0].children[1].name)
	});


// requesting xml
d3.xml("data.xml").get(function(error,data){
	var xmlLetter = data.documentElement.getElementsByTagName("letter");
	var letterNodes = d3.select(data).selectAll("letter")._groups[0][0];
	// console.log(data)
	// console.log(xmlLetter)
	// console.log(letterNodes)

})

// requesting text
// d3.text("test.txt").get(function(error,data){
// 	var myTabPositions = [];
// 	var myNewLinePositions =[];

// 	var tabVal = '\\b\t\\b';
// 	var tabMond = 'g';
// 	var tabRegExp = new RegExp(tabVal,tabMod);
	
// 	var lineVal = '\\b\n\\b';
// 	var lineMod = 'g';
// 	var lineRegExp = new RegExp(lineVal,lineMod);

// 	data.replace(tabRegExp, function(a,b){ myTabPositions.push(b); return a; });
// 	data.replace(lineRegExp, function(a,b){ myNewLinePositions.push(b); return a; });

// 	console.log(myTabpositions);
// 	console.log(myNewLinePositions);

// })


// html handler
d3.html("http://enable-cors.org").get(function(error,data){
	var frag = data.querySelector("div");
	console.log(frag);
})










