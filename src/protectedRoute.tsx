import { Navigate } from "react-router-dom";
import { User } from "firebase/auth";
import { PropsWithChildren } from "react";

interface Props {
  user: boolean | undefined;
}
function ProtectedRoute(props: PropsWithChildren<Props>) {
  if (props.user == true) {
    // user is authenticated
    return props.children;
  }
  return <Navigate to="/login" />;
}
export default ProtectedRoute;
