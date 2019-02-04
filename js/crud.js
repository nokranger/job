function doGet(e) {

  var op = e.parameter.action;
  var ssurl = "https://docs.google.com/spreadsheets/d/1duiJZGrAchzeMIbKzbsa5pM8T2-lkfbJJtZtTE5evTk/edit#gid=0";
  var sese = "https://docs.google.com/spreadsheets/d/1piaSWDRBb-cT7kyiYCGKl6iz2TzfGtEt6c4RLI2nGSc/edit#gid=0";
  var ssss = "https://docs.google.com/spreadsheets/d/1PgNlvnkO15AXrIG0TSFeTEFADUdsBBjEI56tcbsaaxY/edit#gid=0";
  var urlss = "https://docs.google.com/spreadsheets/d/1pBzX7m3EQm3tvFBSRMLKQOVZxR5jFQkMt0oq21WnxKY/edit#gid=0";
  //  var ss=SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1duiJZGrAchzeMIbKzbsa5pM8T2-lkfbJJtZtTE5evTk/edit#gid=0");
  var ss = SpreadsheetApp.openByUrl(urlss);
  var sheet = ss.getSheetByName("Sheet1");


  if (op == "insert")
    return insert_value(e, sheet);

  //Make sure you are sending proper parameters 
  if (op == "read")
    return read_value(e, ss);

  if (op == "update")
    return update_value(e, sheet);

  if (op == "delete")
    return delete_value(e, sheet);



}

//Recieve parameter and pass it to function to handle




function insert_value(request, sheet) {


  var id = request.parameter.id;
  var tn = request.parameter.tn;
  var country = request.parameter.name;
  var lname = request.parameter.lname;
  var dob = request.parameter.dob;
  var tel = request.parameter.tel;
  var fb = request.parameter.fb;
  var line = request.parameter.line;
  var ig = request.parameter.ig;
  var aic = request.parameter.aic;
  var ca = request.parameter.ca;
  var ei = request.parameter.ei;
  var gpa = request.parameter.gpa;
  var sp = request.parameter.sp;
  var tfp = request.parameter.tfp;
  var spack = request.parameter.spack;
  var mail = request.parameter.mail;

  var flag = 1;
  var lr = sheet.getLastRow();
  for (var i = 1; i <= lr; i++) {
    var id1 = sheet.getRange(i, 2).getValue();
    if (id1 == id) {
      flag = 0;
      var result = "Id already exist..";
    }
  }
  //add new row with recieved parameter from client
  if (flag == 1) {
    var d = new Date();
    var currentTime = d.toLocaleString();
    var rowData = sheet.appendRow([currentTime, id, tn, country, lname, dob, tel, fb, line, ig, aic, ca, ei, gpa, sp, tfp, spack, mail]);
    var result = "Insertion successful";
  }
  result = JSON.stringify({
    "result": result

  });
  Logger.log(rowData);

  return ContentService
    .createTextOutput(request.parameter.callback + "(" + result + ")")
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}





function read_value(request, ss) {


  var output = ContentService.createTextOutput(),
    data = {};
  //Note : here sheet is sheet name , don't get confuse with other operation 
  var sheet = "sheet1";

  data.records = readData_(ss, sheet);

  var callback = request.parameters.callback;

  if (callback === undefined) {
    output.setContent(JSON.stringify(data));
  } else {
    output.setContent(callback + "(" + JSON.stringify(data) + ")");
  }
  output.setMimeType(ContentService.MimeType.JAVASCRIPT);

  return output;
}


function readData_(ss, sheetname, properties) {

  if (typeof properties == "undefined") {
    properties = getHeaderRow_(ss, sheetname);
    properties = properties.map(function (p) { return p.replace(/\s+/g, '_'); });
  }

  var rows = getDataRows_(ss, sheetname),
    data = [];

  for (var r = 0, l = rows.length; r < l; r++) {
    var row = rows[r],
      record = {};

    for (var p in properties) {
      record[properties[p]] = row[p];
    }

    data.push(record);

  }
  return data;
}



function getDataRows_(ss, sheetname) {
  var sh = ss.getSheetByName(sheetname);

  return sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
}


function getHeaderRow_(ss, sheetname) {
  var sh = ss.getSheetByName(sheetname);

  return sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
}


//update function

function update_value(request, sheet) {

  var output = ContentService.createTextOutput();
  var id = request.parameter.id;
  var flag = 0;
  var tn = request.parameter.tn;
  var country = request.parameter.name;
  var lname = request.parameter.lname;
  var dob = request.parameter.dob;
  var tel = request.parameter.tel;
  var fb = request.parameter.fb;
  var line = request.parameter.line;
  var ig = request.parameter.ig;
  var aic = request.parameter.aic;
  var ca = request.parameter.ca;
  var ei = request.parameter.ei;
  var gpa = request.parameter.gpa;
  var sp = request.parameter.sp;
  var tfp = request.parameter.tfp;
  var spack = request.parameter.spack;
  var mail = request.parameter.mail;
  var lr = sheet.getLastRow();
  for (var i = 1; i <= lr; i++) {
    var rid = sheet.getRange(i, 2).getValue();
    if (rid == id) {
      sheet.getRange(i, 3).setValue(tn);
      sheet.getRange(i, 4).setValue(country);
      sheet.getRange(i, 5).setValue(lname);
      sheet.getRange(i, 6).setValue(dob);
      sheet.getRange(i, 7).setValue(tel);
      sheet.getRange(i, 8).setValue(fb);
      sheet.getRange(i, 9).setValue(line);
      sheet.getRange(i, 10).setValue(ig);
      sheet.getRange(i, 11).setValue(aic);
      sheet.getRange(i, 12).setValue(ca);
      sheet.getRange(i, 13).setValue(ei);
      sheet.getRange(i, 14).setValue(gpa);
      sheet.getRange(i, 15).setValue(sp);
      sheet.getRange(i, 16).setValue(tfp);
      sheet.getRange(i, 17).setValue(spack);
      sheet.getRange(i, 18).setValue(mail);
      var result = "value updated successfully";
      flag = 1;
    }
  }
  if (flag == 0)
    var result = "id not found";

  result = JSON.stringify({
    "result": result
  });

  return ContentService
    .createTextOutput(request.parameter.callback + "(" + result + ")")
    .setMimeType(ContentService.MimeType.JAVASCRIPT);


}




function delete_value(request, sheet) {

  var output = ContentService.createTextOutput();
  var id = request.parameter.id;
  var tn = request.parameter.tn;
  var country = request.parameter.name;
  var lname = request.parameter.lname;
  var dob = request.parameter.dob;
  var tel = request.parameter.tel;
  var fb = request.parameter.fb;
  var line = request.parameter.line;
  var ig = request.parameter.ig;
  var aic = request.parameter.aic;
  var ca = request.parameter.ca;
  var ei = request.parameter.ei;
  var gpa = request.parameter.gpa;
  var sp = request.parameter.sp;
  var tfp = request.parameter.tfp;
  var spack = request.parameter.spack;
  var mail = request.parameter.mail;
  var flag = 0;



  var lr = sheet.getLastRow();
  for (var i = 1; i <= lr; i++) {
    var rid = sheet.getRange(i, 2).getValue();
    if (rid == id) {
      sheet.deleteRow(i);
      var result = "value deleted successfully";
      flag = 1;
    }

  }

  if (flag == 0)
    var result = "id not found";



  result = JSON.stringify({
    "result": result
  });

  return ContentService
    .createTextOutput(request.parameter.callback + "(" + result + ")")
    .setMimeType(ContentService.MimeType.JAVASCRIPT);



}