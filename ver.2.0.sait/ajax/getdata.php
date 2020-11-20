<?php
$post = (object)$_POST;
$result = [];
$data = [];

if(isset($post->lot_number)){
    if(isset($post->searchtype) && $post->searchtype == "copart"){
        $url = "https://manage.blackcar.com.ua/api/pl/home/getcopart/?format=json&stock=".$post->lot_number;
    }
    elseif (isset($post->searchtype) && $post->searchtype == "IaaI"){
        $url = "https://manage.blackcar.com.ua/api/pl/home/getiaai/?stock=".$post->lot_number;
    }
    else{
        $result['status'] = "error";
        $result['description'] = "Невірний вибір";
    }

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);

    curl_setopt($curl, CURLOPT_USERAGENT, 'Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.7.62 Version/11.01');

    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 1);

    if(!empty($post_params))
        curl_setopt($curl, CURLOPT_POST, 1);

    $content = curl_exec($curl);
    curl_close($curl);

    $fg = fopen("test.json", 'w+');
    fwrite($fg, $content);
    fclose($fg);

    $content = json_decode($content);
//    var_dump($content);



    $result['response'] = [
        'origin' => $post->searchtype,
        'title' => $content->Name,
        'image' => $content->Images[0],
        'VIN' => $content->Vin,
        'year' => $content->Year,
        'location' => $content->Location,
        'engine' => $content->Engine,
        'fuel' => $content->Fuel,
    ];

}
else{
    $result['status'] = "error";
    $result['description'] = "Не вказано номер лота";
}

echo json_encode($result);