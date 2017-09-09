alert("支出查詢")

var fdb = new ForerunnerDB();
var db = fdb.db("mydb");
var accoutingCollection = db.collection('accounting');

accoutingCollection.load();

function createAccountingHTMLString(date, category, item, cost) {
    return "<tr><td>" + date + "</td><td>" + category + "</td><td>" + item + "</td><td>" + cost + "</td></tr>"
};




$("#lookup").click(function() {
    $("#accountingTable").find("tr").remove();

    if ($("input[name=01pp]:checked").val() == "curMonth") {
        var date = new Date();
        var year = date.getUTCFullYear();
        var month = date.getUTCMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        var dateString = year + "-" + month + "-" + "01";
        var accountings = accoutingCollection.find({
                date: {
                    $gte: dateString
                }
            }


        );
        for (var i = 0; i < accountings.length; i++) {
            $("#accountingTable").append(createAccountingHTMLString(accountings[i].date, accountings[i].category, accountings[i].item, accountings[i].cost))


        }
        var eatCost = 0;
        var clothesCost = 0;
        var liveCost = 0;
        var travelCost = 0;
        var teachCost = 0;
        var playCost = 0;
        var othersCost = 0;


        for (var i = 0; i < accountings.length; i++) {
            if (accountings[i].category == "食物") {
                eatCost += accountings[i].cost / 1;

            } else if (accountings[i].category == "衣物") {
                clothesCost += accountings[i].cost / 1;


            } else if (accountings[i].category == "住屋") {
                liveCost += accountings[i].cost / 1;


            } else if (accountings[i].category == "交通") {
                travelCost += accountings[i].cost / 1;


            } else if (accountings[i].category == "教育") {
                teachCost += accountings[i].cost / 1;


            } else if (accountings[i].category == "娛樂") {
                playCost += accountings[i].cost / 1;


            } else if (accountings[i].category == "其他") {
                othersCost += accountings[i].cost / 1;


            } else if (accountings[i].category == "總計") {
                totalCost += accountings[i].cost / 1;


            }
        }

        var totalCost = eatCost + clothesCost + liveCost + travelCost + teachCost + playCost + othersCost;
        var eatProportion = Math.round((eatCost / totalCost) * 100) + "%"
        var clothesProportion = Math.round((clothesCost / totalCost) * 100) + "%"
        var liveProportion = Math.round((liveCost / totalCost) * 100) + "%"
        var travelProportion = Math.round((travelCost / totalCost) * 100) + "%"
        var teachProportion = Math.round((teachCost / totalCost) * 100) + "%"
        var playProportion = Math.round((playCost / totalCost) * 100) + "%"
        var OthersProportion = Math.round((othersCost / totalCost) * 100) + "%"

        $("#eatCost").text(eatCost)
        $("#eatProportion").text(eatProportion)
        $("#clothesCost").text(clothesCost)
        $("#clothesProportion").text(clothesProportion)
        $("#liveCost").text(liveCost)
        $("#liveProportion").text(liveProportion)
        $("#travelCost").text(travelCost)
        $("#travelProportion").text(travelProportion)
        $("#teachCost").text(teachCost)
        $("#teachProportion").text(teachProportion)
        $("#playCost").text(playCost)
        $("#playProportion").text(playProportion)
        $("#othersCost").text(othersCost)
        $("#OthersProportion").text(OthersProportion)
        $("#totalCost").text(totalCost)

    } else {

        var formTime = $("#formTime").val();
        var toTime = $("#toTime").val();

        var accountings = accoutingCollection.find({
                date: {
                    $gte: formTime,
                    $lte: toTime
                }
            }


        );

        for (var i = 0; i < accountings.length; i++) {
            $("#accountingTable").append(createAccountingHTMLString(accountings[i].date, accountings[i].category, accountings[i].item, accountings[i].cost))

        }
        var eatCost = 0;
        var clothesCost = 0;
        var liveCost = 0;
        var travelCost = 0;
        var teachCost = 0;
        var playCost = 0;
        var othersCost = 0;


        for (var i = 0; i < accountings.length; i++) {
            if (accountings[i].category == "食物") {
                eatCost += accountings[i].cost / 1;

            } else if (accountings[i].category == "衣物") {
                clothesCost += accountings[i].cost / 1;


            } else if (accountings[i].category == "住屋") {
                liveCost += accountings[i].cost / 1;


            } else if (accountings[i].category == "交通") {
                travelCost += accountings[i].cost / 1;


            } else if (accountings[i].category == "教育") {
                teachCost += accountings[i].cost / 1;


            } else if (accountings[i].category == "娛樂") {
                playCost += accountings[i].cost / 1;


            } else if (accountings[i].category == "其他") {
                othersCost += accountings[i].cost / 1;


            } else if (accountings[i].category == "總計") {
                totalCost += accountings[i].cost / 1;


            }
        }

        var totalCost = eatCost + clothesCost + liveCost + travelCost + teachCost + playCost + othersCost;
        var eatProportion = Math.round((eatCost / totalCost) * 100) + "%"
        var clothesProportion = Math.round((clothesCost / totalCost) * 100) + "%"
        var liveProportion = Math.round((liveCost / totalCost) * 100) + "%"
        var travelProportion = Math.round((travelCost / totalCost) * 100) + "%"
        var teachProportion = Math.round((teachCost / totalCost) * 100) + "%"
        var playProportion = Math.round((playCost / totalCost) * 100) + "%"
        var OthersProportion = Math.round((othersCost / totalCost) * 100) + "%"

        $("#eatCost").text(eatCost)
        $("#eatProportion").text(eatProportion)
        $("#clothesCost").text(clothesCost)
        $("#clothesProportion").text(clothesProportion)
        $("#liveCost").text(liveCost)
        $("#liveProportion").text(liveProportion)
        $("#travelCost").text(travelCost)
        $("#travelProportion").text(travelProportion)
        $("#teachCost").text(teachCost)
        $("#teachProportion").text(teachProportion)
        $("#playCost").text(playCost)
        $("#playProportion").text(playProportion)
        $("#othersCost").text(othersCost)
        $("#OthersProportion").text(OthersProportion)
        $("#totalCost").text(totalCost)
    }
});