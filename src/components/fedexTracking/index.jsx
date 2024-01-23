import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./fedexTracking.module.scss";
import { Box, Grid, Typography } from "@mui/material";
import axios from '../../api/instance';
import { ENDPOINTS } from "../../api/endpoints";
import cloneDeep from 'lodash/cloneDeep';
import moment from 'moment';
const DATA = {
    "transactionId": "APIF_SV_TRKC_TxIDAPIF_SV_TxID18a9b1a3-6749-4e81-b985-fd49ba83c00f",
    "customertransactionId": "APIF_SV_TRKC_TxIDcustomer test",
    "output": {
        "alerts": [
            {
                "code": "VIRTUAL.RESPONSE",
                "message": "This is a Virtual Response."
            }
        ],
        "completeTrackResults": [
            {
                "trackingNumber": "794843185271",
                "trackResults": [
                    {
                        "trackingNumberInfo": {
                            "trackingNumber": "794843185271",
                            "trackingNumberUniqueId": "12025~794843185271~FDEG",
                            "carrierCode": "FDXG"
                        },
                        "additionalTrackingInfo": {
                            "nickname": "",
                            "packageIdentifiers": [
                                {
                                    "type": "PURCHASE_ORDER",
                                    "values": [
                                        "1683571649"
                                    ],
                                    "trackingNumberUniqueId": "",
                                    "carrierCode": ""
                                },
                                {
                                    "type": "INVOICE",
                                    "values": [
                                        "30186971"
                                    ],
                                    "trackingNumberUniqueId": "",
                                    "carrierCode": ""
                                }
                            ],
                            "hasAssociatedShipments": false
                        },
                        "shipperInformation": {
                            "contact": {},
                            "address": {
                                "city": "Vancouver",
                                "stateOrProvinceCode": "WA",
                                "countryCode": "US",
                                "residential": false,
                                "countryName": "United States"
                            }
                        },
                        "recipientInformation": {
                            "contact": {},
                            "address": {
                                "city": "Indianapolis",
                                "stateOrProvinceCode": "IN",
                                "countryCode": "US",
                                "residential": false,
                                "countryName": "United States"
                            }
                        },
                        "latestStatusDetail": {
                            "code": "HL",
                            "derivedCode": "HL",
                            "statusByLocale": "Ready for pickup",
                            "description": "Ready for pickup",
                            "scanLocation": {
                                "city": "GREENWOOD",
                                "stateOrProvinceCode": "IN",
                                "countryCode": "US",
                                "residential": false,
                                "countryName": "United States"
                            },
                            "ancillaryDetails": [
                                {
                                    "reason": "015A",
                                    "reasonDescription": "Package available for pickup at FedEx Office: 331 S STATE RD 135",
                                    "action": "",
                                    "actionDescription": ""
                                }
                            ]
                        },
                        "dateAndTimes": [
                            {
                                "type": "ACTUAL_PICKUP",
                                "dateTime": "2023-05-15T00:00:00-06:00"
                            },
                            {
                                "type": "SHIP",
                                "dateTime": "2023-05-15T00:00:00-06:00"
                            },
                            {
                                "type": "ACTUAL_TENDER",
                                "dateTime": "2023-05-15T00:00:00-06:00"
                            },
                            {
                                "type": "ANTICIPATED_TENDER",
                                "dateTime": "2023-05-15T00:00:00-06:00"
                            }
                        ],
                        "availableImages": [],
                        "specialHandlings": [
                            {
                                "type": "DIRECT_SIGNATURE_REQUIRED",
                                "description": "Direct Signature Required",
                                "paymentType": "OTHER"
                            },
                            {
                                "type": "HOLD_AT_LOCATION",
                                "description": "Hold at Location",
                                "paymentType": "OTHER"
                            }
                        ],
                        "packageDetails": {
                            "packagingDescription": {
                                "type": "YOUR_PACKAGING",
                                "description": "Package"
                            },
                            "physicalPackagingType": "PACKAGE",
                            "sequenceNumber": "1",
                            "count": "1",
                            "weightAndDimensions": {
                                "weight": [
                                    {
                                        "value": "47.0",
                                        "unit": "LB"
                                    },
                                    {
                                        "value": "21.32",
                                        "unit": "KG"
                                    }
                                ],
                                "dimensions": [
                                    {
                                        "length": 48,
                                        "width": 30,
                                        "height": 5,
                                        "units": "IN"
                                    },
                                    {
                                        "length": 121,
                                        "width": 76,
                                        "height": 12,
                                        "units": "CM"
                                    }
                                ]
                            },
                            "packageContent": []
                        },
                        "shipmentDetails": {
                            "possessionStatus": true
                        },
                        "scanEvents": [
                            {
                                "date": "2023-05-19T19:03:00-04:00",
                                "eventType": "HP",
                                "eventDescription": "Ready for recipient pickup",
                                "exceptionCode": "015A",
                                "exceptionDescription": "Package available for pickup at FedEx Office: 331 S STATE RD 135",
                                "scanLocation": {
                                    "streetLines": [
                                        "331 S STATE RD 135 "
                                    ],
                                    "city": "GREENWOOD",
                                    "stateOrProvinceCode": "IN",
                                    "postalCode": "46142",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationId": "HNBKN",
                                "locationType": "DESTINATION_FEDEX_FACILITY",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-19T08:25:00-04:00",
                                "eventType": "OD",
                                "eventDescription": "On FedEx vehicle for delivery",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "GREENWOOD",
                                    "stateOrProvinceCode": "IN",
                                    "postalCode": "46143",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationId": "0472",
                                "locationType": "VEHICLE",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-19T07:31:24-04:00",
                                "eventType": "HA",
                                "eventDescription": "Hold at location request accepted",
                                "exceptionCode": "A13",
                                "exceptionDescription": "Shipment is being redirected as requested to FedEx Office",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "GREENWOOD",
                                    "stateOrProvinceCode": "IN",
                                    "postalCode": "46143",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationId": "0472",
                                "locationType": "DESTINATION_FEDEX_FACILITY",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-19T07:31:00-04:00",
                                "eventType": "AR",
                                "eventDescription": "Arrived at FedEx location",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "GREENWOOD",
                                    "stateOrProvinceCode": "IN",
                                    "postalCode": "46143",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationId": "0472",
                                "locationType": "FEDEX_FACILITY",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-19T05:11:00-04:00",
                                "eventType": "AR",
                                "eventDescription": "At local FedEx facility",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "GREENWOOD",
                                    "stateOrProvinceCode": "IN",
                                    "postalCode": "46143",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationId": "0472",
                                "locationType": "DESTINATION_FEDEX_FACILITY",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-18T15:50:00-04:00",
                                "eventType": "AR",
                                "eventDescription": "Arrived at FedEx location",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "GREENWOOD",
                                    "stateOrProvinceCode": "IN",
                                    "postalCode": "46143",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationId": "0474",
                                "locationType": "FEDEX_FACILITY",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-18T04:21:19-07:00",
                                "eventType": "DP",
                                "eventDescription": "Departed FedEx location",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "TROUTDALE",
                                    "stateOrProvinceCode": "OR",
                                    "postalCode": "97060",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationId": "0972",
                                "locationType": "FEDEX_FACILITY",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-18T02:57:54-05:00",
                                "eventType": "IT",
                                "eventDescription": "In transit",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "UTICA",
                                    "stateOrProvinceCode": "MO",
                                    "postalCode": "64686",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationType": "VEHICLE",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-17T17:03:23-04:00",
                                "eventType": "RR",
                                "eventDescription": "Delivery option requested",
                                "exceptionCode": "A12",
                                "exceptionDescription": "Hold at FedEx Office request received - Check back later for shipment status",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "postalCode": "46142",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationId": "HNBKN",
                                "locationType": "ENROUTE",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-17T13:48:44-06:00",
                                "eventType": "IT",
                                "eventDescription": "In transit",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "LARAMIE",
                                    "stateOrProvinceCode": "WY",
                                    "postalCode": "82070",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationType": "VEHICLE",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-17T01:47:24-06:00",
                                "eventType": "IT",
                                "eventDescription": "In transit",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "KING HILL",
                                    "stateOrProvinceCode": "ID",
                                    "postalCode": "83633",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationType": "VEHICLE",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-16T12:47:07-07:00",
                                "eventType": "DP",
                                "eventDescription": "Departed FedEx location",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "TROUTDALE",
                                    "stateOrProvinceCode": "OR",
                                    "postalCode": "97060",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationId": "0972",
                                "locationType": "FEDEX_FACILITY",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-15T21:47:26-07:00",
                                "eventType": "AO",
                                "eventDescription": "Shipment arriving On-Time",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "TROUTDALE",
                                    "stateOrProvinceCode": "OR",
                                    "postalCode": "97060",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationId": "0972",
                                "locationType": "FEDEX_FACILITY",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-15T21:46:00-07:00",
                                "eventType": "AR",
                                "eventDescription": "Arrived at FedEx location",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "TROUTDALE",
                                    "stateOrProvinceCode": "OR",
                                    "postalCode": "97060",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationId": "0972",
                                "locationType": "FEDEX_FACILITY",
                                "derivedStatusCode": "IT",
                                "derivedStatus": "In transit"
                            },
                            {
                                "date": "2023-05-15T17:15:00-07:00",
                                "eventType": "PU",
                                "eventDescription": "Picked up",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "city": "TROUTDALE",
                                    "stateOrProvinceCode": "OR",
                                    "postalCode": "97060",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationId": "0971",
                                "locationType": "PICKUP_LOCATION",
                                "derivedStatusCode": "PU",
                                "derivedStatus": "Picked up"
                            },
                            {
                                "date": "2023-05-15T13:29:00-07:00",
                                "eventType": "OC",
                                "eventDescription": "Shipment information sent to FedEx",
                                "exceptionCode": "",
                                "exceptionDescription": "",
                                "scanLocation": {
                                    "streetLines": [
                                        ""
                                    ],
                                    "postalCode": "98682",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                },
                                "locationType": "CUSTOMER",
                                "derivedStatusCode": "IN",
                                "derivedStatus": "Initiated"
                            }
                        ],
                        "availableNotifications": [
                            "ON_DELIVERY",
                            "ON_EXCEPTION",
                            "ON_ESTIMATED_DELIVERY"
                        ],
                        "deliveryDetails": {
                            "deliveryAttempts": "0",
                            "deliveryOptionEligibilityDetails": [
                                {
                                    "option": "INDIRECT_SIGNATURE_RELEASE",
                                    "eligibility": "POSSIBLY_ELIGIBLE"
                                },
                                {
                                    "option": "REDIRECT_TO_HOLD_AT_LOCATION",
                                    "eligibility": "POSSIBLY_ELIGIBLE"
                                },
                                {
                                    "option": "REROUTE",
                                    "eligibility": "POSSIBLY_ELIGIBLE"
                                },
                                {
                                    "option": "RESCHEDULE",
                                    "eligibility": "POSSIBLY_ELIGIBLE"
                                },
                                {
                                    "option": "RETURN_TO_SHIPPER",
                                    "eligibility": "POSSIBLY_ELIGIBLE"
                                },
                                {
                                    "option": "DISPUTE_DELIVERY",
                                    "eligibility": "POSSIBLY_ELIGIBLE"
                                },
                                {
                                    "option": "SUPPLEMENT_ADDRESS",
                                    "eligibility": "INELIGIBLE"
                                }
                            ],
                            "destinationServiceArea": "HELDPACKAGEAVAILABLEFORRECIPIENTPICKUPWITHADDRESS_HTML"
                        },
                        "originLocation": {
                            "locationContactAndAddress": {
                                "address": {
                                    "city": "TROUTDALE",
                                    "stateOrProvinceCode": "OR",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                }
                            }
                        },
                        "holdAtLocation": {
                            "locationContactAndAddress": {
                                "address": {
                                    "streetLines": [
                                        "331 S STATE RD 135"
                                    ],
                                    "city": "GREENWOOD",
                                    "stateOrProvinceCode": "IN",
                                    "postalCode": "46142",
                                    "countryCode": "US",
                                    "residential": false,
                                    "countryName": "United States"
                                }
                            },
                            "locationId": "HNBKN"
                        },
                        "lastUpdatedDestinationAddress": {
                            "city": "GREENWOOD",
                            "stateOrProvinceCode": "IN",
                            "countryCode": "US",
                            "residential": false,
                            "countryName": "United States"
                        },
                        "serviceCommitMessage": {
                            "message": "Shipment is available for pickup at FedEx Office: 331 S STATE RD 135. We'll hold the shipment for five business days starting from May 19, 2023.",
                            "type": "HELD_PACKAGE_AVAILABLE_FOR_RECIPIENT_PICKUP_WITH_ADDRESS"
                        },
                        "serviceDetail": {
                            "type": "FEDEX_GROUND",
                            "description": "FedEx Ground",
                            "shortDescription": "FG"
                        },
                        "standardTransitTimeWindow": {
                            "window": {
                                "ends": "2023-05-19T00:00:00-06:00"
                            }
                        },
                        "estimatedDeliveryTimeWindow": {
                            "window": {}
                        },
                        "customDeliveryOptions": [
                            {
                                "type": "REDIRECT_TO_HOLD_AT_LOCATION",
                                "status": "HELD"
                            }
                        ],
                        "goodsClassificationCode": "",
                        "returnDetail": {}
                    }
                ]
            }
        ]
    }
}




function getDistanceBetweenElements(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
  
    const x1 = rect1.left + rect1.width / 2;
    const y1 = rect1.top + rect1.height / 2;
  
    const x2 = rect2.left + rect2.width / 2;
    const y2 = rect2.top + rect2.height / 2;
  
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  
    return distance;
  }

const FedexTracking = () => {
    const [isFetching, setIsFetching] = useState(true);
    const [trackingData, setTrackingData] = useState(null);
    const firstScanEventDotRef = useRef();
    const lastScanEventDotRef = useRef();
    const uiLine = useRef();

    const fetchOrder = async () => {
        try {
            setIsFetching(true);
            // const response = await axios.post(ENDPOINTS.trackShipment);
            setTrackingData(DATA);
            // console.log(trackingData, response);
        } catch (e) {
            console.log(e);
        } finally {
            setIsFetching(false);
        }
    };

    const initalizeTrackingLineUI = () => {
       const distanceBetweenFirstAndLastDot =  getDistanceBetweenElements(firstScanEventDotRef.current, lastScanEventDotRef.current);
       uiLine.current.style.height = `${distanceBetweenFirstAndLastDot}px`;
       uiLine.current.style.display = 'block';
       uiLine.current.classList.add(styles.line);
    }

    useEffect(() => {
        fetchOrder();
    }, []);

    useEffect(()=>{
        if(trackingData && !isFetching){
            initalizeTrackingLineUI();
        }
    },[trackingData]);

    const scanEvents = useMemo(() => {
        if (!trackingData) return [];
        const events = cloneDeep(
            trackingData.output.completeTrackResults[0].trackResults[0].scanEvents
        );
        return events.reverse();
    }, [trackingData]);

    if (isFetching) return <div>Loading ..</div>;
    // console.log(trackingData);

    return (
        <Grid container className={styles.container}>
            <Grid item md={6} sm={12}>
                <Typography fontSize="14px">Tracking Id - {trackingData.output.completeTrackResults[0].trackingNumber}</Typography>
                <Typography fontSize="14px">Delivery Status - {trackingData.output.completeTrackResults[0].trackResults[0].latestStatusDetail.description}</Typography>
                <Typography fontSize="14px">{trackingData.output.completeTrackResults[0].trackResults[0].latestStatusDetail.ancillaryDetails[0].reasonDescription}</Typography>
            </Grid>
            <Grid item md={6} sm={12}>
            {scanEvents.map((event, index) => {
                let dotRef = null;
                if(index === 0) {
                    dotRef = firstScanEventDotRef;
                }
                if(index === scanEvents.length - 1){
                    dotRef = lastScanEventDotRef;
                }
                return(
                <Box display="flex" justifyContent="space-between">
                    <Box display="flex" alignItems="flex-start">
                        <span ref={dotRef} className={styles.dot}>
                            {index === 0 ? <div ref={uiLine} style={{display: 'none'}} /> : null}
                        </span>
                        <Box className={styles.scanEventWrapper}>
                            <Typography className={styles.scanEventTitle}>{event.eventDescription}</Typography>
                            {event.scanLocation.city ? (
                                <Typography className={styles.scanEventLocation}>
                                    {`${event.scanLocation.city}${event.scanLocation.stateOrProvinceCode
                                            ? `, ${event.scanLocation.stateOrProvinceCode}`
                                            : ""
                                        }`}
                                </Typography>
                            ) : null}
                            <Typography className={styles.scanEventTime}>{moment(event.date).format('llll')}</Typography>
                            <Typography className={styles.scanEventDescription}>{event.exceptionDescription}</Typography>
                        </Box>

                    </Box>
                    
                    
                </Box>
            )})}
            </Grid>
        </Grid>
    );
};

export default FedexTracking;
