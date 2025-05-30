# بوت الأذكار لتليجرام

بوت تليجرام يرسل أذكار بشكل دوري إلى مجموعات محددة. تم تطويره باستخدام Next.js ويعمل على منصة Vercel.

## الميزات

- إرسال ذكر عشوائي كل 5 دقائق إلى مجموعات محددة
- استجابة لأمر `/start` مع رسالة ترحيبية
- واجهة ويب بسيطة

## متطلبات التشغيل

1. رمز بوت تليجرام (Bot Token)
2. معرفات المجموعات التي سيتم إرسال الأذكار إليها

## متغيرات البيئة

يجب إضافة المتغيرات التالية في إعدادات مشروع Vercel:

- `TELEGRAM_BOT_TOKEN`: رمز البوت الخاص بك
- `TELEGRAM_CHAT_IDS`: معرفات المجموعات مفصولة بفواصل (مثال: `-1002457023914,-1002414213451`)

## إعداد Webhook

لإعداد Webhook للبوت، قم بزيارة الرابط التالي بعد نشر المشروع:

\`\`\`
https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook?url=<YOUR_VERCEL_URL>/api/telegram
\`\`\`

استبدل `<TELEGRAM_BOT_TOKEN>` برمز البوت الخاص بك و `<YOUR_VERCEL_URL>` برابط مشروعك على Vercel.

## تطوير محلي

1. انسخ المشروع
2. قم بتثبيت التبعيات: `npm install`
3. أنشئ ملف `.env.local` وأضف متغيرات البيئة
4. شغل المشروع: `npm run dev`

## المطور

@Mavdiii
