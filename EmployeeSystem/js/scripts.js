$(document).ready(function () {
    var dataSort;
    if(sessionStorage.getItem("Email"))
    {
        var session_data=sessionStorage.getItem("Email");
        $(".sessionData").html(session_data);
    }
    display_ct();
    $('#register').click(function () {

        if (validate("validation_register"))
        {
            var ids = [];
            var firstname = $('#first_name').val();
            var middlename = $('#middle_name').val();
            var lastname = $('#last_name').val();
            var email = $('#email').val();
            var password = $('#password').val();
            var cPassword = $('#password_confirmation').val();
            var roles = $('#roles').val();
            var profile = $('#image-preview').attr('src');
            var registerUser = {
                Id:getMaxId(ids),
                Firstname: firstname,
                Middlename: middlename,
                Lastname: lastname,
                Email: email,
                Password: password,
                ConfirmPassword: cPassword,
                Roles: roles,
                Profile: profile
            };
            registerData(registerUser);
            $(".validation_register").trigger("reset");
            getMaxId(ids);
        }

    });
    $('#file-upload').on('change', function()
    {
        readURL(this);
    });
    function readURL(data) {
        if (data.files && data.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#image-preview').attr('src', e.target.result);
                $('.close').show();
            }
            reader.readAsDataURL(data.files[0]);
        }
    }
    $('.close').click(function () {
        $('#image-preview').attr('src','');
        $('.close').hide();
    });
    $('#login').click(function () {
        var ids = [];
        var firstname = $('#first_name').val();
        var middlename = $('#middle_name').val();
        var lastname = $('#last_name').val();
        var emailid= $('#email_id').val();
        var password= $('#user_password').val();
        var cPassword = $('#password_confirmation').val();
        var roles = $('#roles').val();
        var profile = $('#image-preview').attr('src');
        var registerUser = {
            Id:getMaxId(ids),
            Firstname: firstname,
            Middlename: middlename,
            Lastname: lastname,
            Email: emailid,
            Password: password,
            ConfirmPassword: cPassword,
            Roles: roles,
            Profile: profile
        };
        var userDetails = JSON.parse(localStorage.getItem('data'));
        if(validate("validation_login"))
        {
            for (var i = 0; i < userDetails.users.length; i++) {
                var login_user = userDetails.users[i];
                var storedUserName = login_user.Email;
                var storedPassWord = login_user.Password;
                    if (emailid == storedUserName && password == storedPassWord) {
                        toastr.success("Successfully logged in!");
                        sessionStorage.setItem("Email",registerUser.Email);
                        var session_data=sessionStorage.getItem("Email");
                        $(".sessionData").html(session_data);
                        $(".validation_login").trigger("reset");
                        $("#logout").show();
                        return
                    }
            }
            toastr.error("Invalid email id and password!");
            return
        }

    });
    var skillarray = [];
    $('#addEmp').click(function () {

            if(validate("empValidation")){
            var id = [];
            var firstname = $("#firstname").val();
            var middlename = $("#middlename").val();
            var lastname = $("#lastname").val();
            var DOB = $("#datepicker").val();
            var gender = $("input[name='gender']:checked").val();
            var designation = $("#designation").val();
            var profile = $('#profile-preview').attr('src');
            var userrole = $("#user-role").val();
            var dept=$('#example-getting-started').multiselect().val();
            $('.chip').each(function(index,element){
                var addskill=$(element).find(".skillvalue").text();
                skillarray.push(addskill);
            });
            var DOJ = $("#dateOfJoin").val();
            var email = $("#emailid").val();
            var password = $("#newpassword").val();
            var address = $("#address").val();
            var phno = $("#phno").val();
            var summernote = $("#summernote").val();
            var country = $("#country").val();
            var state = $("#state").val();
            var city = $("#city").val();
            var zipcode = $("#zipcode").val();
            var relation = $("#toggle-event").val();
            var Employeedata= {
                Id:getMaxId(id),
                Firstname:firstname,
                Middlename:middlename,
                Lastname:lastname,
                DateOfBirth:DOB,
                Gender:gender,
                Designation:designation,
                Profile:profile,
                UserRole:userrole,
                Department:dept,
                DateOfJoin:DOJ,
                Email:email,
                Password:password,
                Address:address,
                Skill:skillarray,
                PhoneNo:phno,
                Description:summernote,
                Country:country,
                State:state,
                City:city,
                Zipcode:zipcode,
                Relationship:relation
            };
            EmpData(Employeedata);
            getMaxId(id);
            $("form").trigger("reset");
        }
    });
    $('#profile-upload').on('change', function()
    {
        readData(this);
    });
    function readData(value) {
        if (value.files && value.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#profile-preview').attr('src', e.target.result);
                $('.close-pic').show();
            }
            reader.readAsDataURL(value.files[0]);
        }
    }
    $('.close-pic').click(function () {
        $('#profile-preview').attr('src','');
        $('.close-pic').hide();
    });
    $(function() {
        $('#toggle-event').change(function() {
           if($(this).prop('checked') == true) {
               $("#toggle-event").val("" + $(this).attr("data-on"));
           }
           else {
               $("#toggle-event").val("" + $(this).attr("data-off"));
           }
        });
    })
    $("#addSkill").click(function () {
        $( ".sortable" ).append("<div class='chip'>" +
            "<span class='skillvalue'>"
            +$("#skill").val()+"" +
            "</span>" +
            "<span class='closeskill'>" +
            "&times;</span>" +
            "</div>");
        $(".closeskill").on("click",function (e) {
            $(this).parents('.chip').remove();

        });
        function removeskill(data) {
            $(this).remove(data);

        }
    });
    $("#logout").click(function () {
        if(sessionStorage.getItem("Email"))
        {
            sessionStorage.removeItem("Email");
            $("#logout").hide();
            $("#display-logout").show();
        }

    });
    $("#displayEmp").click(function () {
        var Getdata = [];
        Getdata = JSON.parse(window.localStorage.getItem("data"));
        var data = Getdata.Employee;
        function format (data) {
            // `d` is the original data object for the row
            return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
                '<tr>'+
                '<td>Department:</td>'+
                '<td>'+data.Department+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>Phone no:</td>'+
                '<td>'+data.PhoneNo+'</td>'+
                '</tr>'+
                '<tr>'+
                '<td>Zipcode:</td>'+
                '<td>'+data.Zipcode+'</td>'+
                '</tr>'+
                '</table>';
        }
        if (Getdata.Employee != null) {
            var table = $("#Empdatatable").DataTable({
                "data": Getdata.Employee,
                "columns": [
                    {
                        "className" : 'details-control',
                        "orderable" :  false,
                        "data"      :  null,
                        "defaultContent": ''
                    },
                    { "data" : "Firstname"},
                    { "data" : "Lastname"},
                    { "data" : "DateOfBirth"},
                    { "data" : "Designation"},
                    { "data" : "Email"},
                    // { "data" : "Skill"},
                    { "data" : "Country"},
                    { "data" : "Relationship"},
                    {
                        'render': function (data, type, row) {
                            // console.log(data);
                            return '<a href="#" data-key='+row.Id+' class="emp_remove"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>' +
                                   ' <a class="edit" data-toggle="modal" data-key='+row.Id+'><i class="material-icons" data-toggle="tooltip" title="Edit">&#xe3c9;</i></a>'
                        }
                    }
                ]
            });
            $('.edit').on('click', function (e) {

                $("#EmployeeModal").modal();
                $("#updateEmp").show();
                $("#addEmp").hide();
                var obj =$(this).data("key");
                removearray=JSON.parse(localStorage.getItem("data"));
                for(var i = 0;i<removearray.Employee.length;i++){
                    if(removearray.Employee[i].Id == obj){

                        $("#empid").val(removearray.Employee[i].Id);
                        $("#firstname").val(removearray.Employee[i].Firstname);
                        $("#middlename").val(removearray.Employee[i].Middlename);
                        $("#lastname").val(removearray.Employee[i].Lastname);
                        $("#datepicker").val(removearray.Employee[i].DateOfBirth);
                        var $radio = $('input:radio[name=gender]');
                        if(removearray.Employee[i].Gender === 'Female')
                        {
                            $radio.filter('[value=Female]').prop('checked', true);
                        }
                        else
                        {
                            $radio.filter('[value=Male]').prop('checked', true);
                        }
                        $("#designation").val(removearray.Employee[i].Designation);
                        $("#profile-preview").attr("src",removearray.Employee[i].Profile);
                        $("#example-getting-started").multiselect("select",removearray.Employee[i].Department);
                        $("#dateOfJoin").val(removearray.Employee[i].DateOfJoin);
                        $("#emailid").val(removearray.Employee[i].Email);
                        $("#newpassword").val(removearray.Employee[i].Password);
                        $("#address").val(removearray.Employee[i].Address);
                        for(var j=0;j<removearray.Employee[i].Skill.length;j++){
                            $( ".sortable" ).append("<div class='chip'>" +
                                "<span class='skillvalue'>" +
                                removearray.Employee[i].Skill[j]+"" +
                                "</span>" +
                                "<span class='closeskill'>" +
                                "&times;</span>" +
                                "</div>");
                            $(".closeskill").on("click",function (e) {
                                $(this).parents('.chip').remove();
                            });
                        }
                        $("#summernote").summernote("code",removearray.Employee[i].Description);
                        $("#country").val(removearray.Employee[i].Country);
                        console.log(removearray.Employee[i].State);

                        $("#state").val(removearray.Employee[i].State);
                        $("#city").val(removearray.Employee[i].City);
                        $("#phno").val(removearray.Employee[i].PhoneNo);
                        $("#zipcode").val(removearray.Employee[i].Zipcode);
                        // $("#toggle-event").val(removearray.Employee[i].Relationship);
                        var $rel = $('input:checkbox[id=toggle-event]');
                        if(removearray.Employee[i].Relationship === 'Married')
                        {
                            debugger;
                            $rel.filter('[data-on=Married]').prop('checked', true);
                        }
                        else
                        {
                            $rel.filter('[data-off=Single]').prop('checked', true);
                        }
                    }
                }
            });
            $('#Empdatatable tbody').on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = table.row( tr );

                if ( row.child.isShown() ) {

                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    row.child( format(row.data()) ).show();
                    tr.addClass('shown');
                }
            } );
            var removearray=[];
            $(".emp_remove").on("click",function () {
                var pos;
                var obj =$(this).data( "key" );
                removearray=JSON.parse(localStorage.getItem("data"));
                for(var i = 0;i<removearray.Employee.length;i++){
                    if(removearray.Employee[i].Id == obj){
                        pos=i;
                    }
                }
                removearray.Employee.splice(pos,1);
                localStorage.setItem("data",JSON.stringify(removearray));
                $('#Empdatatable').DataTable().ajax.reload();
            });
            $("#updateEmp").on("click",function () {
                if(validate("empValidation")) {
                    var empid = $("#empid").val();
                    var firstname = $("#firstname").val();
                    var middlename = $("#middlename").val();
                    var lastname = $("#lastname").val();
                    var DOB = $("#datepicker").val();
                    var gender = $("input[name='gender']:checked").val();
                    var designation = $("#designation").val();
                    var profile = $('#profile-preview').attr('src');
                    var userrole = $("#user-role").val();
                    var dept = $('#example-getting-started').multiselect().val();
                    $('.chip').each(function (index, element) {
                        var addskill = $(element).find(".skillvalue").text();
                        skillarray.push(addskill);
                    });
                    var DOJ = $("#dateOfJoin").val();
                    var email = $("#emailid").val();
                    var password = $("#newpassword").val();
                    var address = $("#address").val();
                    var phno = $("#phno").val();
                    var summernote = $("#summernote").val();
                    var country = $("#country").val();
                    var state = $("#state").val();
                    var city = $("#city").val();
                    var zipcode = $("#zipcode").val();
                    var relation = $("#toggle-event").val();
                    var Employeedata = {
                        Id: empid,
                        Firstname: firstname,
                        Middlename: middlename,
                        Lastname: lastname,
                        DateOfBirth: DOB,
                        Gender: gender,
                        Designation: designation,
                        Profile: profile,
                        UserRole: userrole,
                        Department: dept,
                        DateOfJoin: DOJ,
                        Email: email,
                        Password: password,
                        Address: address,
                        Skill: skillarray,
                        PhoneNo: phno,
                        Description: summernote,
                        Country: country,
                        State: state,
                        City: city,
                        Zipcode: zipcode,
                        Relationship: relation
                    };
                    UpdateEmplyeeData(Employeedata);
                    $("form").trigger("reset");
                }
            });
        }
    });
    $(document).ready(function() {
        $('#example-getting-started').multiselect();
    });
});
$(document).ready(function () {
    var today = new Date();
    $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy",
        endDate: "today",
        maxDate: today,
        changeMonth: true,
        changeYear: true,
    }).on('changeDate', function () {
        $(this).datepicker('hide');
    });
    $("#dateOfJoin").datepicker({
        dateFormat: "dd-mm-yy",
        endDate: "today",
        maxDate: today,
        changeMonth: true,
        changeYear: true,
    }).on('changeDate', function () {
        $(this).datepicker('hide');
    });
});
$(document).ready(function() {
    // $('#summernote').summernote();
    $('#summernote').summernote({
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']]
        ]
    });
});
var countryStateInfo = {
    "India": {
        "Assam": {
            "Dispur": ["781005"],
            "Guwahati" : ["781030", "781030"]
        },
        "Gujarat": {
            "Vadodara" : ["390011", "390020"],
            "Surat" : ["395006", "395002"]
        }
    },
    "USA": {
        "California": {
            "Los Angeles": ["90001", "90002", "90003", "90004"],
            "San Diego": ["92093", "92101"]
        },
        "Texas": {
            "Dallas": ["75201", "75202"],
            "Austin": ["73301", "73344"]
        }
    }

}
function display_c(){
    var refresh=1000;
    mytime=setTimeout('display_ct()',refresh)
}
function display_ct() {
    var x = new Date()
    document.getElementById('dateTime').innerHTML = x;
    display_c();
}
window.onload = function () {

    var countySel = document.getElementById("country");
    var stateSel = document.getElementById("state");
    var citySel = document.getElementById("city");
    var zipSel = document.getElementById("zipcode");

    for (var country in countryStateInfo) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {

        stateSel.length = 1;
        citySel.length = 1;
        zipSel.length = 1;

        if (this.selectedIndex < 1)
            return;

        for (var state in countryStateInfo[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    stateSel.onchange = function () {
        citySel.length = 1;
        zipSel.length = 1;
        if (this.selectedIndex < 1)
            return;

        for (var city in countryStateInfo[countySel.value][this.value]) {
            citySel.options[citySel.options.length] = new Option(city, city);
        }
    }
    citySel.onchange = function () {
        zipSel.length = 1;

        if (this.selectedIndex < 1)
            return;

        var zips = countryStateInfo[countySel.value][stateSel.value][this.value];
        for (var i = 0; i < zips.length; i++) {
            zipSel.options[zipSel.options.length] = new Option(zips[i], zips[i]);
        }
    }
}
$(document).ready(function () {
    $(".dropdown dt a").on('click', function() {
        $(".dropdown dd ul").slideToggle('fast');
    });

    $(".dropdown dd ul li a").on('click', function() {
        $(".dropdown dd ul").hide();
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
    });

    $('.mutliSelect input[type="checkbox"]').on('click', function() {

        var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
            title = $(this).val() + ",";

        if ($(this).is(':checked')) {
            var html = '<span title="' + title + '">' + title + '</span>';
            $('.multiSel').append(html);
            $(".hida").hide();
        } else {
            $('span[title="' + title + '"]').remove();
            var ret = $(".hida");
            $('.dropdown dt a').append(ret);

        }
    });
});



