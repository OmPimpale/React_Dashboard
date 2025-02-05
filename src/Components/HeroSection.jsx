let HeroSection = () => {

    $(document).ready(function () {
        $('.chart').easyPieChart({
            trackColor: "rgb(9, 14, 43)",
            lineWidth: 10,
            lineCap: 'round',
            scaleLength: 0,
            size: 120,
            animate: 1000,
            rotate: -90,
            barColor: function (percent) {
                var ctx = this.renderer.getCtx();
                var canvas = this.renderer.getCanvas();
                var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                gradient.addColorStop(0, "rgb(254,199,8)");
                gradient.addColorStop(1, "rgb(238,9,121)");
                return gradient;
            }
        });

        // data (setup) block
        const labels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Users',
                    data: [50, 27, 100, 15, 300, 18, 88],
                    borderRadius: 5,
                    backgroundColor: [
                        'rgb(49, 193, 49)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 255, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)',
                    ],
                    borderColor: [
                        'rgb(49, 193, 49)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 255, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)',
                    ],
                    borderWidth: 1,
                },
            ],
        };

        // config block
        const config = {
            type: 'line',
            data: {
                ...data,
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

        // render

        const myChart = new Chart(document.querySelector('#myChart'), config);
    });

    return (
        <>
            <section className="row">
                <div className="col">
                    <section className="row justify-content-center">
                        {/* ==== bar ==== */}
                        <div className="col-11 d-none d-md-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <div className="" id="herodiv">
                                    <h3 className="m-0 pe-3" id="herohead1">Dashboard</h3>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-house ps-4 pe-2" id="heroicon"></i>
                                    <h3 className="m-0" id="herohead2">Analysis</h3>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn btn-outline-primary">Settings</button>
                                <button type="button" className="btn btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    <hr />
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* ==== user ==== */}
                        <div className="col-11 col-xxl-5 p-4 m-3 rounded-4" id="herodiv1">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row mt-xxl-4">
                                        <div className="d-flex">
                                            <img src="./avtar.png" alt="avtar" className="img-fluid" id="avtar" />
                                            <div className="ms-4">
                                                <h5 className="m-0" id="herotext">Welcome back</h5>
                                                <h4 className="m-0" id="herohead">John Anderson!</h4>
                                            </div>
                                        </div>
                                        <div className="col d-flex mt-5">
                                            <div className="pe-5" id="herodatadiv">
                                                <h3 className="herodata1">$65.4K</h3>
                                                <p className="herodata2">Today's Sales</p>
                                                <div className="progressdiv rounded-5">
                                                    <div id="progressdiv1" className="rounded-start-5"></div>
                                                </div>
                                            </div>
                                            <div className="ps-5">
                                                <h3 className="herodata1">78.4%</h3>
                                                <p className="herodata2">Growth Rate</p>
                                                <div className="progressdiv rounded-5">
                                                    <div id="progressdiv2" className="rounded-start-5"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="./welcome-back-3.png" alt="avtar2" className="img-fluid d-md-none mt-5" />
                                </div>
                                <div className="col-md-6">
                                    <img src="./welcome-back-3.png" alt="avtar2" className="img-fluid d-none d-md-inline mt-xxl-5" />
                                </div>
                            </div>
                        </div>

                        {/* ==== first chart ==== */}
                        <div className="col-11 col-lg-5 col-xxl-3 p-4 m-3 usersdiv rounded-4">
                            <div className="row">
                                <div className="d-flex justify-content-between mb-3">
                                    <div>
                                        <h3 className="userhead m-0">42.5K</h3>
                                        <p className="usertext m-0">Active Users</p>
                                    </div>
                                    <i className="fa-solid fa-ellipsis-vertical threedots"></i>
                                </div>
                                <div className="text-center">
                                    <div className="chart mb-3" data-percent="68">
                                        <div className="wrapper mb-3">
                                            <span className="">68%</span>
                                        </div>
                                    </div>
                                    <p className="usertext">24K users increased from last month</p>
                                </div>
                            </div>
                        </div>

                        {/* ==== second chart ==== */}
                        <div className="col-11 col-lg-5 col-xxl-3 p-4 m-3 usersdiv rounded-4">
                            <div className="row">
                                <div className="d-flex justify-content-between mb-3">
                                    <div>
                                        <h3 className="userhead m-0">97.4K</h3>
                                        <p className="usertext m-0">Total Users</p>
                                    </div>
                                    <i className="fa-solid fa-ellipsis-vertical threedots"></i>
                                </div>
                                <div className="text-center">
                                    <div className="chartCard text-center mb-3">
                                        <div className="chartBox text-center">
                                            <canvas id="myChart" className="mx-auto"></canvas>
                                        </div>
                                    </div>
                                    <p className="usertext"><span>12.5%</span> from last month</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default HeroSection;