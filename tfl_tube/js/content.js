var mydata = {};

mydata.url = "http://cloud.tfl.gov.uk/TrackerNet/LineStatus?method=get.status&format=json&callback=?appid=f29caf68?key=eaab13200e93f44010a46e8c3c26c1c1?";

$.getJSON(mydata.url, function (data) {
    items = data.response.lines;

    $.each(items, function (index, item) {

        var name = document.createElement("td");
        var status = document.createElement("td");

        name.innerHTML = item.name;
        status.innerHTML = item.status;

        name.setAttribute('id', item.name);

        var sclass = item.status.split(",")[0].replace(/ /g, "_");
        status.setAttribute('class', sclass);

        var row = document.createElement("tr");
        row.appendChild(name);
        row.appendChild(status);

        document.getElementById('data').appendChild(row);
    });
});
