import React, {useEffect, useState} from "react";
import {api} from "../services/Api"

const Cards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await api();
            setData(data);
        };

        getData();
    }, []);

    return (
        <div className="card-container">
            {data.map(item => (
                <div className="card">
                    <span className="close">&#10006;</span>
                    <img src={"http://contest.elecard.ru/frontend_data/" + item.image} className="card-image"/>
                    <div className="card-content">
                        <p>Category: {item.category}</p>
                        <p>File size: {(item.filesize / 1024).toFixed(3)} KB</p>
                        <p>Timestamp: {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                        }).format(item.timestamp)
                        }</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;