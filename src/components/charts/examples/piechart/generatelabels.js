eachSlice.append("text")
  .attr("dx", 55)
  .attr("dy", -5)
  .append("textPath")
  .attr("xlink:href", (d, i) => `#arc-${i}`)
  .text((d) => d.data.lastName);
