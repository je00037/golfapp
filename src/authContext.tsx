import React, {
  useState,
  createContext,
  ReactNode,
  FC,
  useContext,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface ContextProviderValue {
  user: string | null;
  setUser: (user: string) => void;
  clearUser: () => void;
  getUser: () => void;
  loading: boolean;
}

export const AuthContext = createContext<ContextProviderValue>({
  user: null,
  setUser: () => console.log("Auth provider not rendered"),
  clearUser: () => console.log("Auth provider not rendered"),
  getUser: () => console.log("Auth provider not rendered"),
  loading: false,
});

interface ContextProviderProps {
  children?: ReactNode;
}

export const AuthProvider: FC<ContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const clearUser = async () => {
    try {
      await AsyncStorage.removeItem("golfappUsername");
      setUser(null);
    } catch (e) {
      console.log("Error removing item", e);
    }
  };

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem("golfappUsername");
      if (value !== null) {
        setUser(value);
      }
      setTimeout(() => setLoading(false), 1000);
    } catch (e) {
      console.log("Error retrieving username", e);
    }
  };

  const providerValue: ContextProviderValue = {
    user,
    setUser,
    clearUser,
    getUser,
    loading,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
