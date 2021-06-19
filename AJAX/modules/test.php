<?


$login = $_POST['data_0'];
$pass = $_POST['data_1'];



$result = [
    'login'=> $login,
    'pass'=> $pass
];




echo json_encode($result, JSON_UNESCAPED_UNICODE);