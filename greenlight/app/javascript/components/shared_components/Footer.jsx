import React from 'react';

export default function Footer() {
  return (
    <footer className="astp-main-footer">
      <div className="astp-header-nav-shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z" />
          <path opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z" />
          <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z" />
        </svg>
      </div>

      <section className="astp-footer-main-section">
        <div className="astp-footer-contact-col">
          <div className="astp-footer-logo">
            <a href="https://ashal.om">
              <img src="https://ashal.om/wp-content/uploads/2024/02/Image-1-1.png" alt="شعار منصة أسهل التعلمية" width="200" height="100" aria-label="Ashal Logo" />
            </a>
          </div>
          <span className="astp-footer-social-links-title">لتكن على تواصل</span>
          <ul className="astp-footer-social-links-list">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100063579850260&amp;mibextid=ZbWKwL" aria-label="Facebook" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook align-middle" style={{ lineHeight: '31px' }} />
              </a>
            </li>
            <li>
              <a href="https://wa.me/qr/CCAI6JZD6JKGO1" aria-label="WhatsApp" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp align-middle" style={{ lineHeight: '31px' }} />
              </a>
            </li>
            <li>
              <a href="https://x.com/ashaledu?t=pJ5HoEwu4QdXh7HGkzkv0Q&amp;s=09" aria-label="X" target="_blank" rel="noreferrer">
                <i className="bi bi-twitter-x align-middle" style={{ lineHeight: '18px' }} />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@-ashal2608?si=q0gJd-PMjvx_d9tX" aria-label="Youtube" target="_blank" rel="noreferrer">
                <i className="bi bi-youtube align-middle" style={{ lineHeight: '31px' }} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/showcase/ashal-educatino-platform/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin align-middle" style={{ lineHeight: '31px' }} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ashaledu?igsh=MXF3eWEwM254dXc2Nw==" aria-label="Instagram" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram align-middle" style={{ lineHeight: '31px' }} />
              </a>
            </li>
          </ul>
        </div>
        <div className="astp-footer-links-col">
          <strong className="astp-footer-links-title">عن أسهل</strong>
          <ul id="menu-ashal-about" className="menu">
            <li id="menu-item-152217" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-152217">
              <a href="https://ashal.om/contact-us/">تواصل معنا</a>
            </li>
            <li id="menu-item-152201" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-152201">
              <a href="https://ashal.om/faq/">الأسئلة الشائعة</a>
            </li>
            <li id="menu-item-150341" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-150341">
              <a href="https://ashal.om/%d9%85%d9%86-%d9%86%d8%ad%d9%86/">من نحن</a>
            </li>
          </ul>
        </div>
        <div className="astp-footer-links-col">
          <strong className="astp-footer-links-title">المساعدة والدعم</strong>
          <ul id="menu-ashal-support" className="menu">
            <li id="menu-item-150340" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-150340">
              <a href="https://ashal.om/instructions/">تعليمات الطالب</a>
            </li>
            <li id="menu-item-152166" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-152166">
              <a rel="privacy-policy" href="https://ashal.om/privacy-policy/">سياسة الخصوصية</a>
            </li>
            <li id="menu-item-152167" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-152167">
              <a href="https://ashal.om/terms-and-conditions/">الشروط و الأحكام</a>
            </li>
            <li id="menu-item-165438" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-165438">
              <a href="https://ashal.om/teacher-registration/">تسجيل كمعلم</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="astp-footer-secondary-section">
        <div className="astp-footer-copyrights-msg">
          <span>جميع الحقوق محفوظة لـمنصة أسهل التعليمية ©2026</span>
        </div>
        <ul id="menu-footer-bottom" className="menu">
          <li id="menu-item-152218" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-152218">
            <a href="/" aria-current="page">الرئيسية</a>
          </li>
          <li id="menu-item-62647" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-62647">
            <a href="https://test1.ashal.om/courses/">الدروس</a>
          </li>
          <li id="menu-item-150356" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-150356">
            <a href="https://ashal.om/blog/">المدونة</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
