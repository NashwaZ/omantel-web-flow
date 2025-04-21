
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Traveller {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  building?: string;
  floor?: number;
  apartment?: string;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  country_code?: string;
  locale?: string;
}

interface VisaProgram {
  id: string;
  name: string;
  description: string;
  price: string;
  currency: string;
  duration: string;
  processing_time: string;
}

interface VisaSearch {
  destination: string;
  citizenship: string;
  arrivalDate: string;
}

interface ApplicationContextType {
  traveller: Traveller | null;
  setTraveller: (traveller: Traveller | null) => void;
  visaSearch: VisaSearch | null;
  setVisaSearch: (search: VisaSearch | null) => void;
  visaPrograms: VisaProgram[];
  setVisaPrograms: (programs: VisaProgram[]) => void;
  selectedVisa: VisaProgram | null;
  setSelectedVisa: (visa: VisaProgram | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  applicationComplete: boolean;
  setApplicationComplete: (complete: boolean) => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export const ApplicationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [traveller, setTraveller] = useState<Traveller | null>(null);
  const [visaSearch, setVisaSearch] = useState<VisaSearch | null>(null);
  const [visaPrograms, setVisaPrograms] = useState<VisaProgram[]>([]);
  const [selectedVisa, setSelectedVisa] = useState<VisaProgram | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [applicationComplete, setApplicationComplete] = useState<boolean>(false);

  return (
    <ApplicationContext.Provider
      value={{
        traveller,
        setTraveller,
        visaSearch,
        setVisaSearch,
        visaPrograms,
        setVisaPrograms,
        selectedVisa,
        setSelectedVisa,
        isLoading,
        setIsLoading,
        applicationComplete,
        setApplicationComplete
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplication = (): ApplicationContextType => {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error('useApplication must be used within an ApplicationProvider');
  }
  return context;
};
