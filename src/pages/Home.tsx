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
                                        <span className="text-bold">Cache:</span> All Aircraft (database and live) queries are cached for 60 seconds!
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
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-query',
                                                      limit: 15,
                                                      timeSeconds: 60
                                                  }}
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
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-multiple',
                                                      limit: 10,
                                                      timeSeconds: 60
                                                  }}
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
                                                  rateLimit={{
                                                      bucket: 'aircraft-live-emergency',
                                                      limit: 3,
                                                      timeSeconds: 60
                                                  }}
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
                                                      {
                                                          "icao": "498453",
                                                          "altitude": 1900,
                                                          "geometricAltitude": 1900,
                                                          "squawk": "2466",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE58E4",
                                                          "altitude": 4650,
                                                          "geometricAltitude": 4709,
                                                          "callsign": "RNGR877",
                                                          "lat": 28.74107,
                                                          "lon": -96.907707,
                                                          "heading": 194,
                                                          "speed": 166,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE4EA7",
                                                          "altitude": 11100,
                                                          "geometricAltitude": 11171,
                                                          "callsign": "RNGR772",
                                                          "lat": 27.87236,
                                                          "lon": -97.217957,
                                                          "heading": 350,
                                                          "speed": 218,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE02D0",
                                                          "altitude": 21600,
                                                          "geometricAltitude": 21969,
                                                          "callsign": "SUMIT71",
                                                          "lat": 39.260651,
                                                          "lon": -104.997299,
                                                          "heading": 117,
                                                          "speed": 252,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE046C",
                                                          "altitude": 4825,
                                                          "geometricAltitude": 5005,
                                                          "callsign": "RAWHD78",
                                                          "lat": 36.739971,
                                                          "lon": -76.18544,
                                                          "heading": 359,
                                                          "speed": 276,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1FE3",
                                                          "altitude": 925,
                                                          "geometricAltitude": 1055,
                                                          "callsign": "72212",
                                                          "lat": 38.758392,
                                                          "lon": -77.182312,
                                                          "heading": 25.8,
                                                          "speed": 118,
                                                          "squawk": "0262",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1EBE",
                                                          "altitude": 12975,
                                                          "geometricAltitude": 13014,
                                                          "callsign": "BOMR873",
                                                          "lat": 28.096069,
                                                          "lon": -96.836823,
                                                          "heading": 301,
                                                          "speed": 221,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1FFB",
                                                          "altitude": 1375,
                                                          "geometricAltitude": 1485,
                                                          "callsign": "72236",
                                                          "lat": 44.933292,
                                                          "lon": -122.935471,
                                                          "heading": 15,
                                                          "speed": 101,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE6828",
                                                          "altitude": 8875,
                                                          "geometricAltitude": 8976,
                                                          "lat": 48.177889,
                                                          "lon": -122.645368,
                                                          "heading": 277.7,
                                                          "speed": 252,
                                                          "squawk": "4715",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE61F7",
                                                          "altitude": 8275,
                                                          "geometricAltitude": 8444,
                                                          "callsign": "KING73",
                                                          "lat": 40.859644,
                                                          "lon": -72.569317,
                                                          "heading": 61.7,
                                                          "speed": 191.5,
                                                          "squawk": "1200",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE51CA",
                                                          "altitude": 2950,
                                                          "geometricAltitude": 3021,
                                                          "callsign": "20414",
                                                          "lat": 47.076511,
                                                          "lon": -122.658058,
                                                          "heading": 255.8,
                                                          "speed": 94,
                                                          "squawk": "4726",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE5E89",
                                                          "altitude": 7800,
                                                          "geometricAltitude": 7880,
                                                          "callsign": "CRSBO21",
                                                          "lat": 43.561401,
                                                          "lon": -70.402878,
                                                          "heading": 263,
                                                          "speed": 212,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE06E1",
                                                          "altitude": 30000,
                                                          "geometricAltitude": 30189,
                                                          "callsign": "REY43",
                                                          "lat": 43.244469,
                                                          "lon": -121.181099,
                                                          "heading": 338,
                                                          "speed": 271,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE0404",
                                                          "altitude": 23950,
                                                          "geometricAltitude": 24021,
                                                          "callsign": "CACTUS2",
                                                          "lat": 36.884079,
                                                          "lon": -95.78833,
                                                          "heading": 180,
                                                          "speed": 227,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE67B7",
                                                          "altitude": 10875,
                                                          "geometricAltitude": 10955,
                                                          "lat": 48.184296,
                                                          "lon": -122.77933,
                                                          "heading": 274.5,
                                                          "speed": 243.8,
                                                          "squawk": "4625",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "3E9C00",
                                                          "altitude": 6500,
                                                          "geometricAltitude": 6500,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE0097",
                                                          "altitude": 21125,
                                                          "geometricAltitude": 21205,
                                                          "callsign": "TORO63",
                                                          "lat": 30.466511,
                                                          "lon": -97.863091,
                                                          "heading": 353,
                                                          "speed": 465,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE52DA",
                                                          "altitude": 2000,
                                                          "geometricAltitude": 2160,
                                                          "callsign": "G08830",
                                                          "lat": 39.587173,
                                                          "lon": -76.298981,
                                                          "heading": 351.4,
                                                          "speed": 130.2,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE270A",
                                                          "altitude": 1150,
                                                          "geometricAltitude": 1330,
                                                          "callsign": "C2312",
                                                          "lat": 27.16466,
                                                          "lon": -80.167503,
                                                          "heading": 103,
                                                          "speed": 141,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE0819",
                                                          "altitude": 24000,
                                                          "geometricAltitude": 24169,
                                                          "callsign": "TITUS65",
                                                          "lat": 14.150162,
                                                          "lon": -87.938934,
                                                          "heading": 279.8,
                                                          "speed": 243.5,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFCCE",
                                                          "altitude": 22000,
                                                          "geometricAltitude": 22071,
                                                          "callsign": "VANDY15",
                                                          "lat": 35.642166,
                                                          "lon": -97.087494,
                                                          "heading": 6.3,
                                                          "speed": 253.6,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE01FC",
                                                          "altitude": 9950,
                                                          "geometricAltitude": 9950,
                                                          "callsign": "MAGOO66",
                                                          "lat": 28.7941,
                                                          "lon": -100.346703,
                                                          "heading": 187,
                                                          "speed": 254,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE27F3",
                                                          "altitude": 200,
                                                          "geometricAltitude": 301,
                                                          "callsign": "C6002",
                                                          "lat": 29.751434,
                                                          "lon": -90.019867,
                                                          "heading": 133.4,
                                                          "speed": 96,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "43EC2B",
                                                          "altitude": 15200,
                                                          "geometricAltitude": 15280,
                                                          "callsign": "ORT03A",
                                                          "lat": 51.41826,
                                                          "lon": -1.33677,
                                                          "heading": 165,
                                                          "speed": 313,
                                                          "squawk": "7654",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE0586",
                                                          "altitude": 6525,
                                                          "geometricAltitude": 6525,
                                                          "squawk": "5330",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE00D1",
                                                          "altitude": 20050,
                                                          "geometricAltitude": 20130,
                                                          "callsign": "TORO56",
                                                          "lat": 30.925859,
                                                          "lon": -97.932678,
                                                          "heading": 332,
                                                          "speed": 454,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE54F9",
                                                          "altitude": 10525,
                                                          "geometricAltitude": 10596,
                                                          "callsign": "BOMR871",
                                                          "lat": 27.891451,
                                                          "lon": -96.991814,
                                                          "heading": 300,
                                                          "speed": 179,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE07E9",
                                                          "altitude": 22350,
                                                          "geometricAltitude": 22480,
                                                          "callsign": "COHO21",
                                                          "lat": 43.42424,
                                                          "lon": -88.930428,
                                                          "heading": 291,
                                                          "speed": 415,
                                                          "squawk": "6253",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE138D",
                                                          "altitude": 27850,
                                                          "geometricAltitude": 28010,
                                                          "callsign": "TSTR12",
                                                          "lat": 38.305248,
                                                          "lon": -75.997337,
                                                          "heading": 284,
                                                          "speed": 469,
                                                          "squawk": "0154",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1E6B",
                                                          "altitude": 1400,
                                                          "geometricAltitude": 1459,
                                                          "callsign": "RFNK754",
                                                          "lat": 28.932871,
                                                          "lon": -97.017029,
                                                          "heading": 136,
                                                          "speed": 122,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFD71",
                                                          "altitude": 11375,
                                                          "geometricAltitude": 11744,
                                                          "callsign": "PAT716",
                                                          "lat": 39.274017,
                                                          "lon": -104.969467,
                                                          "heading": 59,
                                                          "speed": 227.8,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFE8E",
                                                          "altitude": 7200,
                                                          "geometricAltitude": 7481,
                                                          "callsign": "PAT280",
                                                          "lat": 41.114227,
                                                          "lon": -104.756836,
                                                          "heading": 96.1,
                                                          "speed": 166,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "E400D9",
                                                          "altitude": 18825,
                                                          "geometricAltitude": 18875,
                                                          "callsign": "FAB01",
                                                          "lat": -22.568848,
                                                          "lon": -47.075169,
                                                          "heading": 353.9,
                                                          "speed": 387.1,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE05A3",
                                                          "altitude": 19975,
                                                          "geometricAltitude": 20085,
                                                          "lat": 44.608309,
                                                          "lon": -86.760775,
                                                          "heading": 220.3,
                                                          "speed": 375.3,
                                                          "squawk": "2440",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE0AB7",
                                                          "altitude": 1200,
                                                          "geometricAltitude": 1200,
                                                          "squawk": "1200",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "E4012D",
                                                          "altitude": 40000,
                                                          "geometricAltitude": 40169,
                                                          "lat": -19.149216,
                                                          "lon": -48.044112,
                                                          "heading": 354,
                                                          "speed": 438.4,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE4A13",
                                                          "altitude": 9975,
                                                          "geometricAltitude": 10005,
                                                          "callsign": "RNGR715",
                                                          "lat": 28.444441,
                                                          "lon": -97.295731,
                                                          "heading": 117,
                                                          "speed": 172,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE0110",
                                                          "altitude": 475,
                                                          "geometricAltitude": 635,
                                                          "callsign": "SCORE10",
                                                          "lat": 38.317703,
                                                          "lon": -76.36142,
                                                          "heading": 230.3,
                                                          "speed": 139,
                                                          "squawk": "0156",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE6004",
                                                          "altitude": 4900,
                                                          "geometricAltitude": 5060,
                                                          "callsign": "G20917",
                                                          "lat": 39.921387,
                                                          "lon": -77.47522,
                                                          "heading": 73.7,
                                                          "speed": 121.8,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE10B7",
                                                          "altitude": 22000,
                                                          "geometricAltitude": 22160,
                                                          "callsign": "ELVIS51",
                                                          "lat": 34.636551,
                                                          "lon": -87.96524,
                                                          "heading": 270.2,
                                                          "speed": 464,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1192",
                                                          "altitude": 38400,
                                                          "geometricAltitude": 38660,
                                                          "callsign": "LOBO474",
                                                          "lat": 36.62851,
                                                          "lon": -78.314667,
                                                          "heading": 326.3,
                                                          "speed": 358,
                                                          "squawk": "0555",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE54C5",
                                                          "altitude": 2850,
                                                          "geometricAltitude": 3039,
                                                          "callsign": "EVAL53",
                                                          "lat": 34.856918,
                                                          "lon": -86.761566,
                                                          "heading": 177,
                                                          "speed": 154.1,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1173",
                                                          "altitude": 13888,
                                                          "geometricAltitude": 13918,
                                                          "callsign": "MCFAMC",
                                                          "lat": 21.282234,
                                                          "lon": -157.339153,
                                                          "speed": 387,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1119",
                                                          "altitude": 10550,
                                                          "geometricAltitude": 10621,
                                                          "callsign": "TIGER21",
                                                          "lat": 29.181061,
                                                          "lon": -99.993652,
                                                          "heading": 137,
                                                          "speed": 252,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE2008",
                                                          "altitude": 8300,
                                                          "geometricAltitude": 8539,
                                                          "callsign": "72249",
                                                          "lat": 32.829988,
                                                          "lon": -107.210251,
                                                          "heading": 339.2,
                                                          "speed": 131.9,
                                                          "squawk": "1200",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFDC0",
                                                          "altitude": 5900,
                                                          "geometricAltitude": 6110,
                                                          "callsign": "ROLER13",
                                                          "lat": 40.12542,
                                                          "lon": -112.073776,
                                                          "heading": 176,
                                                          "speed": 205,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE60EC",
                                                          "altitude": 34200,
                                                          "geometricAltitude": 34209,
                                                          "callsign": "160490",
                                                          "lat": 33.517044,
                                                          "lon": -117.50032,
                                                          "heading": 52,
                                                          "speed": 142.7,
                                                          "squawk": "1200",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE0235",
                                                          "altitude": 25975,
                                                          "geometricAltitude": 25984,
                                                          "callsign": "ORCA03",
                                                          "lat": 42.293793,
                                                          "lon": -124.512741,
                                                          "heading": 179,
                                                          "speed": 421,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1F3F",
                                                          "altitude": 1300,
                                                          "geometricAltitude": 1531,
                                                          "callsign": "LUNAR48",
                                                          "lat": 35.83786,
                                                          "lon": -78.376183,
                                                          "heading": 87,
                                                          "speed": 119,
                                                          "squawk": "1200",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE5AD5",
                                                          "altitude": 625,
                                                          "geometricAltitude": 675,
                                                          "callsign": "SHINR11",
                                                          "lat": 30.186131,
                                                          "lon": -97.67395,
                                                          "heading": 44,
                                                          "speed": 72,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1746",
                                                          "altitude": 10125,
                                                          "geometricAltitude": 10125,
                                                          "callsign": "TIGER27",
                                                          "lat": 28.831699,
                                                          "lon": -100.133728,
                                                          "heading": 113,
                                                          "speed": 188,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1468",
                                                          "altitude": 10850,
                                                          "geometricAltitude": 11019,
                                                          "lat": 37.775419,
                                                          "lon": -77.661995,
                                                          "heading": 96.4,
                                                          "speed": 381.4,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE5D75",
                                                          "altitude": 850,
                                                          "geometricAltitude": 900,
                                                          "callsign": "G20876",
                                                          "lat": 44.923828,
                                                          "lon": -73.086945,
                                                          "heading": 167.4,
                                                          "speed": 92,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1E93",
                                                          "altitude": 17975,
                                                          "geometricAltitude": 18025,
                                                          "callsign": "PREY21",
                                                          "lat": 29.216089,
                                                          "lon": -97.895081,
                                                          "heading": 1,
                                                          "speed": 216,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE5D9B",
                                                          "altitude": 4900,
                                                          "geometricAltitude": 5051,
                                                          "callsign": "G20913",
                                                          "lat": 39.953751,
                                                          "lon": -77.194824,
                                                          "heading": 73.9,
                                                          "speed": 144.9,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "C2B3B9",
                                                          "altitude": 33000,
                                                          "geometricAltitude": 33110,
                                                          "callsign": "CFC4163",
                                                          "lat": 56.167053,
                                                          "lon": -7.455472,
                                                          "heading": 104,
                                                          "speed": 503,
                                                          "squawk": "2240",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE612B",
                                                          "callsign": "53460472",
                                                          "squawk": "0121",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFE93",
                                                          "altitude": 22000,
                                                          "geometricAltitude": 22101,
                                                          "callsign": "PAT310",
                                                          "lat": 37.105774,
                                                          "lon": -87.868896,
                                                          "heading": 242.1,
                                                          "speed": 255.9,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "E40000",
                                                          "altitude": 6025,
                                                          "geometricAltitude": 6164,
                                                          "callsign": "PTVSO",
                                                          "lat": -19.507296,
                                                          "lon": -47.700588,
                                                          "heading": 137.9,
                                                          "speed": 70,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE60D6",
                                                          "altitude": 8475,
                                                          "geometricAltitude": 8514,
                                                          "callsign": "LDACE11",
                                                          "lat": 34.102844,
                                                          "lon": -117.743393,
                                                          "heading": 318,
                                                          "speed": 258.2,
                                                          "squawk": "4637",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE14B3",
                                                          "altitude": 7525,
                                                          "geometricAltitude": 7555,
                                                          "callsign": "MNTNA04",
                                                          "lat": 27.959129,
                                                          "lon": -98.029984,
                                                          "heading": 278,
                                                          "speed": 205,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "3B0BFF",
                                                          "callsign": "GTA6",
                                                          "lat": 43.655571,
                                                          "lon": 7.217539,
                                                          "heading": 213.8,
                                                          "speed": 8,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "7E50F5",
                                                          "altitude": 0,
                                                          "geometricAltitude": 89,
                                                          "callsign": "VFR",
                                                          "lat": 47.529007,
                                                          "lon": -122.298706,
                                                          "heading": 159,
                                                          "speed": 90,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE149E",
                                                          "altitude": 8975,
                                                          "geometricAltitude": 8996,
                                                          "callsign": "MNTNA42",
                                                          "lat": 28.43494,
                                                          "lon": -98.067627,
                                                          "heading": 134,
                                                          "speed": 216,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1D90",
                                                          "altitude": 17950,
                                                          "geometricAltitude": 18021,
                                                          "callsign": "DEEPC06",
                                                          "lat": 47.690999,
                                                          "lon": -123.29449,
                                                          "heading": 196,
                                                          "speed": 262.7,
                                                          "squawk": "4665",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFEBC",
                                                          "altitude": 35000,
                                                          "geometricAltitude": 35089,
                                                          "callsign": "PAT674",
                                                          "lat": 36.937134,
                                                          "lon": -95.8078,
                                                          "heading": 44,
                                                          "speed": 375.5,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE5B43",
                                                          "altitude": 2650,
                                                          "geometricAltitude": 2819,
                                                          "callsign": "LUNAR86",
                                                          "lat": 35.8564,
                                                          "lon": -95.174164,
                                                          "heading": 127.9,
                                                          "speed": 124,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE535D",
                                                          "altitude": 150,
                                                          "geometricAltitude": 239,
                                                          "callsign": "R20421",
                                                          "lat": 47.523739,
                                                          "lon": -122.492493,
                                                          "heading": 333,
                                                          "speed": 95,
                                                          "squawk": "4053",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE5D96",
                                                          "altitude": 4875,
                                                          "geometricAltitude": 5035,
                                                          "callsign": "G20908",
                                                          "lat": 39.94313,
                                                          "lon": -77.380493,
                                                          "heading": 89,
                                                          "speed": 119,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AEEB9A",
                                                          "altitude": 7975,
                                                          "geometricAltitude": 8034,
                                                          "callsign": "RUDY34",
                                                          "lat": 33.492325,
                                                          "lon": -118.586807,
                                                          "heading": 309.8,
                                                          "speed": 235.7,
                                                          "squawk": "4775",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFDED",
                                                          "altitude": 17700,
                                                          "geometricAltitude": 17919,
                                                          "callsign": "DAWG08",
                                                          "lat": 34.840019,
                                                          "lon": -79.488945,
                                                          "heading": 192,
                                                          "speed": 257,
                                                          "squawk": "0575",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE03EA",
                                                          "altitude": 20350,
                                                          "geometricAltitude": 20510,
                                                          "callsign": "CNV3472",
                                                          "lat": 38.17868,
                                                          "lon": -78.645103,
                                                          "heading": 232.9,
                                                          "speed": 220,
                                                          "squawk": "2170",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1397",
                                                          "altitude": 1350,
                                                          "geometricAltitude": 1510,
                                                          "callsign": "TSTR18",
                                                          "lat": 38.28273,
                                                          "lon": -76.357483,
                                                          "heading": 216,
                                                          "speed": 199,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE57D7",
                                                          "altitude": 23750,
                                                          "geometricAltitude": 23889,
                                                          "callsign": "WING19",
                                                          "lat": 40.627441,
                                                          "lon": -72.815002,
                                                          "heading": 38,
                                                          "speed": 205.8,
                                                          "squawk": "3342",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE2672",
                                                          "altitude": 2525,
                                                          "geometricAltitude": 2546,
                                                          "callsign": "C6524",
                                                          "lat": 37.040039,
                                                          "lon": -121.934387,
                                                          "heading": 96.3,
                                                          "speed": 126,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFEDB",
                                                          "altitude": 24000,
                                                          "geometricAltitude": 24089,
                                                          "callsign": "PAT298",
                                                          "lat": 38.020981,
                                                          "lon": -90.114014,
                                                          "heading": 208.1,
                                                          "speed": 271.1,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFE92",
                                                          "altitude": 16000,
                                                          "geometricAltitude": 16021,
                                                          "callsign": "R50093",
                                                          "lat": 34.666809,
                                                          "lon": -119.589371,
                                                          "heading": 319.9,
                                                          "speed": 264.8,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE06E7",
                                                          "altitude": 19425,
                                                          "geometricAltitude": 19585,
                                                          "callsign": "SCORE78",
                                                          "lat": 38.389618,
                                                          "lon": -75.768158,
                                                          "heading": 351.2,
                                                          "speed": 297.4,
                                                          "squawk": "0151",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "3B77F5",
                                                          "altitude": 23000,
                                                          "geometricAltitude": 22962,
                                                          "callsign": "CTM0072",
                                                          "lat": 47.199142,
                                                          "lon": 2.727974,
                                                          "heading": 165.8,
                                                          "speed": 241.6,
                                                          "squawk": "3323",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "3B7B3D",
                                                          "altitude": 1875,
                                                          "geometricAltitude": 1896,
                                                          "callsign": "MILAN78",
                                                          "lat": 43.794067,
                                                          "lon": 4.496666,
                                                          "heading": 266.3,
                                                          "speed": 214.8,
                                                          "squawk": "7074",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE266B",
                                                          "altitude": 0,
                                                          "geometricAltitude": 89,
                                                          "callsign": "C6517",
                                                          "lat": 47.565311,
                                                          "lon": -122.267197,
                                                          "heading": 11,
                                                          "speed": 1,
                                                          "squawk": "1200",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE07A3",
                                                          "altitude": 22500,
                                                          "geometricAltitude": 22441,
                                                          "lat": 47.17099,
                                                          "lon": -119.57032,
                                                          "heading": 59.3,
                                                          "speed": 453.1,
                                                          "squawk": "4775",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE58EE",
                                                          "altitude": 5350,
                                                          "geometricAltitude": 5380,
                                                          "callsign": "BOMR730",
                                                          "lat": 28.37899,
                                                          "lon": -97.697968,
                                                          "heading": 56,
                                                          "speed": 158,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE4E0B",
                                                          "altitude": 19025,
                                                          "geometricAltitude": 19084,
                                                          "lat": 42.140579,
                                                          "lon": -87.696179,
                                                          "heading": 351.6,
                                                          "speed": 277.8,
                                                          "squawk": "2540",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE5D93",
                                                          "altitude": 4875,
                                                          "geometricAltitude": 5005,
                                                          "callsign": "G20905",
                                                          "lat": 40.27169,
                                                          "lon": -76.973648,
                                                          "heading": 124,
                                                          "speed": 118,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE5E57",
                                                          "altitude": 6300,
                                                          "geometricAltitude": 6489,
                                                          "callsign": "GRIFN21",
                                                          "lat": 36.980621,
                                                          "lon": -76.345923,
                                                          "heading": 101,
                                                          "speed": 155,
                                                          "squawk": "5336",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE266E",
                                                          "altitude": 1325,
                                                          "geometricAltitude": 1284,
                                                          "callsign": "C6520",
                                                          "lat": 37.697441,
                                                          "lon": -121.813599,
                                                          "heading": 322,
                                                          "speed": 69.8,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "C2B20B",
                                                          "altitude": 2400,
                                                          "geometricAltitude": 2510,
                                                          "lat": 45.15148,
                                                          "lon": -64.59023,
                                                          "heading": 170.6,
                                                          "speed": 211,
                                                          "squawk": "0101",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "3B7B64",
                                                          "altitude": 10975,
                                                          "geometricAltitude": 10996,
                                                          "callsign": "BENGA97",
                                                          "lat": 42.322266,
                                                          "lon": 7.947485,
                                                          "heading": 115,
                                                          "speed": 263.9,
                                                          "squawk": "7075",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE6C13",
                                                          "altitude": 23000,
                                                          "geometricAltitude": 23169,
                                                          "callsign": "OTIS83",
                                                          "lat": 38.065842,
                                                          "lon": -75.458015,
                                                          "heading": 26,
                                                          "speed": 317,
                                                          "squawk": "6236",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE07E5",
                                                          "altitude": 35000,
                                                          "geometricAltitude": 35180,
                                                          "callsign": "EIDER30",
                                                          "lat": 38.083469,
                                                          "lon": -76.861809,
                                                          "heading": 29,
                                                          "speed": 457,
                                                          "squawk": "1522",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFF73",
                                                          "altitude": 5950,
                                                          "geometricAltitude": 6169,
                                                          "callsign": "TAIPAN1",
                                                          "lat": 34.413574,
                                                          "lon": -87.280212,
                                                          "heading": 250.7,
                                                          "speed": 325,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "43C5E7",
                                                          "altitude": 23975,
                                                          "geometricAltitude": 24144,
                                                          "callsign": "ASCOT436",
                                                          "lat": 53.57341,
                                                          "lon": -2.928092,
                                                          "heading": 168.2,
                                                          "speed": 367.7,
                                                          "squawk": "6401",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE146A",
                                                          "altitude": 1425,
                                                          "geometricAltitude": 1325,
                                                          "callsign": "77172",
                                                          "lat": 38.200581,
                                                          "lon": -121.86895,
                                                          "heading": 75,
                                                          "speed": 254,
                                                          "squawk": "5201",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE145A",
                                                          "altitude": 32028,
                                                          "geometricAltitude": 32179,
                                                          "callsign": "MCFAMC",
                                                          "lat": 53.842449,
                                                          "lon": 169.757824,
                                                          "heading": 233,
                                                          "speed": 454,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFFC0",
                                                          "altitude": 14250,
                                                          "geometricAltitude": 14401,
                                                          "callsign": "OCTNE11",
                                                          "lat": 29.977449,
                                                          "lon": -100.404114,
                                                          "heading": 187,
                                                          "speed": 436,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE0610",
                                                          "altitude": 2800,
                                                          "geometricAltitude": 2880,
                                                          "callsign": "SKIER93",
                                                          "lat": 43.276249,
                                                          "lon": -70.856583,
                                                          "heading": 278,
                                                          "speed": 178,
                                                          "squawk": "5546",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "43C908",
                                                          "altitude": 19000,
                                                          "geometricAltitude": 19110,
                                                          "callsign": "RRR7407",
                                                          "lat": 52.408173,
                                                          "lon": -2.16423,
                                                          "heading": 147,
                                                          "speed": 273.8,
                                                          "squawk": "7763",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE01D5",
                                                          "altitude": 33000,
                                                          "geometricAltitude": 33121,
                                                          "callsign": "COBRA49",
                                                          "lat": 42.677719,
                                                          "lon": -87.213409,
                                                          "heading": 84.3,
                                                          "speed": 497.3,
                                                          "squawk": "2444",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1D97",
                                                          "altitude": 26000,
                                                          "geometricAltitude": 26021,
                                                          "lat": 41.390712,
                                                          "lon": 24.367229,
                                                          "heading": 166.4,
                                                          "speed": 364.1,
                                                          "squawk": "3663",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE056B",
                                                          "altitude": 8800,
                                                          "geometricAltitude": 8969,
                                                          "lat": 38.05138,
                                                          "lon": -75.6918,
                                                          "heading": 205.5,
                                                          "speed": 377.6,
                                                          "squawk": "3507",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE172C",
                                                          "altitude": 10375,
                                                          "geometricAltitude": 10425,
                                                          "callsign": "FANGS99",
                                                          "lat": 29.059681,
                                                          "lon": -97.944252,
                                                          "heading": 18,
                                                          "speed": 106,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE61B3",
                                                          "altitude": 17125,
                                                          "geometricAltitude": 17494,
                                                          "callsign": "CONGO63",
                                                          "lat": 38.953262,
                                                          "lon": -104.825211,
                                                          "heading": 3,
                                                          "speed": 120,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE10E5",
                                                          "altitude": 24975,
                                                          "geometricAltitude": 25276,
                                                          "callsign": "GREY19",
                                                          "lat": 32.367508,
                                                          "lon": -108.076135,
                                                          "heading": 103.7,
                                                          "speed": 270.9,
                                                          "squawk": "4206",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1254",
                                                          "altitude": 9275,
                                                          "geometricAltitude": 9435,
                                                          "callsign": "MAVRK27",
                                                          "lat": 46.588261,
                                                          "lon": -92.119827,
                                                          "heading": 45,
                                                          "speed": 283,
                                                          "squawk": "4510",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE07E2",
                                                          "altitude": 36000,
                                                          "geometricAltitude": 36021,
                                                          "callsign": "SLAM95",
                                                          "lat": 31.366293,
                                                          "lon": -122.386269,
                                                          "heading": 257,
                                                          "speed": 454,
                                                          "squawk": "7254",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE63B1",
                                                          "altitude": 6875,
                                                          "geometricAltitude": 7026,
                                                          "callsign": "FUNNY64",
                                                          "lat": 39.382645,
                                                          "lon": -74.401855,
                                                          "heading": 27,
                                                          "speed": 274,
                                                          "squawk": "1720",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE202C",
                                                          "altitude": 3425,
                                                          "geometricAltitude": 3576,
                                                          "callsign": "00085",
                                                          "lat": 39.3815,
                                                          "lon": -75.018234,
                                                          "heading": 323,
                                                          "speed": 65,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "356342",
                                                          "altitude": 40025,
                                                          "geometricAltitude": 39987,
                                                          "callsign": "AME4528",
                                                          "lat": 55.515452,
                                                          "lon": 13.442974,
                                                          "heading": 253.3,
                                                          "speed": 413.5,
                                                          "squawk": "3511",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFE55",
                                                          "altitude": 5875,
                                                          "geometricAltitude": 5985,
                                                          "callsign": "PAT672",
                                                          "lat": 46.126923,
                                                          "lon": -123.884117,
                                                          "heading": 4,
                                                          "speed": 198,
                                                          "squawk": "4702",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE222C",
                                                          "altitude": 18250,
                                                          "geometricAltitude": 18419,
                                                          "callsign": "SCORE84",
                                                          "lat": 37.7715,
                                                          "lon": -76.39542,
                                                          "heading": 221,
                                                          "speed": 415.5,
                                                          "squawk": "7772",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1112",
                                                          "altitude": 0,
                                                          "geometricAltitude": 39,
                                                          "callsign": "BILLY01",
                                                          "lat": 29.526939,
                                                          "lon": -98.28582,
                                                          "heading": 150,
                                                          "speed": 61,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFDD0",
                                                          "altitude": 28000,
                                                          "geometricAltitude": 28080,
                                                          "callsign": "PAT400",
                                                          "lat": 31.190781,
                                                          "lon": -92.751862,
                                                          "heading": 251,
                                                          "speed": 280,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE0454",
                                                          "altitude": 725,
                                                          "geometricAltitude": 914,
                                                          "callsign": "GRYHK35",
                                                          "lat": 36.937939,
                                                          "lon": -76.238548,
                                                          "heading": 269,
                                                          "speed": 115,
                                                          "squawk": "5354",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE088A",
                                                          "altitude": 15775,
                                                          "geometricAltitude": 15825,
                                                          "callsign": "GOAT18",
                                                          "lat": 28.803169,
                                                          "lon": -98.034828,
                                                          "heading": 67,
                                                          "speed": 245,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1E54",
                                                          "altitude": 15950,
                                                          "geometricAltitude": 15989,
                                                          "callsign": "FANGS69",
                                                          "lat": 29.057831,
                                                          "lon": -98.132469,
                                                          "heading": 186,
                                                          "speed": 257,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE26AE",
                                                          "altitude": 521,
                                                          "geometricAltitude": 672,
                                                          "callsign": "C6588",
                                                          "lat": 39.576302,
                                                          "lon": -74.679604,
                                                          "heading": 122,
                                                          "speed": 88,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "43C769",
                                                          "altitude": 3425,
                                                          "geometricAltitude": 3535,
                                                          "callsign": "HARP92",
                                                          "lat": 51.143219,
                                                          "lon": -2.644958,
                                                          "heading": 260.1,
                                                          "speed": 132,
                                                          "squawk": "7422",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFE52",
                                                          "altitude": 25000,
                                                          "geometricAltitude": 25169,
                                                          "callsign": "SLICK46",
                                                          "lat": 40.933136,
                                                          "lon": -82.515442,
                                                          "heading": 123,
                                                          "speed": 286,
                                                          "squawk": "3132",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE08FA",
                                                          "altitude": 25000,
                                                          "geometricAltitude": 25151,
                                                          "callsign": "PAT845",
                                                          "lat": 42.060558,
                                                          "lon": -75.736618,
                                                          "heading": 37,
                                                          "speed": 271.6,
                                                          "squawk": "6572",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE5775",
                                                          "altitude": 24000,
                                                          "geometricAltitude": 24110,
                                                          "callsign": "PAT370",
                                                          "lat": 30.990049,
                                                          "lon": -93.445511,
                                                          "heading": 251,
                                                          "speed": 269,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1425",
                                                          "altitude": 1175,
                                                          "geometricAltitude": 1214,
                                                          "callsign": "GOAT11",
                                                          "lat": 29.42555,
                                                          "lon": -98.596123,
                                                          "heading": 161,
                                                          "speed": 112,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE13CE",
                                                          "altitude": 1700,
                                                          "geometricAltitude": 1739,
                                                          "callsign": "FANGS16",
                                                          "lat": 29.55899,
                                                          "lon": -98.309151,
                                                          "heading": 149,
                                                          "speed": 201,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE6475",
                                                          "altitude": 26000,
                                                          "geometricAltitude": 26071,
                                                          "callsign": "KING43",
                                                          "lat": 31.318439,
                                                          "lon": -96.04451,
                                                          "heading": 278,
                                                          "speed": 328,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "43CF30",
                                                          "altitude": 400,
                                                          "geometricAltitude": 598,
                                                          "callsign": "NGTHWK59",
                                                          "lat": 50.346385,
                                                          "lon": -4.240129,
                                                          "heading": 139.7,
                                                          "speed": 122.5,
                                                          "squawk": "1177",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFE51",
                                                          "altitude": 100,
                                                          "geometricAltitude": 230,
                                                          "callsign": "PAT322",
                                                          "lat": 38.7242,
                                                          "lon": -77.19342,
                                                          "heading": 325.4,
                                                          "speed": 114.6,
                                                          "squawk": "2572",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE01AA",
                                                          "altitude": 18025,
                                                          "geometricAltitude": 18244,
                                                          "callsign": "SPAR721",
                                                          "lat": 35.777435,
                                                          "lon": -79.177887,
                                                          "heading": 113.1,
                                                          "speed": 363.3,
                                                          "squawk": "2141",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "E40139",
                                                          "altitude": 2250,
                                                          "geometricAltitude": 2448,
                                                          "lat": -20.095111,
                                                          "lon": -45.017278,
                                                          "heading": 150,
                                                          "speed": 423.8,
                                                          "squawk": "2057",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE2006",
                                                          "altitude": 4250,
                                                          "geometricAltitude": 4481,
                                                          "callsign": "72247",
                                                          "lat": 32.278973,
                                                          "lon": -106.932734,
                                                          "heading": 77.7,
                                                          "speed": 3,
                                                          "squawk": "1200",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE2022",
                                                          "altitude": 925,
                                                          "geometricAltitude": 1105,
                                                          "callsign": "72208",
                                                          "lat": 39.190189,
                                                          "lon": -76.950928,
                                                          "heading": 40.3,
                                                          "speed": 57,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1479",
                                                          "altitude": 41000,
                                                          "geometricAltitude": 41290,
                                                          "callsign": "VM767",
                                                          "lat": 34.77066,
                                                          "lon": -83.936462,
                                                          "heading": 58,
                                                          "speed": 385,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE03F0",
                                                          "altitude": 20000,
                                                          "geometricAltitude": 20021,
                                                          "callsign": "CNV6529",
                                                          "lat": 38.986588,
                                                          "lon": 14.92839,
                                                          "heading": 287.1,
                                                          "speed": 287.8,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE11AD",
                                                          "altitude": 0,
                                                          "geometricAltitude": 39,
                                                          "callsign": "GOAT14",
                                                          "lat": 29.526649,
                                                          "lon": -98.286812,
                                                          "heading": 151,
                                                          "speed": 71,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "48D821",
                                                          "altitude": 10977,
                                                          "geometricAltitude": 11116,
                                                          "callsign": "FENIX30",
                                                          "lat": 50.2845,
                                                          "lon": 21.6287,
                                                          "heading": 315,
                                                          "speed": 166,
                                                          "squawk": "2662",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE06EC",
                                                          "altitude": 43000,
                                                          "geometricAltitude": 42844,
                                                          "lat": -1.773262,
                                                          "lon": -167.663383,
                                                          "heading": 201.9,
                                                          "speed": 439,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE0453",
                                                          "altitude": 800,
                                                          "geometricAltitude": 989,
                                                          "callsign": "RAWHD71",
                                                          "lat": 36.932171,
                                                          "lon": -76.308891,
                                                          "heading": 185,
                                                          "speed": 123,
                                                          "squawk": "4613",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADF823",
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADF991",
                                                          "altitude": 0,
                                                          "geometricAltitude": 0,
                                                          "callsign": "11111111",
                                                          "squawk": "5555",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "3B13FF",
                                                          "callsign": "MOUET1",
                                                          "lat": 43.661087,
                                                          "lon": 7.207175,
                                                          "heading": 345.8,
                                                          "speed": 3.5,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "3B23FF",
                                                          "callsign": "MOUET2",
                                                          "lat": 43.662003,
                                                          "lon": 7.208772,
                                                          "heading": 338.2,
                                                          "speed": 2.5,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "4984C4",
                                                          "altitude": -800,
                                                          "geometricAltitude": -800,
                                                          "squawk": "6566",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE5E0A",
                                                          "altitude": 600,
                                                          "geometricAltitude": 680,
                                                          "callsign": "PACK41",
                                                          "lat": 43.110439,
                                                          "lon": -70.849716,
                                                          "heading": 149,
                                                          "speed": 136,
                                                          "squawk": "1472",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE5FAE",
                                                          "altitude": 40000,
                                                          "geometricAltitude": 40071,
                                                          "callsign": "ROMA12",
                                                          "lat": 38.921585,
                                                          "lon": -92.213501,
                                                          "heading": 261.2,
                                                          "speed": 439.1,
                                                          "squawk": "7341",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE17A3",
                                                          "altitude": 4000,
                                                          "geometricAltitude": 4050,
                                                          "callsign": "DG41",
                                                          "lat": 52.425454,
                                                          "lon": 0.82625,
                                                          "heading": 277.1,
                                                          "speed": 300,
                                                          "squawk": "0441",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1313",
                                                          "altitude": 26300,
                                                          "geometricAltitude": 26259,
                                                          "callsign": "ZULU82",
                                                          "lat": 32.931427,
                                                          "lon": -114.228806,
                                                          "heading": 92,
                                                          "speed": 26,
                                                          "squawk": "0317",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFE91",
                                                          "altitude": 600,
                                                          "geometricAltitude": 639,
                                                          "callsign": "PAT496",
                                                          "lat": 45.3302,
                                                          "lon": -75.633568,
                                                          "heading": 18,
                                                          "speed": 111,
                                                          "squawk": "3065",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFE7B",
                                                          "altitude": 28000,
                                                          "geometricAltitude": 28139,
                                                          "callsign": "CODY01",
                                                          "lat": 44.662449,
                                                          "lon": -90.899513,
                                                          "heading": 299,
                                                          "speed": 287,
                                                          "squawk": "1653",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "7CF86A",
                                                          "altitude": 12575,
                                                          "geometricAltitude": 12726,
                                                          "callsign": "ASY595",
                                                          "lat": 39.394272,
                                                          "lon": -74.533386,
                                                          "heading": 250,
                                                          "speed": 363,
                                                          "squawk": "0717",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "43C6DF",
                                                          "altitude": 1250,
                                                          "geometricAltitude": 1360,
                                                          "callsign": "RASCAL04",
                                                          "lat": 51.063894,
                                                          "lon": -2.441864,
                                                          "heading": 150.5,
                                                          "speed": 97.6,
                                                          "squawk": "1624",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE1253",
                                                          "altitude": 30000,
                                                          "geometricAltitude": 30169,
                                                          "callsign": "TOPCT26",
                                                          "lat": 42.798569,
                                                          "lon": -104.529114,
                                                          "heading": 74.6,
                                                          "speed": 440.8,
                                                          "squawk": "",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "43C612",
                                                          "altitude": -50,
                                                          "geometricAltitude": 60,
                                                          "callsign": "VICTOR51",
                                                          "lat": 51.009201,
                                                          "lon": -2.64533,
                                                          "heading": 263.3,
                                                          "speed": 59.2,
                                                          "squawk": "7431",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "43C6F4",
                                                          "altitude": 9350,
                                                          "geometricAltitude": 9135,
                                                          "callsign": "RRR2110",
                                                          "lat": 34.426311,
                                                          "lon": 32.511063,
                                                          "heading": 91,
                                                          "speed": 350,
                                                          "squawk": "5355",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "43C1FC",
                                                          "altitude": 25,
                                                          "geometricAltitude": 164,
                                                          "callsign": "JNGLY30",
                                                          "lat": 50.581706,
                                                          "lon": -3.413705,
                                                          "heading": 285.5,
                                                          "speed": 49,
                                                          "squawk": "7420",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "ADFD7B",
                                                          "altitude": 1175,
                                                          "geometricAltitude": 1394,
                                                          "callsign": "PAT510",
                                                          "lat": 35.912247,
                                                          "lon": -78.737518,
                                                          "heading": 247,
                                                          "speed": 122,
                                                          "squawk": "7451",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE0674",
                                                          "altitude": 1475,
                                                          "geometricAltitude": 1614,
                                                          "callsign": "TOPCAT4",
                                                          "lat": 40.073559,
                                                          "lon": -74.586739,
                                                          "heading": 54,
                                                          "speed": 184,
                                                          "squawk": "1674",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "AE0565",
                                                          "altitude": 525,
                                                          "geometricAltitude": 664,
                                                          "callsign": "RCH808",
                                                          "lat": 39.167999,
                                                          "lon": -75.461098,
                                                          "heading": 182,
                                                          "speed": 137,
                                                          "squawk": "0535",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "447AC7",
                                                          "callsign": "FFMSNE",
                                                          "squawk": "7777",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "43C6FA",
                                                          "altitude": 2700,
                                                          "geometricAltitude": 2780,
                                                          "callsign": "RRR2143",
                                                          "lat": 51.75948,
                                                          "lon": -1.691437,
                                                          "heading": 112.1,
                                                          "speed": 239.7,
                                                          "squawk": "2006",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "43C1C6",
                                                          "altitude": 12000,
                                                          "geometricAltitude": 12080,
                                                          "callsign": "RRR821",
                                                          "lat": 54.400852,
                                                          "lon": -1.6075,
                                                          "heading": 87.1,
                                                          "speed": 300.4,
                                                          "squawk": "3311",
                                                          "ground": false,
                                                          "military": true
                                                      },
                                                      {
                                                          "icao": "43C38C",
                                                          "altitude": 10025,
                                                          "geometricAltitude": 10075,
                                                          "callsign": "RRR7241",
                                                          "lat": 53.185364,
                                                          "lon": -0.658081,
                                                          "heading": 224.8,
                                                          "speed": 229.8,
                                                          "squawk": "3611",
                                                          "ground": false,
                                                          "military": true
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
                                                  response={{
                                                      "aircraft": [
                                                          {
                                                              "icao": "4CA8D8",
                                                              "altitude": 1725,
                                                              "geometricAltitude": 1775,
                                                              "callsign": "RYR24QV",
                                                              "lat": 51.142914,
                                                              "lon": -0.235464,
                                                              "heading": 256,
                                                              "speed": 166,
                                                              "squawk": "",
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA302",
                                                              "altitude": 5925,
                                                              "geometricAltitude": 5916,
                                                              "callsign": "RYR72TW",
                                                              "lat": 53.70039,
                                                              "lon": 9.8217,
                                                              "heading": 251.9,
                                                              "speed": 244,
                                                              "squawk": "1126",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA84F",
                                                              "altitude": 9925,
                                                              "geometricAltitude": 10064,
                                                              "callsign": "RYR68CP",
                                                              "lat": 52.376587,
                                                              "lon": 20.851288,
                                                              "heading": 239.7,
                                                              "speed": 297.6,
                                                              "squawk": "7216",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAD3E",
                                                              "altitude": 10300,
                                                              "geometricAltitude": 10321,
                                                              "callsign": "RYR59KA",
                                                              "lat": 43.64859,
                                                              "lon": 5.205029,
                                                              "heading": 339.6,
                                                              "speed": 296,
                                                              "squawk": "6763",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA95E",
                                                              "altitude": 9150,
                                                              "geometricAltitude": 9319,
                                                              "callsign": "RYR8V",
                                                              "lat": 53.483398,
                                                              "lon": -6.24468,
                                                              "heading": 339,
                                                              "speed": 295,
                                                              "squawk": "",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA84E",
                                                              "altitude": 8600,
                                                              "geometricAltitude": 8591,
                                                              "callsign": "RYR7AA",
                                                              "lat": 41.674118,
                                                              "lon": 11.985897,
                                                              "heading": 240,
                                                              "speed": 328,
                                                              "squawk": "",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA2A9",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38021,
                                                              "callsign": "RYR8MX",
                                                              "lat": 37.50819,
                                                              "lon": -10.474,
                                                              "heading": 15,
                                                              "speed": 463,
                                                              "squawk": "4452",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA815",
                                                              "altitude": 18250,
                                                              "geometricAltitude": 18300,
                                                              "callsign": "RYR51QB",
                                                              "lat": 51.879181,
                                                              "lon": 1.088463,
                                                              "heading": 65,
                                                              "speed": 407,
                                                              "squawk": "5252",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA707",
                                                              "altitude": 20275,
                                                              "geometricAltitude": 20266,
                                                              "callsign": "RYR83UW",
                                                              "lat": 39.536453,
                                                              "lon": 3.495145,
                                                              "heading": 76,
                                                              "speed": 455,
                                                              "squawk": "",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA27C",
                                                              "altitude": 27000,
                                                              "geometricAltitude": 27050,
                                                              "callsign": "RYR2941",
                                                              "lat": 49.887589,
                                                              "lon": 3.46026,
                                                              "heading": 213,
                                                              "speed": 394,
                                                              "squawk": "7111",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA740",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 37962,
                                                              "callsign": "RYR4HY",
                                                              "lat": 40.604095,
                                                              "lon": -2.953247,
                                                              "heading": 318.2,
                                                              "speed": 447,
                                                              "squawk": "",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAA59",
                                                              "altitude": 31625,
                                                              "geometricAltitude": 31587,
                                                              "callsign": "RYR3BQ",
                                                              "lat": 39.937119,
                                                              "lon": -2.07454,
                                                              "heading": 118,
                                                              "speed": 434,
                                                              "squawk": "",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA704",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37110,
                                                              "callsign": "RYR8UH",
                                                              "lat": 43.026718,
                                                              "lon": -7.629883,
                                                              "heading": 195.7,
                                                              "speed": 422,
                                                              "squawk": "1652",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAD29",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 37991,
                                                              "callsign": "RYR456H",
                                                              "lat": 39.726841,
                                                              "lon": -3.57169,
                                                              "heading": 359,
                                                              "speed": 474,
                                                              "squawk": "4531",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA61B",
                                                              "altitude": 30425,
                                                              "geometricAltitude": 30416,
                                                              "callsign": "RYR26JC",
                                                              "lat": 42.321991,
                                                              "lon": -8.522949,
                                                              "heading": 6.8,
                                                              "speed": 446,
                                                              "squawk": "4723",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA6FD",
                                                              "altitude": 28075,
                                                              "geometricAltitude": 28155,
                                                              "callsign": "RYR2QP",
                                                              "lat": 52.579788,
                                                              "lon": 1.93718,
                                                              "heading": 38,
                                                              "speed": 494,
                                                              "squawk": "6216",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA256",
                                                              "altitude": 19525,
                                                              "geometricAltitude": 19516,
                                                              "callsign": "RYR2119",
                                                              "lat": 51.258297,
                                                              "lon": 4.901505,
                                                              "heading": 221,
                                                              "speed": 360,
                                                              "squawk": "2121",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA2BF",
                                                              "altitude": 27950,
                                                              "geometricAltitude": 27941,
                                                              "callsign": "RYR1819",
                                                              "lat": 51.103638,
                                                              "lon": 7.099543,
                                                              "heading": 123,
                                                              "speed": 454,
                                                              "squawk": "3150",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA2A7",
                                                              "altitude": 25150,
                                                              "geometricAltitude": 25289,
                                                              "callsign": "RYR8JH",
                                                              "lat": 52.674042,
                                                              "lon": -2.91611,
                                                              "heading": 183,
                                                              "speed": 386,
                                                              "squawk": "0511",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAD3C",
                                                              "altitude": 34400,
                                                              "geometricAltitude": 34450,
                                                              "callsign": "RYR3EE",
                                                              "lat": 50.883457,
                                                              "lon": 2.885742,
                                                              "heading": 114,
                                                              "speed": 474,
                                                              "squawk": "0565",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA4EC",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38198,
                                                              "callsign": "RYR54SN",
                                                              "lat": 51.020737,
                                                              "lon": -6.526459,
                                                              "heading": 358.1,
                                                              "speed": 458,
                                                              "squawk": "0525",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA80E",
                                                              "altitude": 35000,
                                                              "geometricAltitude": 35198,
                                                              "callsign": "RYR1KG",
                                                              "lat": 51.383469,
                                                              "lon": -5.59813,
                                                              "heading": 108.6,
                                                              "speed": 471,
                                                              "squawk": "4243",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAA57",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37021,
                                                              "callsign": "RYR34SY",
                                                              "lat": 50.889542,
                                                              "lon": 3.449781,
                                                              "heading": 108,
                                                              "speed": 465,
                                                              "squawk": "2242",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA4EE",
                                                              "altitude": 19925,
                                                              "geometricAltitude": 19946,
                                                              "callsign": "RYR79TC",
                                                              "lat": 40.800289,
                                                              "lon": 1.2663,
                                                              "heading": 219,
                                                              "speed": 389,
                                                              "squawk": "",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA648",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38021,
                                                              "callsign": "RYR87LQ",
                                                              "lat": 40.00774,
                                                              "lon": 3.81213,
                                                              "heading": 20,
                                                              "speed": 448,
                                                              "squawk": "5517",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAD3F",
                                                              "altitude": 36725,
                                                              "geometricAltitude": 36864,
                                                              "callsign": "RYR1CW",
                                                              "lat": 53.357529,
                                                              "lon": -2.274872,
                                                              "heading": 94,
                                                              "speed": 504,
                                                              "squawk": "4641",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAFC2",
                                                              "altitude": 34000,
                                                              "geometricAltitude": 34021,
                                                              "callsign": "RYR16MU",
                                                              "lat": 38.984344,
                                                              "lon": -12.210169,
                                                              "heading": 271.3,
                                                              "speed": 452.1,
                                                              "squawk": "4411",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA27B",
                                                              "altitude": 3775,
                                                              "geometricAltitude": 3944,
                                                              "callsign": "RYR446",
                                                              "lat": 53.426239,
                                                              "lon": -2.92392,
                                                              "heading": 89.4,
                                                              "speed": 229,
                                                              "squawk": "1462",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA56F",
                                                              "altitude": 37025,
                                                              "geometricAltitude": 37105,
                                                              "callsign": "RYR3508",
                                                              "lat": 49.711212,
                                                              "lon": 1.079407,
                                                              "heading": 144,
                                                              "speed": 428,
                                                              "squawk": "5733",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA741",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38021,
                                                              "callsign": "RYR2521",
                                                              "lat": 41.261627,
                                                              "lon": 0.716431,
                                                              "heading": 16,
                                                              "speed": 466,
                                                              "squawk": "",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA705",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 37991,
                                                              "callsign": "RYR97LR",
                                                              "lat": 41.581741,
                                                              "lon": 4.743535,
                                                              "heading": 43.7,
                                                              "speed": 468,
                                                              "squawk": "5573",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA4EB",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 37932,
                                                              "callsign": "RYR991N",
                                                              "lat": 35.181793,
                                                              "lon": -6.649414,
                                                              "heading": 27.1,
                                                              "speed": 470,
                                                              "squawk": "6421",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA64E",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37139,
                                                              "callsign": "RYR642P",
                                                              "lat": 49.938583,
                                                              "lon": -2.386414,
                                                              "heading": 213,
                                                              "speed": 370,
                                                              "squawk": "2255",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA61D",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 37903,
                                                              "callsign": "RYR7DU",
                                                              "lat": 39.679459,
                                                              "lon": -6.57347,
                                                              "heading": 55,
                                                              "speed": 468.5,
                                                              "squawk": "6272",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA7B4",
                                                              "altitude": 36000,
                                                              "geometricAltitude": 36050,
                                                              "callsign": "RYR41DE",
                                                              "lat": 42.874241,
                                                              "lon": 0.27427,
                                                              "heading": 338.1,
                                                              "speed": 456,
                                                              "squawk": "5522",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA56D",
                                                              "altitude": 32000,
                                                              "geometricAltitude": 31962,
                                                              "callsign": "RYR12DV",
                                                              "lat": 43.967377,
                                                              "lon": 0.74426,
                                                              "heading": 339,
                                                              "speed": 420,
                                                              "squawk": "5562",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA25A",
                                                              "altitude": 36000,
                                                              "geometricAltitude": 36169,
                                                              "callsign": "RYR9302",
                                                              "lat": 48.729492,
                                                              "lon": 19.802645,
                                                              "heading": 297,
                                                              "speed": 410,
                                                              "squawk": "6150",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA7B5",
                                                              "altitude": 36000,
                                                              "geometricAltitude": 36050,
                                                              "callsign": "RYR79HP",
                                                              "lat": 43.0914,
                                                              "lon": 0.31841,
                                                              "heading": 52,
                                                              "speed": 467,
                                                              "squawk": "3373",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA2A8",
                                                              "altitude": 75,
                                                              "geometricAltitude": 244,
                                                              "callsign": "RYR6692",
                                                              "lat": 53.420238,
                                                              "lon": -6.25012,
                                                              "heading": 66.7,
                                                              "speed": 128,
                                                              "squawk": "",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAC53",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37050,
                                                              "callsign": "RYR3FY",
                                                              "lat": 50.228981,
                                                              "lon": 5.968694,
                                                              "heading": 113,
                                                              "speed": 475,
                                                              "squawk": "3463",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAD3D",
                                                              "altitude": 39000,
                                                              "geometricAltitude": 39198,
                                                              "callsign": "RYR3MH",
                                                              "lat": 49.49778,
                                                              "lon": -5.14197,
                                                              "heading": 171,
                                                              "speed": 436,
                                                              "squawk": "5413",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAC23",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38050,
                                                              "callsign": "RYR99GZ",
                                                              "lat": 43.27776,
                                                              "lon": -0.15145,
                                                              "heading": 352,
                                                              "speed": 465,
                                                              "squawk": "5347",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA245",
                                                              "altitude": 36000,
                                                              "geometricAltitude": 36169,
                                                              "callsign": "RYR4XG",
                                                              "lat": 54.126617,
                                                              "lon": -5.611816,
                                                              "heading": 205.4,
                                                              "speed": 412,
                                                              "squawk": "1151",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA8DA",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37110,
                                                              "callsign": "RYR8HH",
                                                              "lat": 49.839844,
                                                              "lon": 21.030361,
                                                              "heading": 157,
                                                              "speed": 488,
                                                              "squawk": "5564",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA736",
                                                              "altitude": 35000,
                                                              "geometricAltitude": 35021,
                                                              "callsign": "RYR6383",
                                                              "lat": 44.767914,
                                                              "lon": 5.808367,
                                                              "heading": 190,
                                                              "speed": 408,
                                                              "squawk": "0635",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAC56",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37021,
                                                              "callsign": "RYR12ZH",
                                                              "lat": 55.892807,
                                                              "lon": 2.827814,
                                                              "heading": 86.2,
                                                              "speed": 519,
                                                              "squawk": "1441",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA8E8",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37080,
                                                              "callsign": "RYR9183",
                                                              "lat": 50.69733,
                                                              "lon": -0.58101,
                                                              "heading": 138,
                                                              "speed": 425,
                                                              "squawk": "6327",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA854",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38021,
                                                              "callsign": "RYR208D",
                                                              "lat": 43.380432,
                                                              "lon": 5.807296,
                                                              "heading": 22.6,
                                                              "speed": 473,
                                                              "squawk": "5361",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAD11",
                                                              "altitude": 36000,
                                                              "geometricAltitude": 36050,
                                                              "callsign": "RYR7VN",
                                                              "lat": 55.928513,
                                                              "lon": 2.948581,
                                                              "heading": 325,
                                                              "speed": 462,
                                                              "squawk": "5765",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA73D",
                                                              "altitude": 35000,
                                                              "geometricAltitude": 35021,
                                                              "callsign": "RYR607E",
                                                              "lat": 47.946716,
                                                              "lon": 2.071747,
                                                              "heading": 192,
                                                              "speed": 418,
                                                              "squawk": "4101",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAD64",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38050,
                                                              "callsign": "RYR6C",
                                                              "lat": 53.400352,
                                                              "lon": 4.464165,
                                                              "heading": 190,
                                                              "speed": 384,
                                                              "squawk": "0767",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4D2349",
                                                              "altitude": 0,
                                                              "geometricAltitude": -8,
                                                              "callsign": "RYR6BW",
                                                              "lat": 43.681778,
                                                              "lon": 10.392236,
                                                              "heading": 36,
                                                              "speed": 125,
                                                              "squawk": "7010",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA892",
                                                              "altitude": 575,
                                                              "geometricAltitude": 685,
                                                              "callsign": "RYR258M",
                                                              "lat": 51.383377,
                                                              "lon": -2.700261,
                                                              "heading": 266.3,
                                                              "speed": 141.3,
                                                              "squawk": "7476",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA848",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37080,
                                                              "callsign": "RYR1LH",
                                                              "lat": 46.953331,
                                                              "lon": -3.72338,
                                                              "heading": 184,
                                                              "speed": 413,
                                                              "squawk": "0505",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA702",
                                                              "altitude": 36975,
                                                              "geometricAltitude": 36966,
                                                              "callsign": "RYR89MZ",
                                                              "lat": 41.650726,
                                                              "lon": 2.749516,
                                                              "heading": 234.8,
                                                              "speed": 427,
                                                              "squawk": "4026",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAA5A",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37228,
                                                              "callsign": "RYR6FH",
                                                              "lat": 52.162529,
                                                              "lon": -6.18978,
                                                              "heading": 188,
                                                              "speed": 424,
                                                              "squawk": "0557",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA9CF",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38021,
                                                              "callsign": "RYR3209",
                                                              "lat": 44.792801,
                                                              "lon": -2.54762,
                                                              "heading": 8,
                                                              "speed": 470,
                                                              "squawk": "7454",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA647",
                                                              "altitude": 5275,
                                                              "geometricAltitude": 5296,
                                                              "callsign": "RYR6297",
                                                              "lat": 41.488312,
                                                              "lon": 2.277541,
                                                              "heading": 161,
                                                              "speed": 239,
                                                              "squawk": "2334",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA97C",
                                                              "altitude": 6250,
                                                              "geometricAltitude": 6271,
                                                              "callsign": "RYR3KK",
                                                              "lat": 43.515015,
                                                              "lon": 4.795341,
                                                              "heading": 18.2,
                                                              "speed": 272,
                                                              "squawk": "5312",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA911",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36991,
                                                              "callsign": "RYR6732",
                                                              "lat": 45.528397,
                                                              "lon": 6.343035,
                                                              "heading": 177,
                                                              "speed": 403,
                                                              "squawk": "1000",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA624",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37050,
                                                              "callsign": "RYR96TV",
                                                              "lat": 50.973957,
                                                              "lon": 1.517639,
                                                              "heading": 134,
                                                              "speed": 427,
                                                              "squawk": "6370",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA809",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37169,
                                                              "callsign": "RYR2WW",
                                                              "lat": 48.144745,
                                                              "lon": -4.276428,
                                                              "heading": 194.5,
                                                              "speed": 389,
                                                              "squawk": "7473",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA706",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36962,
                                                              "callsign": "RYR7QB",
                                                              "lat": 47.33194,
                                                              "lon": 4.059723,
                                                              "heading": 140.9,
                                                              "speed": 412,
                                                              "squawk": "2702",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA56B",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37050,
                                                              "callsign": "RYR2XZ",
                                                              "lat": 49.341202,
                                                              "lon": 14.414133,
                                                              "heading": 106,
                                                              "speed": 467,
                                                              "squawk": "1000",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA80C",
                                                              "altitude": 38700,
                                                              "geometricAltitude": 38721,
                                                              "callsign": "RYR23MK",
                                                              "lat": 43.822495,
                                                              "lon": 5.31949,
                                                              "heading": 204.5,
                                                              "speed": 425,
                                                              "squawk": "6706",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA568",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37080,
                                                              "callsign": "RYR658D",
                                                              "lat": 47.29549,
                                                              "lon": -3.15132,
                                                              "heading": 191,
                                                              "speed": 400,
                                                              "squawk": "0507",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA9C3",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 37991,
                                                              "callsign": "RYR96FK",
                                                              "lat": 44.972439,
                                                              "lon": -0.2933,
                                                              "heading": 352,
                                                              "speed": 465,
                                                              "squawk": "1065",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA6FC",
                                                              "altitude": 37025,
                                                              "geometricAltitude": 37105,
                                                              "callsign": "RYR4VH",
                                                              "lat": 45.106201,
                                                              "lon": -4.17023,
                                                              "heading": 224,
                                                              "speed": 404,
                                                              "squawk": "7632",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA569",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38080,
                                                              "callsign": "RYR19MY",
                                                              "lat": 50.9464,
                                                              "lon": 1.17943,
                                                              "heading": 317,
                                                              "speed": 439,
                                                              "squawk": "5733",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAFD3",
                                                              "altitude": 34000,
                                                              "geometricAltitude": 34139,
                                                              "callsign": "RYR6MU",
                                                              "lat": 48.630798,
                                                              "lon": -1.366821,
                                                              "heading": 11.5,
                                                              "speed": 468,
                                                              "squawk": "5334",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA739",
                                                              "altitude": 34000,
                                                              "geometricAltitude": 34021,
                                                              "callsign": "RYR67CW",
                                                              "lat": 47.322693,
                                                              "lon": -0.494049,
                                                              "heading": 349.9,
                                                              "speed": 470,
                                                              "squawk": "5343",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA564",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38110,
                                                              "callsign": "RYR8PB",
                                                              "lat": 44.195938,
                                                              "lon": -7.264252,
                                                              "heading": 20.5,
                                                              "speed": 485,
                                                              "squawk": "5434",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA855",
                                                              "altitude": 30550,
                                                              "geometricAltitude": 30541,
                                                              "callsign": "RYR8T",
                                                              "lat": 43.031662,
                                                              "lon": 24.528447,
                                                              "heading": 19.2,
                                                              "speed": 367.5,
                                                              "squawk": "6473",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA4F4",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37228,
                                                              "callsign": "RYR2VU",
                                                              "lat": 48.119247,
                                                              "lon": -7.78141,
                                                              "heading": 169,
                                                              "speed": 441.7,
                                                              "squawk": "2021",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA76A",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36991,
                                                              "callsign": "RYR41CA",
                                                              "lat": 46.15155,
                                                              "lon": 0.922316,
                                                              "heading": 181,
                                                              "speed": 414,
                                                              "squawk": "5257",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA56E",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38080,
                                                              "callsign": "RYR7LW",
                                                              "lat": 43.93401,
                                                              "lon": -4.23069,
                                                              "heading": 23.5,
                                                              "speed": 471,
                                                              "squawk": "5213",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA75F",
                                                              "altitude": 20675,
                                                              "geometricAltitude": 20637,
                                                              "callsign": "RYR1FL",
                                                              "lat": 210.617593,
                                                              "lon": 152.21283,
                                                              "heading": 275,
                                                              "speed": 439,
                                                              "squawk": "7465",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA893",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38021,
                                                              "callsign": "RYR7CP",
                                                              "lat": 47.589481,
                                                              "lon": -0.5443,
                                                              "heading": 349,
                                                              "speed": 466,
                                                              "squawk": "5577",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA9A9",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37050,
                                                              "callsign": "RYR1687",
                                                              "lat": 49.488556,
                                                              "lon": 3.647822,
                                                              "heading": 119,
                                                              "speed": 455,
                                                              "squawk": "2252",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA2AB",
                                                              "altitude": 12175,
                                                              "geometricAltitude": 12196,
                                                              "callsign": "RYR51HU",
                                                              "lat": 46.568298,
                                                              "lon": -1.296997,
                                                              "heading": 319.5,
                                                              "speed": 285,
                                                              "squawk": "1000",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA8E4",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36932,
                                                              "callsign": "RYR8YF",
                                                              "lat": 56.54356,
                                                              "lon": 8.45819,
                                                              "heading": 82.3,
                                                              "speed": 507,
                                                              "squawk": "1404",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAD39",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37110,
                                                              "callsign": "RYR4UU",
                                                              "lat": 47.06012,
                                                              "lon": 10.652687,
                                                              "heading": 159,
                                                              "speed": 453,
                                                              "squawk": "4120",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAA58",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36962,
                                                              "callsign": "RYR788G",
                                                              "lat": 52.01189,
                                                              "lon": 11.75575,
                                                              "heading": 104.1,
                                                              "speed": 487,
                                                              "squawk": "4733",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA8D7",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36962,
                                                              "callsign": "RYR1SK",
                                                              "lat": 45.077511,
                                                              "lon": -0.37608,
                                                              "heading": 203,
                                                              "speed": 416,
                                                              "squawk": "7117",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA258",
                                                              "altitude": 1275,
                                                              "geometricAltitude": 1296,
                                                              "callsign": "RYR3GQ",
                                                              "lat": 43.49437,
                                                              "lon": 5.132659,
                                                              "heading": 133.8,
                                                              "speed": 183,
                                                              "squawk": "1037",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA24D",
                                                              "altitude": 11200,
                                                              "geometricAltitude": 11191,
                                                              "callsign": "RYR81RP",
                                                              "lat": 41.551849,
                                                              "lon": -8.306335,
                                                              "heading": 273.2,
                                                              "speed": 264,
                                                              "squawk": "0447",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA27D",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36962,
                                                              "callsign": "RYR8JR",
                                                              "lat": 36.439728,
                                                              "lon": -9.634277,
                                                              "heading": 214,
                                                              "speed": 421,
                                                              "squawk": "2652",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAFB5",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36932,
                                                              "callsign": "RYR473F",
                                                              "lat": 44.746342,
                                                              "lon": 0.59232,
                                                              "heading": 187,
                                                              "speed": 426,
                                                              "squawk": "0562",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAD3A",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36962,
                                                              "callsign": "RYR78BB",
                                                              "lat": 53.66597,
                                                              "lon": 15.969805,
                                                              "heading": 81.7,
                                                              "speed": 489,
                                                              "squawk": "3425",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA6A3",
                                                              "altitude": 38025,
                                                              "geometricAltitude": 38046,
                                                              "callsign": "RYR3HW",
                                                              "lat": 47.438511,
                                                              "lon": -0.8226,
                                                              "heading": 350,
                                                              "speed": 460,
                                                              "squawk": "5371",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA9D3",
                                                              "altitude": 25650,
                                                              "geometricAltitude": 25641,
                                                              "callsign": "RYR2Z",
                                                              "lat": 44.605549,
                                                              "lon": 8.86734,
                                                              "heading": 34,
                                                              "speed": 376,
                                                              "squawk": "0007",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA806",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38080,
                                                              "callsign": "RYR7389",
                                                              "lat": 46.938492,
                                                              "lon": -3.87769,
                                                              "heading": 352,
                                                              "speed": 467,
                                                              "squawk": "2263",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA856",
                                                              "altitude": 400,
                                                              "geometricAltitude": 391,
                                                              "callsign": "RYR5298",
                                                              "lat": 41.273117,
                                                              "lon": -8.687866,
                                                              "heading": 169.1,
                                                              "speed": 151,
                                                              "squawk": "6443",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA625",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36903,
                                                              "callsign": "RYR5727",
                                                              "lat": 56.56398,
                                                              "lon": 13.60249,
                                                              "heading": 88.6,
                                                              "speed": 475,
                                                              "squawk": "4724",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA56A",
                                                              "altitude": 36000,
                                                              "geometricAltitude": 36021,
                                                              "callsign": "RYR91AE",
                                                              "lat": 40.639572,
                                                              "lon": 8.348694,
                                                              "heading": 83.6,
                                                              "speed": 423,
                                                              "squawk": "2502",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA242",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37021,
                                                              "callsign": "RYR12TA",
                                                              "lat": 44.00322,
                                                              "lon": 2.08434,
                                                              "heading": 183,
                                                              "speed": 421,
                                                              "squawk": "7710",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA761",
                                                              "altitude": 3775,
                                                              "geometricAltitude": 3737,
                                                              "callsign": "RYR12XP",
                                                              "lat": 43.781708,
                                                              "lon": 1.201789,
                                                              "heading": 216.8,
                                                              "speed": 198,
                                                              "squawk": "1000",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA766",
                                                              "altitude": 39000,
                                                              "geometricAltitude": 39021,
                                                              "callsign": "RYR2PN",
                                                              "lat": 46.171371,
                                                              "lon": 1.22886,
                                                              "heading": 171,
                                                              "speed": 426,
                                                              "squawk": "2270",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA97B",
                                                              "altitude": 36000,
                                                              "geometricAltitude": 36050,
                                                              "callsign": "RYR4EU",
                                                              "lat": 42.08094,
                                                              "lon": -3.09118,
                                                              "heading": 23,
                                                              "speed": 467,
                                                              "squawk": "6414",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA73F",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37110,
                                                              "callsign": "RYR98KR",
                                                              "lat": 43.915009,
                                                              "lon": -8.856506,
                                                              "heading": 174.5,
                                                              "speed": 440,
                                                              "squawk": "3622",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA80D",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36991,
                                                              "callsign": "RYR8LT",
                                                              "lat": 45.76474,
                                                              "lon": -3.71981,
                                                              "heading": 166,
                                                              "speed": 423,
                                                              "squawk": "0514",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA84C",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37080,
                                                              "callsign": "RYR32KP",
                                                              "lat": 43.352661,
                                                              "lon": -3.91702,
                                                              "heading": 175,
                                                              "speed": 425,
                                                              "squawk": "2015",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA765",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38139,
                                                              "callsign": "RYR27JZ",
                                                              "lat": 50.174286,
                                                              "lon": -3.487366,
                                                              "heading": 4.4,
                                                              "speed": 488,
                                                              "squawk": "7450",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA2C3",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37050,
                                                              "callsign": "RYR763Y",
                                                              "lat": 42.76033,
                                                              "lon": -0.19239,
                                                              "heading": 198,
                                                              "speed": 420,
                                                              "squawk": "5226",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAA60",
                                                              "altitude": 34925,
                                                              "geometricAltitude": 34975,
                                                              "callsign": "RYR8YU",
                                                              "lat": 48.00346,
                                                              "lon": 11.87228,
                                                              "heading": 18,
                                                              "speed": 462,
                                                              "squawk": "3673",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAFC4",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36991,
                                                              "callsign": "RYR9DE",
                                                              "lat": 40.10778,
                                                              "lon": -3.73772,
                                                              "heading": 253,
                                                              "speed": 423,
                                                              "squawk": "4014",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CACE0",
                                                              "altitude": 3400,
                                                              "geometricAltitude": 3510,
                                                              "callsign": "RYR3U",
                                                              "lat": 53.893616,
                                                              "lon": -1.713318,
                                                              "heading": 317,
                                                              "speed": 148,
                                                              "squawk": "7625",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAFCF",
                                                              "altitude": 6550,
                                                              "geometricAltitude": 6541,
                                                              "callsign": "RYR9802",
                                                              "lat": 42.276834,
                                                              "lon": 2.905245,
                                                              "heading": 151.3,
                                                              "speed": 285.7,
                                                              "squawk": "2050",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA8D5",
                                                              "altitude": 12825,
                                                              "geometricAltitude": 12994,
                                                              "callsign": "RYR3WM",
                                                              "lat": 52.820755,
                                                              "lon": -5.637589,
                                                              "heading": 275,
                                                              "speed": 352.6,
                                                              "squawk": "4637",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAFC1",
                                                              "altitude": 38000,
                                                              "geometricAltitude": 38228,
                                                              "callsign": "RYR6FD",
                                                              "lat": 49.225547,
                                                              "lon": -8.827515,
                                                              "heading": 190.4,
                                                              "speed": 437.2,
                                                              "squawk": "3603",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA2C2",
                                                              "altitude": 1100,
                                                              "geometricAltitude": 1180,
                                                              "callsign": "RYR17FE",
                                                              "lat": 51.926514,
                                                              "lon": 0.297241,
                                                              "heading": 224,
                                                              "speed": 176,
                                                              "squawk": "7475",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA2D7",
                                                              "altitude": 21325,
                                                              "geometricAltitude": 21316,
                                                              "callsign": "RYR13AP",
                                                              "lat": 39.44339,
                                                              "lon": -8.709045,
                                                              "heading": 216.9,
                                                              "speed": 357,
                                                              "squawk": "7160",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAFD2",
                                                              "altitude": 1150,
                                                              "geometricAltitude": 1230,
                                                              "callsign": "RYR74RX",
                                                              "lat": 51.92894,
                                                              "lon": 0.301132,
                                                              "heading": 223,
                                                              "speed": 159,
                                                              "squawk": "4411",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAD54",
                                                              "altitude": 19350,
                                                              "geometricAltitude": 19223,
                                                              "callsign": "RYR8SE",
                                                              "lat": 38.227112,
                                                              "lon": -5.20973,
                                                              "heading": 198,
                                                              "speed": 310,
                                                              "squawk": "2013",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAD2A",
                                                              "altitude": 12375,
                                                              "geometricAltitude": 12337,
                                                              "callsign": "RYR4284",
                                                              "lat": 212.120904,
                                                              "lon": -84.548035,
                                                              "heading": 294,
                                                              "speed": 376.4,
                                                              "squawk": "6771",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA9D0",
                                                              "altitude": 36725,
                                                              "geometricAltitude": 36775,
                                                              "callsign": "RYR3SH",
                                                              "lat": 44.897549,
                                                              "lon": 18.66963,
                                                              "heading": 92,
                                                              "speed": 445,
                                                              "squawk": "0455",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA9CD",
                                                              "altitude": 1500,
                                                              "geometricAltitude": 1521,
                                                              "callsign": "RYR7PP",
                                                              "lat": 50.48534,
                                                              "lon": 4.54075,
                                                              "heading": 87,
                                                              "speed": 170,
                                                              "squawk": "5551",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA92B",
                                                              "altitude": 10800,
                                                              "geometricAltitude": 10732,
                                                              "callsign": "RYR7JC",
                                                              "lat": 34.531723,
                                                              "lon": -6.312592,
                                                              "heading": 217.8,
                                                              "speed": 277,
                                                              "squawk": "7124",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA859",
                                                              "altitude": 18525,
                                                              "geometricAltitude": 18635,
                                                              "callsign": "RYR24DH",
                                                              "lat": 52.261871,
                                                              "lon": 18.875961,
                                                              "heading": 79.2,
                                                              "speed": 350,
                                                              "squawk": "5516",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA84B",
                                                              "altitude": 7650,
                                                              "geometricAltitude": 7641,
                                                              "callsign": "RYR4KQ",
                                                              "lat": 42.380539,
                                                              "lon": 19.03887,
                                                              "heading": 88,
                                                              "speed": 272,
                                                              "squawk": "0206",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA808",
                                                              "altitude": 1850,
                                                              "geometricAltitude": 2019,
                                                              "callsign": "RYR6TZ",
                                                              "lat": 53.3064,
                                                              "lon": -2.62714,
                                                              "heading": 21.4,
                                                              "speed": 164,
                                                              "squawk": "7473",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA6FB",
                                                              "altitude": 35000,
                                                              "geometricAltitude": 35139,
                                                              "callsign": "RYR3YP",
                                                              "lat": 49.857422,
                                                              "lon": -3.303772,
                                                              "heading": 165.9,
                                                              "speed": 392,
                                                              "squawk": "2051",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA61E",
                                                              "altitude": 34200,
                                                              "geometricAltitude": 34103,
                                                              "callsign": "RYR1CB",
                                                              "lat": 38.826241,
                                                              "lon": -7.52588,
                                                              "heading": 186,
                                                              "speed": 456,
                                                              "squawk": "2223",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA4EF",
                                                              "altitude": 26400,
                                                              "geometricAltitude": 26362,
                                                              "callsign": "RYR26UA",
                                                              "lat": 38.342838,
                                                              "lon": -7.58325,
                                                              "heading": 186,
                                                              "speed": 390,
                                                              "squawk": "0517",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA61C",
                                                              "altitude": 2300,
                                                              "geometricAltitude": 2380,
                                                              "callsign": "RYR2BB",
                                                              "lat": 51.841553,
                                                              "lon": 0.190702,
                                                              "heading": 197,
                                                              "speed": 217,
                                                              "squawk": "4617",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA570",
                                                              "altitude": 10675,
                                                              "geometricAltitude": 10666,
                                                              "callsign": "RYR84SD",
                                                              "lat": 50.561829,
                                                              "lon": 3.89776,
                                                              "heading": 58,
                                                              "speed": 361,
                                                              "squawk": "1000",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAFD0",
                                                              "altitude": 1275,
                                                              "geometricAltitude": 1266,
                                                              "callsign": "RYR837P",
                                                              "lat": 49.495422,
                                                              "lon": 11.111659,
                                                              "heading": 6,
                                                              "speed": 153,
                                                              "squawk": "1752",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA2AC",
                                                              "altitude": 3100,
                                                              "geometricAltitude": 3121,
                                                              "callsign": "RYR14BY",
                                                              "lat": 50.548241,
                                                              "lon": 4.6752,
                                                              "heading": 131,
                                                              "speed": 220,
                                                              "squawk": "1000",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA6FE",
                                                              "altitude": 5125,
                                                              "geometricAltitude": 5087,
                                                              "callsign": "RYR314D",
                                                              "lat": 40.701229,
                                                              "lon": -3.56018,
                                                              "heading": 180,
                                                              "speed": 214,
                                                              "squawk": "4011",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAD10",
                                                              "altitude": 14875,
                                                              "geometricAltitude": 15044,
                                                              "callsign": "RYR22EL",
                                                              "lat": 52.830181,
                                                              "lon": -5.64301,
                                                              "heading": 343,
                                                              "speed": 304,
                                                              "squawk": "5360",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA763",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36991,
                                                              "callsign": "RYR212P",
                                                              "lat": 39.776459,
                                                              "lon": -3.16024,
                                                              "heading": 193,
                                                              "speed": 416,
                                                              "squawk": "7137",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA24F",
                                                              "altitude": 39000,
                                                              "geometricAltitude": 39021,
                                                              "callsign": "RYR309A",
                                                              "lat": 49.60199,
                                                              "lon": 10.354687,
                                                              "heading": 35,
                                                              "speed": 485,
                                                              "squawk": "1000",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA7B3",
                                                              "altitude": 21475,
                                                              "geometricAltitude": 21555,
                                                              "callsign": "RYR3084",
                                                              "lat": 51.462429,
                                                              "lon": -0.84973,
                                                              "heading": 154,
                                                              "speed": 373,
                                                              "squawk": "5214",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA8DB",
                                                              "altitude": 31000,
                                                              "geometricAltitude": 31110,
                                                              "callsign": "RYR3443",
                                                              "lat": 47.122551,
                                                              "lon": 14.54745,
                                                              "heading": 75,
                                                              "speed": 462,
                                                              "squawk": "1000",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA9CC",
                                                              "altitude": 36000,
                                                              "geometricAltitude": 36228,
                                                              "callsign": "RYR87ET",
                                                              "lat": 51.800209,
                                                              "lon": -5.67467,
                                                              "heading": 274,
                                                              "speed": 409,
                                                              "squawk": "5723",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA4EA",
                                                              "altitude": 23425,
                                                              "geometricAltitude": 23357,
                                                              "callsign": "RYR6041",
                                                              "lat": 42.773079,
                                                              "lon": 17.85253,
                                                              "heading": 124,
                                                              "speed": 340,
                                                              "squawk": "0111",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA9C1",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 36962,
                                                              "callsign": "RYR7BG",
                                                              "lat": 40.556221,
                                                              "lon": -3.34272,
                                                              "heading": 233,
                                                              "speed": 415,
                                                              "squawk": "7155",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA738",
                                                              "altitude": 18775,
                                                              "geometricAltitude": 18796,
                                                              "callsign": "RYR5636",
                                                              "lat": 45.933609,
                                                              "lon": 16.582857,
                                                              "heading": 150,
                                                              "speed": 361,
                                                              "squawk": "2117",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA9EB",
                                                              "altitude": 35000,
                                                              "geometricAltitude": 35169,
                                                              "callsign": "RYR164G",
                                                              "lat": 48.891174,
                                                              "lon": -3.915288,
                                                              "heading": 194,
                                                              "speed": 378.5,
                                                              "squawk": "0547",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA61F",
                                                              "altitude": 18500,
                                                              "geometricAltitude": 18550,
                                                              "callsign": "RYR9ZD",
                                                              "lat": 51.867874,
                                                              "lon": 1.91125,
                                                              "heading": 332,
                                                              "speed": 344,
                                                              "squawk": "3576",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA801",
                                                              "altitude": 0,
                                                              "geometricAltitude": -8,
                                                              "callsign": "RYR24KY",
                                                              "lat": 41.302509,
                                                              "lon": 2.08151,
                                                              "heading": 245,
                                                              "speed": 142,
                                                              "squawk": "5235",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA80B",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37139,
                                                              "callsign": "RYR4DE",
                                                              "lat": 54.168915,
                                                              "lon": 21.316538,
                                                              "heading": 81,
                                                              "speed": 460,
                                                              "squawk": "4661",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA626",
                                                              "altitude": 22525,
                                                              "geometricAltitude": 22575,
                                                              "callsign": "RYR1SU",
                                                              "lat": 51.493149,
                                                              "lon": 1.321477,
                                                              "heading": 150,
                                                              "speed": 387,
                                                              "squawk": "5232",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA9AA",
                                                              "altitude": 18900,
                                                              "geometricAltitude": 18921,
                                                              "callsign": "RYR8NQ",
                                                              "lat": 45.936539,
                                                              "lon": 9.072295,
                                                              "heading": 144.3,
                                                              "speed": 328,
                                                              "squawk": "7504",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CA2D4",
                                                              "altitude": 37000,
                                                              "geometricAltitude": 37110,
                                                              "callsign": "RYR8TP",
                                                              "lat": 45.510723,
                                                              "lon": 23.188856,
                                                              "heading": 117,
                                                              "speed": 462,
                                                              "squawk": "0534",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "4CAFC0",
                                                              "altitude": 33000,
                                                              "geometricAltitude": 33050,
                                                              "callsign": "RYR3LA",
                                                              "lat": 42.421192,
                                                              "lon": -3.653273,
                                                              "heading": 220.8,
                                                              "speed": 409,
                                                              "squawk": "2106",
                                                              "ground": false,
                                                              "military": false
                                                          }
                                                      ]
                                                  }}/>
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
                                                      "aircraft": [
                                                          {
                                                              "icao": "497CD8",
                                                              "altitude": 7100,
                                                              "geometricAltitude": 7121,
                                                              "callsign": "SHADW25",
                                                              "lat": 40.632385,
                                                              "lon": -7.59436,
                                                              "heading": 336.9,
                                                              "speed": 66.3,
                                                              "squawk": "5625",
                                                              "ground": false,
                                                              "military": true
                                                          }
                                                      ]
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
                                                      "aircraft": [
                                                          {
                                                              "icao": "43C208",
                                                              "altitude": 23600,
                                                              "geometricAltitude": 23562,
                                                              "callsign": "RRR6657",
                                                              "lat": 36.147129,
                                                              "lon": -3.83646,
                                                              "heading": 266,
                                                              "speed": 419,
                                                              "squawk": "",
                                                              "ground": false,
                                                              "military": true
                                                          },
                                                          {
                                                              "icao": "AE07E9",
                                                              "altitude": 27425,
                                                              "geometricAltitude": 27555,
                                                              "callsign": "COHO21",
                                                              "lat": 43.565399,
                                                              "lon": -89.44696,
                                                              "heading": 291,
                                                              "speed": 422,
                                                              "squawk": "6253",
                                                              "ground": false,
                                                              "military": true
                                                          },
                                                          {
                                                              "icao": "AE1173",
                                                              "altitude": 13888,
                                                              "geometricAltitude": 13918,
                                                              "callsign": "MCFAMC",
                                                              "lat": 21.282234,
                                                              "lon": -157.339153,
                                                              "speed": 387,
                                                              "squawk": "",
                                                              "ground": false,
                                                              "military": true
                                                          },
                                                          {
                                                              "icao": "06A27A",
                                                              "altitude": 30250,
                                                              "geometricAltitude": 30271,
                                                              "callsign": "LHOB252",
                                                              "lat": 41.428799,
                                                              "lon": 5.29628,
                                                              "heading": 0.5,
                                                              "speed": 493,
                                                              "squawk": "1000",
                                                              "ground": false,
                                                              "military": false
                                                          },
                                                          {
                                                              "icao": "7CF86A",
                                                              "altitude": 8725,
                                                              "geometricAltitude": 8876,
                                                              "callsign": "ASY595",
                                                              "lat": 39.291142,
                                                              "lon": -74.905197,
                                                              "heading": 250,
                                                              "speed": 280.6,
                                                              "squawk": "0717",
                                                              "ground": false,
                                                              "military": true
                                                          }
                                                      ]
                                                  }}/>
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
