import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ryiounkzkfkfllafeogx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5aW91bmt6a2ZrZmxsYWZlb2d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0ODg5NDgsImV4cCI6MjAxMzA2NDk0OH0.u6-sKAt9ti1EUnJlzB5exbwNw8HyWHKLoTrgSgoHMKI'

export const supabase = createClient(supabaseUrl, supabaseKey)
