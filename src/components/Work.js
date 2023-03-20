import React, { useState, useEffect } from 'react';
import '../css/building.css';
import '../css/form.css';
import '../css/search_bar.css'
import Footer from './Footer';
import Header from './Header';
const Work = () => {

    return (
        <>
            <Header />
            <div style={{ position: 'relative' }}>

                <div style={{ maxWidth: "1100px", minHeight: "100vh" }} className="admin-post__container">
                    <div className="admin-post__wrapper">
                        <div className="admin-post__head">
                            <div style={{ fontSize: "20px", marginLeft: "-20px" }} className="admin-post__title">
                                Tìm kiếm công việc:
                                <br />
                            </div>
                            <form action="" class="search-bar">
                                <input id='title-search' type="search" name="search" pattern=".*\S.*" required />
                                <button class="search-btn" type="submit">
                                    <span>Search</span>
                                </button>
                            </form>
                            <div style={{ right: '10px' }} className="admin-post__button">
                                <button >
                                    Thêm công việc mới
                                </button>
                            </div>
                        </div>
                        <div className="admin-post__head">
                            <div style={{ fontSize: "20px", marginLeft: "-20px" }} className="admin-post__title">
                                Lọc theo nhân viên:
                                <br />
                            </div>
                            <div style={{ right: '10px' }} className="admin-post__button">
                                <select id='emp-list' >
                                    <option value="0"> Tất cả </option>

                                </select>
                            </div>
                        </div>
                        <div style={{ fontSize: "20px", marginLeft: "-20px" }} className="admin-post__head">
                            Danh sách công việc
                            <br />
                        </div>
                        <div className="admin-post__body">
                            <table id="admin-post__table">
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th style={{ width: '200px' }}>Tiêu đề</th>
                                        <th style={{ width: '200px' }}>Ngày bắt đầu</th>
                                        <th style={{ width: '200px' }}>Ngày kết thúc</th>
                                        <th style={{ width: '200px' }}>Người nhận việc</th>
                                        <th style={{ width: '300px' }}>Chi tiết công việc</th>
                                        <th style={{ width: '300px' }}>Xóa công việc</th>
                                    </tr>
                                    {/* {
                                        workList?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item?.title}</td>
                                                <td>{item?.startDate}</td>
                                                <td>{item?.dueDate}</td>
                                                <td>{item?.buildingEmployee?.name}</td>
                                                <td>
                                                    <button onClick={() => popUpEditForm(index)} className="post-edit-item-btn">
                                                        <i className='bx bxs-pencil'></i>
                                                        Xem
                                                    </button>
                                                </td>
                                                <td>
                                                    <button onClick={() => deleteClick(item.id)} className="post-delete-btn">
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
            </div>
            <Footer />
        </>
    )
}

export default Work;