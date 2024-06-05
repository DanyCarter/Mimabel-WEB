import { createRouter, createWebHistory } from 'vue-router';
import ShopView from '../views/ShopView.vue';
import AdminLayout from '../views/admin/AdminLayout.vue';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import Error403 from '@/components/Error403.vue';
import NotFound from '@/components/NotFound.vue'; // Importa el componente 404

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
  {
    path: '/403',
    name: 'Error403',
    component: Error403,
  },
  {
    path: '/:catchAll(.*)', // Ruta para manejar cualquier URL no definida
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Verificar permisos adicionales si es necesario
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userData = userDoc.data();
        
        // Aquí puedes verificar roles o permisos específicos
        if (userData && userData.role === 'admin') {
          next();
        } else {
          next({ name: 'Error403' });
        }
      } else {
        next('/login');
      }
    });
  } else {
    next();
  }
});

export default router;
