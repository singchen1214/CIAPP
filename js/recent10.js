alert("找尋最新十筆資料")
var fdb = new ForerunnerDB();
var db = fdb.db("mydb");
var accoutingCollection = db.collection('accounting');
accoutingCollection.load();

function createAccountingHTMLString(date, category, item, cost) {
    return "<tr><td>" + date + "</td><td>" + category + "</td><td>" + item + "</td><td>" + cost + "</td></tr>"
}

setTimeout(function() {
    var accountings = accoutingCollection.find({}, {
        $orderBy: {
            date: -1
        },
        $limit: 10
    });
    console.log(accountingTable)
    for (var i = 0; i < accountings.length; i++) {
        $("#accountingTable").append(createAccountingHTMLString(accountings[i].date, accountings[i].category, accountings[i].item, accountings[i].cost))
    }
}, 500);