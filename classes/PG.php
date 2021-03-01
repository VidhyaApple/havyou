<?php


class PG extends  BaseClass
{

    public function show(){
        //$this->f3->set('include','paymentform.html');
    }

    public function getPG(){

            $data = $_REQUEST;

            if ( ! $data['gateway'] ) return;

            $url = $this->f3->get('gateway_paytm');
            if ( $data['gateway'] == 'paytm' ) $url = $this->f3->get('gateway_paytm');

            //agentID|amount|mode|email|mobile|orderId|callback
 
            $data['Callback'] = $this->siteURL."/pg/handle";
            $data['AgentId'] = $this->f3->get('agentId');
            $data['OrderId'] = rand();

            $secureHashData = [$this->f3->get('agentId'),$data['Amount'],$data['Mode'],$data['EmailId'],$data['Mobile'],$data['OrderId'],$data['Callback']];
            $data['SecureHash'] = hash_hmac('sha1', implode("|",$secureHashData),$this->f3->get('secret_key'));

           $result =  $this->sendAPIRequest($url,$data);
           echo $result;

    }

    public function handleResponse(){
        var_dump($_REQUEST);
    }

}