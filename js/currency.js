$(document).ready(() => {
    $("#changeButton").click(() => {
        $.ajax({
            method: "GET",
            url: "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD",
            dataType: "json"
        })
            .done((msg) => {
                let inputValue = parseInt(document.querySelector("#changeInput").value);
                let dollarToKrw = msg[0].basePrice * inputValue;
                if ((inputValue < 200) || (inputValue === 200)) {
                    document.querySelector("#usd").innerHTML = `${dollarToKrw} KRW`;
                }
                else if (inputValue > 200) {
                    let customsDuty = parseInt(msg[0].basePrice * inputValue * 0.13);
                    let surtax = parseInt(msg[0].basePrice * inputValue * 0.10);
                    document.querySelector("#usd").innerHTML = `과세 가격 : ${dollarToKrw} KRW` + "<br>" + `관세 : ${customsDuty} KRW` + "<br>" + `부가세 : ${surtax} KRW
                    ` + "<br>" + `관부가세 : ${customsDuty + surtax} KRW
                    ` + "<br>" + `총 지불액 : ${dollarToKrw + customsDuty + surtax} KRW
                    `;
                }
            });
    });

});