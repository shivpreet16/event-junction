const getStudentById = "select * from student where stu_email=$1;"
const getFacultyById = "select * from faculty where f_email=$1;"

module.exports={
    getStudentById,
    getFacultyById
}