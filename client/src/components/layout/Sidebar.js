import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <span class="closebtn" onClick={this.props.closeSidebar}>
                    &times;
                </span>

                <form action="/action_page.php" method="post">
                    <h2>Đăng Nhập</h2>
                    <div className="container">
                        <label htmlFor="uname">
                            <b>Tên Đăng Nhập</b>
                        </label>
                        <input
                            type="text"
                            name="uname"
                            placeholder="Nhập tên"
                            required
                        />
                        <br />
                        <label htmlFor="password">
                            <b>Mật Khẩu</b>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            required
                        />
                        <button id="loginButton" type="submit">
                            Đăng Nhập
                        </button>
                        <label>
                            <input
                                name="remember"
                                type="checkbox"
                                checked="checked"
                            />{" "}
                            Remember me
                        </label>
                    </div>

                    <div className="container">
                        <span className="sidenav-links">Quên Mật Khẩu?</span>
                        <br />
                        <span className="sidenav-links">Đăng Ký Ngay!</span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Navbar;
