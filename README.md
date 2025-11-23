# كوستمايز برودكت – Customize Product

منصة SaaS عربية جاهزة للنشر على Vercel لبناء كونفيجريتر ثلاثي الأبعاد مع فوترة Stripe ولوحة تحكم RTL.

## المميزات
- Next.js 14 (App Router) + Tailwind + واجهة RTL عربية بالكامل.
- مصادقة NextAuth (بريد/كلمة مرور + Google) مع أدوار `admin`/`creator`/`viewer` وحماية Middleware لمسار `/admin`.
- صفحات هبوط عربية مع أقسام الهيرو والمميزات والأسعار و CTA.
- داشبورد عربية مظلمة لإدارة المستخدمين، المشاريع، النماذج، الملفات، الفواتير، الإحصائيات، والوضع الداكن.
- كونفيجريتر 3D مبني على Three.js + React Three Fiber + Drei مع التحكم في الأجزاء والألوان والخامات ولقطات snapshot.
- API Routes جاهزة (نماذج، مشاريع، فوترة) مع مخطط Prisma لمونوغوDB.
- تكامل Stripe Billing جاهز للتوصيل مع Webhooks.

## التشغيل محلياً
```bash
npm install
npm run dev
```
> في حال عدم توفر الوصول للـ npm registry يمكنك استخدام `npm install --ignore-scripts` ثم تثبيت الحزم لاحقاً داخل بيئة متصلة.

## متغيرات البيئة
أنشئ ملف `.env.local` وأضف القيم التالية:
```
DATABASE_URL="mongodb+srv://..."
NEXTAUTH_SECRET="your-secret"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
STRIPE_SECRET_KEY="sk_live_or_test"
STRIPE_WEBHOOK_SECRET="whsec_..."
```

## Prisma + MongoDB
1. أنشئ مشروع MongoDB Atlas واحصل على رابط الاتصال.
2. ضع الرابط في `DATABASE_URL`.
3. شغّل `npx prisma db push` لتوليد الجداول.

## Stripe Billing
1. أنشئ حساب Stripe وحدد خطط Free/Pro/Enterprise.
2. ضع مفتاح `STRIPE_SECRET_KEY` و `STRIPE_WEBHOOK_SECRET`.
3. فعّل Webhook لمسار `/api/billing` حسب احتياجك (يمكن توجيهه لدومين Vercel).

## النشر على Vercel
1. اربط المستودع مع Vercel.
2. أضف متغيرات البيئة في إعدادات المشروع على Vercel.
3. انشر الفرع الرئيسي؛ جميع المسارات مبنية بتوافق مع المنصة (App Router).

## هيكل المشروع
```
app/
  admin/            # الداشبورد والكونفيجريتر
  auth/             # صفحات الدخول/التسجيل/reset
  api/              # Auth + Models + Projects + Billing
  page.jsx          # صفحة الهبوط العربية
components/         # واجهات UI وواجهات الهبوط/الداشبورد
lib/                # بيانات تجريبية وتهيئة المصادقة
prisma/             # مخطط Prisma لمونغوDB
public/             # ملفات عامة للنماذج/الخامات
```

## ملاحظات
- الحساب التجريبي: البريد `admin@customize-product.sa` وكلمة المرور `password123`.
- يمكن تفعيل الوضع الداكن/الفاتح عبر `next-themes` (مفعّل افتراضياً كمظهر داكن).
- الواجهة بالكامل باللغة العربية مع اتجاه RTL افتراضياً.
