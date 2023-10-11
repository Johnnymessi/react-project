import React, { useEffect, useState } from "react";

const CountDown = (props) => {
    const [count, setCount] = useState(20); // Sử dụng useState để quản lý biến đếm

    useEffect(() => {

        if (count === 0) {
            props.setIsDisableBtn(true); // Khi đếm về 0, gọi hàm setIsDisableBtn từ props để vô hiệu hóa nút
            return;
        }

        // Tạo một hẹn giờ để giảm giá trị của biến đếm mỗi 1000ms (1 giây)
        const timer = setInterval(() => {
            setCount(count - 1); // Giảm giá trị của biến đếm đi 1
        }, 1000);

        // Thực hiện việc dọn dẹp hẹn giờ khi thành phần bị hủy bỏ hoặc biến đếm thay đổi
        return () => {
            clearInterval(timer); // Hủy hẹn giờ để tránh rò rỉ bộ nhớ
        }

    }, [count]); // Chạy useEffect khi biến đếm thay đổi

    return (
        <div>
            {count} {/* Hiển thị giá trị của biến đếm */}
        </div>
    )
}

export default CountDown; // Xuất thành phần CountDown để sử dụng ở các thành phần khác
