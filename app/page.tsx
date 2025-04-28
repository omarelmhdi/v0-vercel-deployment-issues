import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-emerald-50 to-teal-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-emerald-700">بوت الأذكار</CardTitle>
          <CardDescription className="text-emerald-600 font-medium">
            يرسل أذكار بشكل دوري إلى مجموعات التليجرام
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-4 text-lg font-medium text-gray-700 rtl">
            <p>
              ✨ <strong>ذكِّر قلبك بالله، وارتقِ بروحك 📿</strong>
            </p>
            <p className="mt-2">
              في زحمة الحياة، البوت ده هيكون <strong>رفيقك للذكر والدعاء والتسبيح</strong> 🌙
            </p>
            <p className="mt-2">خلّي لسانك رطب بذكر الله، وابدأ كل يوم بنور جديد 💛</p>
            <p className="mt-4">
              ﴿ <strong>فَاذْكُرُونِي أَذْكُرْكُمْ</strong> ﴾ – وعد ربّاني لا يُخلف!
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="https://t.me/Telawat_Quran_0" target="_blank">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <ExternalLink className="mr-2 h-4 w-4" />
              تلاوات قرآنية
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>البوت يعمل على منصة Vercel</p>
        <p className="mt-1">
          💻 <strong>مبرمج البوت:</strong> @Mavdiii
        </p>
      </div>
    </div>
  )
}
