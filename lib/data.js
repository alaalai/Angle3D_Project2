export const stats = [
  { title: 'نماذج 3D', value: '320+', hint: 'نماذج جاهزة للتحكم والتخصيص' },
  { title: 'مشاريع نشطة', value: '120', hint: 'فرق تستخدم المنصة يومياً' },
  { title: 'لقطات محفوظة', value: '14k', hint: 'تخصيصات تم تصديرها' },
];

export const features = [
  {
    title: 'داشبورد عربي بالكامل',
    description: 'إدارة مستخدمين ومشاريع ونماذج وفوترة في واجهة RTL مظلمة.',
  },
  {
    title: 'كونفيجريتر 3D احترافي',
    description: 'Three.js + R3F مع تحكم في الأجزاء، الألوان، الخامات واللقطات.',
  },
  {
    title: 'تكامل Stripe',
    description: 'باقات اشتراك وفوترة متكررة مع Webhooks جاهزة للدمج.',
  },
  {
    title: 'أمان متقدم',
    description: 'حماية الصفحات عبر Middleware وأدوار admin/creator/viewer.',
  },
];

export const pricing = [
  {
    name: 'مجانية',
    price: '0$',
    cta: 'ابدأ الآن',
    features: ['3 مشاريع', 'نموذج واحد لكل مشروع', 'لقطات غير محدودة'],
  },
  {
    name: 'احترافي',
    price: '19$',
    highlighted: true,
    cta: 'ترقية فورية',
    features: ['20 مشروع', 'نماذج متعددة', 'تكامل Stripe و Webhooks'],
  },
  {
    name: 'شركات',
    price: 'تواصل معنا',
    cta: 'احجز جلسة',
    features: ['حسابات غير محدودة', 'دعم SSO', 'لوحة مالية مخصصة'],
  },
];

export const models = [
  {
    id: 'm1',
    name: 'خزانة مستقبلية',
    file: '/models/wardrobe.glb',
    textures: ['خشب', 'معدن', 'لون صلب'],
    parts: ['الأبواب', 'المقابض', 'الرفوف'],
  },
  {
    id: 'm2',
    name: 'كرسي ذكي',
    file: '/models/chair.glb',
    textures: ['قماش', 'جلد', 'معدن'],
    parts: ['القاعدة', 'المسند', 'الأرجل'],
  },
];

export const projects = [
  {
    id: 'p1',
    name: 'تصميم صالة عرض',
    modelId: 'm1',
    price: 1200,
    user: 'ليان الحربي',
    snapshot: '/textures/preview.png',
    shareUrl: 'https://example.com/share/p1',
  },
];

export const users = [
  { id: 'u1', name: 'ليان الحربي', role: 'admin', email: 'lian@example.com' },
  { id: 'u2', name: 'سعود الشريف', role: 'creator', email: 'saud@example.com' },
];

export const invoices = [
  { id: 'inv1', amount: 49, status: 'مدفوعة', date: '2024-12-18' },
  { id: 'inv2', amount: 19, status: 'بانتظار الدفع', date: '2025-01-02' },
];
