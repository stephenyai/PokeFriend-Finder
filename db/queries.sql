SELECT question_id, friend_id, t2friend_id, answer_difference FROM 
(SELECT *, (answer-t2answer) AS answer_difference FROM
(SELECT *
FROM scores s1
LEFT JOIN (SELECT question_id AS t2question_id, friend_id AS t2friend_id, answer AS t2answer
FROM scores s2) t2
ON t2question_id = s1.question_id) t3) t4;