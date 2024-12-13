<template>
    <div class="value-added page-container">
        <div class="banner-box">
            <div class="universal_container">
                <div class="content">
                    <div class="sub-title">Enhance your remote team's experience</div>
                    <h1 class="title">
                        With our premium offerings on
                        <br>
                        remote work spaces
                    </h1>
                    <div class="sign"></div>
                    <div class="desc">
                        From managing team productivity to leveraging in-house ability solutions, 
                        <br>
                        we offer a range of additional services to support your remote workforce.
                    </div>
                    <div class="btns">
                        <div class="rampingBtn" @click="$router.push('/contact')">Talk To Us</div>
                        <div class="rampingBtn right" @click="$router.push('/about')">About Us</div>
                    </div>
                </div>
                <img class="left-bottom" src="@/assets/images/value_added_1.png" alt="">
                <img class="right-bottom" src="@/assets/images/value_added_2.png" alt="">
            </div>
        </div>

        <div class="center-container">
            <div class="universal_container">
                <div class="support">
                    <h2 class="title">Support your remote work space</h2>
                    <div class="desc">You can add on:</div>
                    <ul>
                        <li>
                            <img src="@/assets/images/value_added_3.png" alt="">
                            <p>Office desk</p>
                        </li>
                        <li>
                            <img src="@/assets/images/value_added_4.png" alt="">
                            <p>Dedicated team office space</p>
                        </li>
                        <li>
                            <img src="@/assets/images/value_added_5.png" alt="">
                            <p>Site-to-site VPN</p>
                        </li>
                        <li>
                            <img src="@/assets/images/value_added_6.png" alt="">
                            <p>Device administration & lease</p>
                        </li>
                        <li>
                            <img src="@/assets/images/value_added_7.png" alt="">
                            <p>Employee care package</p>
                        </li>
                        <li>
                            <img src="@/assets/images/value_added_8.png" alt="">
                            <p>Premium health insurance plans</p>
                        </li>
                    </ul>
                    <div class="add-more">
                        <img class="back1" src="@/assets/images/value_added_back1.png" alt="">
                        <img class="back2" src="@/assets/images/value_added_back2.png" alt="">
                        <div class="content">
                            <div class="sub-title">Add More Value?</div>
                            <div class="sub-desc">Contact us for how our value added services can enhance your team’s
                               <br>productivity.</div>
                        </div>
                        <div class="rampingBtn" @click="$router.push('/contact')">Contact Sales</div>
                    </div>
                </div>
                <div class="utilize">
                    <h2 class="title">Utilize our internal resources of <br> legal, HR benefits, IT & security</h2>
                    <div class="desc"> Optional premium services for your team</div>
                    <ul>
                        <li class="new-card-back">
                            <img src="@/assets/images/value_added_9.png" alt="">
                            <p>Legal <br>contracts</p>
                        </li>
                        <li class="new-card-back">
                            <img src="@/assets/images/value_added_10.png" alt="">
                            <p>Employee stock <br>compensation plan</p>
                        </li>
                        <li class="new-card-back">
                            <img src="@/assets/images/value_added_11.png" alt="">
                            <p>Network <br>security</p>
                        </li>
                        <li class="new-card-back">
                            <img src="@/assets/images/value_added_12.png" alt="">
                            <p>UI <br>design</p>
                        </li>
                        <li class="full new-card-back">
                            <img src="@/assets/images/value_added_13.png" alt="">
                            <p>Cloud infrastructure solutions</p>
                        </li>
                        <li class="full new-card-back">
                            <img src="@/assets/images/value_added_14.png" alt="">
                            <p>IoT solutions</p>
                        </li>
                    </ul>
                    <div class="add-more">
                        <img class="back1" src="@/assets/images/value_added_back3.png" alt="">
                        <img class="back2" src="@/assets/images/value_added_back4.png" alt="">
                        <div class="content">
                            <div class="sub-title">Upgrade Your Experience</div>
                            <div class="sub-desc">Our value added services start from $200, We offer 
                               <br>diverse plans tailored to your needs.</div>
                        </div>
                        <div class="rampingBtn" @click="$router.push('/contact')">
                            Contact Sales
    						<img src="@/assets/images/btn_icon.png" alt="">
                        </div>
                    </div>
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
			title: 'Value Added Services - Remote Work Spaces, Legal, IT & Security | Ramping Up',
			meta: [
				{ hid: 'keywords', name: 'keywords', content: 'Remote work Spaces' }
			]
		}
	},
}
</script>

<style scoped>
@media (max-width: 600px) {
    .value-added {
        position: relative;
        z-index: 101;
        background-color: #0a0a0a;
        color: #fff;
    }
    .banner-box {
        padding-top: 32px;
        position: relative;
        text-align: center;
        height: 400px;
    }
    .banner-box .content {
        position: relative;
        z-index: 102;
    }
    .banner-box .left-bottom {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .banner-box .right-bottom {
        display: none;
    }
    .banner-box .sub-title {
        font-size: 12px;
        line-height: 14.4px;
        background-image: -webkit-linear-gradient(left, #fff, #E0FFDA 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
    }
    .banner-box .title {
        font-size: 36px;
        line-height: 45px;
        margin-top: 8px;
    }
    .banner-box .sign {
        display: none;
    }
    .banner-box .desc {
        font-size: 13px;
        line-height: 16.25px;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 8px;
    }
    .banner-box .btns {
        margin-top: 16px;
    }
    .banner-box .btns .rampingBtn {
        width: 140px;
        height: 40px;
        margin: 0 auto;
    }
    .banner-box .btns .rampingBtn.right {
        background-color: #6f726d;
        color: #fff;
        margin-top: 8px;
    }

    .center-container {
        padding: 32px 0;
        color: #fff;
    }
    .support {
        padding: 32px 24px; 
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0));
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
    }
    .support .title {
        font-size: 24px;
        line-height: 28.8px;
        background: linear-gradient(to right, rgba(0,0,0,0) 40%,#46fc2261 80%);
    }
    .support .desc {
        font-size: 20px;
        line-height: 30px;
        margin-top: 16px;
    }
    .support ul {
        margin-top: 32px;
    }
    .support ul li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        margin-top: 20px;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.1),rgba(153, 153, 153, 0.03));
        border-radius: 16px;
        font-size: 16px;
        line-height: 20px;
    }
    .support ul li img {
        width: 40px;
        height: 40px;
        margin-bottom: 20px;
    }
    .support .add-more {
        padding: 20px;
        margin-top: 32px;
        width: 100%;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.1),rgba(153, 153, 153, 0.03));
        border-radius: 16px;
        position: relative;
    }
    .support .add-more .back1 {
        position: absolute;
        left: 0;
        top: 0;
        height: 210px;
    }
    .support .add-more .back2 {
        position: absolute;
        right: 119px;
        top: 0;
        width: 210px;
    }
    .support .add-more .sub-title {
        font-size: 20px;
        line-height: 25px;
    }
    .support .add-more .sub-desc {
        margin-top: 8px;
        font-size: 14px;
        line-height: 16.8px;
        color: rgba(255, 255, 255, 0.8);
    }
    .support .add-more .rampingBtn {
        width: 167px;
        height: 40px;
        margin-top: 24px;
    }

    .utilize {
        margin-top: 32px;
    }
    .utilize .title {
        font-size: 24px;
        line-height: 28.8px;
        text-align: center;
    }
    .utilize .desc {
        font-size: 16px;
        line-height: 24px;
        color: #999;
        margin-top: 8px;
        text-align: center;
    }
    .utilize ul {
        width: 100%;
        margin-top: 32px;
    }
    .utilize br {
        display: none;
    }
    .utilize ul li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin-top: 16px;
        font-size: 14px;
        text-align: center;
        line-height: 17.5px;
        border-radius: 16px;
    }
    .utilize ul li img {
        width: 40px;
        height: 40px;
        margin-bottom: 16px;
    }
    .utilize .add-more {
        padding: 32px;
        margin-top: 24px;
        width: 100%;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.1),rgba(153, 153, 153, 0.08) 100px);
        border-radius: 16px;
        position: relative;
        overflow: hidden;
    }
    .utilize .add-more .back1 {
        position: absolute;
        left: -100px;
        bottom: -100px;
        pointer-events: none;
    }
    .utilize .add-more .back2 {
        position: absolute;
        right: -100px;
        top: -100px;
        pointer-events: none;
    }
    .utilize .add-more .sub-title {
        font-size: 24px;
        line-height: 36px;
    }
    .utilize .add-more .sub-desc {
        margin-top: 8px;
        font-size: 14px;
        line-height: 21px;
        color: rgba(255, 255, 255, 0.6);
    }
    .utilize .add-more .rampingBtn {
        width: 190px;
        background-color: #fff;
        margin-top: 40px;
    }
}
@media (min-width: 600px) {
    .value-added {
        position: relative;
        z-index: 101;
        background-color: #0a0a0a;
        color: #fff;
    }
    .banner-box {
        padding-top: 75px;
        padding-bottom: 95px;
        position: relative;
        text-align: center;
    }
    .banner-box .content {
        position: relative;
        z-index: 102;
    }
    .banner-box .left-bottom {
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .banner-box .right-bottom {
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .banner-box .sub-title {
        font-size: 32px;
        line-height: 38.5px;
        background-image: -webkit-linear-gradient(left, #fff, #E0FFDA 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
    }
    .banner-box .title {
        font-size: 50px;
        line-height: 60px;
    }
    .banner-box .sign {
        width: 70px;
        height: 4px;
        background-color: #47FC22;
        margin: 16px auto;
    }
    .banner-box .desc {
        font-size: 18px;
        line-height: 22.5px;
        color: rgba(255, 255, 255, 0.8);
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
        padding: 80px 0;
        color: #fff;
    }
    .support {
        padding: 40px; 
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0));
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 16px;
    }
    .support .title {
        font-size: 40px;
        line-height: 48px;
        margin: 0 auto;
        background: linear-gradient(to right, rgba(0,0,0,0) 150px,#47FC22 880px);
        padding-right: 20px;
    }
    .support .desc {
        font-size: 20px;
        line-height: 30px;
        margin-top: 20px;
    }
    .support ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .support ul li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        width: 360px;
        height: 176px;
        margin-top: 24px;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.1),rgba(153, 153, 153, 0.03));
        border-radius: 16px;
        font-size: 20px;
    }
    .support ul li img {
        width: 40px;
        height: 40px;
    }
    .support .add-more {
        padding: 60px;
        margin-top: 24px;
        width: 100%;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.1),rgba(153, 153, 153, 0.03));
        border-radius: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .support .add-more .back1 {
        position: absolute;
        left: 0;
        top: 0;
        height: 210px;
    }
    .support .add-more .back2 {
        position: absolute;
        right: 119px;
        top: 0;
        width: 210px;
    }
    .support .add-more .sub-title {
        font-size: 36px;
        line-height: 50px;
    }
    .support .add-more .sub-desc {
        margin-top: 16px;
        font-size: 18px;
        line-height: 28px;
        color: rgba(255, 255, 255, 0.8);
    }
    .support .add-more .rampingBtn {
        font-size: 18px;
        height: 60px;
    }

    .utilize {
        padding: 40px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 80px;
    }
    .utilize .title {
        font-size: 40px;
        line-height: 48px;
    }
    .utilize .desc {
        font-size: 16px;
        line-height: 30px;
        color: #999;
        margin-top: 8px;
    }
    .utilize ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .utilize ul li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        width: 266px;
        height: 219px;
        margin-top: 24px;
        font-size: 20px;
        text-align: center;
        line-height: 25px;
    }
    .utilize ul li img {
        width: 40px;
        height: 40px;
        margin-bottom: 24px;
    }
    .utilize ul li.full {
        width: 550px;
    }
    .utilize .add-more {
        padding: 60px;
        margin-top: 24px;
        width: 100%;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.1),rgba(153, 153, 153, 0.08) 100px);
        border-radius: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .utilize .add-more .back1 {
        position: absolute;
        left: 0;
        bottom: 0;
        pointer-events: none;
    }
    .utilize .add-more .back2 {
        position: absolute;
        right: 0;
        top: 0;
        pointer-events: none;
    }
    .utilize .add-more .sub-title {
        font-size: 36px;
        line-height: 50px;
    }
    .utilize .add-more .sub-desc {
        margin-top: 16px;
        font-size: 18px;
        line-height: 28px;
        color: rgba(255, 255, 255, 0.6);
    }
    .utilize .add-more .rampingBtn {
        font-size: 18px;
        height: 52px;
        background-color: #fff;
    }
}
</style>