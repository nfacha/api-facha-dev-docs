import React, {useState} from "react";
import ReactJson from "react-json-view";

interface EndpointCardProps {
    method: 'GET' | 'POST';
    path: string;
    description: string;
    parameters: { name: string, description: string }[];
    body: any | null;
    response: any | null;
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
