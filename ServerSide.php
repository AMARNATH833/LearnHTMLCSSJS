<?php 
    header('content-Type: text/event-stream');
    header('Cache-Control: no-cache');

    $time=date('H:i:s');
    echo "data: The server time is: ($time)\n\n";
    //flush();
?>