var Companies = [
    // Companies, who are closer to the center of the radar have less fundingAmnt
    // Match percentage shown using colors, closer to red - better match
        { name:"asdasd", description:"asdasd - lowefubsdjh ashjdgfvyhq", category: "Payments", fundingAmnt: 6, match: 98 },
        { name:"egerger", description:"egerger - lowefubsdjh ashjdgfvyhq", category: "Payments", fundingAmnt: 2, match: 87 },
        { name:"trehgrth", description:"trehgrth - lowefubsdjh ashjdgfvyhq", category: "Crypto", fundingAmnt: 7, match: 86 },
        { name:"sdf", description:"sdf - lowefubsdjh ashjdgfvyhq", category: "Asset management", fundingAmnt: 10, match: 67},
        { name:"uliku", description:"uliku - lowefubsdjh ashjdgfvyhq", category: "Funding", fundingAmnt: 10, match: 67},
        { name:"poqjwdj", description:"poqjwdj - lowefubsdjh ashjdgfvyhq", category: "Banking", fundingAmnt: 14, match: 40 }
    ];

    $(function () {
        $("#polarChartContainer").dxPolarChart({
            commonSeriesSettings: {
                argumentField: "category"
            },
            palette: 'Soft Pastel',
            legend: { visible: false },
            dataSource: Companies,
            series: {
                valueField: "fundingAmnt",
                name: "Startups",
                color: "#ba4d51"
                },
            title: 'Matching Startups',
            tooltip: {
                enabled: true,
                customizeTooltip: function (e) {
                    return { text: e.originalValue + ' M USD' }
                }
            }
        });
    });
