<?php

if(isset($_POST['submit'])){
    $name=$_POST['name']
    $mail=$_POST['mail']
    $subject=$_POST['subject']
    $text=$_POST['message']


    $to='laviniu.stan@gmail.com';
    $subject='Format Submission';
    $message='Name: '.$name. '\n'.'Mail: '.$mail. "\n"."Subject: ".$subject."\n\n".$text;

    if(mail($to, $subject, $message )){
        echo'<h1>Sent Successfully ! Thank you :)</h1>';
    }else{
        echo"Something went Wrong!";


}

?>