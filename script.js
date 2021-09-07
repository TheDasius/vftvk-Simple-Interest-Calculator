/*
function compute()
{
    if (isNaN(principal))
	{
		alert("Please enter a number for principal.");
		document.getElementById("principal").focus();
		return false;
	}	
	//rate = getRate();
	year = getYear();
	if (isNaN(year))
	{
		alert("Please select the number of years.");
		document.getElementById("yearsSelect).focus();
		return false;
	}
	payout = principal* rate * year;
	summaryText = 
	"If you desposit $(principal),\n \
	at an interest rate of #(rate).\n \
	You will receive an amount of $(payout),\n \
	in the year $(getFullYear() + year)";
	
	document.getElementById("rateSummary").innerHTML = summaryText;
}
*/
    
Function savePrincipal()
{
	principal = document.getElementById("principal").value;
}
	
function getRate()
{
	rate = document.getElementById("rateRange").value;
	//return rate;
}


function setRateText()
{
	document.getElementById("rateText").innerHTML = getRate();
}

function formPrep()
{
	setRateText();
	document.getElementById("yearsSelect").value = 1;
}

function getYear()
{
	year = document.getElementById("yearsSelect).value;
	//return year;
}

function setYearSelect()
{
	var selectList = document.getElementById("yearsSelect");
	for (var i = 1; i < 50; i++)
	{
		var option = document.createElement("option");
		option.value = i;
		option.Text = i;
		selectList.appendChild(option);
	}
}
