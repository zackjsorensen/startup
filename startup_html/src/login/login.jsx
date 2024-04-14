import React from 'react';
import { AuthState } from './authState';
import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';

export function Login({userName, authState, onAuthChange}) {
  console.log("onAuthChange: ", onAuthChange);

  // let el;
  if (authState === AuthState.Authenticated) {
    return (
      <main>
        <div>
          <Authenticated
            userName={userName}
            onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} // updates parent authState and username to Unauth and ''
          />
        </div>
      </main>
    );
  }
  return (

    <main>
      <div>
        <Unauthenticated
          userName={userName}
          onLogin={(loginUserName) => {
            onAuthChange(loginUserName, AuthState.Authenticated);
          }}  // we want to get the entered userName, not '' that we have stored
        />
      </div>
    </main>
  );
}

/* {authState === AuthState.Authenticated && (
          <Authenticated
            userName={userName}
            onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} // updates parent authState and username to Unauth and ''
          />
        )} */

// {authState === AuthState.Unauthenticated && (
//   <Unauthenticated
//     userName={userName}
//     onLogin={(loginUserName) => {
//       onAuthChange(loginUserName, AuthState.Authenticated);
//     }}  // we want to get the entered userName, not '' that we have stored
//   />
// )}