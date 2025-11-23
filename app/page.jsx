import { CTA } from '../components/landing/CTA';
import { Features } from '../components/landing/Features';
import { Footer } from '../components/landing/Footer';
import { Hero } from '../components/landing/Hero';
import { Pricing } from '../components/landing/Pricing';

export default function Home() {
  return (
    <main className="space-y-6 pb-16">
      <header className="border-b border-white/5">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-accent to-secondary" />
            <div>
              <p className="text-sm text-white/60">Customize Product</p>
              <p className="text-lg font-semibold">كوستمايز برودكت</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#pricing">الأسعار</a>
            <a href="/auth/login" className="underline">تسجيل الدخول</a>
          </div>
        </div>
      </header>
      <Hero />
      <Features />
      <div id="pricing">
        <Pricing />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
