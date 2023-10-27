import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wwvlemerrmdrbopunhwq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3dmxlbWVycm1kcmJvcHVuaHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNzM2MzUsImV4cCI6MjAxMzk0OTYzNX0.E2N2hcBSzSsmJRJcPOiaemgN1MTtrQWSCHqanpxLnSA'

export const supabase = createClient(supabaseUrl, supabaseKey)
