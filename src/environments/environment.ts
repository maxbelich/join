/**
 * Production environment config, imported everywhere as `./environments/environment`.
 * During `ng serve`/dev builds, angular.json's fileReplacements swaps this file
 * for environment.development.ts (same shape, production: false).
 *
 * supabaseAnonKey is Supabase's publishable anon key — safe to ship client-side,
 * not a secret; access control is enforced server-side via RLS.
 */
export const environment = {
  production: true,
  supabaseUrl: 'https://tpwgswlnmfvplshygwne.supabase.co',
  supabaseAnonKey: 'sb_publishable_lDArUfOfyRqyacMsQF84cg_reOt0xED',
};
