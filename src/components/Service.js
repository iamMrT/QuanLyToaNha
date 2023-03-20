import React, { useState, useEffect } from 'react';
import '../css/building.css'
// import '../css/form.css'
import '../css/search_bar.css'
import Footer from './Footer';
import Header from './Header';
const Service = () => {


    return (
        <>
            <Header />
            <div style={{ position: 'relative' }}>

                <div style={{ maxWidth: "1100px", minHeight: "100vh" }} className="admin-post__container">
                    <div className="admin-post__wrapper">
                        <div className="admin-post__head">
                            <div style={{ fontSize: "20px", marginLeft: "-20px" }} className="admin-post__title">
                                Tìm kiếm dịch vụ:
                                <br />
                            </div>
                            <form action="" class="search-bar">
                                <input type="search" name="search" pattern=".*\S.*" required />
                                <button class="search-btn" type="submit">
                                    <span>Search</span>
                                </button>
                            </form>
                            <div style={{ right: '10px' }} className="admin-post__button">
                                <button >
                                    Thêm dịch vụ mới
                                </button>
                            </div>
                        </div>
                        <div style={{ fontSize: "20px", marginLeft: "-20px" }} className="admin-post__head">
                            Thông tin các dịch vụ
                            <br />
                        </div>
                        <div className="admin-post__body">
                            <table id="admin-post__table">
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th style={{ width: '200px' }}>Tên dịch vụ</th>
                                        <th style={{ width: '200px' }}>Dịch vụ bắt buộc?</th>
                                        <th style={{ width: '200px' }}>Giá</th>
                                        <th style={{ width: '200px' }}>Loại dịch vụ</th>
                                        {/* <th style={{width: '200px'}} >Employees</th>
                                    <th style={{width: '105px'}}>View Employee</th> */}
                                        <th style={{ width: '105px' }}>Xem mức lương</th>
                                        <th style={{ width: '105px' }}>Sửa</th>
                                        <th style={{ width: '105px' }} >Xóa</th>
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
}

export default Service;