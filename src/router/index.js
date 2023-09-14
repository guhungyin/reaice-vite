import { createRouter, createWebHashHistory } from 'vue-router'
import FrontView from '../views/front/FrontView.vue'
import IndexView from '../views/front/index/IndexView.vue'
import BrandView from '../views/front/companyFolder/BrandView.vue'
import CollaborationView from '../views/front/companyFolder/CollaborationView.vue'
import CompanyProfileView from '../views/front/companyFolder/CompanyProfileView.vue'
import ProductMaintenanceView from '../views/front/companyFolder/ProductMaintenanceView.vue'
import WhereBuyView from '../views/front/companyFolder/WhereBuyView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routers = [
  {
    path: '/',
    component: FrontView,
    children: [
      {
        path: "",
        name: "index",
        component: IndexView,
      },
      {
        path: "brand",
        name: "brand",
        component: BrandView,
      },
      {
        path: "collaboration",
        name: "collaboration",
        component: CollaborationView,
      },
      {
        path: "companyProfile",
        name: "companyProfile",
        component: CompanyProfileView,
      },
      {
        path: "productMaintenance",
        name: "productMaintenance",
        component: ProductMaintenanceView,
      },
      {
        path: "whereBuy",
        name: "whereBuy",
        component: WhereBuyView,
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFoundView,
  }
]


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routers,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: to.meta.savedPosition || 0 };
    }
  },
  beforeRouteLeave(to, from, next) {
    this.scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    next();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      document.body.scrollTop = vm.scrollTop;
    });
  },
})

export default router;
