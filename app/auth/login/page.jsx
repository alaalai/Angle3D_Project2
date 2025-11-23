'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';

export default function LoginPage() {
  const [email, setEmail] = useState('admin@customize-product.sa');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    const res = await signIn('credentials', { email, password, redirect: false });
    setLoading(false);
    setMessage(res?.ok ? 'تم تسجيل الدخول بنجاح' : 'تأكد من البيانات');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black">
      <div className="glass max-w-md w-full p-8 rounded-2xl space-y-6">
        <div>
          <p className="text-sm text-white/60">مرحبا بعودتك</p>
          <h1 className="text-2xl font-bold">تسجيل الدخول</h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input label="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
          <Input label="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'جار المعالجة...' : 'تسجيل الدخول'}
          </Button>
        </form>
        <Button variant="outline" className="w-full" onClick={() => signIn('google')}>
          دخول عبر Google
        </Button>
        {message && <p className="text-center text-sm text-white/80">{message}</p>}
        <div className="flex justify-between text-sm text-white/70">
          <a href="/auth/register">حساب جديد</a>
          <a href="/auth/reset">نسيت كلمة المرور؟</a>
        </div>
      </div>
    </div>
  );
}
