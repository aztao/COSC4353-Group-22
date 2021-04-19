$(document).ready(function(){
    $(function () {
        $("#savebutton").prop('disabled',true);
        $('#password, #reenter').on('keyup', function () {
        if ($('#password').val() == $('#reenter').val()) {
            $("#savebutton").prop('disabled', false);
            return true;
        } else 
            $("#savebutton").prop('disabled',true);
            return false;
        });
    });
});