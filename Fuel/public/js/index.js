// function getQuota()
//         {  
//             console.log("Hello I am here!");
//             let state="TX",locationFactor,rateHistoryFactor,gallonsRequestedFactor;
//             let request=1;
//             const currentPrice=1.50,companyProfitFactor=0.1;
//             if(state=='TX')
//                 locationFactor=0.02;
//             else
//                 locationFactor=0.04;
//             if(request===1)
//                 rateHistoryFactor=0.01;
//             else
//                 rateHistoryFactor=0;
//             if(document.getElementById("Gallons").value>1000)
//                 gallonsRequestedFactor=0.02;
//             else
//                 gallonsRequestedFactor=0.03;
//             let margin=currentPrice*(locationFactor-rateHistoryFactor+gallonsRequestedFactor+companyProfitFactor);
//             let suggestedPrice=margin+currentPrice
//             document.getElementById("suggestedprice").value=suggestedPrice;
//             document.getElementById("total").value=suggestedPrice*document.getElementById("Gallons").value;    
//         } 
// getQuota();
$(document).ready(function() {
    let state="TX",locationFactor,rateHistoryFactor,gallonsRequestedFactor;
            let request=1;
            const currentPrice=1.50,companyProfitFactor=0.1;
            if(state=='TX')
                locationFactor=0.02;
            else
                locationFactor=0.04;
            if(request===1)
                rateHistoryFactor=0.01;
            else
                rateHistoryFactor=0;
            if($("#Gallons").val>1000)
                gallonsRequestedFactor=0.02;
            else
                gallonsRequestedFactor=0.03;
            let margin=currentPrice*(locationFactor-rateHistoryFactor+gallonsRequestedFactor+companyProfitFactor);
            let suggestedPrice=margin+currentPrice;
    $('#getquota').click(function() {
            $("#suggestedprice").val=suggestedPrice;
            $("#total").val=suggestedPrice*$("#Gallons").val;   
    });
});