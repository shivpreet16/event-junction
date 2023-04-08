const getStudentById = "select * from student where stu_email=$1;"
const getFacultyById = "select * from faculty where f_email=$1;"
const getDate = "select extract(day from date) as date, extract(month from date) as month, extract(year from date) as year from test;"

module.exports={
    getStudentById,
    getFacultyById,
    getDate
}