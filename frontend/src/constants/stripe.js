const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_4aywXEoCJLz9ZAr1I6bjg41g';

export default STRIPE_PUBLISHABLE