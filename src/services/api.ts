
// This file simulates a backend service using localStorage
// In a real app, these functions would make actual API calls

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// User related types
interface User {
  id?: string;
  firstName?: string;
  lastName?: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  wasteItems: WasteItem[];
  points: number;
  recentRewards: Reward[];
  upcomingPickups: Pickup[];
  isAdmin?: boolean;
}

interface WasteItem {
  id: string;
  type: string;
  weight: number;
  date: string;
  points: number;
  status: 'pending' | 'collected' | 'processed';
}

interface Reward {
  id: number;
  name: string;
  points: number;
  date: string;
}

interface Pickup {
  id: string;
  date: string;
  timeSlot: string;
  address: string;
  city: string;
  wasteTypes: string[];
  status: 'scheduled' | 'completed' | 'cancelled';
}

// Auth Services
export const loginUser = async (email: string, password: string): Promise<ApiResponse<User>> => {
  // In a real app, this would validate credentials with a server
  return new Promise((resolve) => {
    setTimeout(() => {
      // For demo purposes, we'll just accept any email/password
      // and create a user if one doesn't exist
      
      let user = {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split('@')[0],
        email,
        wasteItems: [],
        points: 0,
        recentRewards: [],
        upcomingPickups: [],
        isAdmin: email.includes('admin')
      };
      
      localStorage.setItem('user', JSON.stringify(user));
      
      resolve({
        success: true,
        data: user
      });
    }, 800);
  });
};

export const registerUser = async (userData: Partial<User>): Promise<ApiResponse<User>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Create user with provided data
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: userData.name || `${userData.firstName} ${userData.lastName}`,
        email: userData.email!,
        firstName: userData.firstName,
        lastName: userData.lastName,
        wasteItems: [],
        points: 0,
        recentRewards: [],
        upcomingPickups: [],
        isAdmin: false
      };
      
      localStorage.setItem('user', JSON.stringify(user));
      
      resolve({
        success: true,
        data: user
      });
    }, 800);
  });
};

export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem('user');
  if (userJson) {
    return JSON.parse(userJson);
  }
  return null;
};

export const updateUserProfile = async (userData: Partial<User>): Promise<ApiResponse<User>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentUser = getCurrentUser();
      
      if (!currentUser) {
        resolve({
          success: false,
          error: 'User not found'
        });
        return;
      }
      
      // Update user data
      const updatedUser = {
        ...currentUser,
        ...userData,
      };
      
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      resolve({
        success: true,
        data: updatedUser
      });
    }, 500);
  });
};

export const logoutUser = (): void => {
  localStorage.removeItem('user');
};

// E-Waste Services
export const schedulePickup = async (pickupData: Omit<Pickup, 'id' | 'status'>): Promise<ApiResponse<Pickup>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentUser = getCurrentUser();
      
      if (!currentUser) {
        resolve({
          success: false,
          error: 'User not found'
        });
        return;
      }
      
      const newPickup: Pickup = {
        id: Math.random().toString(36).substr(2, 9),
        ...pickupData,
        status: 'scheduled'
      };
      
      // Add to user's pickups
      currentUser.upcomingPickups = [newPickup, ...currentUser.upcomingPickups];
      localStorage.setItem('user', JSON.stringify(currentUser));
      
      resolve({
        success: true,
        data: newPickup
      });
    }, 800);
  });
};

export const getDropoffLocations = async (city: string): Promise<ApiResponse<any[]>> => {
  // This would fetch from an actual API in a real app
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock data for demo
      const locations = [
        {
          id: '1',
          name: 'Green Electronics Recycling Center',
          address: '123 Eco Street, ' + city,
          hours: '9:00 AM - 5:00 PM',
          acceptedItems: ['Computers', 'Phones', 'Batteries', 'TVs'],
          coordinates: { lat: 19.076, lng: 72.877 }
        },
        {
          id: '2',
          name: 'Central E-Waste Collection Hub',
          address: '456 Tech Road, ' + city,
          hours: '10:00 AM - 6:00 PM',
          acceptedItems: ['All Electronics', 'Batteries', 'Appliances'],
          coordinates: { lat: 19.082, lng: 72.882 }
        },
        {
          id: '3',
          name: 'Municipal E-Waste Station',
          address: '789 Green Avenue, ' + city,
          hours: '8:00 AM - 8:00 PM',
          acceptedItems: ['Computers', 'Phones', 'Batteries', 'Appliances'],
          coordinates: { lat: 19.088, lng: 72.868 }
        }
      ];
      
      resolve({
        success: true,
        data: locations
      });
    }, 600);
  });
};

export const getRewardsHistory = async (): Promise<ApiResponse<Reward[]>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentUser = getCurrentUser();
      
      if (!currentUser) {
        resolve({
          success: false,
          error: 'User not found'
        });
        return;
      }
      
      resolve({
        success: true,
        data: currentUser.recentRewards
      });
    }, 500);
  });
};

export const redeemReward = async (rewardId: number, pointsCost: number): Promise<ApiResponse<any>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentUser = getCurrentUser();
      
      if (!currentUser) {
        resolve({
          success: false,
          error: 'User not found'
        });
        return;
      }
      
      if (currentUser.points < pointsCost) {
        resolve({
          success: false,
          error: 'Insufficient points'
        });
        return;
      }
      
      // Update points
      currentUser.points -= pointsCost;
      
      // Save back to localStorage
      localStorage.setItem('user', JSON.stringify(currentUser));
      
      resolve({
        success: true,
        data: { message: 'Reward redeemed successfully' }
      });
    }, 800);
  });
};

// Export all services
const apiService = {
  loginUser,
  registerUser,
  getCurrentUser,
  updateUserProfile,
  logoutUser,
  schedulePickup,
  getDropoffLocations,
  getRewardsHistory,
  redeemReward
};

export default apiService;
