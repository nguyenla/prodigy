import React, { Component } from "react";

class WelcomeText extends Component {
    render() {
        return (
            <div id="intro">
                <div id="arrow-up">
                    <a href="#intro">
                        <i className="fas fa-angle-double-down fa-7x"></i>
                    </a>
                </div>
                <div id="introBox">
                    <br />
                    <div id="introText">
                        <p2>
                            Những bài đọc trên Prodigy được biên dịch dựa trên
                            bộ sách nổi tiếng “Daily Warm-ups Reading” của Nhà
                            Xuất Bản Teacher Created Resources, cung cấp kiến
                            thức một cách phong phú qua các chủ đề khác nhau từ
                            động vật, lịch sử, địa lý cho đến khoa học.
                        </p2>
                        <br /> <br />
                    </div>
                    <div id="introText">
                        <p3>
                            Các bài đọc được thiết kế ngắn gọn, dễ hiểu, đồng
                            thời lồng ghép những câu hỏi dựa trên quy tắc phân
                            loại của Bloom nhằm giúp các bạn nhỏ từng bước rèn
                            luyện kỹ năng đọc hiểu, mở rộng vốn từ… Đây chính là
                            tiền đề cho việc phát triển ngôn ngữ và hiểu biết
                            sâu rộng cho các em sau này.
                        </p3>
                        <br /> <br />
                    </div>
                    <div id="introText">
                        <p4>
                            Các em hãy tự tìm hiểu và khám phá Prodigy cùng với
                            bố mẹ nhé! Và hãy tự đặt ra cho mình mục tiêu mỗi
                            ngày “chinh phục" tối thiểu 1-2 bài đọc được không
                            nào?
                        </p4>
                        <br />
                        <div id="signature">
                            <a href="about.html">Team TimeTurner</a>
                        </div>
                        <br />
                    </div>
                    <br /> <br />
                </div>
            </div>
        );
    }
}

export default WelcomeText;
