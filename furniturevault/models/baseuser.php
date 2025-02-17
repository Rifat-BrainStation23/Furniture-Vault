<?php

require_once('dbconnectiontrait1.php');

abstract class baseuser {

    use dbconnection1;

    const BASE_URL = "http://localhost/";
    const BASE_FOLDER = "/pro10/";
    protected $address;
    protected $city;
    protected $state;
    protected $country;
    protected $phonenumber;
    protected $fullname;
 

    public function __construct() {
        
    }

    public function __set($name, $value) {
        $method = "set$name";
        if (!method_exists($this, $method)) {
            throw new Exception("set method not found for  $name");
        }
       
        $this->$method($value);
    }

    public function __get($name) {
        $method = "get$name";
        if (!method_exists($this, $method)) {
            throw new Exception("get method for $name not found");
        }
        return $this->$method();
    }
    protected function setaddress($address) {
        if ($address != NULL) {
            $reg = "/^[a-z0-9A-Z]{2,70}/";
            if (!preg_match($reg, $address)) {
                throw new Exception("Invlaid/Missing address");
            }
        }
        $address= strtolower($address);
        $this->address = $address;
    }

    protected function getaddress() {
        return $this->address;
    }
    protected function setcity($city) {
        if ($city != NULL) {
            $reg = "/[a-z]{2,50}/";
            if (!preg_match($reg, $city)) {
                throw new Exception("INvlaid/Missing City");
            }
        }
         $city= strtolower($city);
        $this->city = $city;
    }

    protected function getcity() {
        return $this->city;
    }

    protected function setstate($state) {
        if ($state != NULL) {
            $reg = "/[a-z]{2,50}/";
            if (!preg_match($reg, $state)) {
                throw new Exception("INvlaid/Missing State");
            }
        }
                 $state= strtolower($state);

        $this->state = $state;
    }

    protected function getstate() {
        return $this->state;
    }
    

    protected function setcountry($country) {
        if ($country != NULL) {
            $reg = "/[a-z]{2,50}/";
            if (!preg_match($reg, $country)) {
                throw new Exception("INvlaid/Missing Country");
            }
        }
                 $country= strtolower($country);

        $this->country = $country;
    }

    protected function getcountry() {
        return $this->country;
    }
    protected function setfullname($fullname) {
        if ($fullname != NULL) {
            $reg = "/[a-z]{2,50}/";
            if (!preg_match($reg, $fullname)) {
                throw new Exception("INvlaid/Missing name");
            }
        }
          
        $this->fullname = $fullname;
    }

    protected function getfullname() {
        return $this->fullname;
    }

    protected function setphonenumber($phonenumber) {
        $reg = "/^([0-9][\-]*){10,15}/";
        if (!preg_match($reg, $phonenumber)) {
            throw new Exception("INvlaid/Missing phonenumber");
        }
        $this->phonenumber=$phonenumber;
    }

    protected function getphonenumber() {
        return $this->phonenumber;
    }



}

?>