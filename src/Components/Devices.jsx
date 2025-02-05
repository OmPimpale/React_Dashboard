import React, { useEffect } from 'react';
// import Chart from 'chart.js/auto';
// import $ from 'jquery';

let Devices = () => {

    useEffect(() => {
        $(document).ready(function () {
            const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
            const data = {
                labels: labels,
                datasets: [
                    {
                        label: 'Revenue',
                        data: [14, 41, 35, 51, 25, 18, 21, 35, 15],
                        backgroundColor: function (context) {
                            const chart = context.chart;
                            const { ctx, chartArea } = chart;

                            if (!chartArea) {
                                // This case happens on initial chart load
                                return null;
                            }
                            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                            gradient.addColorStop(0, 'rgb(42,244,153)');
                            gradient.addColorStop(1, 'rgb(0,159,252)');
                            return gradient;
                        },
                        borderColor: [
                            'rgb(42, 244, 153)',
                        ],
                        borderWidth: 1,
                        borderRadius: 7.5,
                    },
                ],
            };

            const config = {
                type: 'bar',
                data: data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                    animation: {
                        duration: 2000, // duration of the animation in milliseconds
                        easing: 'easeInOutQuad', // easing function to use
                    },
                },
            };

            const ctx = document.getElementById('devicesChart1').getContext('2d');
            new Chart(ctx, config);

            // second chart
            const labels1 = ['Desktop', 'Tablet', 'Mobile'];
            const data1 = {
                labels: labels1,
                datasets: [
                    {
                        label: 'Revenue',
                        data: [35, 27, 48],
                        backgroundColor: [
                            '#0d6efd',
                            '#fc185a',
                            '#02c27a',
                        ],
                        borderColor: [
                            'white',
                        ],
                        borderWidth: 2,
                        // borderRadius: 7.5,
                    },
                ],
            };

            const config1 = {
                type: 'doughnut',
                data: data1,
                options: {
                    // scales: {
                    //     y: {
                    //         beginAtZero: true,
                    //     },
                    // },
                    animation: {
                        duration: 2000, // duration of the animation in milliseconds
                        easing: 'easeInOutQuad', // easing function to use
                    },
                },
            };

            const ctx1 = document.getElementById('devicesChart2').getContext('2d');
            new Chart(ctx1, config1);

            // third chart
            const labels2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            const data2 = {
                labels: labels2,
                datasets: [
                    {
                        label: 'Clicks',
                        data: [4, 10, 12, 17, 25, 30, 40, 55, 68],
                        backgroundColor: function (context) {
                            const chart = context.chart;
                            const { ctx, chartArea } = chart;

                            if (!chartArea) {
                                // This case happens on initial chart load
                                return null;
                            }
                            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                            gradient.addColorStop(0, 'rgb(252,1,130)');
                            gradient.addColorStop(1, 'rgb(123,39,200)');
                            return gradient;
                        },
                        borderColor: [
                            'rgb(252,1,130)',
                        ],
                        borderWidth: 2,
                        borderRadius: 7.5,
                    },
                ],
            };

            const config2 = {
                type: 'bar',
                data: data2,
                options: {
                    // scales: {
                    //     y: {
                    //         beginAtZero: true,
                    //     },
                    // },
                    animation: {
                        duration: 2000, // duration of the animation in milliseconds
                        easing: 'easeInOutQuad', // easing function to use
                    },
                },
            };

            const ctx2 = document.getElementById('devicesChart3').getContext('2d');
            new Chart(ctx2, config2);

            // fourth chart
            const labels3 = ['1', '2', '3', '4', '5', '6'];
            const data3 = {
                labels: labels3,
                datasets: [
                    {
                        label: 'Views',
                        data: [4, 25, 14, 34, 10, 39],
                        backgroundColor: [
                            '#fc185a',
                        ],
                        borderColor: function (context) {
                            const chart = context.chart;
                            const { ctx, chartArea } = chart;

                            if (!chartArea) {
                                // This case happens on initial chart load
                                return null;
                            }
                            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                            gradient.addColorStop(0, 'rgb(252,1,130)');
                            gradient.addColorStop(1, 'rgb(123,39,200)');
                            return gradient;
                        },
                        borderWidth: 2,
                        // borderRadius: 7.5,
                    },
                ],
            };

            const config3 = {
                type: 'line',
                data: data3,
                options: {
                    // scales: {
                    //     y: {
                    //         beginAtZero: true,
                    //     },
                    // },
                    animation: {
                        duration: 2000, // duration of the animation in milliseconds
                        easing: 'easeInOutQuad', // easing function to use
                    },
                },
            };

            const ctx3 = document.getElementById('myChart1').getContext('2d');
            new Chart(ctx3, config3);

            // fifth chart
            const labels4 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            const data4 = {
                labels: labels4,
                datasets: [
                    {
                        label: 'Views',
                        data: [4, 10, 25, 12, 25, 18, 40, 22, 7],
                        backgroundColor: [
                            'rgb(255,193,7)',
                        ],
                        borderColor: [
                            'rgb(255,193,7)',
                        ],
                        borderWidth: 2,
                        // borderRadius: 7.5,
                    },
                ],
            };

            const config4 = {
                type: 'line',
                data: {
                    ...data4,
                    datasets: data.datasets.map(dataset => ({
                        ...dataset,
                        tension: 0.4, // Adjust this value to make the line smoother
                    })),
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                    animation: {
                        duration: 2000, // duration of the animation in milliseconds
                        easing: 'easeInOutQuad', // easing function to use
                    },
                },
            };

            const ctx4 = document.getElementById('myChart2').getContext('2d');
            new Chart(ctx4, config4);
        });

    }, []);


    return (
        <>
            <section className="row">
                <div className="col">
                    <section className="row justify-content-center">
                        <div className="col-12 col-lg-5 col-xxl-4">
                            <div className='row justify-content-center'>
                                <div className='col-11 col-md-5 col-lg-11 devicediv rounded-4 p-4 m-3 text-center'>
                                    <h3 className="text-center userhead1 mb-3">Monthly Revenue</h3>
                                    <div className="chartCard mb-2">
                                        <div className="chart-container">
                                            <canvas id="devicesChart1" className='mx-auto'></canvas>
                                        </div>
                                    </div>
                                    <p className="usertext">Avrage monthly sale for every author</p>
                                    <h5 className="userhead2 m-0">68.9% <span>34.5% <i class="fa-solid fa-chevron-up"></i></span></h5>
                                </div>
                                <div className='col-11 col-md-5 col-lg-11 devicediv rounded-4 p-4 m-3'>
                                    <div>
                                        <div id='accounts' className='mb-1'>
                                            <h3 className="userhead1 d-inline mb-3">85,247</h3>
                                            <span className='ms-3 rounded-3'><i class="fa-solid fa-arrow-down"></i> 23.7%</span>
                                        </div>
                                        <p className="usertext">Total Accounts</p>
                                    </div>
                                    <div className="chartBox text-center mb-3">
                                        <canvas id="myChart2" className="mx-auto"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-11 col-lg-5 col-xxl-4 rounded-4 p-4 m-3 devicediv">
                            <h3 className="text-center userhead1 mb-3">Device Type</h3>
                            <div className="chartCard">
                                <div className="chart-container">
                                    <canvas id="devicesChart2" className="mx-auto"></canvas>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <i class="fa-solid fa-display me-1" id='deviceicon1'></i> <span className='devicename'> Desktop</span>
                                    </div>
                                    <span className='devicename'>35%</span>
                                </div>
                                <div className="d-flex justify-content-between my-2 my-md-4">
                                    <div>
                                        <i class="fa-solid fa-tablet-screen-button me-1" id='deviceicon2'></i> <span className='devicename'> Desktop</span>
                                    </div>
                                    <span className='devicename'>27%</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <i class="fa-solid fa-mobile-screen me-1" id='deviceicon3'></i> <span className='devicename'> Desktop</span>
                                    </div>
                                    <span className='devicename'>48%</span>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-xxl-3">
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='row justify-content-center'>
                                        <div className='col-11 col-md-5 col-xxl-11 rounded-4 p-4 m-3 devicediv'>
                                            <div className='d-flex justify-content-between'>
                                                <div>
                                                    <h4 className='userhead1'>82.74K</h4>
                                                    <p className='usertext'>Total Clicks</p>
                                                </div>
                                                <i className="fa-solid fa-ellipsis-vertical threedots"></i>
                                            </div>
                                            <div className="chartCard">
                                                <div className="chart-container mb-3">
                                                    <canvas id="devicesChart3" className="mx-auto"></canvas>
                                                </div>
                                            </div>
                                            <p className='usertext text-center'><span>12.5%</span> from last month</p>
                                        </div>
                                        <div className='col-11 col-md-5 col-xxl-11 rounded-4 p-4 m-3 devicediv'>
                                            <div className='d-flex justify-content-between'>
                                                <div>
                                                    <h4 className='userhead1'>68.4K</h4>
                                                    <p className='usertext'>Total Views</p>
                                                </div>
                                                <i className="fa-solid fa-ellipsis-vertical threedots"></i>
                                            </div>
                                            <div className="chartCard text-center mb-3">
                                                <div className="chartBox text-center mb-3">
                                                    <canvas id="myChart1" className="mx-auto"></canvas>
                                                </div>
                                                <p className='usertext text-center'>35K users increased from last month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Devices