---
sidebar_position: 7
---

# Function for Apple Sign In with Firebase

```jsx
 appleSignIn: async () => {
          try {
            const appleAuthRequestResponse = await appleAuth.performRequest({
              requestedOperation: appleAuth.Operation.LOGIN,
              requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
            });


            if (!appleAuthRequestResponse.identityToken) {
              throw 'Apple Sign-In failed - no identify token returned';
            }
            const { identityToken, nonce } = appleAuthRequestResponse;
            const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
            await auth().signInWithCredential(appleCredential);
            const existingUserDoc = await firestore().collection('users').doc(auth().currentUser.uid).get();

            showToast();
            if (!existingUserDoc && !existingUserDoc.exists) {
              firestore().collection('users').doc(auth().currentUser.uid)
                .set({
                  fname: appleAuthRequestResponse.fullName.givenName,
                  lname: appleAuthRequestResponse.fullName.familyName,
                  email: appleAuthRequestResponse.email,
                  createdAt: firestore.Timestamp.fromDate(new Date()),
                  userImg: null,
                });
            }

          } catch (e) {
            console.log(e);
          }
        },
```
