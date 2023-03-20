import React, { useState, useEffect } from 'react';
import '../css/building.css';
import '../css/form.css';
import '../css/search_bar.css'
import Footer from './Footer';
import Header from './Header';
// import { Link } from 'react-router-dom';

const OperatingCosts = () => {

    return (
        <>
            <Header />
            <div style={{}}>
                {/* <div style={{ display: 'block' }} className="">
                    <div className="modal_overlay"></div>
                    <div className="form-post">
                        <div className="form-post__title dialog__title">
                            Thêm mới tòa nhà
                        </div>
                        <div className="form-post__content">
                            <div className="form-post__wrapper">
                                <div className="form-post__field">
                                    <input style={{ width: '100%' }} type="text" id='name' placeholder="Name" />
                                </div>
                                <div className="form-post__field">
                                    <input style={{ width: '100%' }} type="text" id='floors' placeholder="Số tầng" />
                                </div>
                                <div className="form-post__field">
                                    <input style={{ width: '100%' }} type="text" id='location' placeholder="Vị trí" />
                                </div>
                            </div>
                            <div className="form-post__control">
                                <button className="cancel-btn">
                                    Hủy
                                </button>
                                <button className="add-section-btn" >
                                    <i className='bx bx-save'></i>
                                    Lưu
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div style={{ maxWidth: "1100px", minHeight: "100vh" }} className="admin-post__container">
                    <div className="admin-post__wrapper">
                        <div className="admin-post__head">
                            <div style={{ fontSize: "20px", marginLeft: "-20px" }} className="admin-post__title">
                                Danh sách chi phí vận hành
                            </div>
                            <form action="" class="search-bar" style={{ marginLeft: "10px" }}>
                                <input type="search" name="search" pattern=".*\S.*" required />
                                <button class="search-btn" type="submit">
                                    <span>Search</span>
                                </button>
                            </form>
                            <div style={{ right: '10px' }} className="admin-post__button">
                                <button >
                                    Thêm chi phí vận hành
                                </button>
                            </div>
                        </div>
                        <div className="admin-post__body">
                            <table id="admin-post__table">
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th style={{ width: '200px' }}>Tên</th>
                                        <th style={{ width: '200px' }}>Giá tiền</th>
                                        <th style={{ width: '200px' }}>Hạn trả</th>
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
};

export default OperatingCosts;