function compute()
{
    if (isNaN(principal) || parseInt(principal) == 0)
	{
		let msg = `Please enter a positive number for principal.`
		alert(msg);
		principalInput.focus();
		return false;
	}
	year = getYear();
	if (isNaN(year))
	{
		alert(`Please select the number of years. ${year}`);
		document.getElementById("yearsSelect").focus();
		return false;
	}
	payout = parseFloat(principal * (rate / 100 ) * year).toFixed(2);
	today = new Date();
	payYear = parseInt(today.getFullYear()) + parseInt(year);
	summaryText = 
`If you desposit <mark>${principal}</mark>, <br>
at an interest rate of <mark>${rate}%</mark>. <br>
You will receive an amount of <mark>${payout}</mark>, <br>
in the year <mark>${payYear}</mark>`;
	document.getElementById("rateSummary").innerHTML = summaryText;
}
function formPrep()
{
	setRateText();
	setYearSelect();
	
}
function getRate()
{
	rate = document.getElementById("rateRange").value;
	return rate;
}
function setRateText()
{
	document.getElementById("rateText").innerHTML = parseFloat(getRate()).toFixed(2);
}
function setYearSelect()
{
	var selectList = document.getElementById("yearsSelect");
	for (var i = 1; i < 50; i++)
	{
		var option = document.createElement("option");
		if (i == 1) {option.setAttribute("selected", "");}
		option.value = i;
		option.text = i;
		selectList.appendChild(option);
	}
}
function getYear()
{
	year = document.getElementById("yearsSelect").value;
	return year;
}
function savePrincipal()
{
	principalInput = document.getElementById("principal");
	principal = principalInput.value;
}