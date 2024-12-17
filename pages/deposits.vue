<template>
    <div class="deposits page-container gradient-bottom">
        <div class="universal_container">
            <div class="title">DEPOSITS</div>
            <ul>
                <li class="first-level">
                    Severance Deposit
                </li>
                <li class="second-level">
                    At the time of hiring, for each employee, we request a deposit to cover anticipated statutory severance costs. The deposit must be paid before each new employee is brought onboard.
                </li>
                <li class="second-level">
                    We ask for the severance deposit in accordance with statutory labor laws. The deposit amount is calculated as N*Employee Monthly Salary+1*Employee Monthly Salary, where:
                </li>
                <li class="third-level">
                    N is the number of years of employment.
                </li>
                <li class="third-level">
                    For any value of N less than 1, N=1 is used for calculations.
                </li>
                <li class="third-level">
                    The deposit amount is adjusted when employee salary changes and when N value changes based on the employee's length of employment.
                </li>
                <li class="second-level">
                    The deposit will be used to settle any statutory off-boarding costs if applicable, and the net value will be returned within 30 days of end of employment via credit note, or upon request deposited via bank transfer to your account.
                </li>

                <li class="first-level">Onboarding Stipend</li>
                <li class="second-level">
                    For day-to-day operating expenses, we require advanced deposits to cover anticipated expenses of your employees' day to day needs. The onboarding stipend is used to cover costs such as:
                </li>
                <li class="third-level">
                    Purchases: New employee equipment purchases, such as ad-hoc office supplies.
                </li>
                <li class="third-level">
                    Travel: Employee travel costs.
                </li>
                <li class="third-level">
                    Discretionary: Your local team leader's discretionary spending (if applicable)
                </li>
                <li class="second-level">
                    We ask for the onboarding stipend to cover your daily company spending needs, and will use it to offset any incurred expenses you owe over each new invoice period.
                </li>
                <li class="first-level">Deposit Schedule Summary</li>
                <table>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Amount</th>
                            <th>Occurrence</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Severance Deposit</td>
                            <td>N*Employee Monthly Salary+1*Employee Monthly Salary (See calculation under Severance Deposit)</td>
                            <td>One-time, at each new hire onboarding; adjusted when employee salary changes and when N value changes based on the employee's length of employment.</td>
                        </tr>
                        <tr>
                            <td>Onboarding Stipend</td>
                            <td>USD $2000 per new employee</td>
                            <td>One-time, at each new hire onboarding.</td>
                        </tr>
                    </tbody>
                </table>

                <div class="h5-custom-table">
                    <div class="row">
                        <div class="left-col">
                            Service
                        </div>
                        <div class="right-col">
                            Severance Deposit
                        </div>
                    </div>
                    <div class="row">
                        <div class="left-col">
                            Amount
                        </div>
                        <div class="right-col">
                            N*Employee Monthly Salary+1*Employee Monthly Salary (See calculation under Severance Deposit)
                        </div>
                    </div>
                    <div class="row">
                        <div class="left-col">
                            Occurrence
                        </div>
                        <div class="right-col">
                            One-time, at each new hire onboarding; adjusted when employee salary changes and when N value changes based on the employee's length of employment.
                        </div>
                    </div>
                    <div class="row"></div>
                    <div class="row">
                        <div class="left-col">
                            Service
                        </div>
                        <div class="right-col">
                            Onboarding Stipend
                        </div>
                    </div>
                    <div class="row">
                        <div class="left-col">
                            Amount
                        </div>
                        <div class="right-col">
                            USD $2000 per new employee
                        </div>
                    </div>
                    <div class="row">
                        <div class="left-col">
                            Occurrence
                        </div>
                        <div class="right-col">
                            One-time, at each new hire onboarding.
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 600px) {
    .deposits {
        background-color: #101010;
        padding: 32px 0;
        color: #fff;
    }
    .deposits .title {
        font-size: 36px;
        line-height: 26.4px;
        letter-spacing: 2px;
        font-weight: 700;
        position: relative;
    }
    .deposits .title::after {
        content: '';
        position: absolute;
        bottom: -24px;
        left: 0;
        width: 70px;
        height: 4px;
        background-color: #47FC22;
    }
    .universal_container ul {
        padding: 20px;
        background-color: #101010;
        border-radius: 16px;
    }

    table {
        display: none;
    }

    .h5-custom-table .row {
        padding: 8px 0;
        font-size: 14px;
        line-height: 22.4px;
        display: flex;
        align-items: flex-start;
    }

    .h5-custom-table .row .left-col {
        width: 100px;
        flex-shrink: 0;
        color: #fff;
    }

    .h5-custom-table .row .right-col {
        flex: 1;
        color: #999;
    }

    li.first-level {
        margin-top: 44px;
        margin-bottom: 12px;
        font-size: 24px;
        line-height: 26.4px;
        font-weight: 700;
        padding-left: 14px;
        position: relative;
    }
    li.first-level::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 26px;
        background-color: #47FC22;
    }
    li.second-level {
        font-size: 14px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 0.6);
        margin: 8px 0;
        padding-left: 34px;
        position: relative;
    }
    li.second-level::before {
        content: '';
        position: absolute;
        left: 8px;
        top: 8px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #47FC22;
    }
    li.third-level {
        font-size: 14px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 0.6);
        margin: 8px 0;
        padding-left: 68px;
        position: relative;
    }
    li.third-level::before {
        content: '';
        position: absolute;
        left: 42px;
        top: 8px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #47FC22;
    }
}
@media (min-width: 600px) {
    .deposits {
        background-color: #101010;
        padding: 60px 0;
        color: #fff;
    }
    .deposits .universal_container {
        padding-top: 78px;
    }
    .deposits .title {
        font-size: 50px;
        letter-spacing: 2px;
        font-weight: 700;
        text-align: center;
        position: relative;
    }
    .deposits .title::after {
        content: '';
        position: absolute;
        bottom: -24px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 70px;
        height: 4px;
        background-color: #47FC22;
    }
    .universal_container ul {
        margin-top: 14px;
        padding: 40px;
        padding-top: 0;
        background-color: #101010;
        border-radius: 16px;
    }

    .h5-custom-table {
        display: none;
    }

    table th,td {
        text-align: left;
        padding: 20px;
        font-size: 14px;
        line-height: 22.4px;
    }
    table th {
        font-weight: 500;
    }
    table td {
        color: #999;
    }
    table tbody tr {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    table td:nth-child(1),th:nth-child(1) {
        width: 240px;
    }
    table td:nth-child(2),th:nth-child(2) {
        width: 440px;
    }

    li.first-level {
        font-size: 32px;
        line-height: 35.2px;
        font-weight: 700;
        margin-top: 100px;
        margin-bottom: 32px;
        padding-left: 14px;
        position: relative;
    }
    li.first-level::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        background-color: #47FC22;
    }
    li.second-level {
        font-size: 14px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 0.6);
        margin: 8px 0;
        padding-left: 34px;
        position: relative;
    }
    li.second-level::before {
        content: '';
        position: absolute;
        left: 8px;
        top: 8px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #47FC22;
    }
    li.third-level {
        font-size: 14px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 0.6);
        margin: 8px 0;
        padding-left: 68px;
        position: relative;
    }
    li.third-level::before {
        content: '';
        position: absolute;
        left: 42px;
        top: 8px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #47FC22;
    }
}
</style>