function calculateTip() {
    //Gather Input
    var billInput = parseFloat(document.getElementById("billInput").value);
    var tipGrab = parseFloat(document.getElementById("tipSelect").value);

    //Validate Input
    if (billInput === "" || tipGrab == 0) {
        alert("Please input your bill amount and service level");
    }

    //Place billInput in Bill Amount Box 
    var roundedBillInput = parseFloat(billInput.toFixed(2));
    document.getElementById("billInput").value = roundedBillInput;
    
    //Calculate Tip
    var totalTip = parseFloat((roundedBillInput * tipGrab).toFixed(2));   
    
    //Display Tip Amount
    document.getElementById("tipAmountInput").value = totalTip;
    
    //Display Order Amount
    var orderTotal = parseFloat((roundedBillInput + totalTip).toFixed(2));
    document.getElementById("billTotalInput").value = orderTotal;

}

//Click Button to Calculate
document.getElementById("submitbutton").onclick = function() 
{
    calculateTip();    
}