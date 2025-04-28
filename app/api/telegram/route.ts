import { NextResponse } from "next/server"
import { azkarList } from "@/lib/azkar"

// تكوين بيانات البوت
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_IDS = process.env.TELEGRAM_CHAT_IDS ? process.env.TELEGRAM_CHAT_IDS.split(",").map((id) => id.trim()) : []

// دالة لإرسال رسالة إلى التليجرام
async function sendTelegramMessage(chatId: string, text: string) {
  try {
    const apiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [[{ text: "📖 تلاوات قرآنية", url: "https://t.me/Telawat_Quran_0" }]],
        },
      }),
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.error("خطأ في إرسال الرسالة:", error)
    throw error
  }
}

// معالج الويب هوك للتليجرام
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // معالجة أمر /start
    if (body.message && body.message.text === "/start") {
      const chatId = body.message.chat.id
      const message = `✨ **ذكِّر قلبك بالله، وارتقِ بروحك 📿**  
في زحمة الحياة، البوت ده هيكون **رفيقك للذكر والدعاء والتسبيح** 🌙  
خلّي لسانك رطب بذكر الله، وابدأ كل يوم بنور جديد 💛  

﴿ **فَاذْكُرُونِي أَذْكُرْكُمْ** ﴾ – وعد ربّاني لا يُخلف!  

💻 **مبرمج البوت:** @Mavdiii`

      await sendTelegramMessage(chatId.toString(), message)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("خطأ في معالجة الويب هوك:", error)
    return NextResponse.json({ success: false, error: "حدث خطأ في معالجة الطلب" }, { status: 500 })
  }
}

// دالة لإرسال ذكر عشوائي
export async function GET() {
  try {
    if (!BOT_TOKEN || CHAT_IDS.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'لم يتم تكوين رمز البوت أو معرفات الدردشة' 
      }, { status: 400 });
    }

    if (azkarList.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'قائمة الأذكار فارغة' 
      }, { status: 400 });
    }
        success: false, 
        error: 'قائمة الأذكار فارغة' 
      }
  ,
  status: 400
  )
}

// اختيار ذكر عشوائي
const randomZekr = azkarList[Math.floor(Math.random() * azkarList.length)]

// إرسال الذكر إلى جميع المجموعات
const results = await Promise.all(CHAT_IDS.map((chatId) => sendTelegramMessage(chatId, randomZekr)))

return NextResponse.json({
      success: true,
      message: \'تم إرسال الذكر بنجاح',
      zekr: randomZekr,
      results
    });
} catch (error)
{
  console.error("خطأ في إرسال الذكر:", error)
  return NextResponse.json({ 
      success: false, 
      error: 'حدث خطأ في إرسال الذكر' 
    }, { status: 500 });
}
}
