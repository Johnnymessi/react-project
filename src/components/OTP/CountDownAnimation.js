// gán props để có thể kế thừa từ cha xuống con
// Nguồn link tham khảo : https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/

import { useEffect, useState } from "react";
import './CountDownAnimation.scss';

const CountDownAnimation = (props) => {

    // TỪ MÀU XANH(20s) -> Vàng(10s) -> ĐỎ(5s) 
    const TIME_LIMIT = 20;
    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);

    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const ALERT_THRESHOLD = 5;


    const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
    };

    let remainingPathColor = COLOR_CODES.info.color;


    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }


    const setRemainingPathColor = (timeLeft) => {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(warning.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(info.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.add(warning.color);
        }
    }

    const calculateTimeFraction = () => {
        const rawTimeFraction = (timeLeft - 1) / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }

    const setCircleDasharray = () => {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
    }


    useEffect(() => {
        if (timeLeft === 0) {
            props.setIsDisableBtn(true);
            return;
        }
        const timer = setInterval(() => {
            const currentTime = timeLeft - 1;
            setTimeLeft(timeLeft - 1);
            setCircleDasharray();
            setRemainingPathColor(currentTime);

        }, 1000)

        //tránh vòng lặp vô hạn
        return () => {
            clearInterval(timer);
        }

    }, [timeLeft]);



    return (
        <div>
            <div className="count-down-animation-container">
                <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g className="base-timer__circle">
                        <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                        <path
                            id="base-timer-path-remaining"
                            stroke-dasharray="283"
                            className={`base-timer__path-remaining ${remainingPathColor}`}
                            d="
                        M 50, 50
                        m -45, 0
                        a 45,45 0 1,0 90,0
                        a 45,45 0 1,0 -90,0
                        "
                        ></path>
                    </g>
                </svg>
                <span id="base-timer-label" className="base-timer__label">
                    {
                        formatTime(timeLeft)
                    }</span>
            </div>
        </div >
    )
}

export default CountDownAnimation;

