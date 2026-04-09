// BigBlueButton open source conferencing system - http://www.bigbluebutton.org/.
//
// Copyright (c) 2022 BigBlueButton Inc. and by respective authors (see below).
//
// This program is free software; you can redistribute it and/or modify it under the
// terms of the GNU Lesser General Public License as published by the Free Software
// Foundation; either version 3.0 of the License, or (at your option) any later
// version.
//
// Greenlight is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
// PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License along
// with Greenlight; if not, see <http://www.gnu.org/licenses/>.

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer">
      <Container>
        <Row className="gy-4">
          {/* Logo and Social */}
          <Col lg={4} md={6}>
            <div className="footer-logo">
              <a href="https://ashal.om">
                <img src="/logo.png" alt="Ashhal Logo" />
              </a>
            </div>
            <span className="footer-title">{ t(' لتكن على تواصل ') || 'لتكن على تواصل'}</span>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/profile.php?id=100063579850260" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <i className="bi bi-facebook" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/qr/CCAI6JZD6JKGO1" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <i className="bi bi-whatsapp" />
                </a>
              </li>
              <li>
                <a href="https://x.com/ashaledu" target="_blank" rel="noreferrer" aria-label="X">
                  <i className="bi bi-twitter-x" />
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@-ashal2608" target="_blank" rel="noreferrer" aria-label="Youtube">
                  <i className="bi bi-youtube" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/showcase/ashal-educatino-platform/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <i className="bi bi-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ashaledu" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="bi bi-instagram" />
                </a>
              </li>
            </ul>
          </Col>

          {/* About Ashal */}
          <Col lg={4} md={6}>
            <strong className="footer-title">عن أسهل</strong>
            <ul className="footer-list">
              <li><a href="https://ashal.om/contact-us/">تواصل معنا</a></li>
              <li><a href="https://ashal.om/faq/">الأسئلة الشائعة</a></li>
              <li><a href="https://ashal.om/%d9%85%d9%86-%d9%86%d8%ad%d9%86/">من نحن</a></li>
            </ul>
          </Col>

          {/* Help and Support */}
          <Col lg={4} md={6}>
            <strong className="footer-title">المساعدة والدعم</strong>
            <ul className="footer-list">
              <li><a href="https://ashal.om/instructions/">تعليمات الطالب</a></li>
              <li><a href="https://ashal.om/privacy-policy/">سياسة الخصوصية</a></li>
              <li><a href="https://ashal.om/terms-and-conditions/">الشروط و الأحكام</a></li>
              <li><a href="https://ashal.om/teacher-registration/">تسجيل كمعلم</a></li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Section */}
        <div className="footer-secondary text-center">
          <div className="copyrights">
            <span>جميع الحقوق محفوظة لـمنصة أسهل التعليمية ©2026</span>
          </div>
          <ul className="bottom-menu">
            <li><a href="/">الرئيسية</a></li>
            <li><a href="https://ashal.om/courses/">الدروس</a></li>
            <li><a href="https://ashal.om/blog/">المدونة</a></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
