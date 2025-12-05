import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    console.log('=== DEBUG ===');
    console.log('User message:', message);
    console.log('API Key exists:', !!process.env.GROQ_API_KEY);
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: 'You are Qore AI, a helpful assistant for Kazakhstan universities and education programs.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 1024
      })
    });
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Groq error:', errorData);
      return NextResponse.json({ text: 'API error: ' + JSON.stringify(errorData) }, { status: 500 });
    }
    
    const data = await response.json();
    console.log('Success! Response:', data.choices[0].message.content);
    
    return NextResponse.json({ text: data.choices[0].message.content });
    
  } catch (error) {
    console.error('Catch error:', error);
    return NextResponse.json({ text: 'Server error: ' + String(error) }, { status: 500 });
  }
}