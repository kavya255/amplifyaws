import { Amplify, Auth } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-export";
Amplify.configure(awsExports);
import awsconfig from "../src/aws-exports";
Amplify.configure(awsconfig);
export default function App() {
  return (
    <Authenticator>
     {({ signOut, user }) => (
        <main>
          <h1>Welcome {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
