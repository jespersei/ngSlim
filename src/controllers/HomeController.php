<?php

namespace Controllers;
use Controllers\Base\BaseController;

class HomeController extends BaseController
{
	public function sendContactForm($request, $response)
	{
		
		$token = $this->getAttr($request,'token');
		$data = $this->getAttr($request,'data');
		$mailSuccess = false;

		$this->mailer->setFrom('no-reply@lightyearssolutions.com', 'Buzz LightYear');
		$this->mailer->addAddress('perseus.magbutay@gmail.com', 'Seiper');     // Add a recipient
		$this->mailer->addAddress('nenjotsu@gmail.com', 'Nejotsu Gi');     // Add a recipient
		//$this->mailer->addAddress('ellen@example.com');               // Name is optional
		//$this->mailer->addReplyTo('info@example.com', 'Information');
		//$this->mailer->addCC('cc@example.com');
		//$this->mailer->addBCC('bcc@example.com');

		//$this->mailer->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
		//$this->mailer->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
		$this->mailer->isHTML(true);                                  // Set ethis->mailer format to HTML

		$msgBody = "";
		$msgBody .= "A message has been sent from our Site's Contact Form: <br/> <br/>"; 
		$msgBody .= "<br/><b>Subject</b>: ". $data['title']; 
		$msgBody .= "<br/><b>From</b>: ". $data['name'] . '--' . $data['email']; 
		$msgBody .= "<br/><b>IP</b>: ". $data['ip']; 
		$msgBody .= "<br/><b>Content</b>: ". $data['body']; 
		$msgBody .= "<br/><br/><b>Contact Number</b>: ". $data['contact_number']; 

		$this->mailer->Subject = isset($data['title']) ?  $data['title'] : "No Subject from ".$data['ip'];
		$this->mailer->Body    = $msgBody;
		$this->mailer->AltBody = isset($data['body']) ?  $data['body'] : "No Content from ".$data['ip'];

		if($this->mailer->send()) {
		    $mailSuccess = true;
		}else{
			$mailSuccess = $this->mailer->ErrorInfo;
		}

		return $this->createResponse($response, true, ['msg' => 'Contact Form Sent!', 'token' => $token, 'data' =>$data, 'mail_success' => $mailSuccess]);
	}

}