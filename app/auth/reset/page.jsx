'use client';

import { useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';

export default function ResetPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('تم إرسال رابط إعادة الضبط إلى بريدك (تجريبي).');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-black">
      <div className="glass max-w-md w-full p-8 rounded-2xl space-y-6">
        <div>
          <p className="text-sm text-white/60">أعد التحكم بحسابك</p>
          <h1 className="text-2xl font-bold">إعادة ضبط كلمة المرور</h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input label="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
          <Button type="submit" className="w-full">إرسال الرابط</Button>
        </form>
        {message && <p className="text-center text-sm text-white/80">{message}</p>}
      </div>
    </div>
  );
}
