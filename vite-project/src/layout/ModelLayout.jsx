import React from 'react';
import { Outlet } from 'react-router';

export default function ModelLayout() {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Outlet />
    </div>
  );
}
