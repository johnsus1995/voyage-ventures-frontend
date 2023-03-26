import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((state) => state?.authSlice?.user?.data);
  return Boolean(user);
};

export default useAuth;
