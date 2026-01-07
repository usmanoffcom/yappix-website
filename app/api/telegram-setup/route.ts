import { NextResponse } from "next/server"

const TELEGRAM_BOT_TOKEN = "8317760178:AAEUGZWwyAWBaHVW-umTrV29V3FcCTCIRyQ"

export async function GET() {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`
    )
    const data = await response.json()
    
    // Extract chat IDs from updates
    const chatIds = data.result?.map((update: any) => ({
      chat_id: update.message?.chat?.id || update.my_chat_member?.chat?.id,
      chat_title: update.message?.chat?.title || update.my_chat_member?.chat?.title,
      chat_type: update.message?.chat?.type || update.my_chat_member?.chat?.type,
    })).filter((item: any) => item.chat_id) || []
    
    return NextResponse.json({
      success: true,
      message: "Добавьте бота @yappix_bot в группу yappix_leads и напишите любое сообщение, затем обновите эту страницу",
      updates: data.result,
      chat_ids: chatIds,
    })
  } catch (error) {
    return NextResponse.json({ error: "Ошибка получения данных" }, { status: 500 })
  }
}

