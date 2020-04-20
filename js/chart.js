// Traffic Chart

const trafficCanvas = document.getElementById("trafficChart");

let trafficDataHourly = {
    labels: ["06:00-07:00", "07:00-08:00", "08:00-09:00", "09:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00", "13:00-14:00", "15:00-16:00",
    "16:00-17:00", "17:00-18:00", "18:00-19:00", "19:00-20:00", "21:00-22:00", "22:00-23:00", "23:00-00:00"],
    datasets: [{
        data: [587, 798, 1075, 2199, 1284, 2192, 2067, 1723, 1556, 1317, 2202, 2171, 1197, 1537, 938, 2100],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
    };

let trafficDataDaily = {
    labels: ["Apr 16", "Apr 17", "Apr 18", "Apr 19", "Apr 20", "Apr 21", "Apr 22",
    "Apr 23", "Apr 24", "Apr 25", "Apr 26", "Apr 27", "Apr 28", "Apr 29"],
    datasets: [{
        data: [1075, 2199, 1284, 2192, 2067, 1723, 1556, 1317, 2202, 2171, 1197, 1537, 938, 2100],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
    };

let trafficDataWeekly = {
    labels: ["Apr 16-22", "Apr 23-29", "Apr 30- May 5", "May 6-12", "May 13-19", "May 20-26", "May 27- Jun 2",
    "Jun 3-9", "Jun 10-16", "Jun 17-23", "Jun 24-30"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
    };

let trafficDataMonthly = {
    labels: ["April", "May", "June", "July", "August", "September", "October",
    "November", "December", "January", "February", "March"],
    datasets: [{
        data: [11699, 13496, 16751, 19152, 17561, 23852, 25912, 29165, 34158, 29451, 36105, 40960, 41060, 43129, 44408, 45263],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        }]
    };

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
    legend : {
        display: false
    }
    };

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataDaily,
    options: trafficOptions
    });

// 


// Daily Traffic Chart

const dailyCanvas = document.getElementById("dailyTrafficChart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Mobile Users Chart

const mobileCanvas = document.getElementById("mobileUsersChart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
}

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

