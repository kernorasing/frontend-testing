import React from 'react';
import './History.css';
import carServiceImg from '../../assets/car-service.png';
import { Link } from 'react-router-dom';

export default class History extends React.Component {

    servicesHistory = [
        {
            label: 'เปลี่ยนยาง', garage: 'อู่ใจดี กทม.', distance: '5,000 km', date: '1 ม.ค. 63', price: 'THB 1,500'
        },
        {
            label: 'เช็คระยะ', garage: 'อู่ใจดี ภูเก็ต.', distance: '15,000 km', date: '1 ม.ค. 63', price: 'THB 1,500'
        },
        {
            label: 'เปลี่ยนครัช', garage: 'อู่ใจดี กทม.', distance: '8,000 km', date: '1 ม.ค. 63', price: 'THB 1,500'
        },
        {
            label: 'ซ่อมเบรค', garage: 'อู่ใจดี ภูเก็ต.', distance: '5,000 km', date: '1 ม.ค. 63', price: 'THB 1,500'
        },
        {
            label: 'เช็คระยะ', garage: 'อู่ใจดี กทม.', distance: '9,000 km', date: '1 ม.ค. 63', price: 'THB 1,500'
        },
        {
            label: 'เปลี่ยนครัช', garage: 'อู่ใจดี ภูเก็ต.', distance: '5,000 km', date: '1 ม.ค. 63', price: 'THB 1,500'
        },
        {
            label: 'เปลี่ยนยาง', garage: 'อู่ใจดี กทม.', distance: '5,000 km', date: '1 ม.ค. 63', price: 'THB 1,500'
        }
    ]

    render() {

        const dateNow = new Date().toLocaleDateString();

        return (
            <div>
                <p id="label-page">5 รายการ ({dateNow} - {dateNow})</p>

                {
                    this.servicesHistory.map((s,i) => {
                        return (
                            <Link to="/map" key={i}>
                                <div className="service-item">
                                    <img src={carServiceImg} />
                                    <div className="service-item-info">
                                        <div className="service-item-info-left">
                                            <label><strong>{s.label}</strong></label>
                                            <p><i className="fas fa-map-marker-alt"></i>{s.garage}</p>
                                            <p>ระยะทาง {s.distance}</p>
                                        </div>
                                        <div className="service-item-info-right">
                                            <small>{s.date}</small>
                                            <p>{s.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}