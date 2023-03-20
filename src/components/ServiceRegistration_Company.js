import React, { useState, useEffect } from 'react';
import '../css/building.css'
import '../css/form.css'
import '../css/search_bar.css'
import Footer from './Footer';
import Header from './Header';
const ServiceRegistration_Company = () => {


    return (
        <>
            <Header />
            <div style={{ position: 'relative' }} >
                <div style={{ maxWidth: "1100px", minHeight: "100vh" }} className="admin-post__container">
                    <div className="admin-post__wrapper">
                        <div className="admin-post__head">
                            <div style={{ fontSize: "20px", marginLeft: "-20px" }} className="admin-post__title">
                                Chọn công ty để đăng ký hoặc hủy dịch vụ
                            </div>
                            <form action="" class="search-bar" style={{ marginLeft: "10px" }}>
                                <input type="search" name="search" pattern=".*\S.*" required />
                                <button class="search-btn" type="submit">
                                    <span>Search</span>
                                </button>
                            </form>
                        </div>

                        <div className="admin-post__body">
                            <table id="admin-post__table">
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th style={{ width: '200px' }}>Tên công ty</th>
                                        <th style={{ width: '200px' }}>Lĩnh vực hoạt động</th>
                                        <th style={{ width: '200px' }}>Mã số thuế</th>
                                        <th style={{ width: '200px' }}>Vốn điều lệ</th>
                                        <th style={{ width: '200px' }}>SĐT</th>
                                        <th style={{ width: '200px' }} >Sô nhân viên</th>
                                        <th style={{ width: '200px' }}>Tổng diện tích mặt bằng</th>
                                        <th style={{ width: '105px' }}>Dịch vụ</th>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default ServiceRegistration_Company;