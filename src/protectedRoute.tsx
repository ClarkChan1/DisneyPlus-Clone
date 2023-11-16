import { Navigate } from "react-router-dom";
import { User } from "firebase/auth";
import { PropsWithChildren } from "react";

interface Props {
  user: User | undefined;
}
function ProtectedRoute(props: PropsWithChildren<Props>) {
  if (props.user == undefined) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return props.children;
}
export default ProtectedRoute;
