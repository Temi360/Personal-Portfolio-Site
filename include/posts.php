<?php
   function getAllPosts(){
   $Posts = [
        1 => [
            'Id' =>1,
            'Image' => 'summer.jpg',
            'Title' => 'Second summer in college',
            'DateCreated' => '05/19/2024',
            'Author' => 'Temi Ijisesan',
            'Preview'
            'Body' => 'I need to start making schedules every day because I\'ve been soooo lazy. Everyday
            I get home from work I just rot in my bed. I need help bro. I usually use notion during the school year, but I\'m too lazy to do that too. 
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
        3 => [
            'Id' =>3,
            'Image' => 'painting.jpg',
            'Title' => 'A desire to paint',
            'DateCreated' => '05/21/2024',
            'Author' => 'Temi Ijisesan',
            'Body' => 'I feel a strong desire to paint, but for some reason I never do. I\'m not sure whether it\'s because I\'m to scared to paint or I\'m too lazy, but these days I find myself doing 
            what I genuinly enjoy less and less. it\'s a shame because painting is the one thing in life that I\'m supposed to be good at. But these days I feel like I don\'t even care anymore.'
        ], 
        4 => [
            'Id' =>4,
            'Image' => 'phase.jpg',
            'Title' => 'Is Studio Ghibli a Phase?',
            'DateCreated' => '05/21/2024',
            'Author' => 'Temi Ijisesan',
            'Body' => 'Maybe the only reason I like studio ghibli now is because everybody else liked studio ghibli. It\'s aesthetic, for sure, but do I actually like it <strong>that</strong> much? I mean I think I do. Watching films like <i>Ponyo</i> and <i>My Neighbor Totoro</i>
            definitely give me a dopamine rush. I guess it\'s just one of those things to think about.'
        ], 
        5 => [
            'Id' =>5,
            'Image' => 'kind.jpg',
            'Title' => 'Being Kinder',
            'DateCreated' => '05/21/2024',
            'Author' => 'Temi Ijisesan',
            'Body' => 'I think I\'m starting to realize that all the people who preach being kind to yourself will help you be kind to others are right. In the last couple of months I\'m starting to become more aware of how the way I speak to myself influences how I view other people. As much as I
            like to say that I am critical of myself for a good reason, the truth is I don\'t know how to be anything but critical. I really struggle to pu tmy life into perspective, and acknowledge when some things in life are actually good.'
        ], 
         6=> [
            'Id' =>6,
            'Image' => 'tooMuch.jpg',
            'Title' => 'TOO MANY POSTS TODAY',
            'DateCreated' => '05/21/2024',
            'Author' => 'Temi Ijisesan',
            'Body' => 'I know all these posts are kind of fake, but 4 in a day is a lil insane. Who blogs that much anyway? It\'s high time I put a stop to this. Someone might think I\'m weird or something because no one blogs this much!'
        ], 
    ];

    return $Posts;
}

function getPost($PostId){
    $AllPosts = getAllPosts();
    return $AllPosts[$PostId];

}
