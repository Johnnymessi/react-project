import { useState } from "react"; // Nhúng useState từ thư viện React

import GenerateOTP from "./GenerateOTP"; // Nhúng thành phần GenerateOTP từ tệp "GenerateOTP.js"
import InputOTP from "./InputOTP"; // Nhúng thành phần InputOTP từ tệp "InputOTP.js"
import './OTP.scss'; // Nhúng các tài liệu CSS từ tệp "OTP.scss"
import CountDownAnimation from "./CountDownAnimation"; // Nhúng thành phần CountDownAnimation từ tệp "CountDownAnimation.js"

const OTP = () => {
    // Quản lý OTP của cha (mã OTP gốc)
    const [orgOTPParent, setOrgOTPParent] = useState("");

    // Quản lý OTP mà người dùng nhập vào
    const [userOTPParent, setUserOTPParent] = useState("");

    const [isDisableBtn, setIsDisableBtn] = useState(false); // Quản lý trạng thái của nút (button)

    const handleSubmitOTP = () => {
        if (!orgOTPParent) {
            alert("Please generate an OTP..."); // Hiển thị cảnh báo nếu không có mã OTP gốc
            return;
        }

        if (!userOTPParent) {
            alert("Please enter an OTP..."); // Hiển thị cảnh báo nếu người dùng không nhập mã OTP
            return;
        }

        if (+orgOTPParent === +userOTPParent) {
            alert("Correct OTP ^^"); // Hiển thị thông báo nếu mã OTP nhập vào đúng
        } else {
            alert("Wrong OTP ~~"); // Hiển thị thông báo nếu mã OTP nhập vào sai
        }
    }

    // Trả về phần giao diện JSX
    return (
        <div className="otp-parent-container">

            <CountDownAnimation />

            <GenerateOTP
                setOrgOTPParent={setOrgOTPParent} // Truyền hàm setOrgOTPParent vào thành phần GenerateOTP
            />
            <InputOTP
                setUserOTPParent={setUserOTPParent} // Truyền hàm setUserOTPParent vào thành phần InputOTP
                handleSubmitOTP={handleSubmitOTP} // Truyền hàm handleSubmitOTP vào thành phần InputOTP
                isDisableBtn={isDisableBtn} // Truyền trạng thái nút vào thành phần InputOTP
                setIsDisableBtn={setIsDisableBtn} // Truyền hàm setIsDisableBtn vào thành phần InputOTP
            />

        </div>
    )
}

export default OTP; // Xuất thành phần OTP để sử dụng ở các thành phần khác
