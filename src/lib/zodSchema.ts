import { z } from 'zod';

export const transactionSchema = z.object({
  address: z.string().regex(/^0x[0-9a-fA-F]+$/, 'Invalid address format, expected 0x...'),
  amount: z.string().regex(/^\d+(\.\d+)?$/, 'Invalid amount format, expected number'),
  message: z.string().min(1, 'Message is required'),
})