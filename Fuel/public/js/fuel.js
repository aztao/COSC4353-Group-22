$(document).ready(function(){
    $(function () {
        $('#getquota').attr('disabled', true);
        $('#submitquota').attr('disabled', true);
        $('input.checkboth').change(function () {
            if ($('#DelDate').val() != '' && $('#Gallons').val() != '' ) {
                $('#getquota').attr('disabled', false);
                $('#submitquota').attr('disabled',false);
            } else {
                $('#getquota').attr('disabled', true);
                $('#submitquota').attr('disabled', true);
            }
        });
    });
    var State = JSON.parse($('#userState').text());
    var request=Number(JSON.parse($('#userRequest').text()));
    $('#userState').remove();
    $('#userRequest').remove();
    var locationFactor,rateHistoryFactor,gallonsRequestedFactor;
    const currentPrice=1.50,companyProfitFactor=0.1; 
     if(State==='Texas')
            locationFactor=0.02;
    else
            locationFactor=0.04;
    if(request===1)
        {
            rateHistoryFactor=0.01;
        }
    else
        {
            rateHistoryFactor=0;
        }
   $("#getquota").on('click',function(){
        if($("#Gallons").val()>1000)
            gallonsRequestedFactor=0.02;
        else
            gallonsRequestedFactor=0.03;
        var margin=currentPrice*(locationFactor-rateHistoryFactor+gallonsRequestedFactor+companyProfitFactor);
        var suggestedPrice=margin+currentPrice;
        $("#Price").val(suggestedPrice);
        $("#Total").val(suggestedPrice*($("#Gallons").val()));
   });
});