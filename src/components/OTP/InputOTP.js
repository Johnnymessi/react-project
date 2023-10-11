import { useState, useRef } from "react"; // Nhúng useState và useRef từ thư viện React
import OtpInput from "react-otp-input"; // Nhúng thành phần OtpInput từ thư viện "react-otp-input"
import CountDown from "./CountDown"; // Nhúng thành phần CountDown từ tệp "CountDown.js"
import CountDownAnimation from "./CountDownAnimation"; // Nhúng thành phần CountDownAnimation từ tệp "CountDownAnimation.js"

const InputOTP = (props) => {
    const childRef = useRef(); // Tạo một ref để sử dụng sau này

    const [otp, setOtp] = useState(""); // Sử dụng useState để quản lý mã OTP nhập vào

    // Xử lý sự kiện khi người dùng thay đổi mã OTP
    const handleChange = (otp) => {
        setOtp(otp);

        // Gọi hàm setUserOTPParent từ props để truyền mã OTP từ thành phần con lên thành phần cha
        props.setUserOTPParent(otp);
    }

    // Xử lý sự kiện khi người dùng xác nhận mã OTP
    const handleConfirmOTP = () => {
        // Gọi hàm handleSubmitOTP từ props để xử lý việc xác nhận mã OTP
        props.handleSubmitOTP();
    }

    // Xử lý sự kiện khi người dùng bấm nút "Clear"
    const handleClearBtn = () => {
        // Sử dụng ref để gọi hàm resetTimer từ thành phần con CountDownAnimation
        childRef.current.resetTimer();
        console.log("check ref:", childRef);
    }

    return (
        <div className="input-otp-container">
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={"input-customize"}
            />

            <div className="timer">
                {/* 
                <CountDown
                    setIsDisableBtn={props.setIsDisableBtn}
                /> */}
                <CountDownAnimation
                    setIsDisableBtn={props.setIsDisableBtn}
                    ref={childRef} // Truyền ref vào thành phần CountDownAnimation
                />
            </div>

            <div className="action">
                <button className="clear"
                    onClick={() => handleClearBtn()}
                    disabled={!props.isDisableBtn}
                >
                    Clear
                </button>

                <button className="confirm"
                    disabled={props.isDisableBtn}
                    onClick={() => handleConfirmOTP()}
                >
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default InputOTP; // Xuất thành phần InputOTP để sử dụng ở các thành phần khác
