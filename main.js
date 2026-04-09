function checkConsumption() {
    let consumption = document.getElementById("consumption").value;
    // Convert input to number
    let consumptionValue = parseInt(consumption);

    // Validate input
    if (isNaN(consumptionValue) || consumptionValue < 0) {
        window.alert("Invalid input. Please enter a valid electricity consumption value.");
        return;
    }

    // Classify based on consumption
    if (consumptionValue >= 0 && consumptionValue <= 100) {
        window.alert("Lifeline Consumer: Discounted electricity rates");
    } else if (consumptionValue > 100 && consumptionValue <= 200) {
        window.alert("Low Consumption: Normal residential rate");
    } else if (consumptionValue > 200 && consumptionValue <= 300) {
        window.alert("Average Consumption: Typical electricity usage");
    } else if (consumptionValue > 300 && consumptionValue <= 500) {
        window.alert("High Consumption: Higher electricity usage");
    } else if (consumptionValue > 500) {
        window.alert("Very High Consumption: Heavy electricity users");
    }
}