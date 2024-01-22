<?php 
    $stringList = file_get_contents('./json/discList.json');
    header('Content-Type: application/json');
    echo $stringList;





?>