// Functions which provide the inputs to the charts
export function getBarData(details) {
    return {
        labels: ['Volume', 'Mash temp', 'Fermentation Temp', 'Attenuation level'],
        datasets: [{
            data: details
        }]
    }
}

export function getPieData(details, elements) {
    return {
        labels: details,
        datasets: [{
            data: elements,
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
        }]
    }
}

export function getDoughnutData(details, elements) {
    return {
        labels: details,
        datasets: [{
            data: elements,
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
            ],
            hoverBackgroundColor: [
                '#501800',
                '#4B5000',
                '#175000',
                '#003350',
                '#35014F'
            ],
        }]
    }
}

export function getBarOptions() {
    return {
        responsive: true,
        title: {
            display: true,
            text: 'Bar chart showing Beer stats according to brand',
            fontSize: 30
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: true,
                },
                ticks: {
                    maxTicksLimit: 6,
                    beginAtZero: true,
                    min: 0,
                },
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    drawBorder: false,
                },
                ticks: {
                    beginAtZero: true,
                    min: 0,
                },
            }],
        },
        legend: {
            display: false,
        },
        tooltips: {
            enabled: true,
        },
    }
}

export function getPieOptions() {
    return {
        title: {
            display: true,
            text: 'Pie chart showing ingredients used in each brand',
            fontSize: 30
        },
        legend: {
            display: true,
            position: 'right'
        }
    }
}

export function getDoughnutOptions() {
    return {
        title: {
            display: true,
            text: 'Doughnut chart showing hops in each brand',
            fontSize: 30
        },
        legend: {
            display: true,
            position: 'right'
        }
    }
}