'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export async function revalidatePathAction(path: string) {
  revalidatePath(path);
}

export async function revalidateTagsAction(tag: string) {
  revalidateTag(tag);
}
