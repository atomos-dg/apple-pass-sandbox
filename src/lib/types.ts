// Database types
export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface PassType {
  id: string
  user_id: string
  name: string
  description?: string
  pass_type_identifier: string
  team_identifier: string
  template_data: any
  style: 'boardingPass' | 'coupon' | 'eventTicket' | 'generic' | 'storeCard'
  background_color: string
  foreground_color: string
  label_color: string
  logo_text?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Pass {
  id: string
  pass_type_id: string
  serial_number: string
  authentication_token: string
  data: any
  web_service_url?: string
  voided: boolean
  expiration_date?: string
  relevant_date?: string
  created_at: string
  updated_at: string
  pass_types?: PassType
}

export interface Device {
  id: string
  device_library_identifier: string
  push_token?: string
  device_info: any
  created_at: string
  updated_at: string
}

export interface Registration {
  id: string
  device_id: string
  pass_id: string
  registered_at: string
}

export interface Notification {
  id: string
  pass_id: string
  device_id?: string
  notification_type: 'pass_update' | 'custom' | 'redemption'
  title?: string
  body?: string
  payload: any
  sent_at: string
  delivery_status: 'pending' | 'sent' | 'delivered' | 'failed'
}

export interface Redemption {
  id: string
  pass_id: string
  redemption_code: string
  redeemed_at: string
  redeemed_by?: string
  location_data: any
  metadata: any
}

// PassKit specific types
export interface PassData {
  formatVersion: number
  passTypeIdentifier: string
  serialNumber: string
  teamIdentifier: string
  webServiceURL?: string
  authenticationToken: string
  backgroundColor?: string
  foregroundColor?: string
  labelColor?: string
  logoText?: string
  organizationName?: string
  description?: string

  // Pass style specific fields
  boardingPass?: any
  coupon?: any
  eventTicket?: any
  generic?: any
  storeCard?: any

  // Common fields
  barcodes?: Array<{
    message: string
    format: 'PKBarcodeFormatQR' | 'PKBarcodeFormatPDF417' | 'PKBarcodeFormatAztec' | 'PKBarcodeFormatCode128'
    messageEncoding: string
    altText?: string
  }>

  relevantDate?: string
  expirationDate?: string
  voided?: boolean

  // Locations and beacons
  locations?: Array<{
    latitude: number
    longitude: number
    altitude?: number
    relevantText?: string
  }>

  beacons?: Array<{
    proximityUUID: string
    major?: number
    minor?: number
    relevantText?: string
  }>
}

// API Response types
export interface ApiResponse<T = any> {
  data?: T
  error?: string
  message?: string
}

export interface PassUpdateResponse {
  serialNumbers: string[]
  lastUpdated: string
}