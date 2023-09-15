<script>
import { RouterLink } from 'vue-router';
export default {
    components: {
        RouterLink
    }
}
</script>
<template>
  <div>
    <nav class="container py-4" aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <RouterLink to="/" class="text-decoration-none">首頁</RouterLink>
        </li>
        <li class="breadcrumb-item">
          <RouterLink to="/Products" class="text-decoration-none">所有商品</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">10吋美顏環形LED攝影燈/直播燈/補光燈</li>
      </ol>
    </nav>
    <main class="mb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div class="row">
                <div class="col-sm-2 d-none d-sm-block">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="btn p-0 mb-2 active" aria-current="true" aria-label="Slide 1">
                    <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e57a3639c25e00172d56e3/800x.webp?source_format=jpg" alt="" class="img-fluid">
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="btn p-0 mb-2" aria-label="Slide 2">
                    <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e57a367357bb000e857f39/800x.webp?source_format=jpg" alt="" class="img-fluid">
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="btn p-0 mb-2" aria-label="Slide 3">
                    <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e57a36dd89b0001d16375b/800x.webp?source_format=jpg" alt="" class="img-fluid">
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="btn p-0 mb-2" aria-label="Slide 4">
                    <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e57a36adc6bd0014f576d5/800x.webp?source_format=jpg" alt="" class="img-fluid">
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" class="btn p-0 mb-2" aria-label="Slide 5">
                    <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e57a36d488780020d25e56/800x.webp?source_format=jpg" alt="" class="img-fluid">
                  </button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" class="btn p-0 mb-2" aria-label="Slide 6">
                    <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e57a3639c25e00172d56e3/800x.webp?source_format=jpg" alt="" class="img-fluid">
                  </button>
                </div>
                <div class="col-12 col-sm-10 position-relative px-xl-0">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e57a3639c25e00172d56e3/800x.webp?source_format=jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e57a367357bb000e857f39/800x.webp?source_format=jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e57a36dd89b0001d16375b/800x.webp?source_format=jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e57a36adc6bd0014f576d5/800x.webp?source_format=jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e57a36d488780020d25e56/800x.webp?source_format=jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e57a3639c25e00172d56e3/800x.webp?source_format=jpg" class="d-block w-100" alt="...">
                    </div>
                  </div>
                  <button class="carousel-control-prev productBtn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next productBtn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 ps-xl-5 mt-4 mt-md-0">
            <div class="mt-3 mt-md-0">
              <!-- 分類 -->
              <a href="#" class="nav-link p-0 mb-3 fw-bold">手機線材</a>
              <!-- 產品名稱 -->
              <h3 class="mb-3">編織充電線│USB C to Lightning</h3>
              <!-- 價格 -->
              <div class="fs-5 mb-3">
                <span class="fw-bold me-2">$399</span>
                <span class="text-decoration-line-through text-muted">$599</span>
              </div>
              <p class="lh-lg">
                ▪ 日本最新流行馬卡龍配色<br>
                ▪ 日本各大平台熱賣，台灣初步登場<br>
                ▪ 3A大電流充電，支援眾多機型使用<br>
                ▪ 資料傳輸兼具，每秒 480Mbps 高傳輸<br>
                ▪ 特殊耐操材質不纏繞，親膚材質完美觸感<br>
                ▪ 獨家石墨包覆、高純度銅製芯線，安全不過熱<br>
                ▪ 日本精神細節到位，矽膠收納束帶1.2米完美長度<br>
              </p>
              <hr class="my-4">
              <!-- 選商品規格 -->
              <h6>顏色</h6>
              <div class="mb-4">
                <button type="button" class="btn btn-outline-brownDeep me-2">小滄藍</button>
                <button type="button" class="btn btn-outline-brownDeep me-2">曜岩黑</button>
                <button type="button" class="btn btn-outline-brownDeep me-2">啞鉑金</button>
                <button type="button" class="btn btn-outline-brownDeep me-2">鋒芒銀</button>
              </div>
              <hr class="my-4">
              <ul class="navbar-nav">
                <li class="nav-item mb-2">商品編號：<span>CONNECT GEAR FLEX CC</span></li>
                <li class="nav-item mb-2">商品數量：<span class="text-success fw-bold">999</span></li>
                <li class="nav-item mb-2">出貨地點：台中市西區</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 商品介紹 -->
        <section class="mt-5">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item me-md-2" role="presentation">
              <button class="nav-link active" id="describe-tab" data-bs-toggle="tab" data-bs-target="#describe" type="button" role="tab" aria-controls="describe" aria-selected="true">商品描述</button>
            </li>
            <li class="nav-item me-md-2" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">商品規格</button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane pt-3 fade text-center show active" id="describe" role="tabpanel" aria-labelledby="describe-tab">
              <img src="https://img.shoplineapp.com/media/image_clips/64e8147460c97c001d6c45cc/original.jpg?1692931187" class="img-fluid" alt="">
            </div>
            <div class="tab-pane pt-3 fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <p class="lh-lg">
                ▪ 產品型號：AVCUCL10<br>
                ▪ 適用規格：Lightning to USB C<br>
                ▪ 適用設備：Lightning to USB C 接頭之設備皆通用<br>
                ▪ 線材長度：1M (100cm)<br>
                ▪ 插頭材質：鋅合金<br>
                ▪ 外殼材質：PC電鍍<br>
                ▪ 外編織材質：聚酯纖維<br>
                ▪ 線徑：3.1mm<br>
                ▪ 產地：台灣設計，中國製造<br>
                ▪ 注意事項：本商品除傳輸線產品之外不含任何商照上之物品<br>
                ▪ 備註：商品會因光線與電腦顯色有所差異，請以實際商品為主<br>
                ▪ 保固：非人為因素損壞，Avier原廠保固一年(須出示購買證明)<br>
              </p>
            </div>
          </div>
        </section>
        <!-- 相關商品 -->
        <section class="my-5">
          <div class="container">
            <h5 class="d-flex align-items-center mb-3"><img class="me-2" src="../images/icon/ic_label.svg" alt="">相關商品</h5>
            <div class="row row-cols-lg-4 row-cols-2 row-cols-md-2">
              <div class="col mb-2">
                <div class="card border-0 rounded-0 rounded-0">
                  <a href="#" class="card-img-top position-relative text-decoration-none">
                    <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                    <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                  </a>
                  <div class="card-body">
                    <h6 class="card-title">
                      <a href="#" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col mb-2">
                <div class="card border-0 rounded-0 rounded-0">
                  <a href="#" class="card-img-top position-relative text-decoration-none">
                    <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                    <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                  </a>
                  <div class="card-body">
                    <h6 class="card-title">
                      <a href="#" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col mb-2">
                <div class="card border-0 rounded-0 rounded-0">
                  <a href="#" class="card-img-top position-relative text-decoration-none">
                    <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                    <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                  </a>
                  <div class="card-body">
                    <h6 class="card-title">
                      <a href="#" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col mb-2">
                <div class="card border-0 rounded-0 rounded-0">
                  <a href="#" class="card-img-top position-relative text-decoration-none">
                    <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                    <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                  </a>
                  <div class="card-body">
                    <h6 class="card-title">
                      <a href="#" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<style>
.slick-arrow{
  border-radius: 50%;
  transform: translate(0,-50%);
  top: 50%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
}
.slick-arrow.slick-prev{
  left: -1%;
}
.slick-arrow.slick-next{
  right: -1%;
}
.productImg img{
  border-radius: 1rem;
}
.relatedProductSlick .slick-dots{
  margin-top: 2rem;
}
/* 加入購物車icon + 加入收藏icon */
.ic_cart{
  background: url('../images/icon/ic_cart_brown.svg') no-repeat center center / contain;
  width: 18px;
  height: 18px;
  display: inline-block;
}
.btn:hover .ic_cart{
  background: url('../images/icon/ic_cart_white.svg') no-repeat center center / contain;
}

.ic_like{
  background: url('../images/icon/ic_like_brown.svg') no-repeat center center / contain;
  width: 18px;
  height: 18px;
  display: inline-block;
}
.btn:hover .ic_like{
  background: url('../images/icon/ic_like_white.svg') no-repeat center center / contain;
}
/* 商品介紹 */
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active{
  color: var(--color-brownDeep);
  border-color: var(--color-white) var(--color-white) var(--color-brownDeep);
}
.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover{
  border-color: var(--color-white) var(--color-white) var(--color-brownDeep);
}

.productBtn{
  opacity: 1;
  transition: .3s;
  bottom: 2%;
  width: 7%;
  top: initial;
}
.carousel-control-prev{
  right: 13%;
  left: initial;
}
.carousel-control-next{
  right: 3%;
}
</style>