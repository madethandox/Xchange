import './main.scss'
import './main.js'
import Chart from 'chart.js/auto';
const chart1 = document.getElementById("chart1")
const chart2 = document.getElementById("chart2")
const chart3 = document.getElementById("chart3")
const chart4 = document.getElementById("chart4")
new Chart(chart1, {
    type: 'line',

    data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
            label: 'USD ($) Rate to IRR (﷼)',
            data: [1800000, 1850000, 1900000, 2000000, 2300000],
            borderWidth: 2
        }]
    },

    options: {
        responsive: true ,
        maintainAspectRatio: false ,
        plugins: {
        legend: {
            labels: {
                boxWidth: 0,
                boxHeight: 0,
                padding: 0
            }
        }
    }

    }
});
new Chart(chart2, {
    type: 'line',

    data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
            label: 'EUR (€) Rate to IRR (﷼)',
            data: [2100000, 2150000, 2200000, 2500000, 2700000],
            borderWidth: 2
        }]
    },

    options: {
        responsive: true ,
        maintainAspectRatio: false ,
        plugins: {
        legend: {
            labels: {
                boxWidth: 0,
                boxHeight: 0,
                padding: 0
            }
        }
    }

    }
});
new Chart(chart3, {
    type: 'line',

    data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
            label: 'AED Rate to IRR (﷼)',
            data: [400000, 450000, 500000, 550000, 640000],
            borderWidth: 2
        }]
    },

    options: {
        responsive: true ,
        maintainAspectRatio: false ,
        plugins: {
        legend: {
            labels: {
                boxWidth: 0,
                boxHeight: 0,
                padding: 0
            }
        }
    }

    }
});
new Chart(chart4, {
    type: 'line',

    data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
        datasets: [{
            label: 'TRY (₺) Rate to IRR (﷼)',
            data: [35000, 37000, 40000, 43000, 50000],
            borderWidth: 2
        }]
    },

    options: {
        responsive: true ,
        maintainAspectRatio: false ,
        plugins: {
        legend: {
            labels: {
                boxWidth: 0,
                boxHeight: 0,
                padding: 0
            }
        }
    }

    }
});
