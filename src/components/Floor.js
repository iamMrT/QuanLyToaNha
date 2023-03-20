import React from 'react';
import { Link } from 'react-router-dom';
import '../css/building.css'
import '../css/form.css'
import Footer from './Footer';
import Header from './Header';

function Floor() {

    return (
        <>
            <Header />
            <div style={{}}>
                {/* <div style={{ display: 'block' }} className="">
                    <div className="modal_overlay"></div>
                    <div className="form-post">
                        <div className="form-post__title dialog__title">
                            Thêm mới tầng
                        </div>

                        <div className="form-post__content">
                            <div className="form-post__wrapper">
                                <div className="form-post__field .floor-form">
                                    <p style={{ textAlign: "left" }}><strong>Tên Tầng</strong></p>
                                    <input style={{ width: '100%' }} type="text" id='name-floor' placeholder="tên"
                                    />

                                </div>
                                <div className="form-post__field">
                                    <p style={{ textAlign: "left" }}><strong>Giá tiền/m2</strong></p>
                                    <input style={{ width: '100%' }} type="number" id='price-per-M2' placeholder="Giá tiền"
                                    />
                                </div>
                                <div className="form-post__field">
                                    <p style={{ textAlign: "left" }}><strong>Diện tích tầng</strong></p>
                                    <input style={{ width: '100%' }} type="number" id='ground-area' placeholder="Diện tích"
                                    />
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
                                Danh sách các tầng
                            </div>
                            <div style={{ right: '10px' }} className="admin-post__button">
                                <button>
                                    Thêm tầng
                                </button>
                            </div>
                        </div>
                        <div className="admin-post__body">
                            <table id="admin-post__table">
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th style={{ width: '200px' }}>Tầng</th>
                                        <th style={{ width: '200px' }}>Diện tích(m2)</th>
                                        <th style={{ width: '200px' }}>Giá tiền /m2 1 tháng</th>
                                        <th style={{ width: '105px' }}>Danh sách mặt bằng</th>
                                        <th style={{ width: '105px' }}>Sửa</th>
                                        <th style={{ width: '105px' }} >Xóa</th>
                                    </tr>
                                    {/* {
                                    floorsFromReducer?.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item?.name}</td>
                                            <td>{item?.groundArea}</td>
                                            <td>{new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(item?.pricePerM2)}</td>


                                            <td>
                                                <Link to={{
                                                    pathname: "/rented-areas",
                                                    search: `?floorId=` + item?.id,
                                                }}>
                                                    <button className="post-edit-item-btn">
                                                        <i className='bx bxs-pencil'></i>
                                                        Xem
                                                    </button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button className="post-edit-item-btn" onClick={() => editClick(item)} >
                                                    <i className='bx bxs-pencil'></i>
                                                    Sửa
                                                </button>
                                            </td>
                                            <td>
                                                <button className="post-delete-btn" onClick={() => removeFloor(item.id)}>
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
    );
}

export default Floor;