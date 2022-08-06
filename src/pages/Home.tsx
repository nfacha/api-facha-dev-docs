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
                                    <h3 className="text-center">Aircraft Database and Radar</h3>
                                </div>
                                <div className="card-body">
                                    <h3 className="text-center">Information</h3>
                                    <p>This API Endpoints allow you to get aircraft information</p>
                                    <div className="alert alert-warning text-center mt-4">
                                        <span className="text-bold">Cache:</span> All Aircraft (database and live) queries are cached for 30 seconds!
                                        <br/>
                                        <small>This caching time can be adjusted per user with a valid use case</small>
                                    </div>
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
                                    <p className='text-center'><small>Some large queries might sometimes be slower (~1-2s), some changes will address this in the future</small></p>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/icao/:icao"
                                                  description="Status and position of an airborne Aircraft for a specific ICAO HEX Code"
                                                  parameters={[{name: 'icao', description: 'Aircraft ICAO HEX'}]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-query',
                                                      limit: 15,
                                                      timeSeconds: 60
                                                  }}
                                                  response={{
                                                      "icao": "710112",
                                                      "reg": "HZ-AK40",
                                                      "type": "B77W",
                                                      "callsign": "SVA118",
                                                      "baroAltitude": 35000,
                                                      "lat": 49.914871,
                                                      "lon": 6.011184,
                                                      "heading": 115,
                                                      "speed": 507,
                                                      "verticalRate": 0,
                                                      "squawk": "5211",
                                                      "onGround": false,
                                                      "isMilitary": false,
                                                      "positionTime": 1659815200002
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/reg/:reg"
                                                  description="Status and position of an airborne Aircraft for a specific Registration / Tail Number"
                                                  parameters={[{name: 'reg', description: 'Aircraft registration'}]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-query',
                                                      limit: 15,
                                                      timeSeconds: 60
                                                  }}
                                                  response={{
                                                      "icao": "710112",
                                                      "reg": "HZ-AK40",
                                                      "type": "B77W",
                                                      "callsign": "SVA118",
                                                      "baroAltitude": 35000,
                                                      "lat": 49.914871,
                                                      "lon": 6.011184,
                                                      "heading": 115,
                                                      "speed": 507,
                                                      "verticalRate": 0,
                                                      "squawk": "5211",
                                                      "onGround": false,
                                                      "isMilitary": false,
                                                      "positionTime": 1659815200002
                                                  }}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/squawk/:squawk"
                                                  description="Status and position of an airborne Aircraft with a specific squawk"
                                                  parameters={[{name: 'squawk', description: 'Aircraft Squawk'}]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-multiple',
                                                      limit: 10,
                                                      timeSeconds: 60
                                                  }}
                                                  response={[
                                                      {
                                                          "icao": "A8C625",
                                                          "reg": "N6645J",
                                                          "type": "P28A",
                                                          "callsign": "N6645J",
                                                          "baroAltitude": 0,
                                                          "lat": 38.726429,
                                                          "lon": -77.521979,
                                                          "heading": 318,
                                                          "speed": 0,
                                                          "verticalRate": 0,
                                                          "squawk": "1234",
                                                          "onGround": true,
                                                          "isMilitary": false,
                                                          "positionTime": 1659814824169
                                                      },
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
                                                          "squawk": "1234",
                                                          "onGround": false,
                                                          "isMilitary": false,
                                                          "positionTime": 1659815289166
                                                      }
                                                  ]}/>
                                    <EndpointCard method="GET"
                                                  path="/v1/aircraft/live/emergency"
                                                  description="Get live emergency aircraft (Squawk 7500/7600/7700)"
                                                  parameters={[]}
                                                  body={null}
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-emergency',
                                                      limit: 3,
                                                      timeSeconds: 60
                                                  }}
                                                  response={{
                                                      "general": [{"icao": "495152",
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
                                                          "positionTime": 1659815289166}],
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
                                                      limit: 1,
                                                      timeSeconds: 60
                                                  }}
                                                  response={[
                                                      {"icao": "495152",
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
                                                          "positionTime": 1659815289166}
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
                                                      {name: 'range', description: 'Range in KM ,up to 500km (Sorry, no caveman units)'},
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
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-stats',
                                                      limit: 1,
                                                      timeSeconds: 60
                                                  }}
                                                  response={{
                                                      "liveAircraft": 18815
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
