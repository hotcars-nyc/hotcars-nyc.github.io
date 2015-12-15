d3.select("#introbutton").on("click", function() {
		/** Test if d3 is loaded **/
		console.log(d3); 
		var svg = d3.select("#car-animation");
		svg.selectAll("*").remove();
		/** Add an SVG to container **/
		var svg = d3.select('#car-animation').append('svg')
						.attr('width',700)
						.attr('height',500);

		/** Add Rectangles **/	  
		var car1 = svg.append("rect")
							.attr("x",90)
							.attr("y",90)
							.attr("width",80)
							.attr("height",40)
							.style("fill","black");
							
		var tire1 = svg.append("circle")
							.attr("cx",125)
							.attr("cy",140)
							.attr("r",10)
							.style("fill","grey");
		
		var car2 = svg.append("rect")
							.attr("x",175)
							.attr("y",90)
							.attr("width",80)
							.attr("height",40)
							.style("fill","black");	

		var tire2 = svg.append("circle")
							.attr("cx",210)
							.attr("cy",140)
							.attr("r",10)
							.style("fill","grey");
		
		var car3 = svg.append("rect")
							.attr("x",260)
							.attr("y",90)
							.attr("width",80)
							.attr("height",40)
							.style("fill","black");
		
		var tire3 = svg.append("circle")
							.attr("cx",295)
							.attr("cy",140)
							.attr("r",10)
							.style("fill","grey");
		
		var my_text = svg.append('text')
							.text('"Oh no, is the AC dead?"')
							.style('opacity',0)
							.style('fill',"#B7B6B6")
							.attr('x',250)
							.attr('y',80)
							.attr('font-size',20);
		
		var my_text2 = svg.append('text')
							.text('"Omg I am sweating so much!"')
							.style('opacity',0)
							.style('fill',"#B7B6B6")
							.attr('x',200)
							.attr('y',50)
							.attr('font-size',20);
							
		car1.transition()
				.attr("x","190")
				.attr("y","90")
				.duration(1500)
				.delay(100);
		
		tire1.transition()
				.attr("cx","225")
				.attr("cy","140")
				.duration(1500)
				.delay(100);
		
		car2.transition()
				.attr("x","275")
				.attr("y","90")
				.style("fill","red")
				.duration(1500)
				.delay(100);
		
		tire2.transition()
				.attr("cx","310")
				.attr("cy","140")
				.duration(1500)
				.delay(100);
				
		car3.transition()
				.attr("x","360")
				.attr("y","90")
				.duration(1500)
				.delay(100);
		
		tire3.transition()
				.attr("cx","395")
				.attr("cy","140")
				.duration(1500)
				.delay(100);
				
		my_text.transition()
				.style('opacity',1)
				.duration(2000)
				.delay(1600)
				.transition()
				.style('opacity',0)
				.duration(1000);
		
		my_text2.transition()
				.style('opacity',1)
				.duration(500)
				.delay(4500);
})
