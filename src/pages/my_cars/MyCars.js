import React from 'react';
import './MyCars.css';
import truckImg from './../../assets/my-truck.jpg';
import { Link } from 'react-router-dom';

class MyCars extends React.Component {
    render() {
        return (
            <div>
                <div className="car-image">
                    <Link to="/history">
                        <img src={truckImg} />
                    </Link>
                </div>

                <div className="car-info-label">
                    <h2>Ford</h2>
                    <p>เข้ารับบริการครั้งต่อไป {new Date().toLocaleDateString()}</p>
                </div>

                <div className="car-info">
                    <div className="car-info-item">
                        <i className="fas fa-car"></i>
                        <span>Ford</span>
                    </div>
                    <div className="car-info-item">
                        <i className="fas fa-address-card"></i>
                        <span>กข 1234</span>
                    </div>
                    <div className="car-info-item">
                        <i className="fas fa-map-marked-alt"></i>
                        <span>เชียงใหม่</span>
                    </div>
                    <div className="car-info-item">
                        <i className="fas fa-fill-drip"></i>
                        <span>สีขาว</span>
                    </div>
                    <div className="car-info-item">
                        <i className="fas fa-tachometer-alt"></i>
                        <span>50,000 km</span>
                    </div>
                </div>

                <div className="remark">
                    <p>เข้ารับบริการครั้งล่าสุด {new Date().toLocaleDateString()}</p>
                    <textarea placeholder="Note..." rows="5"></textarea>
                </div>
            </div>
        );
    }
}

export default MyCars;