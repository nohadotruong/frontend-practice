function SelectGeneral()
{
    document.getElementById("general-radio").checked = "true";
    document.getElementById("general-item").style.backgroundColor = "#e0f1e7";
    document.getElementById("support-item").style.backgroundColor = "white";
}

function SelectSupport()
{
    document.getElementById("support-radio").checked = "true";
    document.getElementById("support-item").style.backgroundColor = "#e0f1e7";
    document.getElementById("general-item").style.backgroundColor = "white";
}

function CheckSubmit()
{
    let inputValArr = new Array(4);
    for(i = 0; i < 4; i++)
    {
        inputValArr[i] = document.getElementById("input" + (i + 1)).value;
    }
    for(i = 0; i < 4; i++)
    {
        if(inputValArr[i] == "")
            document.getElementById("error" + (i + 1)).style.display = "block";
        else
            document.getElementById("error" + (i + 1)).style.display = "none";
    }
}

function CheckRadio()
{
    GeValue = document.getElementById("general-radio").checked;
    SuValue = document.getElementById("support-radio").checked;
    if(GeValue === false && SuValue === false)
        document.getElementById("error5").style.display = "block";
    else
        document.getElementById("error5").style.display = "none";
}

function CheckConsent()
{
    ConValue = document.getElementById("input6").checked;
    if(ConValue === false)
        document.getElementById("error6").style.display = "block";
    else
        document.getElementById("error6").style.display = "none";
}

function CheckForm()
{
    for(i = 0; i < 6; i++)
    {
        result = document.getElementById("error" + (i + 1)).style.display;
    }
    for(i = 0; i < 6; i++)
    {
        if(result == "block")
            {
                break;
            }
            else
            {
                document.getElementById("form-alert").style.display = "block";
            }
    }
}