import { list } from '@vercel/blob';

export default async function handler(req, res) {
  try {
    const { blobs } = await list({
      prefix: 'cv.pdf',
      limit: 1,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    if (blobs.length > 0) {
      return res.redirect(blobs[0].url);
    }
  } catch {
    // fall through to bundled CV
  }
  return res.redirect('/files/abuzo-CV-2026.pdf');
}
