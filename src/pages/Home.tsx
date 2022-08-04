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
                        </div>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col-md-12">
                            <h2>Rate Limits</h2>
                            <p>Rate limits are currently not enforce, so please have common sense and dont make me enforce them</p>
                        </div>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col-md-12">
                            <h2>API URL and Versioning</h2>
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
                                                  response={{temporary: false}}/>
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
                                    <h3 className="text-center">Aircraft Database and Radar</h3>
                                </div>
                                <div className="card-body">
                                    <h3 className="text-center">Information</h3>
                                    <p>This API Endpoints allow you to get aircraft information</p>
                                    <p>Data used in the API is currently sourced from my own database and <a href="https://radar.facha.dev"
                                                                                                             target="_blank">Radar Server</a>
                                    </p>
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
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/icao/:icao"
                                                  description="Status and position of an airborne Aircraft for a specific ICAO HEX Code"
                                                  parameters={[{name: 'icao', description: 'Aircraft ICAO HEX'}]}
                                                  body={null}
                                                  response={{
                                                      "icao": "4D03CC",
                                                      "altitude": 33025,
                                                      "geometricAltitude": 33016,
                                                      "callsign": "NATO02",
                                                      "lat": 53.654022,
                                                      "lon": 3.953352,
                                                      "heading": 177,
                                                      "speed": 362.8,
                                                      "squawk": "0555",
                                                      "ground": false
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/reg/:reg"
                                                  description="Status and position of an airborne Aircraft for a specific Registration / Tail Number"
                                                  parameters={[{name: 'reg', description: 'Aircraft registration'}]}
                                                  body={null}
                                                  response={{
                                                      "icao": "4D03CC",
                                                      "altitude": 33025,
                                                      "geometricAltitude": 33016,
                                                      "callsign": "NATO02",
                                                      "lat": 53.654022,
                                                      "lon": 3.953352,
                                                      "heading": 177,
                                                      "speed": 362.8,
                                                      "squawk": "0555",
                                                      "ground": false
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/squawk/:squawk"
                                                  description="Status and position of an airborne Aircraft with a specific squawk"
                                                  parameters={[{name: 'squawk', description: 'Aircraft Squawk'}]}
                                                  body={null}
                                                  response={{
                                                      "aircraft": [
                                                          {
                                                              "icao": "C060B1",
                                                              "altitude": 17700,
                                                              "geometricAltitude": 17780,
                                                              "callsign": "POE718",
                                                              "lat": 42.548996,
                                                              "lon": -78.877342,
                                                              "heading": 348.7,
                                                              "speed": 290,
                                                              "squawk": "0555",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "AAB146",
                                                              "altitude": 12800,
                                                              "geometricAltitude": 12850,
                                                              "callsign": "SWA2047",
                                                              "lat": 41.49115,
                                                              "lon": -88.761414,
                                                              "heading": 61.7,
                                                              "speed": 385,
                                                              "squawk": "0555",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4D03CC",
                                                              "altitude": 33025,
                                                              "geometricAltitude": 33016,
                                                              "callsign": "NATO02",
                                                              "lat": 53.430038,
                                                              "lon": 4.15283,
                                                              "heading": 152,
                                                              "speed": 370,
                                                              "squawk": "0555",
                                                              "ground": false,
                                                              "military": true
                                                          }
                                                      ]
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/emergency"
                                                  description="Get live emergency aircraft (Squawk 7500/7600/7700)"
                                                  parameters={[]}
                                                  body={null}
                                                  response={{
                                                      "general": [],
                                                      "radioFailure": [],
                                                      "hijack": [
                                                          {
                                                              "icao": "ADA0A5",
                                                              "callsign": "N97742",
                                                              "squawk": "7500",
                                                              "ground": false,
                                                              "military": false
                                                          }
                                                      ]
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/nato-air-policing"
                                                  description="Get live military aircraft squaking NATO Air Policing / QRA (Squawk 1301-1327)"
                                                  parameters={[]}
                                                  body={null}
                                                  response={null}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HomeLayout>
    );
}

export default Home;
