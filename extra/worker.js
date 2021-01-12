funkData();

function funkData()
{
    var data = new Date();
    postMessage(data.toString());
    setTimeout(funkData,1000);
}