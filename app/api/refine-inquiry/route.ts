import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { inquiry } = await request.json();

    if (!inquiry || typeof inquiry !== 'string') {
      return NextResponse.json(
        { error: 'Invalid inquiry text' },
        { status: 400 }
      );
    }

    // Get API key from environment variable (secure - not exposed to client)
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

    if (!OPENAI_API_KEY) {
      console.error('OpenAI API key not configured');
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: '당신은 비즈니스 상담 문의 작성을 돕는 전문가입니다. 사용자가 입력한 문의 내용을 더 명확하고 전문적으로 다듬어주세요. 핵심 내용은 유지하되, 문법을 개선하고 비즈니스 맥락에 맞게 표현을 세련되게 만들어주세요. 존댓말을 사용하고, 간결하면서도 구체적으로 작성해주세요.'
          },
          {
            role: 'user',
            content: inquiry
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to refine inquiry' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const refinedText = data.choices[0]?.message?.content;

    if (!refinedText) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 }
      );
    }

    return NextResponse.json({ refinedText });

  } catch (error) {
    console.error('Error in refine-inquiry API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
