export const AuthContext = createContext();
function AuthProvider(props) {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(undefined);

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
