<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once ($_SERVER['DOCUMENT_ROOT'].'/avto/demo/vendor/autoload.php');
$post = (object)$_POST;
$result = [];
$data = [];

if(isset($post->lot_number)){
    if(isset($post->searchtype) && $post->searchtype == "copart"){
        $url = "https://www.copart.com/lot/".$post->lot_number;
    }
    elseif (isset($post->searchtype) && $post->searchtype == "IaaI"){
        $url = "https://www.iaai.com/ru-ru/VehicleSearch/SearchDetails?SearchStockNum=".$post->lot_number;
    }
    else{
        $result['status'] = "error";
        $result['description'] = "Невірний вибір";
    }

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
//    curl_setopt($curl, CURLOPT_HEADER, 1);

//    curl_setopt($curl, CURLOPT_USERAGENT, 'Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)');
    curl_setopt($curl, CURLOPT_USERAGENT, 'Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.7.62 Version/11.01');
    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    ));
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($curl, CURLOPT_COOKIEJAR, __DIR__.'/cookie.txt');
    curl_setopt($curl, CURLOPT_COOKIEFILE, __DIR__.'/cookie.txt');
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 1);

    if(!empty($post_params))
        curl_setopt($curl, CURLOPT_POST, 1);

    $content = curl_exec($curl);
    curl_close($curl);
//var_dump($content);
   $xml_file = fopen('test.html', 'w+');
   fwrite($xml_file, $content);
   fclose($xml_file);
    $qp = html5qp(__DIR__.'/test.html');

    var_dump($qp);

//    $doc = <<< HEREDOC
//    $content
//HEREDOC;
//
//
//    $dom = new DOMDocument;
//    $dom->loadHTML($doc);
//
//    $xml = $dom->saveXML($dom, LIBXML_DTDVALID);
//    $header = sprintf('<head>%s</head>', $xml);
//    $main = sprintf('<main>%s</main>', $xml);
////    var_dump($dom->getElementById('fullViewImg')->attributes->src);
//var_dump($header);
//var_dump($main);
//$xml = str_replace("<!DOCTYPE html>", "", $xml);
//$xml = str_replace('&#13;', '', $xml);
//$xml = str_replace('->', '/>', $xml);
//$xml = str_replace('<!', '<', $xml);
//$xml = str_replace('-', '', $xml);
//
//$xml_file = fopen('test.xml', 'w+');
//fwrite($xml_file, $xml);
//fclose($xml_file);
//    $parse_xml = <<< XML
//$xml
//XML;
//var_dump($parse_xml);
//    $data = simplexml_load_string($parse_xml);
//
//    var_dump($data);
//
//    $result['response'] = [
//        'title' => $dom->getElementsByTagName('title')[0]->nodeValue,
//        'image' => $dom->getElementsByTagName('img')[0],
//    ];

    $result['response'] = [
        'title' => "titlef",
        'image' => "image",
    ];

}
else{
    $result['status'] = "error";
    $result['description'] = "Не вказано номер лота";
}

echo json_encode($result);