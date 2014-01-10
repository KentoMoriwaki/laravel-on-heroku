<?php

return array(

    'default' => 'sqlite',

    'connections' => array(
        'sqlite' => array(
            'driver' => 'sqlite',
            'database' => app_path('/database/local.sqlite'),
            'prefix' => '',
        )
    )

);