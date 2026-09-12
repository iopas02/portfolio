import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { blobs } = await list({
      prefix: 'cv.pdf',
      limit: 1,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    if (blobs.length > 0) {
      return NextResponse.redirect(blobs[0].url);
    }
  } catch {
    // fall through to bundled CV
  }
  return NextResponse.redirect(
    new URL('/files/abuzo-CV-2026.pdf', request.url),
  );
}
