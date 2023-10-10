import { useState } from "react";
import OtpInput from "react-otp-input";
// import CountDown from "./CountDown";
import CountDownAnimation from "./CountDownAnimation";

const InputOTP = (props) => {

    const [otp, setOtp] = useState("");

    // biến otp không phải từ trog state - là sự trùng hợp với thư viện
    const handleChange = (otp) => {
        setOtp(otp);

        //gọi props ở trên để truyền dữ liệu từ cha xuống con
        props.setUserOTPParent(otp)
    }

    const handleConfirmOTP = () => {
        props.handleSubmitOTP();
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

                    setIsDisableBtn={
                        props.setIsDisableBtn
                    }

                /> */}

                <CountDownAnimation
                    setIsDisableBtn={props.setIsDisableBtn}
                />
            </div>

            <div className="action">

                <button className="clear">Clear</button>

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

export default InputOTP;