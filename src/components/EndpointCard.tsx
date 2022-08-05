import React, {useState} from "react";
import ReactJson from "react-json-view";

interface EndpointCardProps {
    method: 'GET' | 'POST';
    path: string;
    description: string;
    parameters: { name: string, description: string }[];
    body: any | null;
    response: any | null;
    rateLimit?: null | {
        bucket: string;
        limit: number;
        timeSeconds: number;
    }
}

const EndpointCard: React.FC<EndpointCardProps> = (props: EndpointCardProps) => {
    const [collapsed, setCollapsed] = useState(true);
    return (
            <div className="card mt-3">
                <div className="card-header" onClick={() => setCollapsed(!collapsed)}>
                <span className="text-bold">
                    {props.method} {props.path} <span className="small-description">| {props.description}</span>
                </span>
                    <span className="float-end">
                    <span className="btn btn-info btn-sm text-white">
                        {collapsed ? '+' : '-'}
                    </span>
                </span>
                </div>
                <div className={collapsed ? 'card-body collapse' : 'card-body'}>
                    <p className="text-center text-bold">{props.description}</p>
                    <hr/>
                    <h4>Method: <span className="text-bold">{props.method}</span></h4>
                    <h4>Rate Limit:</h4>
                    {props.rateLimit ?
                            <div className="mb-2">
                                <p>Bucket: <span className="text-bold">{props.rateLimit.bucket}</span>
                                    <small title="Requests for endpoints within the same bucket count for the same limit">(?)</small>
                                </p>
                                <p>Limit: <span className="text-bold">{props.rateLimit.limit}</span> requests, per IP, per <span
                                        className="text-bold">{props.rateLimit.timeSeconds}</span> seconds</p>
                                <small>This limit can be increased (for free most of the times) by having a good use case, if you need an increased limit please <a
                                        href="https://twitter.com/nfacha"
                                        target="_blank">get in touch</a> and provide additional information</small>
                            </div>
                            :
                            <p className="no-body mb-2">No limit (Please don't make me add one)</p>
                    }
                    <h4>URL Parameters:</h4>
                    {props.parameters.length > 0 ?
                            <ul>
                                {props.parameters.map((parameter, index) => {
                                    return (
                                            <li key={index}>
                                                <span className="endpoint-param">{parameter.name}</span> - {parameter.description}
                                            </li>
                                    );
                                })}
                            </ul>
                            : <p className="no-body">No Parameters</p>}
                    <h4>Body (JSON):</h4>
                    {props.body ? <ReactJson src={props.body}/> : <p className="no-body">No body</p>}
                    <h4>Response:</h4>
                    {props.response ? <ReactJson src={props.response}/> : <p className="no-body">Empty Response</p>}
                </div>
            </div>);
}

export default EndpointCard;
