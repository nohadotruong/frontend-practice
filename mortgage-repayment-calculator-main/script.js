function amountActive()
{
    document.getElementById("amount-label").style.backgroundColor = "#cfd32c";
    document.getElementById("amount-input").style.border = "1px solid #cfd32c";
    document.getElementById("amount-label").style.color = "#50595e";
}

function amountBlur()
{
    document.getElementById("amount-label").style.backgroundColor = "#e5f3fd";
    document.getElementById("amount-input").style.border = "1px solid #819096";
}

function mortgageTermActive()
{
    document.getElementById("mortgage-term-label").style.backgroundColor = "#cfd32c";
    document.getElementById("mortgage-term-input").style.border = "1px solid #cfd32c";
    document.getElementById("mortgage-term-label").style.color = "#50595e";   
}

function mortgageTermBlur()
{
    document.getElementById("mortgage-term-label").style.backgroundColor = "#e5f3fd";
    document.getElementById("mortgage-term-input").style.border = "1px solid #819096";
}

function interestRateActive()
{
    document.getElementById("interest-rate-label").style.backgroundColor = "#cfd32c";
    document.getElementById("interest-rate-input").style.border = "1px solid #cfd32c";
    document.getElementById("interest-rate-label").style.color = "#50595e";
}

function interestRateBlur()
{
    document.getElementById("interest-rate-label").style.backgroundColor = "#e5f3fd";
    document.getElementById("interest-rate-input").style.border = "1px solid #819096";
}

function selectRepayment()
{
    document.getElementById("repayment-radio").checked = "true";
    document.getElementById("repayment").style.backgroundColor = "#fafae0";
    document.getElementById("repayment").style.border = "1px solid #d4d79c";
    document.getElementById("interest-only").style.backgroundColor = "white";
    document.getElementById("interest-only").style.border = "1px solid #819096";
}

function selectInterestOnly()
{
    document.getElementById("interest-only-radio").checked = "true";
    document.getElementById("interest-only").style.backgroundColor = "#fafae0";
    document.getElementById("interest-only").style.border = "1px solid #d4d79c";
    document.getElementById("repayment").style.backgroundColor = "white";
    document.getElementById("repayment").style.border = "1px solid #819096";
}

function CheckInput()
{
    var amountValue = document.getElementById("input1").value;
    if(amountValue == "")  
    {
        document.getElementById("error1").style.display = "block";
        document.getElementById("amount-label").style.backgroundColor = "red";
        document.getElementById("amount-input").style.border = "1px solid red";
        document.getElementById("amount-label").style.color = "white";
    }
    else
    {
        document.getElementById("error1").style.display = "none";
        document.getElementById("amount-label").style.backgroundColor = "#e5f3fd";
        document.getElementById("amount-input").style.border = "1px solid #819096";
        document.getElementById("amount-label").style.color = "#50595e";
    }
    var termValue = document.getElementById("input2").value;
    if(termValue == "")  
    {
        document.getElementById("error2").style.display = "block";
        document.getElementById("mortgage-term-label").style.backgroundColor = "red";
        document.getElementById("mortgage-term-input").style.border = "1px solid red";    
        document.getElementById("mortgage-term-label").style.color = "white";    
    }
    else
    {
        document.getElementById("error2").style.display = "none";
        document.getElementById("mortgage-term-label").style.backgroundColor = "#e5f3fd";
        document.getElementById("mortgage-term-input").style.border = "1px solid #819096"; 
        document.getElementById("mortgage-term-label").style.color = "#50595e";      
    }
    var rateValue = document.getElementById("input3").value;
    if(rateValue == "")  
    {
        document.getElementById("error3").style.display = "block";  
        document.getElementById("interest-rate-label").style.backgroundColor = "red";
        document.getElementById("interest-rate-input").style.border = "1px solid red"; 
        document.getElementById("interest-rate-label").style.color = "white";     
    }
    else
    {
        document.getElementById("error3").style.display = "none";       
        document.getElementById("interest-rate-label").style.backgroundColor = "#e5f3fd";
        document.getElementById("interest-rate-input").style.border = "1px solid #819096"; 
        document.getElementById("interest-rate-label").style.color = "#50595e";
    }
    var typeValue = 0;
    var AValue = document.getElementById("repayment-radio").checked;
    var BValue = document.getElementById("interest-only-radio").checked;
    if(AValue === true)
    {
        typeValue = 1;
        document.getElementById("error4").style.display = "none";
    } 
    else if(BValue === true)
    {
        typeValue = 2;
        document.getElementById("error4").style.display = "none";
    }
    else document.getElementById("error4").style.display = "block";
}

function calculatorResults()
{
    var amountValue = document.getElementById("input1").value;
    var termValue = document.getElementById("input2").value;
    var rateValue = document.getElementById("input3").value;
    var typeValue = 0;
    var AValue = document.getElementById("repayment-radio").checked;
    var BValue = document.getElementById("interest-only-radio").checked;
    if(AValue === true)
    {
        typeValue = 1;
    } 
    else if(BValue === true)
    {
        typeValue = 2;
    }
    else typeValue = 0;
    if(amountValue != "" && termValue != "" && rateValue != "" && typeValue != 0)
    {
        document.getElementById("none-result").style.display = "none";
        document.getElementById("shown-result").style.display = "block";
        document.getElementById("money-results").innerHTML = "I don't know!";
        document.getElementById("repay-results").innerHTML = "I don't know!";
    }
    else
    {
        document.getElementById("none-result").style.display = "block";
        document.getElementById("shown-result").style.display = "none";
        document.getElementById("money-results").innerHTML = "";
        document.getElementById("repay-results").innerHTML = "";
    }
}

function clearAll()
{
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("repayment-radio").checked = "false";
    document.getElementById("interest-only-radio").checked = "false";
    document.getElementById("repayment").style.backgroundColor = "white";
    document.getElementById("repayment").style.border = "1px solid #819096";
    document.getElementById("interest-only").style.backgroundColor = "white";
    document.getElementById("interest-only").style.border = "1px solid #819096";
    document.getElementById("hidden-radio").checked = "true";
}