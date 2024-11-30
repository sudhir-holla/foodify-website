export interface UserProfile {
  id: number
  name: string
  email: string

  type: string

  account_setup_pending: boolean
  business_profile_setup_pending?: boolean
}
