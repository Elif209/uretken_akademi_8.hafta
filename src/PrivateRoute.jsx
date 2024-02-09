import { Navigate } from "react-router-dom";

export default function PrivateRoute({user,childeren})
{
    if(!user?.id)
    {
        return <Navigate to="/" replace/>
    }
    return childeren
}