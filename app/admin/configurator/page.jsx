import { Configurator } from '../../../components/dashboard/Configurator';
import { Card } from '../../../components/ui/card';

export default function ConfiguratorPage() {
  return (
    <main className="container py-10 space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-white/60">كونفيجريتر</p>
        <h1 className="text-3xl font-bold">التحكم الكامل بالنموذج</h1>
      </div>
      <Configurator />
      <Card title="تعليمات" subtitle="حفظ ولقطات">
        <ol className="list-decimal list-inside text-white/80 space-y-1">
          <li>اختر الجزء المطلوب تعديله.</li>
          <li>غيّر اللون أو الخامة أو قم بإخفاء الجزء.</li>
          <li>اضغط حفظ التخصيص لربطه بالمشروع الحالي.</li>
          <li>استخدم تصدير Snapshot لحفظ معاينة PDF/PNG.</li>
        </ol>
      </Card>
    </main>
  );
}
