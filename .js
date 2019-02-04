function doGet(e){
  
  var op = e.parameter.action;
//  var ss=SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1duiJZGrAchzeMIbKzbsa5pM8T2-lkfbJJtZtTE5evTk/edit#gid=0");
  var urlDB = "https://docs.google.com/spreadsheets/d/1WxOAXx3kdQCOUsGhhrYeiFNEsjt-URXEhuRuWMWb_gk/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(urlDB);
  var sheet = ss.getSheetByName("Sheet1");
  var sheet2 = ss.getSheetByName("Sheet2");

  
  if(op=="insert")
    return insert_value(e,sheet);
  
  //Make sure you are sending proper parameters 
  if(op=="read")
    return read_value(e,ss);
  
  if(op=="update")
    return update_value(e,sheet);
  
  if(op=="delete")
    return delete_value(e,sheet);
  
    
  
}

//Recieve parameter and pass it to function to handle

function insert_value(request,sheet){
 
 
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
  var git = request.parameter.git;
  var link = request.parameter.link;
  var major = request.parameter.major;
  var minor = request.parameter.minor;
  var about = request.parameter.about;
  var pic = request.parameter.pic;
  var exp = request.parameter.exp;
  var ref = request.parameter.ref;
  var token = request.parameter.token;
  var height = request.parameter.height;
  var weight = request.parameter.weight;
  var age = request.parameter.age;
  var job = request.parameter.job;
  var sal = request.parameter.sal;
  var db = request.parameter.db;
  var os = request.parameter.os;
  var cen = request.parameter.cen;
  var job_l = request.parameter.job_l;
  var swd = request.parameter.swd;
  var dop = request.parameter.dop;
  var cs = request.parameter.cs;
  var port = request.parameter.port;
  var flag=1;
  var lr= sheet.getLastRow();
  for(var i=1;i<=lr;i++){
    var id1 = sheet.getRange(i, 2).getValue();
    if(id1==id){
      flag=0;
  var result="Id already exist..";
    } }
  //add new row with recieved parameter from client
  if(flag==1){
  var d = new Date();
  var currentTime = d.toLocaleString();
    if(sp=="C++"){
      sp = "C++";
    }
  var rowData = sheet.appendRow([currentTime,id,tn,country,lname,dob,tel,fb,line,ig,aic,ca,ei,gpa,sp,tfp,spack,mail,git,link,major,minor,about,pic,exp,ref,token,height,weight,age,job,sal,db,os,cen,job_l,swd,dop,cs,port]);  
  var result="Insertion successful";
  }
     result = JSON.stringify({
    "result": result

  });  
         Logger.log(rowData);
    
  return ContentService
  .createTextOutput(request.parameter.callback + "(" + result + ")")
  .setMimeType(ContentService.MimeType.JAVASCRIPT);   
  }
  
  



function read_value(request,ss){
  
 
  var output  = ContentService.createTextOutput(),
      data    = {};
  //Note : here sheet is sheet name , don't get confuse with other operation 
      var sheet="sheet1";

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
    properties = properties.map(function(p) { return p.replace(/\s+/g, '_'); });
  }
  
  var rows = getDataRows_(ss, sheetname),
      data = [];

  for (var r = 0, l = rows.length; r < l; r++) {
    var row     = rows[r],
        record  = {};

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

function update_value(request,sheet){

var output  = ContentService.createTextOutput();
   var id = request.parameter.id;
  var flag=0;
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
  var git = request.parameter.git;
  var link = request.parameter.link;
  var major = request.parameter.major;
  var minor = request.parameter.minor;
  var about = request.parameter.about;
  var pic = request.parameter.pic;
  var exp = request.parameter.exp;
  var ref = request.parameter.ref;
  var token = request.parameter.token;
  var height = request.parameter.height;
  var weight = request.parameter.weight;
  var age = request.parameter.age;
  var job = request.parameter.job;
  var sal = request.parameter.sal;
  var db = request.parameter.db;
  var os = request.parameter.os;
  var cen = request.parameter.cen;
  var job_l = request.parameter.job_l;
  var swd = request.parameter.swd;
  var dop = request.parameter.dop;
  var cs = request.parameter.cs;
  var port = request.parameter.port;
  var lr= sheet.getLastRow();
  for(var i=1;i<=lr;i++){
    var rid = sheet.getRange(i, 2).getValue();
    if(rid==id){
      sheet.getRange(i,3).setValue(tn);
      sheet.getRange(i,4).setValue(country);
      sheet.getRange(i,5).setValue(lname);
      sheet.getRange(i,6).setValue(dob);
      sheet.getRange(i,7).setValue(tel);
      sheet.getRange(i,8).setValue(fb);
      sheet.getRange(i,9).setValue(line);
      sheet.getRange(i,10).setValue(ig);
      sheet.getRange(i,11).setValue(aic);
      sheet.getRange(i,12).setValue(ca);
      sheet.getRange(i,13).setValue(ei);
      sheet.getRange(i,14).setValue(gpa);
      sheet.getRange(i,15).setValue(sp);
      sheet.getRange(i,16).setValue(tfp);
      sheet.getRange(i,17).setValue(spack);
      sheet.getRange(i,18).setValue(mail);
      sheet.getRange(i,19).setValue(git);
      sheet.getRange(i,20).setValue(link);
      sheet.getRange(i,21).setValue(major);
      sheet.getRange(i,22).setValue(minor);
      sheet.getRange(i,23).setValue(about);
      sheet.getRange(i,24).setValue(pic);
      sheet.getRange(i,25).setValue(exp);
      sheet.getRange(i,26).setValue(ref);
      sheet.getRange(i,27).setValue(token);
      sheet.getRange(i,28).setValue(height);
      sheet.getRange(i,29).setValue(weight);
      sheet.getRange(i,30).setValue(age);
      sheet.getRange(i,31).setValue(job);
      sheet.getRange(i,32).setValue(sal);
      sheet.getRange(i,33).setValue(db);
      sheet.getRange(i,34).setValue(os);
      sheet.getRange(i,35).setValue(cen);
      sheet.getRange(i,36).setValue(job_l);
      sheet.getRange(i,37).setValue(swd);
      sheet.getRange(i,38).setValue(dop);
      sheet.getRange(i,39).setValue(cs);
      sheet.getRange(i,40).setValue(port);
      var result="value updated successfully";
      flag=1;
    }
}
  if(flag==0)
    var result="id not found";
  
   result = JSON.stringify({
    "result": result
  });  
    
  return ContentService
  .createTextOutput(request.parameter.callback + "(" + result + ")")
  .setMimeType(ContentService.MimeType.JAVASCRIPT);   
  
  
}

function insert_value(request,sheet){
 
 
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
  var git = request.parameter.git;
  var link = request.parameter.link;
  var major = request.parameter.major;
  var minor = request.parameter.minor;
  var about = request.parameter.about;
  var pic = request.parameter.pic;
  var exp = request.parameter.exp;
  var ref = request.parameter.ref;
  var token = request.parameter.token;
  var height = request.parameter.height;
  var weight = request.parameter.weight;
  var age = request.parameter.age;
  var job = request.parameter.job;
  var sal = request.parameter.sal;
  var db = request.parameter.db;
  var os = request.parameter.os;
  var cen = request.parameter.cen;
  var job_l = request.parameter.job_l;
  var swd = request.parameter.swd;
  var dop = request.parameter.dop;
  var cs = request.parameter.cs;
  var port = request.parameter.port;
  var flag=1;
  var lr= sheet.getLastRow();
  for(var i=1;i<=lr;i++){
    var id1 = sheet2.getRange(i, 2).getValue();
    if(id1==id){
      flag=0;
  var result="Id already exist..";
    } }
  //add new row with recieved parameter from client
  if(flag==1){
  var d = new Date();
  var currentTime = d.toLocaleString();
    if(sp=="C++"){
      sp = "C++";
    }
  var rowData = sheet2.appendRow([currentTime,id,tn,country,lname,dob,tel,fb,line,ig,aic,ca,ei,gpa,sp,tfp,spack,mail,git,link,major,minor,about,pic,exp,ref,token,height,weight,age,job,sal,db,os,cen,job_l,swd,dop,cs,port]);  
  var result="Insertion successful";
  }
     result = JSON.stringify({
    "result": result

  });  
         Logger.log(rowData);
    
  return ContentService
  .createTextOutput(request.parameter.callback + "(" + result + ")")
  .setMimeType(ContentService.MimeType.JAVASCRIPT);   
  }

function delete_value(request,sheet){
  
  var output  = ContentService.createTextOutput();
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
  var git = request.parameter.git;
  var link = request.parameter.link;
  var major = request.parameter.major;
  var minor = request.parameter.minor;
  var about = request.parameter.about;
  var pic = request.parameter.pic;
  var exp = request.parameter.exp;
  var ref = request.parameter.ref;
  var token = request.parameter.token;
  var height = request.parameter.height;
  var weight = request.parameter.weight;
  var age = request.parameter.age;
  var job = request.parameter.job;
  var sal = request.parameter.sal;
  var db = request.parameter.db;
  var os = request.parameter.os;
  var cen = request.parameter.cen;
  var job_l = request.parameter.job_l;
  var swd = request.parameter.swd;
  var dop = request.parameter.dop;
  var cs = request.parameter.cs;
  var port = request.parameter.port;
  var flag=0;

  
  
  var lr= sheet.getLastRow();
  for(var i=1;i<=lr;i++){
    var rid = sheet.getRange(i, 2).getValue();
    if(rid==id){
      sheet.deleteRow(i);
      var result="value deleted successfully";
      flag=1;
    }
    
  }

  if(flag==0)
    var result="id not found";
  
  
 
   result = JSON.stringify({
    "result": result
  });  
    
  return ContentService
  .createTextOutput(request.parameter.callback + "(" + result + ")")
  .setMimeType(ContentService.MimeType.JAVASCRIPT);   
  
}