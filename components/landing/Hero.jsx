import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="container py-20 space-y-10">
      <div className="glass rounded-3xl p-10 md:p-14">
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex flex-wrap gap-3 items-center text-sm text-white/70">
            <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-emerald-200">منصة SaaS عربية</span>
            <span className="rounded-full bg-white/5 px-4 py-2">Next.js 14 · Stripe · MongoDB</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            كوستمايز برودكت
            <br />
            منصة لتخصيص النماذج ثلاثية الأبعاد وبناء المنتجات.
          </h1>
          <p className="text-lg text-white/70 max-w-3xl">
            أنشئ نماذج 3D، أضف خيارات ألوان وخامات وأجزاء، شاركها مع عملائك، وتابع الفوترة عبر Stripe في واجهة عربية مظلمة.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>ابدأ التجربة المجانية</Button>
            <Button variant="ghost">شاهد لوحة التحكم</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
