import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { projects, users, invoices, models } from '../../lib/data';

export default function AdminHome() {
  return (
    <main className="container py-10 space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-white/60">لوحة التحكم</p>
          <h1 className="text-3xl font-bold">نظرة عامة</h1>
        </div>
        <div className="flex gap-3">
          <Button>مشروع جديد</Button>
          <Button variant="outline">تحميل نموذج 3D</Button>
        </div>
      </header>

      <section className="grid md:grid-cols-3 gap-4">
        <Card title="المشاريع" subtitle={`${projects.length} مشروع نشط`}>
          <p className="text-3xl font-black">{projects.length}</p>
        </Card>
        <Card title="المستخدمون" subtitle="الأدوار: admin · creator · viewer">
          <p className="text-3xl font-black">{users.length}</p>
        </Card>
        <Card title="الفواتير" subtitle="Stripe Billing">
          <p className="text-3xl font-black">{invoices.length}</p>
        </Card>
      </section>

      <section className="grid lg:grid-cols-2 gap-4">
        <Card title="المشاريع الأخيرة">
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id} className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                <div>
                  <p className="font-semibold">{project.name}</p>
                  <p className="text-xs text-white/60">النموذج: {project.modelId}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">${project.price}</p>
                  <a className="text-xs text-white/60 underline" href={project.shareUrl}>رابط المشاركة</a>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="المستخدمون">
          <div className="space-y-3">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-xs text-white/60">{user.email}</p>
                </div>
                <Badge variant="neutral">{user.role}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid lg:grid-cols-2 gap-4">
        <Card title="النماذج ثلاثية الأبعاد" subtitle="GLB + Textures">
          <div className="space-y-3">
            {models.map((model) => (
              <div key={model.id} className="rounded-xl bg-white/5 p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{model.name}</p>
                    <p className="text-xs text-white/60">{model.file}</p>
                  </div>
                  <Badge variant="success">{model.textures.length} خامة</Badge>
                </div>
                <p className="text-xs text-white/60 mt-2">الأجزاء: {model.parts.join(' · ')}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card title="الفواتير">
          <div className="space-y-3">
            {invoices.map((inv) => (
              <div key={inv.id} className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                <div>
                  <p className="font-semibold">{inv.id}</p>
                  <p className="text-xs text-white/60">{inv.date}</p>
                </div>
                <Badge variant={inv.status === 'مدفوعة' ? 'success' : 'warning'}>{inv.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}
