import { createRouter, createWebHistory } from 'vue-router';
import ShopView from '../views/ShopView.vue';
import AdminLayout from '../views/admin/AdminLayout.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

const routes = [
  {
    path: '/',
    name: 'shop',
    component: ShopView,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'productos',
        name: 'products',
        component: () => import('../views/admin/ProductsView.vue'),
      },
      {
        path: 'productos/nuevo',
        name: 'new-product',
        component: () => import('../views/admin/NewProductView.vue'),
      },
      {
        path: 'productos/editar/:id',
        name: 'edit-product',
        component: () => import('../views/admin/EditProductView.vue'),
      },
      {
        path: 'productos/seeder',
        name: 'seed-product',
        component: () => import('../views/admin/SeederView.vue'),
      },
      {
        path: 'ventas',
        name: 'ventas',
        component: () => import('../views/admin/SalesView.vue'),
      },
    ],
  },
  {
    path: '/conocenos',
    name: 'conocenos',
    component: () => import('../views/Conocenos.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        next('/login');
      }
    });
  } else {
    next();
  }
});

export default router;
