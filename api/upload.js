import { put } from '@vercel/blob';

const PASSWORD = 'killkill123';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (req.query.password !== PASSWORD) {
    return res.status(401).json({ error: 'Wrong password' });
  }

  if (req.headers['content-type'] !== 'application/pdf') {
    return res.status(400).json({ error: 'Please upload a PDF file' });
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const buffer = Buffer.concat(chunks);

  if (buffer.length === 0 || !buffer.subarray(0, 4).equals(Buffer.from('%PDF'))) {
    return res.status(400).json({ error: 'File is not a valid PDF' });
  }

  const blob = await put('cv.pdf', buffer, {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/pdf',
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  return res.status(200).json({ url: blob.url });
}
