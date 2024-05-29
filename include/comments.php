<?php

    function getAllCommentsForAPost($postId){
        $comments = dbQuery("
            SELECT * 
            FROM comments
            WHERE postId = $postId
        ")->fetchAll();
        return $comments;
    }
