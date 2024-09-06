import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kjvzbpsrabnxhsdwlrdb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqdnpicHNyYWJueGhzZHdscmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1MDk2NDAsImV4cCI6MjA0MTA4NTY0MH0.unYx4h3gxxEd3JRvi7JXWfkFby7OylEyCn_hIJLxT8k';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
