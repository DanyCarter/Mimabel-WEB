// tests/unit/HeaderComponent.spec.js

import { shallowMount, createLocalVue } from '@vue/test-utils';
import HeaderComponent from '@/components/HeaderComponent.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('HeaderComponent.vue', () => {
  let wrapper;
  let router;

  beforeEach(() => {
    router = new VueRouter();
    wrapper = shallowMount(HeaderComponent, {
      localVue,
      router,
      propsData: {
        isAdmin: true
      }
    });
  });

  it('renders "Productos" link when isAdmin is true', () => {
    expect(wrapper.find('a[href="/products"]').exists()).toBe(true);
  });

  it('renders "Ventas" link when isAdmin is true', () => {
    expect(wrapper.find('a[href="/ventas"]').exists()).toBe(true);
  });

  it('renders "Tienda" link', () => {
    expect(wrapper.find('a[href="/shop"]').exists()).toBe(true);
  });

  it('navigates to "Productos" when the link is clicked', async () => {
    await wrapper.find('a[href="/products"]').trigger('click');
    expect(wrapper.vm.$route.name).toBe('products');
  });

  it('navigates to "Ventas" when the link is clicked', async () => {
    await wrapper.find('a[href="/ventas"]').trigger('click');
    expect(wrapper.vm.$route.name).toBe('ventas');
  });

  it('navigates to "Tienda" when the link is clicked', async () => {
    await wrapper.find('a[href="/shop"]').trigger('click');
    expect(wrapper.vm.$route.name).toBe('shop');
  });
});
