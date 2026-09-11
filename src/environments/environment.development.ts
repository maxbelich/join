/**
 * Dev-build replacement for environment.ts (see angular.json fileReplacements).
 * Same Supabase project/keys, only production flips to false.
 */
export const environment = {
  production: false,
  supabaseUrl: 'https://tpwgswlnmfvplshygwne.supabase.co',
  supabaseAnonKey: 'sb_publishable_lDArUfOfyRqyacMsQF84cg_reOt0xED',
};