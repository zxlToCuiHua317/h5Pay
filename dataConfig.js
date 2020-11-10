const payConfig = {
    //點數卡
    PointCard: function () {
        let IngameItems = {
            PaymentType: "INGAME",
            PaymentTypeDesc: "實體卡",
            ItemList: [{
                    ItemCode: "LPSTORE30",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: "30",
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSTORE50",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 50,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSTORE90",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 90,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSTORE150",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 150,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSTORE300",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 300,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSTORE350",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 350,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSTORE400",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 400,
                    Currency: "TWD"
                }, {
                    ItemCode: "LPSTORE450",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 450,
                    Currency: "TWD"
                }, {
                    ItemCode: "LPSTORE500",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 500,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSTORE750",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 750,
                    Currency: "TWD"
                }, {
                    ItemCode: "LPSTORE1000",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 1000,
                    Currency: "TWD"
                }, {
                    ItemCode: "LPSTORE1150",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 1150,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSTORE1490",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 1490,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSTORE2000",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 2000,
                    Currency: "TWD"
                }, {
                    ItemCode: "LPSTORE3000",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 3000,
                    Currency: "TWD"
                }, {
                    ItemCode: "LPSTORE5000",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
                    Amount: 5000,
                    Currency: "TWD"
                },
                {
                    ItemCode: "LPSTORE10000",
                    ItemCodeDesc: "SDKSTORE30元",
                    TradePointType: "2",
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
                    ItemCode: "SPS0530449",
                    ItemCodeDesc: "MyCard點數(SDKSTORE)",
                    TradePointType: "1",
                    Amount: "30",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0530449",
                    ItemCodeDesc: "MyCard點數(SDKSTORE)",
                    TradePointType: "1",
                    Amount: "150",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0530449",
                    ItemCodeDesc: "MyCard點數(SDKSTORE)",
                    TradePointType: "1",
                    Amount: "300",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0530449",
                    ItemCodeDesc: "MyCard點數(SDKSTORE)",
                    TradePointType: "1",
                    Amount: "500",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0530449",
                    ItemCodeDesc: "MyCard點數(SDKSTORE)",
                    TradePointType: "1",
                    Amount: "1000",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0530449",
                    ItemCodeDesc: "MyCard點數(SDKSTORE)",
                    TradePointType: "1",
                    Amount: "1500",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0530449",
                    ItemCodeDesc: "MyCard點數(SDKSTORE)",
                    TradePointType: "1",
                    Amount: "2000",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0530449",
                    ItemCodeDesc: "MyCard點數(SDKSTORE)",
                    TradePointType: "1",
                    Amount: "3000",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0530449",
                    ItemCodeDesc: "MyCard點數(SDKSTORE)",
                    TradePointType: "1",
                    Amount: "5000",
                    Currency: "TWD"
                },
                {
                    ItemCode: "SPS0530449",
                    ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                PaymentTypeDesc: "玉山銀行WebATM",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0530420",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530420",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530420",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530420",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530420",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530420",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530420",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530420",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530420",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530420",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "HA0010",
                PaymentTypeDesc: "台新銀行WebATM",
                PaymentGroup: "area5",
                PaymentGroupDesc: "ATM/銀行轉帳",
                ItemList: [{
                        ItemCode: "SPS0530418",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530418",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530418",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530418",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530418",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530418",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530418",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530418",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530418",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530418",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530423",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530423",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530423",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530423",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530423",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530423",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530423",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530423",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530423",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530423",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530427",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530427",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530427",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530427",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530427",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530427",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530427",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530427",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530427",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530427",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530424",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530424",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530424",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530424",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530424",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530424",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530424",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530424",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530424",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530424",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530412",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530412",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530412",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530412",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530412",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530412",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530412",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530412",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530412",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530412",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530419",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530419",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530419",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530419",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530419",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530419",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530419",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530419",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530419",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530419",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530413",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530413",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530413",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530413",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530413",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530413",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530413",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530413",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530413",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530413",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530425",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530425",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530425",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530425",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530425",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530425",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530425",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530425",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530425",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530425",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530414",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530414",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530414",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530414",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530414",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530414",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530414",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530414",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530414",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530414",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530426",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530426",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530426",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530426",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530426",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530426",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530426",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530426",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530426",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530426",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530421",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530421",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530421",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530421",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530421",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530421",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530421",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530421",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530421",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530421",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530415",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530415",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530415",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530415",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530415",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530415",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530415",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530415",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530415",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530415",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530422",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530422",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530422",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530422",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530422",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530422",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530422",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530422",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530422",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530422",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530417",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530417",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530417",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530417",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530417",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530417",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530417",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530417",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530417",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530417",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530416",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530416",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530416",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530416",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530416",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530416",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530416",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530416",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530416",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "5000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530416",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530410",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530410",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530410",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530410",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530410",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530410",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530410",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530410",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530410",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530407",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530407",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530407",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530407",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530407",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530407",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530407",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530407",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530407",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530404",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530404",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530404",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530404",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530404",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530404",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530404",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530404",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530404",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530411",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530411",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530411",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530411",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530411",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530411",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530411",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530411",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530411",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530409",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530409",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530409",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530409",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530409",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530409",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530409",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530409",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530409",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530429",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530429",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530429",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530429",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530429",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530429",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530429",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
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
                        ItemCode: "SPS0530445",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530445",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530445",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530445",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "350",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530445",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "400",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530445",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "450",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530445",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530445",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530445",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530445",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530445",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530445",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "F4",
                PaymentTypeDesc: "信用卡(香港地區 MasterCard 3D驗證)",
                PaymentGroup: "area22",
                PaymentGroupDesc: "香港地區支付",
                ItemList: [{
                        ItemCode: "SPS0530446",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530446",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530446",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530446",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "350",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530446",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "400",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530446",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "450",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530446",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530446",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530446",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530446",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "2000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530446",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "3000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530446",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    }
                ]
            },
            {
                PaymentType: "F7",
                PaymentTypeDesc: "八達通",
                PaymentGroup: "area22",
                PaymentGroupDesc: "香港地區支付",
                ItemList: [{
                        ItemCode: "SPS0530448",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530448",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530448",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "300",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530448",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "350",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530448",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "400",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530448",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "450",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530448",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "500",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530448",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530448",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "1150",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530448",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "10000",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530448",
                        ItemCodeDesc: "MyCard點數(SDKSTORE)",
                        TradePointType: "1",
                        Amount: "20000",
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
                        ItemCode: "SPS0530443",
                        ItemCodeDesc: "MyCard點數(SDKSTORE150元)",
                        TradePointType: "2",
                        Amount: "50",
                        Currency: "TWD"
                    },
                    {
                        ItemCode: "SPS0530443",
                        ItemCodeDesc: "MyCard點數(SDKSTORE150元)",
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