'use client';

import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('تم إنشاء حساب تجريبي. استخدم شاشة الدخول للوصول.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black">
      <div className="glass max-w-md w-full p-8 rounded-2xl space-y-6">
        <div>
          <p className="text-sm text-white/60">ابدأ مع كوستمايز برودكت</p>
          <h1 className="text-2xl font-bold">إنشاء حساب</h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input label="الاسم" value={name} onChange={(e) => setName(e.target.value)} required />
          <Input label="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
          <Input label="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
          <Button type="submit" className="w-full">إنشاء</Button>
        </form>
        {message && <p className="text-center text-sm text-white/80">{message}</p>}
        <div className="text-center text-sm text-white/70">
          لديك حساب؟ <a href="/auth/login" className="underline">تسجيل الدخول</a>
        </div>
      </div>
    </div>
  );
}
