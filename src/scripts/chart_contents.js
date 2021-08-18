async function chartContents(materials, mostFiveContents){
    const dict = {};
    mostFiveContents.forEach(ele => {
        dict[ele] = materials[ele];
    });
    Chart.defaults.font.size = 20;
    Chart.defaults.font.family = 'Arial';
    const divContents = document.getElementById('contents');
    divContents.innerHTML = "";
    const canvas = document.createElement('canvas');;
    const ctx = canvas.getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        plugins: [ChartDataLabels],
        data: {
            labels: Object.keys(dict),
            datasets: [
                {
                    data: Object.values(dict),
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4,
                }
            ],
        }
    });
    divContents.appendChild(canvas);
}

export default chartContents;