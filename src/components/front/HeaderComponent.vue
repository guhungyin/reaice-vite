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
    <header class="header position-sticky shadow-sm">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <RouterLink to="/" class="navbar-brand">
                    <img src="./images/icon/logo.svg" alt="REAICE台陞科技 │ 消費性電子專家" height="24">
                </RouterLink>
                <button class="btn border-0 bg-transparent navbar-toggler p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink to="/BrandView" class="nav-link" aria-current="page">品牌故事</RouterLink>
                        </li>
                        <li class="nav-item">
                          <RouterLink to="/ProductsView" class="nav-link">所有產品</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/3cArticles" class="nav-link">3C小知識</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/kolArticles" class="nav-link">KOL推薦</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/ProductMaintenanceView" class="nav-link">保固登陸</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  </div>
</template>