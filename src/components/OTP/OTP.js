import { useState } from "react";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import './OTP.scss';
import CountDownAnimation from "./CountDownAnimation";


const OTP = () => {
    //Quản lý OTP cha
    const [orgOTPParent, setOrgOTPParent] = useState("");

    // quản lý OTP người dùng nhập vào
    const [userOTPParent, setUserOTPParent] = useState("");

    const [isDisableBtn, setIsDisableBtn] = useState(false);

    const handleSubmitOTP = () => {
        // alert("Confirm success")
        if (+orgOTPParent === +userOTPParent) {
            alert("Correct OTP ^^")
        } else {
            alert("Wrong OTP ~~")
        }
    }
    return (
        <div className="otp-parent-container">

            <CountDownAnimation />

            <GenerateOTP

                setOrgOTPParent={setOrgOTPParent}

            />
            <InputOTP

                setUserOTPParent={setUserOTPParent}
                handleSubmitOTP={handleSubmitOTP}
                isDisableBtn={isDisableBtn}
                setIsDisableBtn={setIsDisableBtn}

            />

        </div>
    )
}

export default OTP;