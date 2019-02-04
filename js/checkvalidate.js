function checkName()
{
    var elem1 = document.getElementById('name').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([@-Za-z -9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('name').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        
        return false;
    }else{
        // check_year_in();
        return true;
    }
}
function checkLname()
{
    var elem1 = document.getElementById('lname').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([@-Za-z -9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('lname').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        return false;
    }else{
        // check_year_in();
        return true;
    }
}
function checktel()
{
    var elem1 = document.getElementById('tel').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([0-9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('tel').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        return false;
    }else{
        // check_year_in();
        return true;
    }
}
function checkmail()
{
    var elem1 = document.getElementById('mail').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([@-Za-z!-9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('mail').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        return false;
    }else{
        // check_year_in();
        return true;
    }
}
function checkskill()
{
    var elem1 = document.getElementById('sp').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([@-Za-z -9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('sp').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        return false;
    }else{
        // check_year_in();
        return true;
    }
}
function checktool()
{
    var elem1 = document.getElementById('tfp').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([@-Za-z -9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('tfp').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        return false;
    }else{
        // check_year_in();
        return true;
    }
}
function checkpack()
{
    var elem1 = document.getElementById('spack').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([@-Za-z -9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('spack').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        return false;
    }else{
        // check_year_in();
        return true;
    }
}
function checkexp()
{
    var elem1 = document.getElementById('exp').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([@-Za-z -9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('exp').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        return false;
    }else{
        // check_year_in();
        return true;
    }
}
function checkref()
{
    var elem1 = document.getElementById('ref').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([@-Za-z -9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('ref').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        return false;
    }else{
        // check_year_in();
        return true;
    }
}
function checku()
{
    var elem1 = document.getElementById('ei').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([@-Za-z -9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('ei').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        return false;
    }else{
        // check_year_in();
        return true;
    }
}
function checkmajor()
{
    var elem1 = document.getElementById('major').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([@-Za-z -9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('major').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        return false;
    }else{
        // check_year_in();
        return true;
    }
}
function checkminor()
{
    var elem1 = document.getElementById('minor').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([@-Za-z -9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('minor').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        return false;
    }else{
        // check_year_in();
        return true;
    }
}
function checkabout()
{
    var elem1 = document.getElementById('about').value;
    // console.log('fasfafasf')
    // console.log(elem1)
    if(!elem1.match(/^([@-Za-z -9_.])+$/i)&&!elem1=="")
    {
//                alert("\"ข้อมูลผิดพลาด\" กรุณากรอกชื่อให้ถูกต้อง");
        document.getElementById('about').value = "";
//                document.insert.fname.focus();
        // Alert_focus.render("\"ข้อมูลผิดพลาด\" กรุณากรอกข้อมูลด้วยภาษาไทย",'name');
        alert('Please enter english character only')
        return false;
    }else{
        // check_year_in();
        return true;
    }
}