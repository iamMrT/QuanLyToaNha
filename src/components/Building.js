import React, { useState, useEffect } from 'react';
import '../css/building.css';
// import '../css/form.css';
import '../css/search_bar.css'
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

const Building = () => {
    const linkAction = (id, status) => {
        const navLink = document.querySelectorAll('.nav__link');
        navLink.forEach(n => n.classList.remove('active'));
        if (id) {
            const _this = document.getElementById(id);
            _this.classList.add('active');
        }

        if (status === true) {
            const toggle = document.getElementById('header-toggle');
            const nav = document.getElementById('nav-menu');
            if (nav && toggle) {
                toggle.classList.remove('bx-x')
                nav.classList.remove('show')
            }
        }
    }

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
                                Danh sách tòa nhà
                            </div>
                            <form action="" class="search-bar">
                                <input type="search" name="search" pattern=".*\S.*" required />
                                <button class="search-btn" type="submit">
                                    <span>Search</span>
                                </button>
                            </form>
                            <div style={{ right: '10px' }} className="admin-post__button">
                                <button >
                                    Thêm tòa nhà
                                </button>
                            </div>
                        </div>
                        <div className="admin-post__body">
                            <table id="admin-post__table">
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th style={{ width: '200px' }}>Tên</th>
                                        <th style={{ width: '200px' }}>Số tầng</th>
                                        <th style={{ width: '200px' }}>Vị trí</th>
                                        <th style={{ width: '105px' }}>Sửa</th>
                                        <th style={{ width: '105px' }} >Xóa</th>
                                        <th style={{ width: '105px' }}>Xem</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>A</td>
                                        <td>3</td>
                                        <td>Tình Đơ</td>
                                        <td>
                                            <button className="post-edit-item-btn">
                                                <i className='bx bxs-pencil'></i>
                                                Sửa
                                            </button>
                                        </td>
                                        <td>
                                            <button className="post-delete-btn">
                                                <i className='bx bx-trash'></i>
                                                Xóa
                                            </button>
                                        </td>
                                        <td>
                                            <button className="post-delete-btn">
                                                <i className='bx bx-trash'></i>
                                                <Link className="nav__perfil" to='/company' onClick={() => linkAction(null, true)}>Xem
                                                </Link>
                                            </button>
                                        </td>
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

export default Building;