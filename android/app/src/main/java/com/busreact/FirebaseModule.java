package com.busreact;

import android.app.Activity;
import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.firebase.ui.auth.AuthUI;
import com.google.firebase.FirebaseApp;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

import static android.app.Activity.RESULT_OK;


public class FirebaseModule extends ReactContextBaseJavaModule implements ActivityEventListener {

   private static final int RC_FIREBASE_SIGN_IN = 1234;

   private FirebaseUser oldUser;
   private Callback loginResultCallback;

   @Override
   public String getName() {
      return "FirebaseAndroid";
   }

   public FirebaseModule(ReactApplicationContext reactContext) {
      super(reactContext);
      reactContext.addActivityEventListener(this);
   }

   @ReactMethod
   public void init() {
      FirebaseApp.initializeApp(getReactApplicationContext());
      FirebaseAuth auth = FirebaseAuth.getInstance();

      FirebaseUser user = auth.getCurrentUser();
      if (user == null) {
         auth.signInAnonymously(); //First time here, use anon sign in
      }
   }

   @ReactMethod
   public void login(Callback loginResultCallback) {
      //Save the current user, we will use it to link it with the anonymous user
      oldUser = FirebaseAuth.getInstance().getCurrentUser();
      this.loginResultCallback = loginResultCallback;
      Intent intent = AuthUI.getInstance()
            .createSignInIntentBuilder()
            .setIsSmartLockEnabled(false)
            .setProviders(AuthUI.GOOGLE_PROVIDER)
            .build();

      Activity activity = getCurrentActivity();
      if (activity != null) {
         activity.startActivityForResult(intent, RC_FIREBASE_SIGN_IN);
      }
   }

   @Override
   public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
      if (requestCode != RC_FIREBASE_SIGN_IN) return;
      if (resultCode == RESULT_OK) {
         if (oldUser != null && oldUser.isAnonymous()) {
            //Link with the Google Account
            Toast.makeText(getReactApplicationContext(), "Needs upgrade", Toast.LENGTH_LONG).show();
         }

         Toast.makeText(getReactApplicationContext(), "Logged in!", Toast.LENGTH_SHORT).show();
         if (loginResultCallback != null) {
            loginResultCallback.invoke(true);
         }
      } else {
         Toast.makeText(getReactApplicationContext(), "Sing in failed!", Toast.LENGTH_SHORT).show();
         if (loginResultCallback != null) {
            loginResultCallback.invoke(false);
         }
      }
   }

   @Override
   public void onNewIntent(Intent intent) {
   }
}
