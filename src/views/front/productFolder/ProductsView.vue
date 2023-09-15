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
        <ol class="breadcrumb mb-0 py-2">
          <li class="breadcrumb-item">
            <RouterLink to="/" class="text-decoration-none">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">所有商品</li>
        </ol>
    </nav>
    <main class="mb-4">
        <div class="container">
            <div class="row">
                <aside class="col-lg-3 col-md-4 d-none d-lg-block">
                  <ul class="nav nav-category" id="productsMenu">
                    <li class="nav-item w-100 mb-1">
                        <a href="#" class="ps-0 nav-link collapsed d-flex justify-content-between fw-bold">所有商品</a>
                    </li>
                    <li class="nav-item w-100 mb-1">
                        <a href="#" class="ps-0 nav-link collapsed d-flex justify-content-between fw-bold" data-bs-toggle="collapse" data-bs-target="#ProductPageCableMenu" aria-expanded="false" aria-controls="ProductPageCableMenu">充電線材<img class="ic_arr" src="../images/icon/ic_right_black.svg" alt=""></a>
                        <div id="ProductPageCableMenu" class="accordion-collapse collapse" data-bs-parent="#productsMenu">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Apple | C to C</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Apple | C to Lightning</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Apple | A to Lightning</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Android | USB-A to C</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Android | USB-C to C</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item w-100 mb-1">
                        <a href="#" class="ps-0 nav-link collapsed d-flex justify-content-between fw-bold" data-bs-toggle="collapse" data-bs-target="#ProductPageCargerMenu" aria-expanded="false" aria-controls="ProductPageCargerMenu">車旅充<img class="ic_arr" src="../images/icon/ic_right_black.svg" alt=""></a>
                        <div id="ProductPageCargerMenu" class="accordion-collapse collapse" data-bs-parent="#productsMenu">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">USB充電器</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">GaN氮化鎵快充器</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">車用充電器</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">Qi無線充電</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">行動電源</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item w-100 mb-1">
                        <a href="#" class="ps-0 nav-link collapsed d-flex justify-content-between fw-bold" data-bs-toggle="collapse" data-bs-target="#ProductPageLiveMenu" aria-expanded="false" aria-controls="ProductPageLiveMenu">直播專區<img class="ic_arr" src="../images/icon/ic_right_black.svg" alt=""></a>
                        <div id="ProductPageLiveMenu" class="accordion-collapse collapse" data-bs-parent="#productsMenu">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">直播燈</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">會議麥克風</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item w-100 mb-1">
                        <a href="#" class="ps-0 nav-link collapsed d-flex justify-content-between fw-bold" data-bs-toggle="collapse" data-bs-target="#ProductPageHeadphonesMenu" aria-expanded="false" aria-controls="ProductPageHeadphonesMenu">耳機專區<img class="ic_arr" src="../images/icon/ic_right_black.svg" alt=""></a>
                        <div id="ProductPageHeadphonesMenu" class="accordion-collapse collapse" data-bs-parent="#productsMenu">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">無線藍牙耳機</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">入耳式耳機</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">運動型耳機</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                  </ul>
                </aside>
                <section class="col-lg-9 col-md-12">
                    <h5 class="mb-4 fw-bold">所有商品</h5>
                    <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                      <div class="col mb-2">
                        <div class="card border-0 rounded-0 rounded-0">
                          <RouterLink to="/Product/:id" class="card-img-top position-relative text-decoration-none">
                            <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                            <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                          </RouterLink>
                          <div class="card-body">
                            <h6 class="card-title">
                              <RouterLink to="/Product/:id" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</RouterLink>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="col mb-2">
                        <div class="card border-0 rounded-0 rounded-0">
                          <RouterLink to="/Product/:id" class="card-img-top position-relative text-decoration-none">
                            <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                            <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                          </RouterLink>
                          <div class="card-body">
                            <h6 class="card-title">
                              <RouterLink to="/Product/:id" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</RouterLink>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="col mb-2">
                        <div class="card border-0 rounded-0 rounded-0">
                          <RouterLink to="/Product/:id" class="card-img-top position-relative text-decoration-none">
                            <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                            <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                          </RouterLink>
                          <div class="card-body">
                            <h6 class="card-title">
                              <RouterLink to="/Product/:id" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</RouterLink>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="col mb-2">
                        <div class="card border-0 rounded-0 rounded-0">
                          <RouterLink to="/Product/:id" class="card-img-top position-relative text-decoration-none">
                            <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                            <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                          </RouterLink>
                          <div class="card-body">
                            <h6 class="card-title">
                              <RouterLink to="/Product/:id" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</RouterLink>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="col mb-2">
                        <div class="card border-0 rounded-0 rounded-0">
                          <RouterLink to="/Product/:id" class="card-img-top position-relative text-decoration-none">
                            <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                            <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                          </RouterLink>
                          <div class="card-body">
                            <h6 class="card-title">
                              <RouterLink to="/Product/:id" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</RouterLink>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="col mb-2">
                        <div class="card border-0 rounded-0 rounded-0">
                          <RouterLink to="/Product/:id" class="card-img-top position-relative text-decoration-none">
                            <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                            <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                          </RouterLink>
                          <div class="card-body">
                            <h6 class="card-title">
                              <RouterLink to="/Product/:id" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</RouterLink>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="col mb-2">
                        <div class="card border-0 rounded-0 rounded-0">
                          <RouterLink to="/Product/:id" class="card-img-top position-relative text-decoration-none">
                            <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                            <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                          </RouterLink>
                          <div class="card-body">
                            <h6 class="card-title">
                              <RouterLink to="/Product/:id" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</RouterLink>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="col mb-2">
                        <div class="card border-0 rounded-0 rounded-0">
                          <RouterLink to="/Product/:id" class="card-img-top position-relative text-decoration-none">
                            <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                            <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                          </RouterLink>
                          <div class="card-body">
                            <h6 class="card-title">
                              <RouterLink to="/Product/:id" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</RouterLink>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="col mb-2">
                        <div class="card border-0 rounded-0 rounded-0">
                          <RouterLink to="/Product/:id" class="card-img-top position-relative text-decoration-none">
                            <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                            <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                          </RouterLink>
                          <div class="card-body">
                            <h6 class="card-title">
                              <RouterLink to="/Product/:id" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</RouterLink>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div class="col mb-2">
                        <div class="card border-0 rounded-0 rounded-0">
                          <RouterLink to="/Product/:id" class="card-img-top position-relative text-decoration-none">
                            <img src="https://shoplineimg.com/5ba394777afd880005c43e0e/64e6c14e6531ad002091ebf9/800x.webp?source_format=jpg" class="img-fluid" alt="...">
                            <span class="position-absolute start-0 top-0 fw-bold labelIcon">HOT</span>
                          </RouterLink>
                          <div class="card-body">
                            <h6 class="card-title">
                              <RouterLink to="/Product/:id" class="nav-link p-0 mb-2 text-center">10吋美顏環形LED攝影燈/直播燈/補光燈</RouterLink>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-5">
                      <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                          <li class="page-item disabled me-2">
                            <a class="page-link border-0 rounded-0" href="#" aria-label="Previous">
                              <span aria-hidden="true">«</span>
                            </a>
                          </li>
                          <li class="page-item mx-2">
                            <a class="page-link border-0 rounded-0 active" href="#">1</a>
                          </li>
                          <li class="page-item mx-2">
                            <a class="page-link border-0 rounded-0" href="#">2</a>
                          </li>
                          <li class="page-item mx-2">
                            <a class="page-link border-0 rounded-0" href="#">3</a>
                          </li>
                          <li class="page-item ms-2">
                            <a class="page-link border-0 rounded-0" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                </section>
            </div>
        </div>
    </main>
  </div>
</template>