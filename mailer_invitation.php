<?php require($_SERVER['DOCUMENT_ROOT']."/lib/phpmailer/PHPMailerAutoload.php");?>
<?php
header('Content-Type: text/html; charset=utf-8');

$mail = new PHPMailer;
$mail->CharSet = "utf-8";
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$tn = "";
$name = "";
$lname = "";
$job = "";
$aa = isset($_POST['ttn']) ? $_POST['ttn'] : '';
$bb = isset($_POST['nname']) ? $_POST['nname'] : '';
$cc = isset($_POST['llname']) ? $_POST['llname'] : '';
$dd = isset($_POST['cur_job']) ? $_POST['cur_job'] : '';
    $tn = $aa;
    $name =$bb;
    $lname =$cc;
    $job = $dd;
$mail_r = "anusorn.thavornporn@gmail.com";

$data_in = "";
$address_en = "333 Lao Peng Nguan Tower 1,16th Floor, Soi Choei phuang, Vibhavadee-Rangsit Rd., Chomphon, Chatuchak, Bangkok 10900(Thailand)";
$sub_add = "333 Lao Peng Nguan Tower 1,";
$sub_add2 = "16th Floor,";
$sub_add3 = "Soi Choei phuang,";
$sub_add4 = "Vibhavadee-Rangsit Rd.,";
$sub_add5 = "Chomphon, Chatuchak, Bangkok 10900(Thailand)";
$name_manager = "";
$tel_manager = "02-2723228";
$mail_manager = "";


$gmail_username = "appecs.ecs@gmail.com"; // gmail ที่ใช้ส่ง
$gmail_password = "ecs12345"; // รหัสผ่าน gmail
// ตั้งค่าอนุญาตการใช้งานได้ที่นี่ https://myaccount.google.com/lesssecureapps?pli=1


$sender = "Admin@ecs"; // ชื่อผู้ส่ง
$email_sender = "noreply@mail.com"; // เมล์ผู้ส่ง 
$email_receiver = $mail_r; // เมล์ผู้รับ ***

$subject = "ํInvitation to Interview"; // หัวข้อเมล์


$mail->Username = $gmail_username;
$mail->Password = $gmail_password;
$mail->setFrom($email_sender, $sender);
$mail->addAddress($email_receiver);
$mail->Subject = $subject;

$email_content = "
<!DOCTYPE html>
<html>
	<head>
		<meta charset=utf-8'/>
	</head>
    <body>
    <h3>Subject: $subject<h3><br>
    

    Dear $tn $name $lname,<br><br>
    
    As a result of your application for the position of $job,<br> I would like to invite you to attend an interview on $data_in AM<br> at our office in $address_en.<br>
    
    You will have an interview with the department manager, $name_manager.<br> The interview will last about 45 minutes.<br> Please bring three references as well as a copy of your driver's license to the interview.<br>
    
    If the date or time of the interview is inconvenient, please contact me by<br> phone $tel_manager or email ($mail_manager) to arrange another<br> appointment. We look forward to seeing you.<br>
    
    Best regards,<br>
    
    $name_manager<br>
    _______<br>
    
    $name_manager<br>
    Administrative Director<br>
    Randall & Associates<br>
    $sub_add $sub_add2<br>
    $sub_add3 $sub_add4<br>
    $sub_add5<br>
    $tel_manager<br>
    $mail_manager<br>
	</body>
</html>
";

//  ถ้ามี email ผู้รับ
if($email_receiver){
	$mail->msgHTML($email_content);


	if (!$mail->send()) {  // สั่งให้ส่ง email

		// กรณีส่ง email ไม่สำเร็จ
		echo "<h3 class='text-center'>ระบบมีปัญหา กรุณาลองใหม่อีกครั้ง</h3>";
		echo $mail->ErrorInfo; // ข้อความ รายละเอียดการ error
	}else{
		// กรณีส่ง email สำเร็จ
        // echo "ระบบได้ส่งข้อความไปเรียบร้อย";
        echo '<script language="javascript">';
        echo 'alert("Send mail successfully")';
        echo '</script>';
        $yourURL="show.html";
        echo ("<script>location.href='$yourURL'</script>");
	}	 
}



?>