import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

const PASSWORD = 'killkill123';

export async function POST(request) {
  const formData = await request.formData();
  const password = formData.get('password');
  const file = formData.get('file');

  if (password !== PASSWORD) {
    return NextResponse.json({ error: 'Wrong password' }, { status: 401 });
  }

  if (!file || file.type !== 'application/pdf') {
    return NextResponse.json(
      { error: 'Please upload a PDF file' },
      { status: 400 },
    );
  }

  const blob = await put('cv.pdf', file, {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  return NextResponse.json({ url: blob.url });
}
