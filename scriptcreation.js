// Function to verify the service quality
function verifyServiceQuality(serviceQuality) {
    const validQualities = ["great", "ok", "poor"];
    if (!validQualities.includes(serviceQuality.toLowerCase())) {
        alert("Invalid service quality entered. Please enter 'great', 'ok', or 'poor'.");
        return false;
    }
    return true;
}

// Function to verify the service amount
function verifyServiceAmount(amount) {
    if (isNaN(amount) || amount < 5.00 || amount > 500.00) {
        alert("Invalid service amount entered. Please enter an amount between $5.00 and $500.00.");
        return false;
    }
    return true;
}

// Function to calculate the tip amount
function calculateTip(amount, quality) {
    let tipPercentage;
    switch (quality.toLowerCase()) {
        case "great":
            tipPercentage = 0.20;
            break;
        case "ok":
            tipPercentage = 0.15;
            break;
        case "poor":
            tipPercentage = 0.10;
            break;
        default:
            tipPercentage = 0;
    }
    return amount * tipPercentage;
}

// Main execution block
function calculateServiceTip() {
    const serviceAmount = parseFloat(prompt("Enter the dollar amount of the service:"));
    if (!verifyServiceAmount(serviceAmount)) return;

    const serviceQuality = prompt("Was the service quality great, ok, or poor?");
    if (!verifyServiceQuality(serviceQuality)) return;

    const tipAmount = calculateTip(serviceAmount, serviceQuality);
    alert(`For a service amount of $${serviceAmount.toFixed(2)}, a ${tipAmount.toFixed(2)} tip is recommended based on ${serviceQuality} service quality.`);
}

// Call the function to start the process
calculateServiceTip();