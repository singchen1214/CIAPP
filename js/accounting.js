
alert("記錄你想要的東西吧！")

var fdb = new ForerunnerDB();
var db = fdb.db("mydb");
var accoutingCollection = db.collection('accounting');

accoutingCollection.load();

$("#submit").click(function() {
    var date = $("#date").val();
    var category = $("#category").val();
    var item = $("#item").val();
    var cost = $("#cost").val();

    accoutingCollection.insert({
        date: date,
        category: category,
        item: item,
        cost: cost,

    });
    accoutingCollection.save();
alert("儲存成功")

    $("#date").val("");
    $("#category").val("");
    $("#item").val("");
    $("#cost").val("");
});