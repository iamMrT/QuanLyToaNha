import React, { useState, useEffect } from 'react';
import '../css/building.css'
import '../css/form.css'
import '../css/search_bar.css'
import Footer from './Footer';
import Header from './Header';
const MonthlySalaryEmployee = () => {


    return (
        <>
            <Header />
            <div style={{ position: 'relative' }} >
                <div style={{ maxWidth: "1500px", minHeight: "100vh" }} className="admin-post__container">
                    <div className="admin-post__wrapper">
                        <div className="admin-post__head">
                            <div style={{ fontSize: "20px", marginLeft: "-20px" }} className="admin-post__title">
                                Thống kê lương tháng nhân viên theo
                            </div>

                        </div>
                        <div className="input-search">
                            <div className="selectdiv">
                                <label style={{ display: "block" }}>
                                    <select>
                                        <option value="day">Ngày</option>
                                        <option value="month">Tháng </option>
                                        <option value="year">Năm</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className="admin-post__body" >
                            <table id="admin-post__table" style={{ maxWidth: "1500px" }}>
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th style={{ width: '200px' }}>Tên</th>

                                        <th style={{ width: '200px' }}>Địa chỉ</th>
                                        <th style={{ width: '200px' }}>SĐT</th>
                                        <th style={{ width: '200px' }}>Vị trí</th>
                                        <th style={{ width: '200px' }}>Bậc lương</th>
                                        <th style={{ width: '200px' }}>Lương tháng</th>
                                    </tr>
                                    {/* {
                                        monthlySalaries?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item?.empName}</td>

                                                <td>{item?.address}</td>
                                                <td>{item?.phoneNo}</td>
                                                <td>{item?.position}</td>
                                                <td>Bậc {item?.salaryLevel}</td>
                                                <td>{new Intl.NumberFormat('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(item?.salary)}</td>


                                            </tr>
                                        ))
                                    } */}

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

export default MonthlySalaryEmployee;