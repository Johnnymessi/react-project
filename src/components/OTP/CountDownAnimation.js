// gán props để có thể kế thừa từ cha xuống con
// Nguồn link tham khảo : https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import './CountDownAnimation.scss';

const CountDownAnimation = forwardRef((props, ref) => {
    const TIME_LIMIT = 20; // Thời gian giới hạn đếm ngược (20 giây)
    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT); // Sử dụng useState để quản lý thời gian còn lại

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

    // Hàm định dạng thời gian từ giây thành dạng mm:ss
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    // Hàm thiết lập màu sắc của vòng đồng hồ dựa trên thời gian còn lại
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

    // Hàm tính toán phần trăm thời gian còn lại
    const calculateTimeFraction = () => {
        const rawTimeFraction = (timeLeft - 1) / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }

    // Hàm thiết lập thuộc tính dasharray của đường viền vòng tròn
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
            props.setIsDisableBtn(true); // Khi đếm về 0, gọi hàm setIsDisableBtn từ props để vô hiệu hóa nút
            return;
        }

        // Tạo hẹn giờ để cập nhật thời gian và giao diện đồng hồ đếm
        const timer = setInterval(() => {
            const currentTime = timeLeft - 1;
            setTimeLeft(timeLeft - 1);
            setCircleDasharray();
            setRemainingPathColor(currentTime);
        }, 1000);

        // Tránh vòng lặp vô hạn bằng cách hủy bỏ hẹn giờ khi thành phần bị hủy
        return () => {
            clearInterval(timer);
        }
    }, [timeLeft]); // Chạy useEffect khi biến đếm thay đổi

    // Sử dụng useImperativeHandle để tạo hàm resetTimer cho phép reset đồng hồ đếm
    useImperativeHandle(ref, () => ({
        resetTimer() {
            const { alert, warning, info } = COLOR_CODES;

            // Xóa các lớp màu cảnh báo
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(alert.color);
            document
                .getElementById("base-timer-path-remaining")
                .classList.remove(warning.color);

            // Đặt lại thời gian còn lại và kích hoạt lại nút
            setTimeLeft(TIME_LIMIT);
            props.setIsDisableBtn(false);
        }
    }));

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
})

export default CountDownAnimation; // Xuất thành phần CountDownAnimation để sử dụng ở các thành phần khác
