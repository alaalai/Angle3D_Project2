import { Button } from '../ui/button';

export function CTA() {
  return (
    <section className="container py-16">
      <div className="glass rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm text-white/60">جاهز للانطلاق؟</p>
          <h3 className="text-2xl font-bold">ابنِ تجربة تخصيص 3D لعملائك اليوم</h3>
        </div>
        <div className="flex gap-3">
          <Button>ابدأ مجاناً</Button>
          <Button variant="outline">تحدث مع الفريق</Button>
        </div>
      </div>
    </section>
  );
}
