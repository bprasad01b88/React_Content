import React from "react";

export const UserLayout = React.lazy(() => import("./Store/index.layout"));
export const UserPublicLayout = React.lazy(() => import("./Store/public.layout"));
export const UserPrivateLayout = React.laxy(() => import("./Store/private.layout"));