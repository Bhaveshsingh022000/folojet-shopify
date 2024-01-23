const API_BASE_URL = `/apps/folojet`;

async function getFedex(){
    try{
        const data = {
            email: "testabcd@gmail.com",
            firstName: "Test",
            lastName : "Singh"
        }
        const response = await fetch(`${API_BASE_URL}/facts/random`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            }
          });
          console.log(response);
    }catch(e){
        console.log(e);
    }
}
async function fetchTracking(){
    try{
        const response = await fetch(`${API_BASE_URL}/api/fedx/track-shipment`, { method: "POST" });
        const parsedResponse = await response.json();
        renderTrackingComponent(parsedResponse);
        renderTrackingComponent(parsedResponse, 0);
        // Set up click event listeners for the stepper steps
        const stepperSteps = document.querySelectorAll('.step');
        stepperSteps.forEach((step, index) => {
            step.addEventListener('click', () => {
                renderTrackingComponent(parsedResponse, index);
            });
        });
    }catch(e){
        console.log(e);
    }
}


function renderTrackingComponent(data, activeStep) {
    const trackingComponent = document.getElementById('trackingComponent');
    const stepperSteps = document.querySelectorAll('.step');

    // Ensure the trackResults array is not empty
    if (data.output.completeTrackResults.length === 0) {
        trackingComponent.innerHTML = '<p>No tracking information available.</p>';
        return;
    }

    // Render content based on the active step
    switch (activeStep) {
        case 0:
            renderShipmentInfo(data);
            break;
        case 1:
            renderKeyEvents(data);
            break;
        case 2:
            renderDeliveryDetails(data);
            break;
        case 3:
            renderHoldAtLocation(data);
            break;
        default:
            break;
    }

    // Update stepper to highlight the active step
    stepperSteps.forEach((step, index) => {
        if (index === activeStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function renderShipmentInfo(data) {
    const shipmentInfo = `
        <h2>Shipment Tracking</h2>
        <p><strong>Tracking Number:</strong> ${data.output.completeTrackResults[0].trackResults[0].trackingNumber}</p>
        <p><strong>Carrier:</strong> ${data.output.completeTrackResults[0].trackResults[0].trackingNumberInfo.carrierCode}</p>
        <p><strong>Status:</strong> ${data.output.completeTrackResults[0].trackResults[0].latestStatusDetail.statusByLocale}</p>
    `;

    trackingComponent.innerHTML = shipmentInfo;
}

function renderKeyEvents(data) {
    const keyEvents = data.output.completeTrackResults[0].trackResults[0].scanEvents.map(event => `
        <p>
            <strong>${event.eventType}:</strong> ${event.eventDescription}
            <br>Date: ${event.date}
            <br>Location: ${event.scanLocation.city}, ${event.scanLocation.stateOrProvinceCode}, ${event.scanLocation.countryCode}
        </p>
    `).join('');

    trackingComponent.innerHTML = keyEvents;
}

function renderDeliveryDetails(data) {
    const deliveryDetails = `
        <h3>Delivery Details</h3>
        <p><strong>Possession Status:</strong> ${data.output.completeTrackResults[0].trackResults[0].shipmentDetails.possessionStatus ? 'In Possession' : 'Not in Possession'}</p>
        <p><strong>Delivery Attempts:</strong> ${data.output.completeTrackResults[0].trackResults[0].deliveryDetails.deliveryAttempts}</p>
        <p><strong>Destination Service Area:</strong> ${data.output.completeTrackResults[0].trackResults[0].deliveryDetails.destinationServiceArea}</p>
    `;

    trackingComponent.innerHTML = deliveryDetails;
}

function renderHoldAtLocation(data) {
    const holdAtLocation = `
        <h3>Hold at Location</h3>
        <p><strong>Location:</strong> ${data.output.completeTrackResults[0].trackResults[0].holdAtLocation.locationContactAndAddress.address.streetLines.join(', ')}, ${data.output.completeTrackResults[0].trackResults[0].holdAtLocation.locationContactAndAddress.address.city}, ${data.output.completeTrackResults[0].trackResults[0].holdAtLocation.locationContactAndAddress.address.stateOrProvinceCode}, ${data.output.completeTrackResults[0].trackResults[0].holdAtLocation.locationContactAndAddress.address.countryCode}</p>
        <p><strong>Location ID:</strong> ${data.output.completeTrackResults[0].trackResults[0].holdAtLocation.locationId}</p>
        <p><strong>Hold Duration:</strong> ${data.output.completeTrackResults[0].trackResults[0].serviceCommitMessage.message}</p>
    `;

    trackingComponent.innerHTML = holdAtLocation;
}

// fetchTracking();
