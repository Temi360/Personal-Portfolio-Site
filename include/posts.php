<?php
   function getAllPosts(){
   $Posts = [
        1 => [
            'Id' =>1,
            'DateCreated' => '05/19/2024',
            'Title' => 'Second Summer of College',
            'Author' => 'Me',
            'Body' => 'I need to start making schedules every day because Ive been soooo lazy. Everyday
            I get home from work I just rot in my bed. I need help bro.'
        ],
        2 => [
            'Id' =>2,
            'DateCreated' => '05/20/2024',
            'Title' => 'Feeling quezy',
            'Author' => 'Me',
            'Body' => 'I need to stop watching Love Island'
        ], 
    ];

    return $Posts;
}

function getPost($PostId){
    $AllPosts = getAllPosts();
    return $AllPosts[$PostId];

}
