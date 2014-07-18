var mydata = {};

mydata.url = "http://cloud.tfl.gov.uk/TrackerNet/LineStatus";
$.ajax({
    type: "GET",
    url: mydata.url,
    cross-domain: true,
    dataType: "xml",
    success: xmlParser
   });

function xmlParser(xml){
  //find every Line and print the status
  $(xml).find("Line Status").each(function()
  {
      (this).find("Line").each(function(){
      $("#data").append("<tr><td>" + $(this).attr("Name") + "<td/>");
      });
      (this).find("Status").each(function(){
      $("#data").append("<td>" + $(this).attr("Description") + "<td/></tr>");
      });
  });
};

