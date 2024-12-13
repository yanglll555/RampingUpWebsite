<template>
    <div class="invoice-process page-container gradient-bottom">
        <div class="universal_container">
            <div class="title">INVOICE PROCESS</div>
            <ul>
                <li class="first-level">
                    We follow a 2-step invoicing process for each month's payment
                </li>
                <li class="second-level">
                    First Invoice (Funding Invoice)
                </li>
                <li class="third-level">
                    Billed at the beginning of each month, no later than the first week
                </li>
                <li class="third-level">
                    Includes the total employee compensation and Ramping Up management fees
                </li>
                <li class="third-level">
                    Used to facilitate salary payments to your employees
                </li>
                <li class="third-level">
                    Does not include any spreadsheets with detailed calculations
                </li>
                <li class="third-level">
                    Must be paid by due date stated on invoice, or payroll will be withheld for the month until payment is made
                </li>

                <li class="second-level">
                    Second Invoice (Reconciliation Invoice)
                </li>
                <li class="third-level">
                    Billed at the end of each month
                </li>
                <li class="third-level">
                    Accounts for differences between the first and second invoice, which may include (but are not limited to):
                </li>
                <li class="fourth-level">
                    Expenses incurred
                </li>
                <li class="fourth-level">
                    Adjustments to salary, bonuses and commissions
                </li>
                <li class="fourth-level">
                    Adjustments to deposits
                </li>
                <li class="fourth-level">
                    FX rates changes
                </li>
                <li class="fourth-level">
                    Any other charges which are to be paid to the employee
                </li>
                <li class="third-level">
                    Intended as the final invoice of the payroll period
                </li>
                <li class="third-level">
                    Includes spreadsheets with detailed calculations
                </li>
                <p>
                    You are required to pay the net differential amount between the first and second invoice if applicable. If there is a net payable to you, a credit note will be issued, which will be offset against your next invoice.
                </p>
            </ul>
        </div>
    </div>
</template>

<style scoped>
@media (max-width: 600px) {
    .invoice-process {
        background-color: #101010;
        padding: 32px 0;
        color: #fff;
    }
    .invoice-process .title {
        font-size: 36px;
        line-height: 45px;
        letter-spacing: 2px;
        font-weight: 700;
        position: relative;
    }
    .invoice-process .title::after {
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
        border-radius: 16px;
        background-color: #101010;
    }
    .universal_container ul p {
        font-size: 14px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 0.6);
        margin: 8px 0;
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
        color: rgba(255, 255, 255);
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
    li.fourth-level {
        font-size: 14px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 0.6);
        margin: 8px 0;
        padding-left: 102px;
        position: relative;
    }
    li.fourth-level::before {
        content: '';
        position: absolute;
        left: 76px;
        top: 8px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #47FC22;
    }
    li.fourth-level::after {
        content: '';
        position: absolute;
        left: 79px;
        top: 11px;
        width: 6px;
        height: 6px;
        background-color: #47FC22;
        border-radius: 50%;
    }
}
@media (min-width: 600px) {
    .invoice-process {
        background-color: #101010;
        padding: 60px 0;
        color: #fff;
    }
    .invoice-process .universal_container {
        padding-top: 78px;
    }
    .invoice-process .title {
        font-size: 50px;
        letter-spacing: 2px;
        font-weight: 700;
        text-align: center;
        position: relative;
    }
    .invoice-process .title::after {
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
        border-radius: 16px;
        background-color: #101010;
    }
    .universal_container ul p {
        font-size: 14px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 0.6);
        margin: 8px 0;
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
        color: rgba(255, 255, 255);
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
    li.fourth-level {
        font-size: 14px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 0.6);
        margin: 8px 0;
        padding-left: 102px;
        position: relative;
    }
    li.fourth-level::before {
        content: '';
        position: absolute;
        left: 76px;
        top: 8px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #47FC22;
    }
    li.fourth-level::after {
        content: '';
        position: absolute;
        left: 79px;
        top: 11px;
        width: 6px;
        height: 6px;
        background-color: #47FC22;
        border-radius: 50%;
    }
}
</style>