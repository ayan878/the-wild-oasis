import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zfmaosgiafjjclmwrbgl.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmbWFvc2dpYWZqamNsbXdyYmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNDc3MDUsImV4cCI6MjAyNzgyMzcwNX0.dzCTaNV6qElRACyTYbMvNwDBgclbryLWXt8ugGzZz5I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
