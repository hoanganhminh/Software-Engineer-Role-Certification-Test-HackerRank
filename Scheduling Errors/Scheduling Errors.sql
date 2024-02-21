/*
Enter your query here.
Please append a semicolon ";" at the end of the query
*/
SELECT DISTINCT prof.name AS "PROFESSOR.NAME", cou.name AS "COURSE.NAME"
FROM professor prof
INNER JOIN schedule sch 
ON sch.professor_id = prof.id
INNER JOIN course cou 
ON sch.course_id = cou.id
WHERE cou.department_id <> prof.department_id;