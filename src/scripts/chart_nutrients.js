async function chartNutrients(xLabels, showValues){
    // Chart.defaults.font.size = 12;
    Chart.defaults.font.family = 'Arial';
    const divNutrients = document.getElementById('nutrients');
    divNutrients.innerHTML = "";
    const canvas = document.createElement('canvas');
    // canvas.setAttribute("width", screen.availWidth);
    // canvas.setAttribute("height", screen.availHeight);
    const ctx = canvas.getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        plugins: [ChartDataLabels],
        data: {
            labels: xLabels.slice(1),
            datasets: [
                {
                    label: "Min",
                    data: showValues["min"].slice(1),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Max",
                    data: showValues["max"].slice(1),
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Average",
                    data: showValues["ave"].slice(1),
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: "Median",
                    data: showValues["med"].slice(1),
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                },
            ]
        },
        options: {
            scales: {
                x: {
                    grid:{
                        display:false
                    },
                    ticks: {
                        font: {
                            // family: 'Arial',
                            size: 12,
                        }
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        callback: function(value, index, values) {
                            return `${value} g`;
                        },
                        font:{
                            size: 12,
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    // backgroundColor: 'gray',
                    font: {
                        size: 9,
                    },
                    // formatter: (val) => (`${val} g`),
                    labels: {
                        value: {
                            color: 'black',
                        },
                    },
                    display: 'auto',
                },
                legend: {
                    labels: {
                        font: {
                            size: 14,
                            family: 'sans-serif',
                            weight: 'bold',
                        }
                    }
                }
            },
        }
    });
    divNutrients.appendChild(canvas);
}

export default chartNutrients;