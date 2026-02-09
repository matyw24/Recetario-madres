
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xpbsjxcdcijlbmjpfubr.supabase.co';
const supabaseKey = 'sb_publishable_2sBKDMqTWzGGK5i4M2aynA_vZiKumY0';

export const supabase = createClient(supabaseUrl, supabaseKey);
