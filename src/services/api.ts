
import { toast } from "sonner";

const API_BASE_URL = "https://api.example.com"; // Replace with actual API URL

interface Organization {
  organization_name: string;
}

interface Traveller {
  email: string;
  first_name: string;
  last_name: string;
  locale: string;
}

interface TravellerDetails {
  vendor_key: string;
}

interface UpdateTraveller {
  first_name: string;
  last_name: string;
  phone: string;
  building: string;
  floor: number;
  apartment: string;
  street: string;
  city: string;
  state: string;
  country: string;
  country_code: string;
  id: number;
}

interface VisaProgram {
  destination: string;
  citizenship: string;
  arrivalDate: string;
}

interface AmountConversion {
  amount: string;
  currency: string;
}

interface IframeOrder {
  vendor_key: string;
  reference_no: string;
  description: string;
  program_id: string;
  quantity: number;
  first_name: string;
  last_name: string;
  email: string;
  fee: string;
  arrival: string;
  destination: string;
  commision: string;
  commision_type: string;
}

export class ApiService {
  private static vendorKey: string | null = null;
  private static token: string | null = null;

  private static async request<T>(endpoint: string, data: any, token?: string): Promise<T> {
    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred');
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      toast.error(error instanceof Error ? error.message : 'An error occurred');
      throw error;
    }
  }

  static async createOrganization(data: Organization): Promise<any> {
    const response = await this.request<any>('/create_organization', data);
    this.vendorKey = response.result[0].vendor_key;
    return response;
  }

  static async createTraveller(data: Traveller): Promise<any> {
    if (!this.vendorKey) {
      throw new Error('Vendor key not available');
    }
    const response = await this.request<any>('/create_traveller_omantel', data, this.vendorKey);
    this.token = response.result[0].access_token;
    return response;
  }

  static async getTravellerDetails(data: TravellerDetails): Promise<any> {
    if (!this.token) {
      throw new Error('Token not available');
    }
    return await this.request<any>('/each_omantel_traveller_details', data, this.token);
  }

  static async updateTraveller(data: UpdateTraveller): Promise<any> {
    if (!this.vendorKey) {
      throw new Error('Vendor key not available');
    }
    return await this.request<any>('/update_traveller_omantel', data, this.vendorKey);
  }

  static async findVisaPrograms(data: VisaProgram): Promise<any> {
    if (!this.vendorKey) {
      throw new Error('Vendor key not available');
    }
    return await this.request<any>('/get_visa_programs_omantel', data, this.vendorKey);
  }

  static async convertAmount(data: AmountConversion): Promise<any> {
    return await this.request<any>('/amount_convertion', data);
  }

  static async createIframeOrder(data: IframeOrder): Promise<any> {
    if (!this.token) {
      throw new Error('Token not available');
    }
    return await this.request<any>('/iframe_order_visa_omantel', data, this.token);
  }

  // Setter methods for testing/development
  static setVendorKey(key: string): void {
    this.vendorKey = key;
  }

  static setToken(token: string): void {
    this.token = token;
  }
}

// For development/testing
ApiService.setVendorKey("test_vendor_key");
ApiService.setToken("test_token");
