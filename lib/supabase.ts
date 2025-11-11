import 'react-native-url-polyfill/auto';    
import { createClient} from '@supabase/supabase-js';
const SUPABASE_URL = 'https://oninxoxeixejggezazmk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uaW54b3hlaXhlamdnZXphem1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MTE1NDEsImV4cCI6MjA3ODM4NzU0MX0.HN0ZsW-euVcBSbyfLfRUxSR5NEymR4OwbMG11A4XkLg'


export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY 

);
