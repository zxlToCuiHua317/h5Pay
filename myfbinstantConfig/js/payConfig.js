const payConfig = {
    //點數卡
    PointCard: function () {
        let IngameItems = {
            PaymentType: "INGAME",
            PaymentTypeDesc: "實體卡",
            ItemList: [{
                    ItemCode: "LPSDK30",
                    ItemCodeDesc: "LP_SDK30元",
                    TradePointType: 2,
                    Amount: 30,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSDK50",
                    ItemCodeDesc: "LP_SDK50元",
                    TradePointType: 2,
                    Amount: 50,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSDK90",
                    ItemCodeDesc: "LP_SDK90元",
                    TradePointType: 2,
                    Amount: 90,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSDK150",
                    ItemCodeDesc: "LP_SDK150元",
                    TradePointType: 2,
                    Amount: 150,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSDK300",
                    ItemCodeDesc: "LP_SDK300元",
                    TradePointType: 2,
                    Amount: 300,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSDK350",
                    ItemCodeDesc: "LP_SDK350元",
                    TradePointType: 2,
                    Amount: 350,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSDK400",
                    ItemCodeDesc: "LP_SDK400元",
                    TradePointType: 2,
                    Amount: 400,
                    Currency: "TWD"
                }, {
                    ItemCode: "LPSDK450",
                    ItemCodeDesc: "LP_SDK450元",
                    TradePointType: 2,
                    Amount: 450,
                    Currency: "TWD"
                }, {
                    ItemCode: "LPSDK500",
                    ItemCodeDesc: "LP_SDK500元",
                    TradePointType: 2,
                    Amount: 500,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSDK750",
                    ItemCodeDesc: "LP_SDK750元",
                    TradePointType: 2,
                    Amount: 750,
                    Currency: "TWD"
                }, {
                    ItemCode: "LPSDK1000",
                    ItemCodeDesc: "LP_SDK1000元",
                    TradePointType: 2,
                    Amount: 1000,
                    Currency: "TWD"
                }, {
                    ItemCode: "LPSDK1150",
                    ItemCodeDesc: "LP_SDK1150元",
                    TradePointType: 2,
                    Amount: 1150,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSDK1490",
                    ItemCodeDesc: "LP_SDK1490元",
                    TradePointType: 2,
                    Amount: 1490,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSDK2000",
                    ItemCodeDesc: "LP_SDK2000元",
                    TradePointType: 2,
                    Amount: 2000,
                    Currency: "TWD"
                }, {
                    ItemCode: "LPSDK3000",
                    ItemCodeDesc: "LP_SDK3000元",
                    TradePointType: 2,
                    Amount: 3000,
                    Currency: "TWD"
                }, {
                    ItemCode: "LPSDK5000",
                    ItemCodeDesc: "LP_SDK5000元",
                    TradePointType: 2,
                    Amount: 5000,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSDK10000",
                    ItemCodeDesc: "LP_SDK10000元",
                    TradePointType: 2,
                    Amount: 10000,
                    Currency: "TWD"
                },
            ]
        }
        return IngameItems
    },
    //MyCard會員扣點
    MyCard: function () {
        let MemberItems = {
            PaymentType: "COSTPOINT",
            PaymentTypeDesc: "MyCard會員扣點",
            ItemList: [{
                    ItemCode: "SPS0491508",
                    ItemCodeDesc: "MyCard點數(LP_SDK)",
                    TradePointType: "1",
                    Amount: "50",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0491508",
                    ItemCodeDesc: "MyCard點數(LP_SDK)",
                    TradePointType: "1",
                    Amount: "150",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0491508",
                    ItemCodeDesc: "MyCard點數(LP_SDK)",
                    TradePointType: "1",
                    Amount: "300",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0491508",
                    ItemCodeDesc: "MyCard點數(LP_SDK)",
                    TradePointType: "1",
                    Amount: "500",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0491508",
                    ItemCodeDesc: "MyCard點數(LP_SDK)",
                    TradePointType: "1",
                    Amount: "1000",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0491508",
                    ItemCodeDesc: "MyCard點數(LP_SDK)",
                    TradePointType: "1",
                    Amount: "1500",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0491508",
                    ItemCodeDesc: "MyCard點數(LP_SDK)",
                    TradePointType: "1",
                    Amount: "2000",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0491508",
                    ItemCodeDesc: "MyCard點數(LP_SDK)",
                    TradePointType: "1",
                    Amount: "3000",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0491508",
                    ItemCodeDesc: "MyCard點數(LP_SDK)",
                    TradePointType: "1",
                    Amount: "5000",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0491508",
                    ItemCodeDesc: "MyCard點數(LP_SDK)",
                    TradePointType: "1",
                    Amount: "10000",
                    Currency: "TWD"
                }
            ]
        }
        return MemberItems
    },
    //銀行
    bankDitch: function () {
        let bank = [{
                PaymentType: "HA0008",
                PaymentTypeDesc: "玉山銀行",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508775",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508775",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508775",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508775",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508775",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508775",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508775",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508775",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508775",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508775",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HA0010",
                PaymentTypeDesc: "台新銀行",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508782",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508782",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508782",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508782",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508782",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508782",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508782",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508782",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508782",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508782",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HA0019",
                PaymentTypeDesc: "第一銀行",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508776",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508776",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508776",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508776",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508776",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508776",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508776",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508776",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508776",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508776",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HA0001",
                PaymentTypeDesc: "國泰世華",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508772",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508772",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508772",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508772",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508772",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508772",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508772",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508772",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508772",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508772",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HA0006",
                PaymentTypeDesc: "華南銀行",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508777",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508777",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508777",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508777",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508777",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508777",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508777",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508777",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508777",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508777",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HA0016",
                PaymentTypeDesc: "上海銀行",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508780",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508780",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508780",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508780",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508780",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508780",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508780",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508780",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508780",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508780",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HA0017",
                PaymentTypeDesc: "台灣銀行",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508783",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508783",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508783",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508783",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508783",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508783",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508783",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508783",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508783",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508783",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HA0014",
                PaymentTypeDesc: "土地銀行",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508778",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508778",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508778",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508778",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508778",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508778",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508778",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508778",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508778",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508778",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HA0015",
                PaymentTypeDesc: "新光銀行",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508781",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508781",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508781",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508781",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508781",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508781",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508781",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508781",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508781",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508781",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HA0007",
                PaymentTypeDesc: "中國信託",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508774",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "20",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508774",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508774",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508774",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508774",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508774",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508774",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508774",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508774",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508774",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "FA035",
                PaymentTypeDesc: "彰化銀行",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508773",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508773",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508773",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508773",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508773",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508773",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508773",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508773",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508773",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508773",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "FA036",
                PaymentTypeDesc: "兆豐銀行",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508785",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508785",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508785",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508785",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508785",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508785",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508785",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508785",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508785",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508785",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HF0001",
                PaymentTypeDesc: "中華郵政",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508779",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508779",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508779",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508779",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508779",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508779",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508779",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508779",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508779",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508779",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "99",
                PaymentTypeDesc: "合作金庫",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508786",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508786",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508786",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508786",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508786",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508786",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508786",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508786",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508786",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508786",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HA0013",
                PaymentTypeDesc: "台北富邦",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508784",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508784",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508784",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508784",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508784",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508784",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508784",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508784",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508784",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508784",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HA0018",
                PaymentTypeDesc: "日盛銀行",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0508787",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508787",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508787",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508787",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508787",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508787",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508787",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508787",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508787",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508787",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            }
        ]
        return bank;
    },
    //手機/市話
    phoneDitch: function () {
        let phone = [{
                PaymentType: "FS0018",
                PaymentTypeDesc: "亞太電信",
                PaymentGroup: "area2",
                PaymentGroupDesc: "行動電話",
                ItemList: [{
                        ItemCode: "SPS0347902",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347902",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347902",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347902",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347902",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347902",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347902",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347902",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347902",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HE0001",
                PaymentTypeDesc: "台灣大哥大電信",
                PaymentGroup: "area2",
                PaymentGroupDesc: "行動電話",
                ItemList: [{
                        ItemCode: "SPS0347901",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347901",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347901",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347901",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347901",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347901",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347901",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347901",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347901",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HE0004",
                PaymentTypeDesc: "中華電信行動電話帳單",
                PaymentGroup: "area2",
                PaymentGroupDesc: "行動電話",
                ItemList: [{
                        ItemCode: "SPS0347900",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347900",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347900",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347900",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347900",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347900",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347900",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347900",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347900",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HE0021",
                PaymentTypeDesc: "台灣之星",
                PaymentGroup: "area2",
                PaymentGroupDesc: "行動電話",
                ItemList: [{
                        ItemCode: "SPS0347904",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347904",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347904",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347904",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347904",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347904",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347904",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347904",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347904",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HE0037",
                PaymentTypeDesc: "遠傳電信",
                PaymentGroup: "area2",
                PaymentGroupDesc: "行動電話",
                ItemList: [{
                        ItemCode: "SPS0347909",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347909",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347909",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347909",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347909",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347909",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347909",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347909",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0347909",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    }
                ]
            }
        ]

        return phone;
    },
    //信用卡
    creditCardDitch: function () {
        let creditCard = [{
                PaymentType: "HC0004",
                PaymentTypeDesc: "信用卡(台灣地區3D驗證)",
                PaymentGroup: "area3",
                PaymentGroupDesc: "信用卡",
                ItemList: [{
                        ItemCode: "SPS0410160",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0410160",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0410160",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0410160",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0410160",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0410160",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0410160",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "F3",
                PaymentTypeDesc: "香港信用卡VISA(3D驗證)",
                PaymentGroup: "area22",
                PaymentGroupDesc: "香港地區支付",
                ItemList: [{
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "350",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "400",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "450",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "1150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0511629",
                        ItemCodeDesc: "MyCard點數(LP_SDK)",
                        TradePointType: "1",
                        Amount: "30000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "FA04",
                PaymentTypeDesc: "中國信託信用卡紅利兌換",
                PaymentGroup: "area12",
                PaymentGroupDesc: "紅利抵扣",
                ItemList: [{
                        ItemCode: "SPS0508789",
                        ItemCodeDesc: "MyCard點數(LP_SDK50元)",
                        TradePointType: "2",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0508790",
                        ItemCodeDesc: "MyCard點數(LP_SDK150元)",
                        TradePointType: "2",
                        Amount: "150",
                        Currency: "TWD"
                    }
                ]
            }
        ]

        return creditCard
    }

}