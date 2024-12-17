export default () => {

    window._linkedin_partner_id = "4632826";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);

    (function (l) {
        if (!l) {
            window.lintrk = function (a, b) { window.lintrk.q.push([a, b]) };
            window.lintrk.q = []
        }
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript"; b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
    })(window.lintrk);
    window.addEventListener("DOMContentLoaded", () => {
        const img = document.createElement("img");
        img.height = img.width = 1;
        img.style.display = "none";
        img.src = "https://px.ads.linkedin.com/collect/?pid=4632826&fmt=gif";
        document.body.appendChild(img);
    });
}