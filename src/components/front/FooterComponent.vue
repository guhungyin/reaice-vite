<script>
import { RouterLink } from 'vue-router';
export default {
    components: {
        RouterLink
    }
}
</script>
<template>
  <footer class="footer">
      <div class="container">
        <div class="footerContent pt-5 pb-4 row flex-column flex-lg-row">
          <div class="col-12">
            <div class="footerMenu row">
              <div class="col-12 col-md-4 mb-3 mb-md-0">
                <h6 class="fs-6 fw-bold">COMPANY</h6>
                <ul class="nav flex-md-column">
                  <li class="nav-item">
                    <RouterLink to="/Brand" class="nav-link ps-0 px-md-0">品牌故事</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/WhereBuy" class="nav-link ps-0 px-md-0">線上通路</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/Collaboration" class="nav-link ps-0 px-md-0">異業合作</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/CompanyProfile" class="nav-link ps-0 px-md-0">公司資訊</RouterLink>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-4 mb-3 mb-md-0">
                <h6 class="fs-6 fw-bold">SERVICE</h6>
                <ul class="nav flex-md-column">
                  <li class="nav-item">
                    <RouterLink to="/ProductsMaintenance" class="nav-link ps-0 px-md-0">保固登陸</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/PrivacyPolicy" class="nav-link ps-0 px-md-0">隱私條款</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/Return" class="nav-link ps-0 px-md-0">產品退換貨</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/Tos" class="nav-link ps-0 px-md-0">條款與細則</RouterLink>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-4 mb-3 mb-md-0">
                <h6 class="fs-6 fw-bold">CONTACT US</h6>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link px-0" href="">統一編號 | 83396788</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-0" href="tel:04-22581618">客服電話 | 04-22581618</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-0" href="">營業時間 | 週一至週五 9:00-18:00</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-0" href="https://goo.gl/maps/u54XsifDbUTpZmNSA" target="_blank">公司地址 | 407 台中市西區台灣大道二段2號4樓之6</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-md-between py-3">
          <span class="text-center mb-2 mb-md-0">Copyright © 2023，<a class="text-decoration-none" href="./index.html">reaice.com</a>，All Rights Reserved.</span>
          <ul class="nav justify-content-center payItem">
            <li class="nav-item ms-0 ms-md-3">
              <i class="d-block w-100 h-100 visa"></i>
            </li>
            <li class="nav-item ms-3">
              <i class="d-block w-100 h-100 pp"></i>
            </li>
            <li class="nav-item ms-3">
              <i class="d-block w-100 h-100 ec"></i>
            </li>
            <li class="nav-item ms-3">
              <i class="d-block w-100 h-100 mc"></i>
            </li>
            <li class="nav-item ms-3">
              <i class="d-block w-100 h-100 jcb"></i>
            </li>
            <li class="nav-item ms-3">
              <i class="d-block w-100 h-100 up"></i>
            </li>
          </ul>
        </div>
      </div>
  </footer>
</template>