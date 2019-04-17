var data = {
    users:null,
    Employee:null
}
$(document).ready(function () {
    if(JSON.parse(window.localStorage.getItem("data")== null))
    {
        window.localStorage.setItem("data", JSON.stringify(data));
    }
});
function registerData(registerUser) {

    var Users = [];
    var register_old_data = [];
    register_old_data = JSON.parse(window.localStorage.getItem("data"));
    if (register_old_data.users == null)
    {
        Users.push(registerUser);
        data.users = Users;
        window.localStorage.setItem("data", JSON.stringify(data));
        toastr.success("Successfully Registered in!");
    }
    else
    {
        var Id = getMaxId(register_old_data.users[register_old_data.users.length - 1].Id);
        registerUser.Id=Id;
        register_old_data.users.push(registerUser)
        data = register_old_data;
        window.localStorage.setItem("data", JSON.stringify(data));
        toastr.success("Successfully Registered in!");
    }
}
function getMaxId(ids){
    if(ids.length == 0)
    {
        return 1;
    }
    else
    {
        return Math.max(ids) + 1;
    }
}
function EmpData(Employeedata) {
    var Emps = [];
    var emp_old_data = [];
    emp_old_data = JSON.parse(window.localStorage.getItem("data"));
    if (emp_old_data.Employee === null)
    {
        Emps.push(Employeedata);
        data.Employee = Emps;
        window.localStorage.setItem("data", JSON.stringify(data));
        toastr.success("Successfully inserted!");
    }
    else
    {
        var Id = getMaxId(emp_old_data.Employee[emp_old_data.Employee.length - 1].Id);
        Employeedata.Id=Id;
        emp_old_data.Employee.push(Employeedata);
        data = emp_old_data;
        window.localStorage.setItem("data", JSON.stringify(data));
        toastr.success("Successfully not inserted!");
    }
}
function UpdateEmplyeeData(getEmpData) {
    var emp_old_data = [];
    emp_old_data = JSON.parse(window.localStorage.getItem("data"));
    for(var i=0; i<emp_old_data.Employee.length; i++){
        if(emp_old_data.Employee[i].Id == getEmpData.Id){
            console.log("in");
            debugger;
            emp_old_data.Employee[i] = getEmpData;
        }
    }
    data = emp_old_data;
    window.localStorage.setItem("data",JSON.stringify(data));
    toastr.success("Successfully Updated!");
}
