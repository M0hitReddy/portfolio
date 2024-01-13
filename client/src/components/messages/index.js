import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { months, extractDate, extractTime } from "./utility.js";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
export const Messages = (props) => {


    const [pageNo, setPageNo] = useState(0);
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        const getData = async () => {
            await axios.get("http://localhost:8080/get?page=" + pageNo)
                .then((res) => {
                    console.log(res.data);
                    if (res.data.length < 10) setLoad(false);
                    setData([...data, ...res.data]);
                }, (err) => {
                    // console
                });
        }
        getData();

    }, [pageNo]);

    useEffect(() => {
        setData([props.postedData, ...data]);
    }, [props.postedData]);

    // useEffect(() => {
    //     const newMsg=[{name: "Mohit", message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia tempore nulla ipsa maiores similique molestiae vel eligendi saepe neque. Quos porro qui accusantium magni saepe illum ipsam neque facilis voluptatibus?", date: "August, 2003", time: "10:05 PM"}];
    //     // setData([...messages,...newMsg]);
    // },[data]);

    const loadMore = () => {
        if (load) setPageNo(pageNo + 1);
    };
    return (

        <div className="messages-container" id="messages-container">
            <ScrollToTop
                smooth
                top={20}
                component={<FaArrowUp />}
                viewBox="0 0 24 24"
                className="scroll-to-top"
                // svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
                // svgPath={FaArrowUp}
                
            />
            <h1>Messages Sent</h1>
            <div className="messages">
                {/* <div className="message">
                    <h2>Reddy</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia tempore nulla ipsa maiores similique molestiae vel eligendi saepe neque. Quos porro qui accusantium magni saepe illum ipsam neque facilis voluptatibus?</p>
                    <div>
                        <span className="date">August, 2003</span>
                        <span className="time">10:05 PM</span>

                    </div>
                </div> */}
                {

                    data.length == 0 ? "No messages yet" : data.map((message, index) => (
                        <div className="message" key={index}>
                            <h2>{message.name}</h2>
                            <p>{message.message}</p>
                            <div>
                                <span className="date">{extractDate(message.dateTime)}</span>
                                <span className="time">{extractTime(message.dateTime)}</span>
                            </div>
                        </div>
                    )) || "no messages yet"
                }
                {/* <hr /> */}

            </div>
            <div className="load-more" onClick={loadMore}>
                <p>{load ? "load more >>" : "no more to load"}</p>
            </div>
        </div>
    );
}