<?php
   function getAllPosts(){
   $Posts = [
        1 => [
            'Id' =>1,
            'Image' => 'summer.png',
            'Title' => 'Second Summer of College',
            'DateCreated' => '05/19/2024',
            'Author' => 'Temi Ijisesan',
            'Body' => 'I need to start making schedules every day because I\'ve been soooo lazy. Everyday
            I get home from work I just rot in my bed. I need help bro. I usually<br> use notion during the school year, but Im too lazy to do that too. 
            Like Ik imma regret not doing stuff with my life after work, but my willingness to be productive just isnt strong enough right now.'
        ],
        2 => [
            'Id' =>2,
            'Image' => 'totoro.png',
            'Title' => 'Feeling queasy',
            'DateCreated' => '05/20/2024',
            'Author' => 'Temi Ijisesan',
            'Body' => 'I need to stop watching Love Island. Like its terrible television, and I know that. But Im battling serious addiction. I cant not watch love island. 
            but, why? Whats wrong with me? My quality of life has lowered dramatically because of this and its getting concerning.'
        ], 
    ];

    return $Posts;
}

function getPost($PostId){
    $AllPosts = getAllPosts();
    return $AllPosts[$PostId];

}
