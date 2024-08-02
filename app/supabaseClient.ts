// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hkzyclsbfxsakjdruoqe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrenljbHNiZnhzYWtqZHJ1b3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MzM5MzYsImV4cCI6MjAzODEwOTkzNn0.fP6WB-mhLkq7ocxUWL4_sPLkDCGNbFkRmpLcqy6l1sA";

export const supabase = createClient(supabaseUrl, supabaseKey);
