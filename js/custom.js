const pieChart = new Chart(document.getElementById('canvas-5'), {
    type: 'pie',
    data: {
      labels: ['Repair', 'Available', 'Active'],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    },
    options: {
      responsive: true
    }
  });
// const random = () => Math.round(Math.random() * 100);
// eslint-disable-next-line no-unused-vars
const barChart = new Chart(document.getElementById('canvas-2'), {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        backgroundColor: 'rgba(220, 220, 220, 0.5)',
        borderColor: 'rgba(220, 220, 220, 0.8)',
        highlightFill: 'rgba(220, 220, 220, 0.75)',
        highlightStroke: 'rgba(220, 220, 220, 1)',
        data: [10, 0, 2,7,5, 2,1],
        label:'Work Orders'
      }, {
        backgroundColor: 'rgba(151, 187, 205, 0.5)',
        borderColor: 'rgba(151, 187, 205, 0.8)',
        highlightFill: 'rgba(151, 187, 205, 0.75)',
        highlightStroke: 'rgba(151, 187, 205, 1)',
        data: [8,2, 2,7,5, 0, 3],
        label:'Work Completed'
      }]
    },
    options: {
      responsive: true
    }
  });
  
const assettypechart = new Chart(document.getElementById('canvas-10'), {
    type: 'doughnut',
    data: {
      labels: ['Vehicle', 'Electronics', 'Mobile','Power Supply'],
      datasets: [{
        data: [280, 50, 100,70],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#0c7607'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#0c7607']
      }]
    },
    options: {
      responsive: true
    }
  });