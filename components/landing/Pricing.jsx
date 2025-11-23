import { pricing } from '../../lib/data';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function Pricing() {
  return (
    <section className="container py-14 space-y-10">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm text-white/60">فوترة Stripe جاهزة</p>
        <h2 className="text-3xl font-bold">باقات مرنة لكل فريق</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {pricing.map((plan) => (
          <Card key={plan.name} className={plan.highlighted ? 'border-accent/40' : ''}>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm text-white/60">{plan.name}</p>
                <p className="text-3xl font-bold">{plan.price}</p>
              </div>
              <ul className="space-y-2 text-white/80">
                {plan.features.map((feat) => (
                  <li key={feat}>• {feat}</li>
                ))}
              </ul>
              <Button variant={plan.highlighted ? 'primary' : 'outline'} className="w-full">
                {plan.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
