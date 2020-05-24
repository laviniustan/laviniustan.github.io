<?php

if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $mail=$_POST['mail'];
    $subject=$_POST['subject'];
    $text=$_POST['message'];


    $to='laviniu.stan@gmail.com';
    $subject='Subject: '$subject;
    $from="From: "$mail;
    $message='Name: '.$name. '\n'."Subject: ". ".\n\n".$text;

    
    mail($to,  $subject, $from,$message );
    // header("Location: index.html?mailsend");
}

?>