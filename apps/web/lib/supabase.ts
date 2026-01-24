import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gcogghgpvgiagfkvsplk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjb2dnaGdwdmdpYWdma3ZzcGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxOTEyNTEsImV4cCI6MjA4NDc2NzI1MX0.oy5yvuShduB-sHLnIKVx4f8H90rZbWEhzAMLKVXhhmM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
