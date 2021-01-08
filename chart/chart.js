// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================

var chart = document.getElementById("chart").getContext("2d"),
  gradient_blue = chart.createLinearGradient(0, 0, 0, 450),
  gradient_green = chart.createLinearGradient(0, 0, 0, 450);

gradient_blue.addColorStop(0, "rgba(107, 55,241, 0.5)");
gradient_blue.addColorStop(0.5, "rgba(107, 55,241, 0.25)");
gradient_blue.addColorStop(0.7, "rgba(107, 55,241, 0)");

gradient_green.addColorStop(0, "rgba(11, 178,150, 0.5)");
gradient_green.addColorStop(0.5, "rgba(11, 178,150, 0.25)");
gradient_green.addColorStop(0.7, "rgba(11, 178,150, 0)");

var data = {
  labels: [
    "20/12/15",
    "20/12/16",
    "20/12/17",
    "20/12/18",
    "20/12/19",
    "20/12/20",
    "20/12/21",
  ],
  datasets: [
    {
      label: "Custom Label Name",
      backgroundColor: gradient_blue,
      pointBackgroundColor: "#6b37f1",
      borderWidth: 1,
      borderColor: "#6b37f1",
      data: [7, 9, 10, 9, 6, 9, 7],
    },
    {
      label: "Custom Label Name",
      backgroundColor: gradient_green,
      pointBackgroundColor: "#0bb296",
      borderWidth: 1,
      borderColor: "#0bb296",
      data: [9, 7, 6, 7, 9, 10, 9],
    },
  ],
};

var options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.05)",
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.08)",
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.000001,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "Open Sans",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "red",
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};

var chartInstance = new Chart(chart, {
  type: "line",
  data: data,
  options: options,
});
