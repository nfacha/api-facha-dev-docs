import HomeLayout from "./layouts/HomeLayout";
import React from "react";
import EndpointCard from "../components/EndpointCard";

const Home: React.FC = () => {
    return (
            <HomeLayout>
                <div className="p-4 w-100">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Facha.Dev API (api.facha.dev)</h1>
                            <p>This is an free generic API developed by facha.dev on his free time</p>
                            <p>You can find my contact details on <a href="https://facha.dev"
                                                                     target="_blank">facha.dev</a> if you need any help, or you can join my <a
                                    href="https://discord.gg/ecyK3y4zTW"
                                    target="_blank">Discord</a></p>
                        </div>
                    </div>
                    <div className="rowr mt-4">
                        <div className="col-md-12">
                            <h2 className="text-center">Rate Limits</h2>
                            <p>To prevent abuse some endpoints are rate limited (by IP), information about this will be available bellow in each endpoint documentation</p>
                            <p>The rate limit uses a <b>fixed window</b> algorithm, this means that your first request within the window stars a timer for X seconds (window size is available bellow on the documentation of each endpoint), at the end of the timer your request count resets.
                            </p>
                            <p>Unused requests <b>do not</b> pass on to the next window.</p>
                            <p>If you exceed your limit you will get a <b>429 Too Many Requests</b> status code.</p>
                            <p>The response headers for all requests will include two rate limit related headers, if none of this headers are present then the endpoint that you requested is not rate limited:</p>
                            <p>
                                <b>X-RateLimit-Remaining</b>: The remaining requests within the current window for this endpoint
                            </p>
                            <p><b>X-RateLimit-Reset</b>: How long (in seconds) before your limit resets</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <h2 className="text-center">API URL and Versioning</h2>
                            <p>The API Base URL is <span className="text-bold text-primary">https://api.facha.dev</span>
                            </p>
                            <p>Current API version is <span className="text-bold text-primary">v1</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-center">Temporary / Disposable Email</h3>
                                </div>
                                <div className="card-body">
                                    <h3 className="text-center">Information</h3>
                                    <p>This API endpoints allow you to check if a given domain is used to provide temporary emails</p>
                                    <p>Data used in the API is currently sourced from <a href="https://github.com/nfacha/temporary-email-list"
                                                                                         target="_blank">my GitHub repo</a>
                                    </p>
                                    <hr/>
                                    <h3 className="text-center">Endpoints</h3>
                                    <EndpointCard method="GET"
                                                  path="/v1/temporary-email/:domain"
                                                  description="Check if an email is a temporary email address"
                                                  parameters={[{name: 'domain', description: 'The domain to check'}]}
                                                  body={null}
                                                  response={{temporary: false}}
                                                  rateLimit={{
                                                      bucket: 'temporary-email',
                                                      limit: 100,
                                                      timeSeconds: 60
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/temporary-email/stats"
                                                  description="Get the number of temporary emails in the database and its last update"
                                                  parameters={[]}
                                                  body={null}
                                                  response={{
                                                      "totalDomains": 25118,
                                                      "updatedAt": "2022-08-04T11:45:59.270Z",
                                                      "dataAttribution": "https://github.com/nfacha/temporary-email-list"
                                                  }}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-center">IP Information</h3>
                                </div>
                                <div className="card-body">
                                    <h3 className="text-center">Information</h3>
                                    <p>This endpoints relate to IP information</p>
                                    <hr/>
                                    <h3 className="text-center">Endpoints</h3>
                                    <EndpointCard method="GET"
                                                  path="/v1/ip/:ip"
                                                  description="Check information about an IP, such as location, ASN, and type"
                                                  parameters={[{name: 'ip', description: 'IP to query'}]}
                                                  body={null}
                                                  response={{
                                                      "ip": "8.8.8.8",
                                                      "subnet": "8.8.8.0/24",
                                                      "asn": {
                                                          "number": 15169,
                                                          "name": "GOOGLE",
                                                          "description": "Google"
                                                      },
                                                      "country": "US",
                                                      "hosting": true
                                                  }}
                                                  rateLimit={{
                                                      bucket: 'ip-info',
                                                      limit: 60,
                                                      timeSeconds: 60
                                                  }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-center">Aircraft Database and Radar</h3>
                                </div>
                                <div className="card-body">
                                    <h3 className="text-center">Information</h3>
                                    <p>This API Endpoints allow you to get aircraft information</p>
                                    <p>Data used in the API is currently sourced from my own database and my VRS Radar Server </p>
                                    <hr/>
                                    <h3 className="text-center">Endpoints</h3>
                                    <h5 className="text-center">Aircraft Database</h5>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/detail/icao/:icao"
                                                  description="Get Aircraft details for a specific ICAO HEX Code"
                                                  parameters={[{name: 'icao', description: 'Aircraft ICAO HEX'}]}
                                                  body={null}
                                                  response={{
                                                      "icao": "3A3280",
                                                      "registration": "F-OMUA",
                                                      "type": {
                                                          "code": "B789",
                                                          "manufacturer": "Boeing",
                                                          "yearBuilt": 2018,
                                                          "serial": "39297",
                                                          "description": "Boeing 787-9"
                                                      },
                                                      "country": "France",
                                                      "operator": {
                                                          "name": "Air Tahiti Nui",
                                                          "icao": "THT"
                                                      },
                                                      "military": false
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/detail/reg/:reg"
                                                  description="Get Aircraft details for a specific Registration / Tail Number"
                                                  parameters={[{name: 'reg', description: 'Aircraft registration'}]}
                                                  body={null}
                                                  response={{
                                                      "icao": "3A3280",
                                                      "registration": "F-OMUA",
                                                      "type": {
                                                          "code": "B789",
                                                          "manufacturer": "Boeing",
                                                          "yearBuilt": 2018,
                                                          "serial": "39297",
                                                          "description": "Boeing 787-9"
                                                      },
                                                      "country": "France",
                                                      "operator": {
                                                          "name": "Air Tahiti Nui",
                                                          "icao": "THT"
                                                      },
                                                      "military": false
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/detail/stats"
                                                  description="Total number of known Aircraft"
                                                  parameters={[]}
                                                  body={null}
                                                  response={{
                                                      "knownAircraft": 436222
                                                  }}/>
                                    <h5 className="text-center mt-2">Live Radar</h5>
                                    <p className="text-center">Please note that the following endpoints can return an array of Aircraft if your query returns multiple results, in cases of a single result an object is returned</p>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/icao/:icao"
                                                  description="Status and position of an airborne Aircraft for a specific ICAO HEX Code"
                                                  parameters={[{name: 'icao', description: 'Aircraft ICAO HEX'}]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-query',
                                                      limit: 20,
                                                      timeSeconds: 60
                                                  }}
                                                  response={{
                                                      "icao": "495265",
                                                      "callsign": "SAT433",
                                                      "baroAltitude": 17000,
                                                      "lat": 38.120651,
                                                      "lon": -26.982901,
                                                      "heading": 111,
                                                      "speed": 279,
                                                      "verticalRate": 0,
                                                      "squawk": "",
                                                      "onGround": false,
                                                      "isMilitary": false,
                                                      "positionTime": 1660054131210
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/reg/:reg"
                                                  description="Status and position of an airborne Aircraft for a specific Registration / Tail Number"
                                                  parameters={[{name: 'reg', description: 'Aircraft registration'}]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-query',
                                                      limit: 20,
                                                      timeSeconds: 60
                                                  }}
                                                  response={{
                                                      "icao": "495265",
                                                      "callsign": "SAT433",
                                                      "baroAltitude": 17000,
                                                      "lat": 38.120651,
                                                      "lon": -26.982901,
                                                      "heading": 111,
                                                      "speed": 279,
                                                      "verticalRate": 0,
                                                      "squawk": "",
                                                      "onGround": false,
                                                      "isMilitary": false,
                                                      "positionTime": 1660054131210
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/squawk/:squawk"
                                                  description="Status and position of an airborne Aircraft with a specific squawk"
                                                  parameters={[{name: 'squawk', description: 'Aircraft Squawk'}]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-multiple',
                                                      limit: 15,
                                                      timeSeconds: 60
                                                  }}
                                                  response={[{
                                                      "icao": "A5780F",
                                                      "reg": "N451YX",
                                                      "type": "E75L",
                                                      "callsign": "RPA4657",
                                                      "baroAltitude": 4000,
                                                      "lat": 40.528839,
                                                      "lon": -73.478577,
                                                      "heading": 30.9,
                                                      "speed": 285,
                                                      "verticalRate": 0,
                                                      "squawk": "7600",
                                                      "onGround": false,
                                                      "isMilitary": false,
                                                      "positionTime": 1660054247198
                                                  }]}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/emergency"
                                                  description="Get live emergency aircraft (Squawk 7500/7600/7700)"
                                                  parameters={[]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-emergency',
                                                      limit: 5,
                                                      timeSeconds: 60
                                                  }}
                                                  response={{
                                                      "general": [{
                                                          "icao": "495152",
                                                          "reg": "CS-TJR",
                                                          "type": "A21N",
                                                          "callsign": "TAP843",
                                                          "baroAltitude": 3355392,
                                                          "lat": 41.101868,
                                                          "lon": 10.769409,
                                                          "heading": 217.4,
                                                          "speed": -371,
                                                          "verticalRate": 16640,
                                                          "squawk": "7700",
                                                          "onGround": false,
                                                          "isMilitary": false,
                                                          "positionTime": 1659815289166
                                                      }],
                                                      "radioFailure": [],
                                                      "hijack": []
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/nato-air-policing"
                                                  description="Get live military aircraft squaking NATO Air Policing / QRA (Squawk 1301-1327)"
                                                  parameters={[]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-nato-qra',
                                                      limit: 3,
                                                      timeSeconds: 60
                                                  }}
                                                  response={null}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/military"
                                                  description="Get all airborne military aircraft"
                                                  parameters={[]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-military',
                                                      limit: 5,
                                                      timeSeconds: 60
                                                  }}
                                                  response={[
                                                      {
                                                          "icao": "495152",
                                                          "reg": "CS-TJR",
                                                          "type": "A21N",
                                                          "callsign": "TAP843",
                                                          "baroAltitude": 3355392,
                                                          "lat": 41.101868,
                                                          "lon": 10.769409,
                                                          "heading": 217.4,
                                                          "speed": -371,
                                                          "verticalRate": 16640,
                                                          "squawk": "1301",
                                                          "onGround": false,
                                                          "isMilitary": true,
                                                          "positionTime": 1659815289166
                                                      }
                                                  ]}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/operator/:operatorIcao"
                                                  description="Get all airborne aircraft for an ICAO operator code"
                                                  parameters={[{
                                                      name: "operatorIcao",
                                                      description: "ICAO operator code"
                                                  }]}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-multiple',
                                                      limit: 10,
                                                      timeSeconds: 60
                                                  }}
                                                  body={null}
                                                  response={null}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/callsign/:callsign"
                                                  description="Get all airborne aircraft with a specific callsign"
                                                  parameters={[{
                                                      name: "callsign",
                                                      description: "Aircraft Callsign"
                                                  }]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-multiple',
                                                      limit: 10,
                                                      timeSeconds: 60
                                                  }}
                                                  response={{
                                                      "aircraft": {
                                                          "icao": "495265",
                                                          "callsign": "SAT1400",
                                                          "baroAltitude": 0,
                                                          "lat": 38.769608,
                                                          "lon": -27.098913,
                                                          "heading": 141,
                                                          "speed": 101,
                                                          "verticalRate": -384,
                                                          "squawk": "2670",
                                                          "onGround": false,
                                                          "isMilitary": false,
                                                          "positionTime": 1659815527855
                                                      }
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/type/:typeIcao"
                                                  description="Get all airborne aircraft for a specific ICAO type code"
                                                  parameters={[{name: "typeIcao", description: "ICAO type code"}]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-multiple',
                                                      limit: 10,
                                                      timeSeconds: 60
                                                  }}
                                                  response={{
                                                      "aircraft": {
                                                          "icao": "AE11D9",
                                                          "reg": "75-0559",
                                                          "type": "E3TF",
                                                          "callsign": "empty callsign",
                                                          "baroAltitude": 7700,
                                                          "lat": 35.747754,
                                                          "lon": -97.26254,
                                                          "heading": 219,
                                                          "speed": 271,
                                                          "verticalRate": -1960,
                                                          "squawk": "0563",
                                                          "onGround": false,
                                                          "isMilitary": true,
                                                          "positionTime": 1659815603276
                                                      }
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/range/:lat/:lon/:range"
                                                  description="Get all aircraft in a range (up to 500km) of a center point"
                                                  parameters={[
                                                      {name: 'lat', description: 'Latitude'},
                                                      {name: 'lon', description: 'Longitude'},
                                                      {
                                                          name: 'range',
                                                          description: 'Range in KM ,up to 500km (Sorry, no caveman units)'
                                                      },
                                                  ]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-range',
                                                      limit: 5,
                                                      timeSeconds: 60
                                                  }}
                                                  response={[
                                                      {
                                                          "icao": "471F84",
                                                          "reg": "HA-LYI",
                                                          "type": "A320",
                                                          "callsign": "WZZ4680",
                                                          "baroAltitude": 29050,
                                                          "lat": 53.283325,
                                                          "lon": -0.694885,
                                                          "heading": 105,
                                                          "speed": 482.7,
                                                          "verticalRate": 1728,
                                                          "squawk": "4617",
                                                          "onGround": false,
                                                          "isMilitary": false,
                                                          "positionTime": 1659815680022
                                                      },
                                                      {
                                                          "icao": "398566",
                                                          "reg": "F-HBLG",
                                                          "type": "E190",
                                                          "callsign": "AFR53VQ",
                                                          "baroAltitude": 38000,
                                                          "lat": 53.265244,
                                                          "lon": -1.041962,
                                                          "heading": 331.1,
                                                          "speed": 430,
                                                          "verticalRate": -64,
                                                          "squawk": "5631",
                                                          "onGround": false,
                                                          "isMilitary": false,
                                                          "positionTime": 1659815677931
                                                      },
                                                      {
                                                          "icao": "406EE5",
                                                          "reg": "G-GDAC",
                                                          "type": "AA5",
                                                          "callsign": "GGDAC",
                                                          "baroAltitude": 2600,
                                                          "lat": 52.974106,
                                                          "lon": -0.932159,
                                                          "heading": 359,
                                                          "speed": 110,
                                                          "verticalRate": -64,
                                                          "squawk": "4571",
                                                          "onGround": false,
                                                          "isMilitary": false,
                                                          "positionTime": 1659815665959
                                                      }
                                                  ]}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/stats"
                                                  description="Total aircraft currently being tracked"
                                                  parameters={[]}
                                                  body={null}
                                                  rateLimit={null}
                                                  response={{
                                                      "liveAircraft": 18815
                                                  }}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-center">Ship Tracking</h3>
                                </div>
                                <div className="card-body">
                                    <h3 className="text-center">Information</h3>
                                    <p>This API Endpoints allow you to get live ship information</p>
                                    <hr/>
                                    <h3 className="text-center">Endpoints</h3>
                                    <EndpointCard method="GET"
                                                  path="/v1/ship/:mmsi"
                                                  description="Get information of a ship by MMSI"
                                                  parameters={[{name: 'mmsi', description: 'Ship MMSI'}]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'ship-live',
                                                      limit: 20,
                                                      timeSeconds: 60
                                                  }}
                                                  response={{
                                                      "mmsi": 204201370,
                                                      "timestamp": "2023-08-03 10:52:09 GMT",
                                                      "longitude": -25.14874,
                                                      "latitude": 36.94479,
                                                      "courseOverGround": 25.860000000000003,
                                                      "speedOverGround": 0,
                                                      "heading": null,
                                                      "rateOfTurn": 128,
                                                      "navigationalStatus": 15,
                                                      "imoNumber": 0,
                                                      "name": "SANTO ONOFRE",
                                                      "callSign": "CUSL8",
                                                      "type": 0,
                                                      "dimensionToBow": 6,
                                                      "dimensionToStern": 10,
                                                      "dimensionToPort": 3,
                                                      "dimensionToStarboard": 3,
                                                      "draught": 0,
                                                      "destination": "",
                                                      "estimatedTimeOfArrival": "00-00 24:60"
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/ship/radius/:latitude/:longitude/:radius"
                                                  description="Get information of all ships in a radius of a center point"
                                                  parameters={[
                                                      {name: 'latitude', description: 'Center Point Latitude'},
                                                      {name: 'longitude', description: 'Center Point Longitude'},
                                                      {name: 'radius', description: 'Radius in KM ()'}]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'ship-live',
                                                      limit: 20,
                                                      timeSeconds: 60
                                                  }}
                                                  response={[
                                                      {
                                                          "mmsi": 269105740,
                                                          "timestamp": "2023-08-03 11:20:09 GMT",
                                                          "longitude": -25.14729,
                                                          "latitude": 36.94464,
                                                          "courseOverGround": 16.71,
                                                          "speedOverGround": 0.01,
                                                          "heading": null,
                                                          "rateOfTurn": 128,
                                                          "navigationalStatus": 15,
                                                          "imoNumber": 0,
                                                          "name": "BLUE ALLIGATOR",
                                                          "callSign": "HBY3777",
                                                          "type": 36,
                                                          "dimensionToBow": 8,
                                                          "dimensionToStern": 2,
                                                          "dimensionToPort": 2,
                                                          "dimensionToStarboard": 1,
                                                          "draught": 0,
                                                          "destination": "",
                                                          "estimatedTimeOfArrival": "00-00 00:00"
                                                      },
                                                      {
                                                          "mmsi": 204207760,
                                                          "timestamp": "2023-08-03 11:18:09 GMT",
                                                          "longitude": -25.14872,
                                                          "latitude": 36.94523,
                                                          "courseOverGround": 36,
                                                          "speedOverGround": 0,
                                                          "heading": null,
                                                          "rateOfTurn": 128,
                                                          "navigationalStatus": 15,
                                                          "imoNumber": 0,
                                                          "name": "BAIA DO SOL",
                                                          "callSign": "CUWH2",
                                                          "type": 30,
                                                          "dimensionToBow": 0,
                                                          "dimensionToStern": 0,
                                                          "dimensionToPort": 0,
                                                          "dimensionToStarboard": 0,
                                                          "draught": 0,
                                                          "destination": "",
                                                          "estimatedTimeOfArrival": "00-00 00:00"
                                                      },
                                                      {
                                                          "mmsi": 204206750,
                                                          "timestamp": "2023-08-03 11:20:24 GMT",
                                                          "longitude": -25.14877,
                                                          "latitude": 36.94461,
                                                          "courseOverGround": 12.129999999999999,
                                                          "speedOverGround": 0,
                                                          "heading": null,
                                                          "rateOfTurn": 128,
                                                          "navigationalStatus": 15,
                                                          "imoNumber": 0,
                                                          "name": "BAIA DA MAIA",
                                                          "callSign": "CUCZ6",
                                                          "type": 30,
                                                          "dimensionToBow": 0,
                                                          "dimensionToStern": 0,
                                                          "dimensionToPort": 0,
                                                          "dimensionToStarboard": 0,
                                                          "draught": 0,
                                                          "destination": "",
                                                          "estimatedTimeOfArrival": "00-00 24:60"
                                                      },
                                                      {
                                                          "mmsi": 204201370,
                                                          "timestamp": "2023-08-03 11:20:24 GMT",
                                                          "longitude": -25.14876,
                                                          "latitude": 36.94478,
                                                          "courseOverGround": 33.61,
                                                          "speedOverGround": 0,
                                                          "heading": null,
                                                          "rateOfTurn": 128,
                                                          "navigationalStatus": 15,
                                                          "imoNumber": 0,
                                                          "name": "SANTO ONOFRE",
                                                          "callSign": "CUSL8",
                                                          "type": 0,
                                                          "dimensionToBow": 6,
                                                          "dimensionToStern": 10,
                                                          "dimensionToPort": 3,
                                                          "dimensionToStarboard": 3,
                                                          "draught": 0,
                                                          "destination": "",
                                                          "estimatedTimeOfArrival": "00-00 24:60"
                                                      }
                                                  ]}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="text-center">Package Tracking</h3>
                                </div>
                                <div className="card-body">
                                    <h3 className="text-center">Information</h3>
                                    <p>This API Endpoints allow you to get information about mail parcels</p>
                                    <p>
                                        <b>WARNING:</b> This endpoint is a very early beta and might be removed at any time
                                    </p>
                                    <hr/>
                                    <h3 className="text-center">Endpoints</h3>
                                    <EndpointCard method="GET"
                                                  path="/v1/package/:trackingId"
                                                  description="Get information of all ships in a radius of a center point"
                                                  parameters={[
                                                      {name: 'trackingId', description: 'Tracking ID'}]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'package-track',
                                                      limit: 5,
                                                      timeSeconds: 3600
                                                  }}
                                                  response={{
                                                      "trackingId": "DW4550XXXXXXX",
                                                      "carrier": {
                                                          "services": [
                                                              {
                                                                  "slug": "portugal-post",
                                                                  "name": "Portugal Post - Portugal CTT"
                                                              }
                                                          ]
                                                      },
                                                      "status": "Delivered",
                                                      "daysInTransit": "5",
                                                      "eta": [],
                                                      "events": [
                                                          {
                                                              "location": "Centro de Tratamento Ponta Delgada",
                                                              "date": "2023-07-19T12:47:35Z",
                                                              "carrier": 0,
                                                              "status": "Delivered. The shipment has been delivered. The shipping process has ended."
                                                          },
                                                          {
                                                              "location": "Centro de Tratamento Ponta Delgada",
                                                              "date": "2023-07-19T07:24:36Z",
                                                              "carrier": 0,
                                                              "status": "Out for delivery. The shipment has been dispatched for delivery. It will be delivered during the day."
                                                          },
                                                          {
                                                              "location": "PTMRLP - (CO) C.O. LOURES-MARL (OLX)",
                                                              "date": "2023-07-17T07:44:27Z",
                                                              "carrier": 0,
                                                              "status": "In transit. It has left the operational center."
                                                          },
                                                          {
                                                              "location": "Centro de Tratamento Lisboa",
                                                              "date": "2023-07-17T00:33:22Z",
                                                              "carrier": 0,
                                                              "status": "In transit. It has arrived at the operational center."
                                                          },
                                                          {
                                                              "location": "C.O. MADRID J25",
                                                              "date": "2023-07-14T21:50:30Z",
                                                              "carrier": 0,
                                                              "status": "In transit. It has arrived at the operational center."
                                                          },
                                                          {
                                                              "location": "C.O. MADRID J25",
                                                              "date": "2023-07-14T21:46:28Z",
                                                              "carrier": 0,
                                                              "status": "In transit. It has left the operational center."
                                                          },
                                                          {
                                                              "location": "C.O. MADRID J25",
                                                              "date": "2023-07-14T21:44:33Z",
                                                              "carrier": 0,
                                                              "status": "In transit. It has arrived at the operational center."
                                                          },
                                                          {
                                                              "date": "2023-07-14T21:44:32Z",
                                                              "carrier": 0,
                                                              "status": "Accepted. The shipment has been accepted. The shipping process has been initiated."
                                                          },
                                                          {
                                                              "location": "999999",
                                                              "date": "2023-07-14T13:46:32Z",
                                                              "carrier": 0,
                                                              "status": "Waiting for entry at CTT. The information about the shipment has been received."
                                                          },
                                                          {
                                                              "date": "2023-07-14T12:21:39Z",
                                                              "carrier": 0,
                                                              "status": "Waiting for entry at CTT. The information about the shipment has been received."
                                                          }
                                                      ]
                                                  }}/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HomeLayout>
    );
}

export default Home;
