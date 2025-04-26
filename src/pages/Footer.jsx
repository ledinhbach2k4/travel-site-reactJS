import React from 'react';
import Button from '../components/Button';
import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Tham gia bản tin Adventure để nhận những ưu đãi tốt nhất cho kỳ nghỉ của bạn.
        </p>
        <p className="footer-subscription-text">
          Bạn có thể hủy đăng ký bất cứ lúc nào.
        </p>
        <div className="input-areas">
          <form>
            <input 
              type="email" 
              name="email" 
              placeholder="Email của bạn" 
              className="footer-input" 
            />
            <Button children="Đăng ký" buttonStyle="btn--outline" />
          </form>
        </div>
      </section>
      <section className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Thông tin</h2>
            <Link to='/sign-up'>Cách thức hoạt động</Link>
            <Link to='/'>Lời chứng thực</Link>
            <Link to='/'>Cơ hội nghề nghiệp</Link>
            <Link to='/'>Nhà đầu tư</Link>
            <Link to='/'>Điều khoản dịch vụ</Link>
          </div>
          <div className="footer-link-items">
            <h2>Liên Hệ</h2>
            <Link to='/sign-up'>Hỗ trợ</Link>
            <Link to='/'>Liên hệ chúng tôi</Link>
            <Link to='/'>Cơ hội nghề nghiệp</Link>
            <Link to='/'>Trở thành đối tác</Link>
            <Link to='/'>Trở thành thành viên</Link>
          </div>
          <div className="footer-link-items">
            <h2>Nguồn</h2>
            <Link to='/sign-up'>Gửi Video</Link>
            <Link to='/'>Đại sứ</Link>
            <Link to='/'>Cơ quan</Link>
            <Link to='/'>Người ảnh hưởng</Link>
            <Link to='/'>Báo cáo sự cố</Link>
          </div>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo" to="/">
              TRAVEL-SITE <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">
            TRAVEL-SITE &copy; 2025
          </small>
          <div className="social-icons">
            <Link 
              className="social-icon-link facebook" 
              to="/" 
              target="_blank" 
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link 
              className="social-icon-link instagram" 
              to="/" 
              target="_blank" 
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link 
              className="social-icon-link youtube" 
              to="/" 
              target="_blank" 
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link 
              className="social-icon-link twitter" 
              to="/" 
              target="_blank" 
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link 
              className="social-icon-link linkedin" 
              to="/" 
              target="_blank" 
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
