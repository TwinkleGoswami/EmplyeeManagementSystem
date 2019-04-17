function  validate(groupname) {
    var groupName = $("." + groupname);
    var isvalid = true;
    if(groupname != undefined && groupname.length > 0)
    {
        var allcontrols = $(groupName).find(".check-valid");
        if(allcontrols.length > 0){
            $(allcontrols).each(function (index,element) {
                if($(element)[0].tagName === "INPUT"){
                    if($(element)[0].type === "text" || $(element)[0].type === "password" || $(element)[0].type === "email"){
                        if($(element).parents(".form-group").find(".errorMessage").length > 0){
                            $(element).parents(".form-group").find(".errorMessage").remove();
                        }
                        if($(element).val().trim() === "")
                        {
                            var errorMessage = $(element).attr("errorMessage");
                            var html = "<span class='errorMessage'>"+errorMessage+"</span>";
                            $(element).parents(".form-group").append(html);
                            isvalid = false;
                            $(element).on("keyup",function (value) {
                                if ($(this).parents(".form-group").find(".errorMessage").length > 0){
                                    $(this).parents(".form-group").find(".errorMessage").remove();
                                }
                                if($(this).val().trim() === "" ){
                                    var errorMessage = $(this).attr("errorMessage");
                                    var html = "<span class='errorMessage'>"+errorMessage+"</span>";
                                    $(this).parents(".form-group").append(html);
                                }

                            });
                        }
                    }
                    if($(element)[0].type === "email"){

                        if($(element).parents(".form-group").find(".errorMessage").length > 0)
                        {
                            $(element).parents(".form-group").find(".errorMessage").remove();
                        }
                        if($(element).val().trim() === "")
                        {
                            var errorMessage = $(element).attr("errorMessage");
                            var html = "<span class='errorMessage'>"+errorMessage+"</span>";
                            $(element).parents(".form-group").append(html);
                            isvalid = false;
                            $(element).on("keyup",function (value) {
                                if ($(this).parents(".form-group").find(".errorMessage").length > 0){
                                    $(this).parents(".form-group").find(".errorMessage").remove();
                                }
                                if($(this).val().trim() === "" ){
                                    var errorMessage = $(this).attr("errorMessage");
                                    var html = "<span class='errorMessage'>"+errorMessage+"</span>";
                                    $(this).parents(".form-group").append(html);
                                }
                                if($(element).val() != ""){
                                    var reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                                    var email = $(element).val();
                                    if(!(reg.test(email)))
                                    {
                                        var errorMessage = $(element).attr("email-check");
                                        var html = "<span class='errorMessage'>"+errorMessage+"</span>";
                                        $(this).parents(".form-group").append(html);
                                    }
                                }
                            });
                        }
                    }
                }
                else if ($(element)[0].tagName === "SELECT")
                {
                    if($(element)[0].value == ""){

                        if($(element).parents(".form-group").find(".errorMessage").length > 0){
                            $(element).parents(".form-group").find(".errorMessage").remove();
                        }
                        if($(element).val().trim() === "")
                        {
                            var errorMessage = $(element).attr("errorMessage");
                            var html = "<span class='errorMessage'>"+errorMessage+"</span>";
                            $(element).parents(".form-group").append(html);
                            isvalid = false;
                            $(element).on('change', function (value){
                                if ($(this).parents(".form-group").find(".errorMessage").length > 0){
                                    $(this).parents(".form-group").find(".errorMessage").remove();
                                }
                                if($(this).val().trim() === "" ){
                                    var errorMessage = $(this).attr("errorMessage");
                                    var html = "<span class='errorMessage'>"+errorMessage+"</span>";
                                    $(this).parents(".form-group").append(html);
                                }
                            });
                        }
                    }
                }
                else if($(element)[0].tagName === "TEXTAREA")
                {
                    if($(element).parents(".form-group").find(".errorMessage").length > 0){
                        $(element).parents(".form-group").find(".errorMessage").remove();
                    }
                    if($(element).val().trim() === "")
                    {
                        var errorMessage = $(element).attr("errorMessage");
                        var html = "<span class='errorMessage'>"+errorMessage+"</span>";
                        $(element).parents(".form-group").append(html);
                        isvalid = false;
                        $(element).on("keyup",function (value) {
                            if ($(this).parents(".form-group").find(".errorMessage").length > 0){
                                $(this).parents(".form-group").find(".errorMessage").remove();
                            }
                            if($(this).val().trim() === "" ){
                                var errorMessage = $(this).attr("errorMessage");
                                var html = "<span class='errorMessage'>"+errorMessage+"</span>";
                                $(this).parents(".form-group").append(html);
                            }
                        });
                    }
                }
            });
        }
    }
    return isvalid;
}
