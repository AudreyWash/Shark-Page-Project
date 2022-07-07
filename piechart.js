<!DOCTYPE html>
<html>

<!-- MY INTERACTIVE PIE CHART (TAKEN FROM THE W3SCHOOLS HOMEPAGE) -->
<div id="piechart" align ="center"></div>
<script type="text/javascript"src="https://www.gstatic.com/charts/loader.js"></script><script type="text/javascript">

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Shark Deaths', 'Killing Methods'],
  ['Commercial Shark Finning/Medicine/Shark Fin Soup', 48],
  ['Overfishing', 4],
  ['Fisheries Bycatch', 39],
  ['Habitat Loss (Pollution, Climate Change, Fishing)', 91],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Percentage of Shark Killing Methods Everyday', 'width':450, 'height':300};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
</script>

</html>
