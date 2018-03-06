<?php
header('Content-type: application/json');

$valueType = $_GET['valueType'];

if(preg_match('/^[\d]+$/', $valueType)){
    $response = "Dane liczbowe";
}

else if($valueType == ""){
    $response = "Nie podano żadnej wartości";
}

else {
    $response = "Dane tekstowe";
}
echo json_encode($response);

?>