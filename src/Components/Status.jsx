import React, { useEffect } from 'react';

let Status = () => {

    useEffect(() => {
        $(document).ready(function () {

            $('.donut').peity('donut')
            $(".data-attributes span").peity("donut")

            // first chart
            const labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
            const data = {
                labels: labels,
                datasets: [
                    {
                        label: 'Growth',
                        data: [4, 10, 25, 12, 25, 18, 40, 22, 7],
                        backgroundColor: [
                            'rgb(152, 236, 45)',
                        ],
                        borderColor: [
                            'rgb(152,236,45)',
                        ],
                        borderWidth: 1,
                        borderRadius: 7.5,
                    },
                ],
            };

            const config = {
                type: 'line',
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

            const ctx = document.getElementById('status1').getContext('2d');
            new Chart(ctx, config);

        });

    }, []);


    return (
        <>
            <section className="row justify-content-center">
                <div className="col-12">
                    <section className="row justify-content-center">
                        <div className="col-11 col-lg-5 col-xxl-4 rounded-4 p-4 m-3 devicediv">
                            <div className='d-flex justify-content-between mb-3'>
                                <div className='devicehead1'>Campaign Stats</div>
                                <i className="fa-solid fa-ellipsis-vertical threedots"></i>
                            </div>
                            <div>
                                <div className="d-flex align-items-center justify-content-between Campaign1 py-2">
                                    <div className="d-flex align-items-center">
                                        <i class="fa-solid fa-calendar-days rounded-2" id='Campaignicon1'></i>
                                        <p className='m-0 ms-2 Campaignhead'>Campaign</p>
                                    </div>
                                    <div>
                                        <p className='m-0 Campaigntext1'>
                                            54
                                            <span className='ms-2'>28%</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between Campaign2 py-2">
                                    <div className="d-flex align-items-center">
                                        <i class="fa-regular fa-envelope rounded-2" id='Campaignicon2'></i>
                                        <p className='m-0 ms-2 Campaignhead'>Emailed</p>
                                    </div>
                                    <div>
                                        <p className='m-0 Campaigntext2'>
                                            245
                                            <span className='ms-2'>15%</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between Campaign1 py-2">
                                    <div className="d-flex align-items-center">
                                        <i class="fa-solid fa-arrow-up-right-from-square rounded-2" id='Campaignicon3'></i>
                                        <p className='m-0 ms-2 Campaignhead'>Opened</p>
                                    </div>
                                    <div>
                                        <p className='m-0 Campaigntext1'>
                                            54
                                            <span className='ms-2'>30.5%</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between Campaign2 py-2">
                                    <div className="d-flex align-items-center">
                                        <i class="fa-solid fa-bullseye rounded-2" id='Campaignicon4'></i>
                                        <p className='m-0 ms-2 Campaignhead'>Clicked</p>
                                    </div>
                                    <div>
                                        <p className='m-0 Campaigntext2'>
                                            859
                                            <span className='ms-2'>34.6%</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between Campaign1 py-2">
                                    <div className="d-flex align-items-center">
                                        <i class="fa-solid fa-ticket rounded-2" id='Campaignicon5'></i>
                                        <p className='m-0 ms-2 Campaignhead'>Subscribed</p>
                                    </div>
                                    <div>
                                        <p className='m-0 Campaigntext1'>
                                            24,758
                                            <span className='ms-2'>53%</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between Campaign2 py-2">
                                    <div className="d-flex align-items-center">
                                        <i class="fa-regular fa-message rounded-2" id='Campaignicon6'></i>
                                        <p className='m-0 ms-2 Campaignhead'>Spam Message</p>
                                    </div>
                                    <div>
                                        <p className='m-0 Campaigntext2'>
                                            548
                                            <span className='ms-2'>47%</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between Campaign1 py-2">
                                    <div className="d-flex align-items-center">
                                        <i class="fa-regular fa-eye rounded-2" id='Campaignicon7'></i>
                                        <p className='m-0 ms-2 Campaignhead'>Views Mails</p>
                                    </div>
                                    <div>
                                        <p className='m-0 Campaigntext1'>
                                            9845
                                            <span className='ms-2'>68%</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-11 col-lg-5 col-xxl-4 rounded-4 p-4 m-3 devicediv">
                            <div className="chartBox text-center mb-3 mb-lg-4">
                                <canvas id="status1" className="mx-auto"></canvas>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <div className='growthhead'>
                                    <h3 className='m-0'>36.7%</h3>
                                    <p className='m-0'>Visitors Growth</p>
                                </div>
                                <div className='growthhead ms-4'>
                                    <span><i class="fa-solid fa-arrow-trend-up me-1"></i> 34.5%</span>
                                </div>
                            </div>
                            <div>
                                <div className='mb-2 mb-lg-3'>
                                    <div className='growthtext d-flex justify-content-between mb-1'>
                                        <span>Click</span>
                                        <span>9842</span>
                                    </div>
                                    <div className='growthdiv rounded-5'>
                                        <div className='growthdiv1 rounded-start-5'></div>
                                    </div>
                                </div>
                                <div className='mb-2 mb-lg-3'>
                                    <div className='growthtext d-flex justify-content-between mb-1'>
                                        <span>Likes</span>
                                        <span>6848</span>
                                    </div>
                                    <div className='growthdiv rounded-5'>
                                        <div className='growthdiv2 rounded-start-5'></div>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='growthtext d-flex justify-content-between mb-1'>
                                        <span>Upvotes</span>
                                        <span>2589</span>
                                    </div>
                                    <div className='growthdiv rounded-5'>
                                        <div className='growthdiv3 rounded-start-5'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-11 col-xxl-3 rounded-4 p-4 m-3 devicediv">
                            <div className='d-flex justify-content-between mb-3'>
                                <div className='devicehead1'>Social Leads</div>
                                <i className="fa-solid fa-ellipsis-vertical threedots"></i>
                            </div>
                            <div>
                                <div className="d-flex align-items-center justify-content-between py-3">
                                    <div className="d-flex align-items-center">
                                        <img src="./17.png" alt="facebook" className='socialimg' />
                                        <p className='m-0 ms-3 socialhead'>Facebook</p>
                                    </div>
                                    <div>
                                        <p className='m-0 d-flex align-items-center socialtext data-attributes'>
                                            <p className='m-0 me-2 me-md-4'>55%</p>
                                            <span data-peity='{ "fill": ["rgb(13,110,253)", "rgba(128, 128, 128, 0.411)"],   "innerRadius": 14, "radius": 18 }'>55/100</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3">
                                    <div className="d-flex align-items-center">
                                        <img src="./18.png" alt="facebook" className='socialimg' />
                                        <p className='m-0 ms-3 socialhead'>Linkedin</p>
                                    </div>
                                    <div>
                                        <p className='m-0 d-flex align-items-center socialtext data-attributes'>
                                            <p className='m-0 me-2 me-md-4'>67%</p>
                                            <span data-peity='{ "fill": ["rgb(13,202,240)", "rgba(128, 128, 128, 0.411)"],   "innerRadius": 14, "radius": 18 }'>67/100</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3">
                                    <div className="d-flex align-items-center">
                                        <img src="./19.png" alt="facebook" className='socialimg' />
                                        <p className='m-0 ms-3 socialhead'>Instagram</p>
                                    </div>
                                    <div>
                                        <p className='m-0 d-flex align-items-center socialtext data-attributes'>
                                            <p className='m-0 me-2 me-md-4'>78%</p>
                                            <span data-peity='{ "fill": ["rgb(255,0,179)", "rgba(128, 128, 128, 0.411)"],   "innerRadius": 14, "radius": 18 }'>78/100</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3">
                                    <div className="d-flex align-items-center">
                                        <img src="./20.png" alt="facebook" className='socialimg' />
                                        <p className='m-0 ms-3 socialhead'>Snapchat</p>
                                    </div>
                                    <div>
                                        <p className='m-0 d-flex align-items-center socialtext data-attributes'>
                                            <p className='m-0 me-2 me-md-4'>46%</p>
                                            <span data-peity='{ "fill": ["rgb(253,126,20)", "rgba(128, 128, 128, 0.411)"],   "innerRadius": 14, "radius": 18 }'>46/100</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3">
                                    <div className="d-flex align-items-center">
                                        <img src="./05.png" alt="facebook" className='socialimg' />
                                        <p className='m-0 ms-3 socialhead'>Google</p>
                                    </div>
                                    <div>
                                        <p className='m-0 d-flex align-items-center socialtext data-attributes'>
                                            <p className='m-0 me-2 me-md-4'>38%</p>
                                            <span data-peity='{ "fill": ["rgb(252,24,90)", "rgba(128, 128, 128, 0.411)"],   "innerRadius": 14, "radius": 18 }'>38/100</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3">
                                    <div className="d-flex align-items-center">
                                        <img src="./08.png" alt="facebook" className='socialimg' />
                                        <p className='m-0 ms-3 socialhead'>Yahoo!</p>
                                    </div>
                                    <div>
                                        <p className='m-0 d-flex align-items-center socialtext data-attributes'>
                                            <p className='m-0 me-2 me-md-4'>15%</p>
                                            <span data-peity='{ "fill": ["rgb(111,66,193)", "rgba(128, 128, 128, 0.411)"],   "innerRadius": 14, "radius": 18 }'>15/100</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between py-3">
                                    <div className="d-flex align-items-center">
                                        <img src="./07.png" alt="facebook" className='socialimg' />
                                        <p className='m-0 ms-3 socialhead'>Spotify</p>
                                    </div>
                                    <div>
                                        <p className='m-0 d-flex align-items-center socialtext data-attributes'>
                                            <p className='m-0 me-2 me-md-4'>12%</p>
                                            <span data-peity='{ "fill": ["rgb(2,194,122)", "rgba(128, 128, 128, 0.411)"],   "innerRadius": 14, "radius": 18 }'>12/100</span>
                                        </p>
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

export default Status