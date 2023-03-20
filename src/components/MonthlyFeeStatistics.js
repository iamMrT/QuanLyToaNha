import React from 'react';
import '../css/building.css'
import '../css/form.css'
import Footer from './Footer';
import Header from './Header';
function MonthlyFeeStatistics() {

    return (
        <>
            <Header />
            <div style={{ position: 'relative' }}>
                <div style={{ maxWidth: "1500px", minHeight: "100vh" }} className="admin-post__container">
                    <div className="admin-post__wrapper">
                        <div className="admin-post__head">
                            <div style={{ fontSize: "20px", marginLeft: "-20px" }} className="admin-post__title">
                                Tiền phải trả tháng 3 năm 2023 cuả các công ty từ đầu tháng tính đến thời điểm hiện tại
                            </div>
                        </div>

                        <div className="admin-post__body" style={{ marginBottom: "50px" }}>
                            <table id="admin-post__table" style={{ maxWidth: "1500px" }}>
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th style={{ width: '300px' }}>Tên công ty</th>
                                        <th style={{ width: '300px' }}>Lĩnh vực hoạt động</th>
                                        <th style={{ width: '300px' }}>Mã số thuế</th>
                                        <th style={{ width: '300px' }}>Vốn điều lệ</th>
                                        <th style={{ width: '300px' }}>SDT</th>
                                        <th style={{ width: '300px' }}>Số nhân viên</th>
                                        <th style={{ width: '300px' }}>Tổng diện tích mặt bằng</th>
                                        <th style={{ width: '300px' }}>Tổng tiền phải trả tháng này</th>
                                        <th style={{ width: '300px' }}>Dịch vụ</th>
                                        <th style={{ width: '200px' }}>Mặt bằng thuê</th>

                                    </tr>
                                    {/* {
                                    bills?.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item?.contract?.floor?.name}</td>
                                            <td>{item?.contract?.position}</td>
                                            <td>{item?.contract?.rentedArea}</td>
                                            <td>{moment(item?.contract?.rentedDate).format("DD-MM-YYYY")}</td>
                                            <td>{moment(item?.contract?.expiredDate).format("DD-MM-YYYY")}</td>
                                            <td>{new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(item?.contract?.floor?.pricePerM2)}</td>
                                            <td>{new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(item?.totalAmount)}</td>
                                        </tr>
                                    ))
                                } */}

                                </tbody>
                            </table>

                        </div>

                        {/* <div className="admin-post__head">
                            <div style={{ fontSize: "20px", marginLeft: "-20px" }} className="admin-post__title">
                                Danh sách hóa đơn tiền dùng dịch vụ của công ty
                            </div>
                        </div>
                        <div className="admin-post__body">
                            <table id="admin-post__table">
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th style={{ width: '200px' }}>Dịch vụ</th>
                                        <th style={{ width: '200px' }}>Giá tiền cơ bản 1 tháng</th>
                                        <th style={{ width: '200px' }}>Loại dịch vụ</th>
                                        <th style={{ width: '200px' }}>Ngày bắt đầu đăng ký</th>
                                        <th style={{ width: '200px' }}>Tổng tiền</th>
                                    </tr>
                                    {
                                            serviceBills?.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item?.serviceContract?.service?.name}</td>

                                                    <td>{new Intl.NumberFormat('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    }).format(item?.serviceContract?.service?.price)}</td>
                                                    <td>{item?.serviceContract?.service?.type}</td>

                                                    <td>{moment(item?.serviceContract?.startDate).format("DD-MM-YYYY")}</td>
                                                    <td>{new Intl.NumberFormat('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    }).format(item?.totalAmount)}</td>
                                                </tr>
                                            ))
                                        }

                                </tbody>
                            </table>


                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MonthlyFeeStatistics;