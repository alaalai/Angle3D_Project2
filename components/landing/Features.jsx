import { Card } from '../ui/card';
import { features, stats } from '../../lib/data';

export function Features() {
  return (
    <section className="container py-14 space-y-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold">كل ما تحتاجه لبناء منتج 3D قابل للتخصيص</h2>
        <p className="text-white/70 max-w-2xl">لوحة تحكم، API، فوترة، وتحليلات في واجهة واحدة.</p>
      </div>
      <div className="card-grid">
        {features.map((feature) => (
          <Card key={feature.title} title={feature.title} subtitle={feature.description} />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="text-center" title={stat.value} subtitle={stat.title}>
            <p className="text-sm text-white/60">{stat.hint}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
