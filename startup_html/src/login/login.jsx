import React from 'react';
import { AuthState } from './authState';
import { Authenticated } from './authenticated';

export function Login(userName, authState, onAuthChange) {
  return (
    <main id="indexmain">
      <div>Login displayed here</div>
      {authState === AuthState.Authenticated && (
        <Authenticated
        userName={userName}
        onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} // updates parent authState and username to Unauth and ''
        />
      )}
    </main>
  );
}