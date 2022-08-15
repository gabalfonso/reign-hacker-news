export function getTimeSinceCreation(creationDateUTC) {
    let minutesSinceCreation =
        (Date.now() - new Date(creationDateUTC)) / 1000 / 60;
    let timeSinceCreation = "";
    if (minutesSinceCreation / 60 / 24 >= 1) {
        const daysSinceCreation = Math.floor(minutesSinceCreation / 60 / 24);
        timeSinceCreation = `${daysSinceCreation} day${getSuffix(
            daysSinceCreation
        )} ago`;
    } else if (minutesSinceCreation / 60 >= 1) {
        const hoursSinceCreation = Math.floor(minutesSinceCreation / 60);
        timeSinceCreation = `${hoursSinceCreation} hour${getSuffix(
            hoursSinceCreation
        )} ago`;
    } else if (minutesSinceCreation >= 1) {
        const minutesSinceCreationFloored = Math.floor(minutesSinceCreation);
        timeSinceCreation = `${minutesSinceCreationFloored} minute${getSuffix(
            minutesSinceCreationFloored
        )} ago`;
    } else timeSinceCreation = "Just created";

    return timeSinceCreation;
}

function getSuffix(number) {
    return number > 1 ? "s" : "";
}
