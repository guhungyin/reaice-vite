import { createRouter, createWebHashHistory } from 'vue-router'
// 版型
import FrontView from '../views/front/FrontView.vue'
// 首頁
import IndexView from '../views/front/index/IndexView.vue'
// 公司資訊
import BrandView from '../views/front/companyFolder/BrandView.vue'
import CollaborationView from '../views/front/companyFolder/CollaborationView.vue'
import CompanyProfileView from '../views/front/companyFolder/CompanyProfileView.vue'
import WhereBuyView from '../views/front/companyFolder/WhereBuyView.vue'
// 服務
import PrivacyPolicyView from '../views/front/serviceFolder/PrivacyPolicyView.vue'
import ProductsMaintenanceView from '../views/front/serviceFolder/ProductsMaintenanceView.vue'
import ReturnView from '../views/front/serviceFolder/ReturnView.vue'
import TosView from '../views/front/serviceFolder/TosView.vue'
// 產品
import ProductsView from '../views/front/productFolder/ProductsView.vue'
import ProductView from '../views/front/productFolder/ProductView.vue'
// 文章
import KnowledgeArticlesView from '../views/front/articlesFolder/KnowledgeArticlesView.vue'
import KnowledgeArticleView from '../views/front/articlesFolder/KnowledgeArticleView.vue'
import KolArticlesView from '../views/front/articlesFolder/KolArticlesView.vue'
import KolArticleView from '../views/front/articlesFolder/KolArticleView.vue'
// 404
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    component: FrontView,
    children: [
      {
        path: "",
        name: "Index",
        component: IndexView,
      },
      {
        path: "Brand",
        name: "Brand",
        component: BrandView,
      },
      {
        path: "Collaboration",
        name: "Collaboration",
        component: CollaborationView,
      },
      {
        path: "CompanyProfile",
        name: "CompanyProfile",
        component: CompanyProfileView,
      },
      {
        path: "WhereBuy",
        name: "WhereBuy",
        component: WhereBuyView,
      },

      {
        path: "PrivacyPolicy",
        name: "PrivacyPolicy",
        component: PrivacyPolicyView,
      },
      
      {
        path: "ProductsMaintenance",
        name: "ProductsMaintenance",
        component: ProductsMaintenanceView,
      },
      {
        path: "Return",
        name: "Return",
        component: ReturnView,
      },
      {
        path: "Tos",
        name: "Tos",
        component: TosView,
      },
      {
        path: "Products",
        name: "Products",
        component: ProductsView,
      },
      {
        path: "Product/:id",
        name: "Product/:id",
        component: ProductView,
        meta: {
          breadcrumb: [
            {
              name: "首頁",
              enName: "Home",
              link: "/",
            },
            {
              name: "產品目錄",
              enName: "Products",
              link: "/Products",
            },
          ],
        },
      },
      {
        path: "KnowledgeArticles",
        name: "KnowledgeArticles",
        component: KnowledgeArticlesView,
      },
      {
        path: "KnowledgeArticle/:id",
        name: "KnowledgeArticle/:id",
        component: KnowledgeArticleView,
        meta: {
          breadcrumb: [
            {
              name: "首頁",
              enName: "Home",
              link: "/",
            },
            {
              name: "3C小知識",
              enName: "3cArticles",
              link: "/KnowledgeArticles",
            },
          ],
        },
      },
      {
        path: "KolArticles",
        name: "KolArticles",
        component: KolArticlesView,
      },
      {
        path: "KolArticle/:id",
        name: "KolArticle/:id",
        component: KolArticleView,
        meta: {
          breadcrumb: [
            {
              name: "首頁",
              enName: "Home",
              link: "/",
            },
            {
              name: "KOL推薦",
              enName: "KolArticles",
              link: "/KolArticles",
            },
          ],
        },
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
  routes,
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
