
<?php

$errors = [];

//$fileName = $_FILES['img']['name'];
//$fileSize = $_FILES['img']['size'];
//$fileTnp = $_FILES['img']['tmp_name'];

$text = $_POST['text'];
$img = $_POST['img'];

//if ($fileSize > 3145728) {
//    $errors[] = 'Размер НЕ более 3 мб';
//}
//
//$nameFile = explode('.', $fileName);
//$checkArray = ['jpg', 'jpeg', 'png', 'svg'];
//$check = in_array(end($nameFile), $checkArray);
//if ($check != 1){
//    // $errors[] = 'Не тот тип фаила';
//}
//



$aray = [
    $text,
    $img,
];





echo json_encode($aray, JSON_UNESCAPED_UNICODE);

