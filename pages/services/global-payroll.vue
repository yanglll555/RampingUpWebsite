<template>
    <div class="global-payroll page-container">
        <div class="banner-box">
            <div class="universal_container">
                <h1 class="title">Pay simply, with Ramping Up global payroll</h1>
                <div class="desc">
                    We offer global payroll services, by handling payroll calculations, including social security, 
                    <br>
                    statutory fees, and provide a transparent breakdown. No need to worry about compliance
                    <br>
                    or currency—we are your global payroll provider.
                </div>
                <div class="btns">
                    <div class="rampingBtn">Talk To Us</div>
                </div>
            </div>
        </div>
        <div class="center-container">
            <div class="universal_container">
                <ul class="card-box">
                    <li class="card">
                        <div class="content">
                            <h2 class="title">Our automatic
                                remote payroll service</h2>
                            <ul>
                                <li class="custom-style">Manage social contributions calculations</li>
                                <li class="custom-style">Handle contract & taxes for remote employees</li>
                            </ul>
                        </div>
                        <img src="@/assets/images/payroll_2.png" alt="">
                    </li>
                    <li class="card">
                        <div class="content">
                            <h2 class="title">Forex Payments</h2>
                            <ul>
                                <li class="custom-style">Pay invoice in local currency</li>
                                <li class="custom-style">No additional Forex fees</li>
                            </ul>
                        </div>
                        <img src="@/assets/images/payroll_3.png" alt="">
                    </li>
                    <li class="full card">
                        <div class="content"> 
                            <h2 class="title">Our transparent payroll services ensure accuracy and clarity</h2>
                            <ul>
                                <li class="custom-style">Upfront and transparent fees</li>
                                <li class="custom-style">Monthly financial records provided</li>
                                <li class="custom-style">Hassle-free payroll ensuring accurate payments and compliance</li>
                            </ul>
                        </div>
                        <img src="@/assets/images/payroll_4.png" alt="">
                    </li>
                </ul>
                <div class="btns">
                    <div class="rampingBtn left" @click="$router.push('/services/hire-remote-developers')">Ramping Up Recruitment</div>
                    <div class="rampingBtn right" @click="$router.push('/services/value-added-services')">Value Added Services <span> - Starts from $200</span></div>
                </div>
            </div>
        </div>
        <div class="started">
            <div class="title">Ready to Ramp Up your business?</div>
            <div class="rampingBtn" @click="$router.push('/contact')">
                Get Started
				<img src="@/assets/images/btn_icon.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
		return {
			title: 'Global Payroll Made Simple | Ramping Up',
			meta: [
				{ hid: 'keywords', name: 'keywords', content: 'global payroll services,global payroll,remote payroll,global payroll provider,contract for remote employees,payroll taxes for remote employees' },
				{ hid: 'description', name: 'description', content: "Securely pay all your international employees through Ramping Up's global payment platform, with licensed bankplevel security and funds safeguarding." }
			]
		}
	},
}
</script>

<style scoped>
@media (max-width: 600px) {
    .global-payroll {
        position: relative;
        z-index: 101;
        background-color: #0A0A0A;
    }
    .banner-box {
        height: 457px;
        background-color: #0a0a0a;
        color: #fff;
        background-image: url('@/assets/images/payroll_1.png');
		background-repeat: no-repeat;
		background-size: auto 100%;
        background-position: center;
    }
    .banner-box .universal_container {
        height: 100%;
    }
    .banner-box .title {
        font-size: 36px;
        line-height: 45px;
        text-align: center;
        padding-top: 32px;
        background-image: -webkit-linear-gradient(left, #fff, #dffdd9 90%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
    }
    .banner-box .desc {
        text-align: center;
        font-size: 13px;
        line-height: 16.25px;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 8px;
    }
    .banner-box .btns {
        margin-top: 24px;
        display: flex;
        justify-content: center;
    }
    .banner-box .btns .rampingBtn {
        height: 40px;
    }
    .banner-box .btns .rampingBtn.right {
        background-color: #6f726d;
        color: #fff;
        margin-left: 16px;
    }

    .center-container {
        background-color: #101010;
        color: #fff;
        padding: 32px 0;
    }
    .center-container .card {
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05),rgba(255, 255, 255, 0));
        padding: 20px;
        border-radius: 16px;
        margin-bottom: 20px;
    }
    .center-container .card:last-child {
        margin-bottom: 0;
    }
    .center-container .card .content {
        margin-bottom: 34px;
    }
    .center-container .card .content .title {
        font-size: 24px;
        line-height: 26.4px;
        font-weight: 700;
    }
    .center-container .card .content ul {
        font-size: 14px;
        line-height: 22.4px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.6);
    }
    .center-container .card .content ul li {
        margin-top: 16px;
    }
    .center-container .card img {
        width: 100%;
    }

    .center-container .btns {
        margin-top: 32px;
    }
    .center-container .btns .rampingBtn {
        height: 40px;
    }
    .center-container .btns .rampingBtn.left {
        background-color: #fff;
    }
    .center-container .btns .rampingBtn.right {
        background-color: unset;
        color: #fff;
        border: 1px solid #fff;
        margin-top: 8px;
    }
    .center-container .btns .rampingBtn.right span {
        font-size: 12px;
    }
}
@media (min-width: 600px) {
    .global-payroll {
        position: relative;
        z-index: 101;
    }
    .banner-box {
        background-color: #0a0a0a;
        height: 571px;
        color: #fff;
        background-image: url('@/assets/images/payroll_1.png');
		background-repeat: no-repeat;
		background-size: 100%;
    }
    .banner-box .universal_container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .banner-box .title {
        font-size: 50px;
        line-height: 62.5px;
        text-align: center;
        background-image: -webkit-linear-gradient(left, #fff, #dffdd9 90%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
    }
    .banner-box .desc {
        text-align: center;
        font-size: 18px;
        line-height: 22.5px;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 13px;
    }
    .banner-box .btns {
        margin-top: 39px;
        display: flex;
        justify-content: center;
    }
    .banner-box .btns .rampingBtn {
        width: 200px;
        height: 52px;
        font-size: 18px;
    }
    .banner-box .btns .rampingBtn.right {
        background-color: #6f726d;
        color: #fff;
        margin-left: 16px;
    }

    .center-container {
        background-color: #101010;
        color: #fff;
        padding: 100px 0;
    }
    .center-container .card-box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .center-container .card {
        flex-shrink: 0;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05),rgba(255, 255, 255, 0));
        padding: 40px;
        width: 587px;
        border-radius: 16px;
        margin-bottom: 24px;
    }
    .center-container .card .content {
        margin-bottom: 34px;
    }
    .center-container .card .content .title {
        font-size: 36px;
        line-height: 40px;
        font-weight: 700;
    }
    .center-container .card .content ul {
        margin-top: 12px;
        font-size: 20px;
        line-height: 32px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.6);
    }
    .center-container .card .content ul li {
        margin: 16px 0;
    }

    .center-container .card.full {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .center-container .card.full .content {
        margin-bottom: 0;
    }

    .center-container .btns {
        margin-top: 56px;
        display: flex;
        justify-content: center;
    }
    .center-container .btns .rampingBtn {
        height: 52px;
        font-size: 18px;
    }
    .center-container .btns .rampingBtn.left {
        background-color: #fff;
    }
    .center-container .btns .rampingBtn.right {
        background-color: unset;
        color: #fff;
        border: 1px solid #fff;
        margin-left: 16px;
    }
    .center-container .btns .rampingBtn.right span {
        font-size: 12px;
    }
}
</style>