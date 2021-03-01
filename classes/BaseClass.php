<?php


class BaseClass
{
    protected  $f3;

    public $siteURL;

    public function __construct()
    {
        $this->f3 = Base::instance();

        $this->siteURL = $this->f3->get('site_url');

    }

    public function afterroute($f3){
        echo View::instance()->render('layout.htm');
    }

    public function sendAPIRequest(string $url, array $data ){

        $userName = "Aarkay Enterprises272607";
        $password = "yahrdbsntv";
        $header = [
            'Authorization: Basic '. base64_encode($userName.':'.$password),
            'Content-Type: application/x-www-form-urlencoded'
        ];

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);


// execute!
        $response = curl_exec($ch);

        return $response;

// close the connection, release resources used
        curl_close($ch);

// do anything you want with your response
//        var_dump($response);
    }


}