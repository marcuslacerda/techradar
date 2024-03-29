var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Fuse'];

//Data
var d = [
  // FUSE
		  // [
			// {axis:"Impact",value:0.2},
			// {axis:"Coding",value:0.6},
			// {axis:"Quality",value:0.4},
			// {axis:"Archirecture",value:0.34},
			// {axis:"Continuous Delivery",value:0.28},
			// {axis:"Clould Infraestrutura",value:0.14},
			// {axis:"Security",value:0.05},
			// {axis:"Entrepreneurship",value:0.0},
      // {axis:"Innovation",value:0.00},
      // {axis:"Communication",value:0.1},
      // {axis:"Problem Solving",value:0.5},
      // {axis:"Teamwork",value:0.6},
      // {axis:"Agile Process",value:0.5},
		  // ],
      // MASE
      [
      {axis:"Impact",value:0.7},
      {axis:"Coding",value:0.65},
      {axis:"Quality",value:0.5},
      {axis:"Archirecture",value:0.5},
      {axis:"Continuous Delivery",value:0.6},
      {axis:"Clould Infraestrutura",value:0.7},
      {axis:"Security",value:0.3},
      {axis:"Entrepreneurship",value:0.0},
      {axis:"Innovation",value:0.00},
      {axis:"Communication",value:0.1},
      {axis:"Problem Solving",value:0.5},
      {axis:"Teamwork",value:0.6},
      {axis:"Agile Process",value:0.5},
      ],
      // SARC
      // [
      //   {axis:"Impact",value:0.7},
  		// 	{axis:"Coding",value:0.4},
  		// 	{axis:"Quality",value:0.4},
  		// 	{axis:"Archirecture",value:0.85},
  		// 	{axis:"Continuous Delivery",value:0.8},
  		// 	{axis:"Clould Infraestrutura",value:0.7},
  		// 	{axis:"Security",value:0.5},
      //   {axis:"Entrepreneurship",value:0.6},
  		// 	{axis:"Innovation",value:0.7},
      //   {axis:"Communication",value:0.7},
      //   {axis:"Problem Solving",value:0.5},
      //   {axis:"Teamwork",value:0.5},
      //   {axis:"Agile Process",value:0.7},
		  // ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1,
  levels: 5,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)')
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Leverage Points:");

//Initiate Legend
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)')
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;
