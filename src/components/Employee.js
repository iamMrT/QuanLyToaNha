import React, { useState, useEffect } from 'react';
import '../css/building.css'
// import '../css/form.css'
import '../css/search_bar.css'

import Footer from './Footer';
import Header from './Header';
const Employee = () => {


    return (
        <>
            <Header />
            <div style={{ maxWidth: "1100px", minHeight: "100vh" }} className="admin-post__container">
                <div className="admin-post__wrapper">
                    <div className="admin-post__head">
                        <div style={{ fontSize: "20px", marginLeft: "-20px" }} className="admin-post__title">
                            Danh sách nhân viên
                        </div>
                        <form action="" class="search-bar">
                            <input placeholder='Tìm kiếm nhân viên theo tên' type="search" name="search" pattern=".*\S.*" required />
                            <button class="search-btn" type="submit">
                                <span>Search</span>
                            </button>
                        </form>
                        <div style={{ right: '10px' }} className="admin-post__button">
                            <button >
                                Thêm nhân viên
                            </button>
                        </div>
                    </div>
                    <div className="admin-post__body">
                        <table id="admin-post__table">
                            <tbody>
                                <tr>
                                    <th>STT</th>
                                    <th style={{ width: '200px' }}>Tên</th>
                                    <th style={{ width: '200px' }}>Mã nhân viên</th>
                                    <th style={{ width: '200px' }}>Số điện thoại</th>
                                    <th style={{ width: '200px' }}>Ngày sinh</th>
                                    <th style={{ width: '105px' }}>Sửa</th>
                                    <th style={{ width: '105px' }} >Xóa</th>
                                </tr>
                                {/* {
                                    employees?.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item?.name}</td>
                                            <td>{item?.socialId}</td>
                                            <td>{item?.phoneNo}</td>
                                            <td>{item?.dateOfBirth?.split("T")[0]}</td>
                                            <td>
                                                <button onClick={() => editClick(index)} className="post-edit-item-btn">
                                                    <i className='bx bxs-pencil'></i>
                                                    Sửa
                                                </button>
                                            </td>
                                            <td>
                                                <button className="post-delete-btn" onClick={() => removeEmployee(item.id)}>
                                                    <i className='bx bx-trash'></i>
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                } */}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Employee;