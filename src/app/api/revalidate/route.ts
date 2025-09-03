
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// This function will be called by the Supabase webhook
export async function POST(request: NextRequest) {
  // 1. Verify the secret token
  const secret = request.nextUrl.searchParams.get('secret');
  if (secret !== process.env.REVALIDATION_TOKEN) {
    return new NextResponse(JSON.stringify({ message: 'Invalid Token' }), {
      status: 401,
      statusText: 'Unauthorized',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 2. Parse the request body
  const payload = await request.json();
  const { table, record, old_record } = payload;

  try {
    // 3. Determine which paths to revalidate
    if (table === 'properties') {
      // Revalidate the main properties page
      revalidatePath('/properties');
      // Revalidate the home page (in case featured properties changed)
      revalidatePath('/');

      // Revalidate the individual property page
      if (record?.slug) {
        revalidatePath(`/properties/${record.slug}`);
      }
      // If the slug changed, revalidate the old path too
      if (old_record?.slug && old_record.slug !== record.slug) {
        revalidatePath(`/properties/${old_record.slug}`);
      }
    } else if (table === 'blogs') {
      // Revalidate the main blogs page
      revalidatePath('/blogs');

      // Revalidate the individual blog page
      if (record?.slug) {
        revalidatePath(`/blogs/${record.slug}`);
      }
      // If the slug changed, revalidate the old path too
      if (old_record?.slug && old_record.slug !== record.slug) {
        revalidatePath(`/blogs/${old_record.slug}`);
      }
    }

    console.log('Revalidation successful for table:', table);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error('Error revalidating:', err);
    return new NextResponse(JSON.stringify({ message: 'Error revalidating' }), {
      status: 500,
    });
  }
}
