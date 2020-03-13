import React from 'react';
import './Map.css';
import garageImg from './../../assets/garage.JPG'
import { Link } from 'react-router-dom';

export default class Map extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>222 ถ.สุขุมวิท กรุงเทพ, ประเทศไทย</p>
                    <i className="fas fa-compass fa-2x"></i>
                </div>
                <div className="map-image-card">
                    <img className="map-image" src={garageImg} />
                </div>
                <div className="contact">
                    <div className="contact-item">
                        <i className="fas fa-phone-volume fa-3x"></i>
                        <strong>เบอร์โทร</strong>
                    </div>
                    <div className="contact-item">
                        <i className="far fa-comment-dots fa-3x"></i>
                        <strong>ข้อความ</strong>
                    </div>
                </div>
                <Link to="/">
                    <div className="footer">
                        <div className="footer-icon">
                            <i className="fas fa-user-tie fa-2x"></i>
                        </div>
                        <div className="footer-text">
                            <strong>คลิกเพื่อโทรหาเจ้าหน้าที่</strong>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}